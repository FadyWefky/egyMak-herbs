import React from 'react';
import { useLanguage } from '../contexts/useLanguage';

const Returns: React.FC = () => {
  const { language } = useLanguage();

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12">
          {language === 'ar' ? 'سياسة الإرجاع' : 'Returns Policy'}
        </h1>
        
        <div className="bg-card rounded-lg p-8 shadow-sm">
          <h2 className="text-2xl font-semibold mb-6 text-primary">
            {language === 'ar' ? 'شروط الإرجاع' : 'Return Conditions'}
          </h2>
          
          <div className="space-y-4 text-muted-foreground">
            <p>
              {language === 'ar' 
                ? '• يمكن إرجاع المنتجات خلال 14 يوم من تاريخ الشراء'
                : '• Products can be returned within 14 days of purchase'
              }
            </p>
            <p>
              {language === 'ar' 
                ? '• يجب أن تكون المنتجات في حالتها الأصلية'
                : '• Products must be in their original condition'
              }
            </p>
            <p>
              {language === 'ar' 
                ? '• الإرجاع مجاني للعملاء'
                : '• Free returns for customers'
              }
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Returns;
