import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/useLanguage';
import placeholderImages from '../utils/placeholderImages';
import LazyImage from './LazyImage';

const HealthBenefits: React.FC = () => {
  const { language } = useLanguage();
  const navigate = useNavigate();
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const benefits = [
    {
      id: 'heart-health',
      image: placeholderImages['heart-health.jpg'],
      title: language === 'ar' ? 'صحة القلب' : 'Heart Health',
      description: language === 'ar' 
        ? 'الأعشاب الطبيعية تدعم صحة القلب والدورة الدموية'
        : 'Natural herbs support heart health and circulation',
      color: 'from-red-500 to-pink-600'
    },
    {
      id: 'brain-boost',
      image: placeholderImages['brain-boost.jpg'],
      title: language === 'ar' ? 'تعزيز الدماغ' : 'Brain Boost',
      description: language === 'ar' 
        ? 'تحسين الذاكرة والوظائف المعرفية'
        : 'Enhance memory and cognitive functions',
      color: 'from-purple-500 to-violet-600'
    },
    {
      id: 'immune-support',
      image: placeholderImages['immune-support.jpg'],
      title: language === 'ar' ? 'تقوية المناعة' : 'Immune Support',
      description: language === 'ar' 
        ? 'تعزيز جهاز المناعة ومقاومة الأمراض'
        : 'Strengthen immune system and disease resistance',
      color: 'from-blue-500 to-cyan-600'
    },
    {
      id: 'natural-energy',
      image: placeholderImages['natural-energy.jpg'],
      title: language === 'ar' ? 'الطاقة الطبيعية' : 'Natural Energy',
      description: language === 'ar' 
        ? 'زيادة الطاقة والحيوية بشكل طبيعي'
        : 'Boost energy and vitality naturally',
      color: 'from-yellow-500 to-orange-600'
    },
    {
      id: 'antioxidants',
      image: placeholderImages['antioxidants.jpg'],
      title: language === 'ar' ? 'مضادات الأكسدة' : 'Antioxidants',
      description: language === 'ar' 
        ? 'مكافحة الجذور الحرة والشيخوخة'
        : 'Fight free radicals and aging',
      color: 'from-green-500 to-emerald-600'
    },
    {
      id: 'overall-wellness',
      image: placeholderImages['overall-wellness.jpg'],
      title: language === 'ar' ? 'العافية العامة' : 'Overall Wellness',
      description: language === 'ar' 
        ? 'تحسين الصحة العامة والعافية'
        : 'Improve overall health and wellness',
      color: 'from-indigo-500 to-blue-600'
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-secondary/30 to-background"
      dir={language === 'ar' ? 'rtl' : 'ltr'}
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className={`text-center mb-16 scroll-animate ${isVisible ? 'animate-slide-up' : ''}`}>
          <h2 className="text-4xl md:text-5xl font-bold herb-gradient-text mb-4">
            {language === 'ar' ? 'الفوائد الصحية' : 'Health Benefits'}
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            {language === 'ar' 
              ? 'اكتشف كيف يمكن للأعشاب الطبيعية أن تحسن صحتك وعافيتك'
              : 'Discover how natural herbs can enhance your health and wellness'
            }
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mt-6"></div>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.id}
              className={`group herb-card cursor-pointer text-center scroll-animate delay-${(index + 1) * 100} ${
                isVisible ? 'animate-slide-up' : ''
              }`}
              onClick={() => navigate(`/health-benefits/${benefit.id}`)}
            >
                  {/* Image */}
                  <div className="relative mb-6 overflow-hidden rounded-2xl">
                    <LazyImage
                      src={benefit.image}
                      alt={benefit.title}
                      className="w-full h-32 object-cover rounded-2xl transform transition-all duration-500 group-hover:scale-105"
                      fallback={`data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0IiByeD0iMTIiIGZpbGw9IiNmM2Y0ZjYiLz4KPHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIyNCIgZmlsbD0iIzY2NjY2NiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkg8L3RleHQ+Cjwvc3ZnPgo=`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-transparent rounded-2xl"></div>
                  </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className={`text-center mt-16 scroll-animate delay-900 ${isVisible ? 'animate-slide-up' : ''}`}>
          <div className="bg-card rounded-2xl p-8 max-w-4xl mx-auto shadow-lg">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              {language === 'ar' ? 'ابدأ رحلتك نحو الصحة الطبيعية' : 'Start Your Natural Health Journey'}
            </h3>
            <p className="text-muted-foreground mb-6">
              {language === 'ar' 
                ? 'انضم إلى آلاف الأشخاص الذين اختاروا الأعشاب الطبيعية لتحسين حياتهم'
                : 'Join thousands of people who have chosen natural herbs to enhance their lives'
              }
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
               onClick={() => navigate('/products')}
               className="herb-button-primary">
                {language === 'ar' ? 'استكشف المنتجات' : 'Explore Products'}
              </button>
              <button className="herb-button-secondary">
                {language === 'ar' ? 'تعلم المزيد' : 'Learn More'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HealthBenefits;
