import React from 'react';
import { useLanguage } from '../contexts/useLanguage';

const Terms: React.FC = () => {
  const { language } = useLanguage();

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12">
          {language === 'ar' ? 'شروط الخدمة' : 'Terms of Service'}
        </h1>
        
        <div className="bg-card rounded-lg p-8 shadow-sm">
          <h2 className="text-2xl font-semibold mb-6 text-primary">
            {language === 'ar' ? 'الشروط والأحكام' : 'Terms and Conditions'}
          </h2>
          
          <div className="space-y-4 text-muted-foreground">
            <p>
              {language === 'ar' 
                ? 'باستخدام موقعنا، فإنك توافق على هذه الشروط والأحكام.'
                : 'By using our website, you agree to these terms and conditions.'
              }
            </p>
            <p>
              {language === 'ar' 
                ? 'نحتفظ بالحق في تعديل هذه الشروط في أي وقت.'
                : 'We reserve the right to modify these terms at any time.'
              }
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;
