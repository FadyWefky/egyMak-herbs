import React from 'react';
import { useLanguage } from '../contexts/useLanguage';

const FAQ: React.FC = () => {
  const { language } = useLanguage();

  const faqs = [
    {
      question: language === 'ar' ? 'ما هي أنواع الأعشاب المتوفرة؟' : 'What types of herbs are available?',
      answer: language === 'ar' 
        ? 'نوفر أكثر من 50 نوع من الأعشاب الطبيعية الطازجة والمجففة، بما في ذلك الأعشاب الطبية والطهوية والعطرية.'
        : 'We offer over 50 types of fresh and dried natural herbs, including medicinal, culinary, and aromatic herbs.'
    },
    {
      question: language === 'ar' ? 'كيف يتم شحن المنتجات؟' : 'How are products shipped?',
      answer: language === 'ar' 
        ? 'نحن نستخدم طرق شحن آمنة وسريعة مع تعبئة خاصة للحفاظ على جودة الأعشاب.'
        : 'We use safe and fast shipping methods with special packaging to preserve herb quality.'
    },
    {
      question: language === 'ar' ? 'هل الأعشاب عضوية؟' : 'Are the herbs organic?',
      answer: language === 'ar' 
        ? 'نعم، جميع أعشابنا طبيعية 100% ومزروعة بدون مواد كيميائية ضارة.'
        : 'Yes, all our herbs are 100% natural and grown without harmful chemicals.'
    }
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12">
          {language === 'ar' ? 'الأسئلة الشائعة' : 'Frequently Asked Questions'}
        </h1>
        
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-card rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-3 text-primary">
                {faq.question}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
