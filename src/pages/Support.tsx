import React from 'react';
import { useLanguage } from '../contexts/useLanguage';

const Support: React.FC = () => {
  const { language } = useLanguage();

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12">
          {language === 'ar' ? 'الدعم الفني' : 'Customer Support'}
        </h1>
        
        <div className="bg-card rounded-lg p-8 shadow-sm">
          <h2 className="text-2xl font-semibold mb-6 text-primary">
            {language === 'ar' ? 'تواصل معنا' : 'Contact Us'}
          </h2>
          
          <div className="space-y-4 text-muted-foreground">
            <p>
              {language === 'ar' 
                ? '• البريد الإلكتروني: egymak@gmail.com'
                : '• Email: egymak@gmail.com'
              }
            </p>
            <p>
              {language === 'ar' 
                ? '• الهاتف: +201032013000'
                : '• Phone: +201032013000'
              }
            </p>
            <p>
              {language === 'ar' 
                ? '• ساعات العمل: 9 صباحاً - 6 مساءً'
                : '• Working Hours: 9 AM - 6 PM'
              }
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
