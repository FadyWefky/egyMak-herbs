import React, { useEffect, useRef, useState } from 'react';
import { ChefHat, Heart, Flower, Coffee } from 'lucide-react';
import { useLanguage } from '../contexts/useLanguage';

const Categories: React.FC = () => {
  const { t, language } = useLanguage();
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

  const categories = [
    {
      key: 'culinary',
      icon: ChefHat,
      color: 'from-green-500 to-emerald-600',
      delay: '0ms'
    },
    {
      key: 'medicinal',
      icon: Heart,
      color: 'from-red-500 to-pink-600',
      delay: '200ms'
    },
    {
      key: 'aromatic',
      icon: Flower,
      color: 'from-purple-500 to-violet-600',
      delay: '400ms'
    },
    {
      key: 'tea',
      icon: Coffee,
      color: 'from-amber-500 to-orange-600',
      delay: '600ms'
    }
  ];

  return (
    <section 
      id="categories"
      ref={sectionRef}
      className="py-20 bg-secondary/30"
      dir={language === 'ar' ? 'rtl' : 'ltr'}
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className={`text-center mb-16 ${isVisible ? 'herb-fade-in animate' : 'herb-fade-in'}`}>
          <h2 className="text-4xl md:text-5xl font-bold herb-gradient-text mb-4">
            {t('categoriesTitle')}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <div
              key={category.key}
              className={`group herb-card cursor-pointer ${
                isVisible ? 'herb-fade-in animate' : 'herb-fade-in'
              }`}
              style={{ animationDelay: isVisible ? category.delay : '0ms' }}
            >
              {/* Icon Container */}
              <div className="relative mb-6">
                <div className={`w-20 h-20 bg-gradient-to-br ${category.color} rounded-2xl mx-auto flex items-center justify-center transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-6`}>
                  <category.icon className="w-10 h-10 text-white" />
                </div>
                <div className="absolute inset-0 w-20 h-20 mx-auto bg-gradient-to-br from-white/20 to-transparent rounded-2xl"></div>
              </div>

              {/* Content */}
              <div className="text-center">
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                  {t(category.key)}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t(`${category.key}Desc`)}
                </p>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className={`text-center mt-16 ${isVisible ? 'herb-fade-in animate' : 'herb-fade-in'}`} style={{ animationDelay: '800ms' }}>
          <button className="herb-button-primary">
            Explore All Categories
          </button>
        </div>
      </div>
    </section>
  );
};

export default Categories;