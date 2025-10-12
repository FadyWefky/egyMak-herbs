import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Heart, Brain, Shield, Zap, Leaf, Users } from 'lucide-react';
import { useLanguage } from '../contexts/useLanguage';

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
      icon: Heart,
      title: language === 'ar' ? 'صحة القلب' : 'Heart Health',
      description: language === 'ar' 
        ? 'الأعشاب الطبيعية تدعم صحة القلب والدورة الدموية'
        : 'Natural herbs support heart health and circulation',
      color: 'from-red-500 to-pink-600'
    },
    {
      id: 'brain-boost',
      icon: Brain,
      title: language === 'ar' ? 'تعزيز الدماغ' : 'Brain Boost',
      description: language === 'ar' 
        ? 'تحسين الذاكرة والوظائف المعرفية'
        : 'Enhance memory and cognitive functions',
      color: 'from-purple-500 to-violet-600'
    },
    {
      id: 'immune-support',
      icon: Shield,
      title: language === 'ar' ? 'تقوية المناعة' : 'Immune Support',
      description: language === 'ar' 
        ? 'تعزيز جهاز المناعة ومقاومة الأمراض'
        : 'Strengthen immune system and disease resistance',
      color: 'from-blue-500 to-cyan-600'
    },
    {
      id: 'natural-energy',
      icon: Zap,
      title: language === 'ar' ? 'الطاقة الطبيعية' : 'Natural Energy',
      description: language === 'ar' 
        ? 'زيادة الطاقة والحيوية بشكل طبيعي'
        : 'Boost energy and vitality naturally',
      color: 'from-yellow-500 to-orange-600'
    },
    {
      id: 'antioxidants',
      icon: Leaf,
      title: language === 'ar' ? 'مضادات الأكسدة' : 'Antioxidants',
      description: language === 'ar' 
        ? 'مكافحة الجذور الحرة والشيخوخة'
        : 'Fight free radicals and aging',
      color: 'from-green-500 to-emerald-600'
    },
    {
      id: 'overall-wellness',
      icon: Users,
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
        <div className={`text-center mb-16 ${isVisible ? 'herb-fade-in animate' : 'herb-fade-in'}`}>
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
              className={`group herb-card cursor-pointer text-center ${isVisible ? 'herb-fade-in animate' : 'herb-fade-in'}`}
              style={{ animationDelay: isVisible ? `${index * 150}ms` : '0ms' }}
              onClick={() => navigate(`/health-benefits/${benefit.id}`)}
            >
              {/* Icon */}
              <div className="relative mb-6">
                <div className={`w-20 h-20 bg-gradient-to-br ${benefit.color} rounded-2xl mx-auto flex items-center justify-center transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-6`}>
                  <benefit.icon className="w-10 h-10 text-white" />
                </div>
                <div className="absolute inset-0 w-20 h-20 mx-auto bg-gradient-to-br from-white/20 to-transparent rounded-2xl"></div>
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
        <div className={`text-center mt-16 ${isVisible ? 'herb-fade-in animate' : 'herb-fade-in'}`} style={{ animationDelay: '900ms' }}>
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
              <button className="herb-button-primary">
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
