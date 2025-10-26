import React from 'react';
import { useLanguage } from '../contexts/useLanguage';

const Cookies: React.FC = () => {
  const { language } = useLanguage();

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12">
          {language === 'ar' ? 'سياسة ملفات تعريف الارتباط' : 'Cookie Policy'}
        </h1>
        
        <div className="bg-card rounded-lg p-8 shadow-sm">
          <h2 className="text-2xl font-semibold mb-6 text-primary">
            {language === 'ar' ? 'استخدام ملفات تعريف الارتباط' : 'Cookie Usage'}
          </h2>
          
          <div className="space-y-4 text-muted-foreground">
            <p>
              {language === 'ar' 
                ? 'نستخدم ملفات تعريف الارتباط لتحسين تجربتك على موقعنا.'
                : 'We use cookies to improve your experience on our website.'
              }
            </p>
            <p>
              {language === 'ar' 
                ? 'يمكنك إدارة إعدادات ملفات تعريف الارتباط من متصفحك.'
                : 'You can manage cookie settings from your browser.'
              }
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cookies;
