import React from 'react';
import { useLanguage } from '../contexts/useLanguage';

const Privacy: React.FC = () => {
  const { language } = useLanguage();

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12">
          {language === 'ar' ? 'سياسة الخصوصية' : 'Privacy Policy'}
        </h1>
        
        <div className="bg-card rounded-lg p-8 shadow-sm">
          <h2 className="text-2xl font-semibold mb-6 text-primary">
            {language === 'ar' ? 'حماية البيانات' : 'Data Protection'}
          </h2>
          
          <div className="space-y-4 text-muted-foreground">
            <p>
              {language === 'ar' 
                ? 'نحن نحترم خصوصيتك ونحمي بياناتك الشخصية وفقاً لأعلى المعايير الأمنية.'
                : 'We respect your privacy and protect your personal data according to the highest security standards.'
              }
            </p>
            <p>
              {language === 'ar' 
                ? 'لا نشارك معلوماتك مع أطراف ثالثة بدون موافقتك الصريحة.'
                : 'We do not share your information with third parties without your explicit consent.'
              }
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
