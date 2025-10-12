import React, { useEffect, useRef, useState } from 'react';
import { Leaf, Globe, Award, Users, Clock, Star } from 'lucide-react';
import { useLanguage } from '../contexts/useLanguage';
import { herbsData } from '../data/herbs';

const HerbStats: React.FC = () => {
  const { language } = useLanguage();
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

  // Calculate statistics
  const totalHerbs = herbsData.length;
  const totalCategories = 4;
  const averageRating = (herbsData.reduce((sum, herb) => sum + herb.rating, 0) / totalHerbs).toFixed(1);
  const totalReviews = herbsData.reduce((sum, herb) => sum + herb.reviews, 0);
  const premiumHerbs = herbsData.filter(herb => herb.badge).length;
  const egyptianHerbs = herbsData.filter(herb => herb.origin === 'Egypt').length;

  const stats = [
    {
      icon: Leaf,
      value: totalHerbs,
      label: language === 'ar' ? 'نوع عشب' : 'Herb Varieties',
      description: language === 'ar' ? 'مجموعة شاملة من الأعشاب الطبيعية' : 'Comprehensive collection of natural herbs',
      color: 'from-green-500 to-emerald-600'
    },
    {
      icon: Globe,
      value: totalCategories,
      label: language === 'ar' ? 'فئة رئيسية' : 'Main Categories',
      description: language === 'ar' ? 'تصنيفات متنوعة للاستخدامات المختلفة' : 'Diverse categories for different uses',
      color: 'from-blue-500 to-cyan-600'
    },
    {
      icon: Star,
      value: averageRating,
      label: language === 'ar' ? 'تقييم متوسط' : 'Average Rating',
      description: language === 'ar' ? 'جودة عالية معتمدة من العملاء' : 'High quality endorsed by customers',
      color: 'from-yellow-500 to-orange-600'
    },
    {
      icon: Users,
      value: totalReviews.toLocaleString(),
      label: language === 'ar' ? 'تقييم عميل' : 'Customer Reviews',
      description: language === 'ar' ? 'آراء عملاء راضين حول العالم' : 'Satisfied customer opinions worldwide',
      color: 'from-purple-500 to-violet-600'
    },
    {
      icon: Award,
      value: premiumHerbs,
      label: language === 'ar' ? 'عشب مميز' : 'Premium Herbs',
      description: language === 'ar' ? 'أعشاب حاصلة على شهادات الجودة' : 'Herbs with quality certifications',
      color: 'from-red-500 to-pink-600'
    },
    {
      icon: Clock,
      value: egyptianHerbs,
      label: language === 'ar' ? 'عشب مصري' : 'Egyptian Herbs',
      description: language === 'ar' ? 'مزروع في الأراضي المصرية الخصبة' : 'Cultivated in fertile Egyptian lands',
      color: 'from-indigo-500 to-blue-600'
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-background to-secondary/20"
      dir={language === 'ar' ? 'rtl' : 'ltr'}
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className={`text-center mb-16 ${isVisible ? 'herb-fade-in animate' : 'herb-fade-in'}`}>
          <h2 className="text-4xl md:text-5xl font-bold herb-gradient-text mb-4">
            {language === 'ar' ? 'إحصائيات الأعشاب' : 'Herb Statistics'}
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            {language === 'ar' 
              ? 'اكتشف الأرقام المذهلة وراء مجموعتنا المتنوعة من الأعشاب الطبيعية عالية الجودة'
              : 'Discover the amazing numbers behind our diverse collection of premium natural herbs'
            }
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mt-6"></div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`group herb-card text-center ${isVisible ? 'herb-fade-in animate' : 'herb-fade-in'}`}
              style={{ animationDelay: isVisible ? `${index * 150}ms` : '0ms' }}
            >
              {/* Icon */}
              <div className="relative mb-6">
                <div className={`w-20 h-20 bg-gradient-to-br ${stat.color} rounded-2xl mx-auto flex items-center justify-center transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-6`}>
                  <stat.icon className="w-10 h-10 text-white" />
                </div>
                <div className="absolute inset-0 w-20 h-20 mx-auto bg-gradient-to-br from-white/20 to-transparent rounded-2xl"></div>
              </div>

              {/* Content */}
              <div className="space-y-3">
                <div className="text-4xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                  {stat.value}
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  {stat.label}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {stat.description}
                </p>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
            </div>
          ))}
        </div>

        {/* Bottom Info */}
        <div className={`mt-16 text-center ${isVisible ? 'herb-fade-in animate' : 'herb-fade-in'}`} style={{ animationDelay: '900ms' }}>
          <div className="bg-card rounded-2xl p-8 max-w-4xl mx-auto shadow-lg">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              {language === 'ar' ? 'لماذا تختار أعشاب Egymak؟' : 'Why Choose Egymak Herbs?'}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
              <div className="flex items-center justify-center space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-muted-foreground">
                  {language === 'ar' ? 'جودة مصرية أصيلة' : 'Authentic Egyptian Quality'}
                </span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-muted-foreground">
                  {language === 'ar' ? 'معلومات علمية دقيقة' : 'Accurate Scientific Information'}
                </span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-muted-foreground">
                  {language === 'ar' ? 'دعم متعدد اللغات' : 'Multilingual Support'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HerbStats;
