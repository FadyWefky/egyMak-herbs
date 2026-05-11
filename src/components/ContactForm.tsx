import React, { useState } from 'react';
import { Send, User, Mail, MessageSquare, CheckCircle, AlertCircle } from 'lucide-react';
import { useLanguage } from '../contexts/useLanguage';
import { sendContactEmail } from '../utils/emailService';

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormStatus {
  type: 'idle' | 'loading' | 'success' | 'error';
  message: string;
}

const ContactForm: React.FC = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<FormStatus>({ type: 'idle', message: '' });
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};

    if (!formData.name.trim()) {
      newErrors.name = t('contactForm.errorName');
    }

    if (!formData.email.trim()) {
      newErrors.email = t('contactForm.errorEmailRequired');
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = t('contactForm.errorEmailInvalid');
    }

    if (!formData.message.trim()) {
      newErrors.message = t('contactForm.errorMessage');
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setStatus({ type: 'loading', message: t('contactForm.sending') });

    try {
      const success = await sendContactEmail(formData);

      if (success) {
        setStatus({
          type: 'success',
          message: t('contactForm.successMessage'),
        });

        setFormData({ name: '', email: '', message: '' });
        setErrors({});
      } else {
        throw new Error('Failed to open email client');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setStatus({
        type: 'error',
        message: t('contactForm.errorSend'),
      });
    }
  };

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const fieldWrap = (hasError: boolean) =>
    hasError
      ? 'border-red-500 focus:border-red-500'
      : 'border-primary-foreground/20 focus:border-accent';

  return (
    <div className="mac-panel p-5 space-y-4 border-primary-foreground/15 bg-primary-foreground/[0.07]">
      <h4 className="font-semibold text-lg mb-2 text-primary-foreground">
        {t('contactForm.heading')}
      </h4>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <div className="relative">
            <User className="absolute start-3 top-1/2 -translate-y-1/2 w-4 h-4 text-primary-foreground/60 pointer-events-none" />
            <input
              type="text"
              value={formData.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
              placeholder={t('contactForm.namePlaceholder')}
              className={`mac-textfield ps-10 pe-3 py-2.5 bg-card text-foreground border ${fieldWrap(!!errors.name)}`}
            />
          </div>
          {errors.name && (
            <p className="text-red-300 text-xs mt-1 flex items-center gap-1">
              <AlertCircle className="w-3 h-3 shrink-0" />
              {errors.name}
            </p>
          )}
        </div>

        <div>
          <div className="relative">
            <Mail className="absolute start-3 top-1/2 -translate-y-1/2 w-4 h-4 text-primary-foreground/60 pointer-events-none" />
            <input
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              placeholder={t('contactForm.emailPlaceholder')}
              className={`mac-textfield ps-10 pe-3 py-2.5 bg-card text-foreground border ${fieldWrap(!!errors.email)}`}
            />
          </div>
          {errors.email && (
            <p className="text-red-300 text-xs mt-1 flex items-center gap-1">
              <AlertCircle className="w-3 h-3 shrink-0" />
              {errors.email}
            </p>
          )}
        </div>

        <div>
          <div className="relative">
            <MessageSquare className="absolute start-3 top-3 w-4 h-4 text-primary-foreground/60 pointer-events-none" />
            <textarea
              value={formData.message}
              onChange={(e) => handleInputChange('message', e.target.value)}
              placeholder={t('contactForm.messagePlaceholder')}
              rows={3}
              className={`mac-textfield ps-10 pe-3 py-2.5 bg-card text-foreground border resize-none ${fieldWrap(!!errors.message)}`}
            />
          </div>
          {errors.message && (
            <p className="text-red-300 text-xs mt-1 flex items-center gap-1">
              <AlertCircle className="w-3 h-3 shrink-0" />
              {errors.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          disabled={status.type === 'loading'}
          className="w-full bg-accent text-accent-foreground px-4 py-2.5 rounded-[10px] font-semibold hover:bg-accent/90 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-sm shadow-[inset_0_1px_0_0_hsla(0,0%,100%,0.25)]"
        >
          {status.type === 'loading' ? (
            <>
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-accent-foreground" />
              <span>{t('contactForm.sending')}</span>
            </>
          ) : (
            <>
              <Send className="w-4 h-4" />
              <span>{t('contactForm.send')}</span>
            </>
          )}
        </button>

        {status.message && (
          <div
            className={`p-3 rounded-[10px] flex items-center gap-2 text-sm ${
              status.type === 'success'
                ? 'bg-accent/15 text-accent border border-accent/40'
                : status.type === 'error'
                  ? 'bg-red-500/20 text-red-300 border border-red-500/30'
                  : 'bg-primary/10 text-primary border border-primary/25'
            }`}
          >
            {status.type === 'success' ? (
              <CheckCircle className="w-4 h-4 shrink-0" />
            ) : (
              <AlertCircle className="w-4 h-4 shrink-0" />
            )}
            <span>{status.message}</span>
          </div>
        )}

        <div className="text-xs text-primary-foreground/60 text-center">
          {t('contactForm.fallbackHint')}
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
