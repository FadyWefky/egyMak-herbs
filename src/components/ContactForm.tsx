import React, { useState } from 'react';
import { Send, User, Mail, MessageSquare, CheckCircle, AlertCircle } from 'lucide-react';
import { useLanguage } from '../contexts/useLanguage';
import { sendContactEmailViaFormspree, sendContactEmail } from '../utils/emailService';

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
  const { language } = useLanguage();
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<FormStatus>({ type: 'idle', message: '' });
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};

    if (!formData.name.trim()) {
      newErrors.name = language === 'ar' ? 'الاسم مطلوب' : 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = language === 'ar' ? 'البريد الإلكتروني مطلوب' : 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = language === 'ar' ? 'البريد الإلكتروني غير صحيح' : 'Invalid email format';
    }

    if (!formData.message.trim()) {
      newErrors.message = language === 'ar' ? 'الرسالة مطلوبة' : 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setStatus({ type: 'loading', message: language === 'ar' ? 'جاري الإرسال...' : 'Sending...' });

    try {
      const success = await sendContactEmail(formData);

      if (success) {
        setStatus({ 
          type: 'success', 
          message: language === 'ar' 
            ? 'تم فتح بريدك الإلكتروني! يرجى إرسال الرسالة من هناك.' 
            : 'Your email client has opened! Please send the message from there.' 
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
        message: language === 'ar' 
          ? 'حدث خطأ في الإرسال. يرجى المحاولة مرة أخرى أو التواصل معنا مباشرة.' 
          : 'Failed to send message. Please try again or contact us directly.' 
      });
    }
  };

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  return (
    <div className="space-y-4">
      <h4 className="font-semibold text-lg mb-4">
        {language === 'ar' ? 'تواصل معنا' : 'Get In Touch'}
      </h4>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name Field */}
        <div>
          <div className="relative">
            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-primary-foreground/60" />
            <input
              type="text"
              value={formData.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
              placeholder={language === 'ar' ? 'الاسم' : 'Your Name'}
              className={`w-full pl-10 pr-3 py-2 rounded-lg bg-card text-foreground border transition-colors duration-300 ${
                errors.name 
                  ? 'border-red-500 focus:border-red-500' 
                  : 'border-primary-foreground/20 focus:border-accent'
              } focus:ring-1 focus:ring-accent/20 focus:outline-none text-sm`}
            />
          </div>
          {errors.name && (
            <p className="text-red-400 text-xs mt-1 flex items-center">
              <AlertCircle className="w-3 h-3 mr-1" />
              {errors.name}
            </p>
          )}
        </div>

        {/* Email Field */}
        <div>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-primary-foreground/60" />
            <input
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              placeholder={language === 'ar' ? 'البريد الإلكتروني' : 'Your Email'}
              className={`w-full pl-10 pr-3 py-2 rounded-lg bg-card text-foreground border transition-colors duration-300 ${
                errors.email 
                  ? 'border-red-500 focus:border-red-500' 
                  : 'border-primary-foreground/20 focus:border-accent'
              } focus:ring-1 focus:ring-accent/20 focus:outline-none text-sm`}
            />
          </div>
          {errors.email && (
            <p className="text-red-400 text-xs mt-1 flex items-center">
              <AlertCircle className="w-3 h-3 mr-1" />
              {errors.email}
            </p>
          )}
        </div>

        {/* Message Field */}
        <div>
          <div className="relative">
            <MessageSquare className="absolute left-3 top-3 w-4 h-4 text-primary-foreground/60" />
            <textarea
              value={formData.message}
              onChange={(e) => handleInputChange('message', e.target.value)}
              placeholder={language === 'ar' ? 'رسالتك...' : 'Your message...'}
              rows={3}
              className={`w-full pl-10 pr-3 py-2 rounded-lg bg-card text-foreground border transition-colors duration-300 resize-none ${
                errors.message 
                  ? 'border-red-500 focus:border-red-500' 
                  : 'border-primary-foreground/20 focus:border-accent'
              } focus:ring-1 focus:ring-accent/20 focus:outline-none text-sm`}
            />
          </div>
          {errors.message && (
            <p className="text-red-400 text-xs mt-1 flex items-center">
              <AlertCircle className="w-3 h-3 mr-1" />
              {errors.message}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={status.type === 'loading'}
          className="w-full bg-accent text-accent-foreground px-4 py-2 rounded-lg font-medium hover:bg-accent/90 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2 text-sm"
        >
          {status.type === 'loading' ? (
            <>
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-accent-foreground"></div>
              <span>{language === 'ar' ? 'جاري الإرسال...' : 'Sending...'}</span>
            </>
          ) : (
            <>
              <Send className="w-4 h-4" />
              <span>{language === 'ar' ? 'إرسال' : 'Send'}</span>
            </>
          )}
        </button>

        {/* Status Message */}
        {status.message && (
          <div className={`p-3 rounded-lg flex items-center space-x-2 text-sm ${
            status.type === 'success' 
              ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
              : status.type === 'error'
              ? 'bg-red-500/20 text-red-400 border border-red-500/30'
              : 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
          }`}>
            {status.type === 'success' ? (
              <CheckCircle className="w-4 h-4" />
            ) : (
              <AlertCircle className="w-4 h-4" />
            )}
            <span>{status.message}</span>
          </div>
        )}

        {/* Fallback Contact Info */}
        <div className="text-xs text-primary-foreground/60 text-center">
          {language === 'ar' 
            ? 'أو تواصل معنا مباشرة: egymak@gmail.com'
            : 'Or contact us directly: egymak@gmail.com'
          }
        </div>
      </form>
    </div>
  );
};

export default ContactForm;