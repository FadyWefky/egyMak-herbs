import React, { useState } from 'react';
import { Mail, Send, CheckCircle } from 'lucide-react';
import { useLanguage } from '../contexts/useLanguage';

const Newsletter: React.FC = () => {
  const { t, language } = useLanguage();
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      setIsSubscribed(true);
      setIsLoading(false);
      setEmail('');
    }, 2000);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-primary/10 to-accent/10">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mac-panel p-8 md:p-12">
            <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-lg">
              <Mail className="w-10 h-10 text-white" />
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t('newsletter.title')}
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              {t('newsletter.subtitle')}
            </p>

            {!isSubscribed ? (
              <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
                <div
                  className="mac-input-group flex-col sm:flex-row p-1.5 bg-muted/40"
                  dir={language === 'ar' ? 'rtl' : 'ltr'}
                >
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={t('newsletter.emailPlaceholder')}
                    required
                    className="mac-textfield flex-1 border-0 bg-background/80 shadow-none min-h-[44px]"
                  />
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="shrink-0 px-5 py-2.5 rounded-[9px] bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors disabled:opacity-50 flex items-center justify-center gap-2 shadow-sm"
                  >
                    {isLoading ? (
                      <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>{t('newsletter.subscribe')}</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            ) : (
              <div className="flex items-center justify-center gap-3 text-accent">
                <CheckCircle className="w-6 h-6" />
                <span className="text-lg font-medium">{t('newsletter.success')}</span>
              </div>
            )}

            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-muted-foreground">
              <div className="flex items-center justify-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full shrink-0" />
                <span>{t('newsletter.benefitOffers')}</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full shrink-0" />
                <span>{t('newsletter.benefitTips')}</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full shrink-0" />
                <span>{t('newsletter.benefitNew')}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
