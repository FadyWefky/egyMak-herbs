import React from 'react';
import { useLanguage } from '../contexts/useLanguage';

const FAQ: React.FC = () => {
  const { t, getFaqItems, language } = useLanguage();
  const faqs = getFaqItems();

  return (
    <div
      className="container mx-auto px-4 py-16"
      dir={language === 'ar' ? 'rtl' : 'ltr'}
    >
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12 text-foreground">{t('faq.title')}</h1>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="mac-panel p-6">
              <h3 className="text-xl font-semibold mb-3 text-primary">{faq.question}</h3>
              <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
