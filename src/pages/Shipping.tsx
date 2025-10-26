import React from 'react';
import { useLanguage } from '../contexts/useLanguage';

const Shipping: React.FC = () => {
  const { language } = useLanguage();

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12">
          {language === 'ar' ? 'معلومات الشحن' : 'Shipping Information'}
        </h1>
        
        <div className="bg-card rounded-lg p-8 shadow-sm">
          <h2 className="text-2xl font-semibold mb-6 text-primary">
            {language === 'ar' ? 'طرق الشحن المتاحة' : 'Available Shipping Methods'}
          </h2>
          
          <div className="space-y-4 text-muted-foreground">
            <p>
              {language === 'ar' 
                ? '• الشحن السريع: 1-2 أيام عمل'
                : '• Express Shipping: 1-2 business days'
              }
            </p>
            <p>
              {language === 'ar' 
                ? '• الشحن العادي: 3-5 أيام عمل'
                : '• Standard Shipping: 3-5 business days'
              }
            </p>
            <p>
              {language === 'ar' 
                ? '• الشحن المجاني للطلبات أكثر من 500 جنيه'
                : '• Free shipping for orders over 500 EGP'
              }
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shipping;
