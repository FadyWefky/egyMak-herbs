import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/useLanguage';
import placeholderImages from '../utils/placeholderImages';
import LazyImage from './LazyImage';

const Categories: React.FC = () => {
  const { t, language } = useLanguage();
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

  const categories = [
    {
      key: 'culinary',
      image: placeholderImages['culinary-herbs.jpg'],
      color: 'from-sky-500 to-blue-900',
      delay: '0ms'
    },
    {
      key: 'medicinal',
      image: placeholderImages['medicinal-herbs.jpg'],
      color: 'from-blue-700 to-slate-900',
      delay: '200ms'
    },
    {
      key: 'aromatic',
      image: placeholderImages['aromatic-herbs.jpg'],
      color: 'from-indigo-600 to-cyan-600',
      delay: '400ms'
    },
    {
      key: 'tea',
      image: placeholderImages['tea-herbs.jpg'],
      color: 'from-slate-700 to-sky-500',
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
        <div className={`text-center mb-16 scroll-animate ${isVisible ? 'animate-slide-up' : ''}`}>
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
              className={`group herb-card cursor-pointer scroll-animate delay-${(index + 1) * 100} ${
                isVisible ? 'animate-slide-up' : ''
              }`}
              onClick={() => navigate('/categories')}
            >
                  {/* Image Container */}
                  <div className="relative mb-6 overflow-hidden rounded-2xl">
                    <LazyImage
                      src={category.image}
                      alt={`${category.key} herbs`}
                      className="w-full h-32 object-cover rounded-2xl transform transition-all duration-500 group-hover:scale-105"
                      fallback={`data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0IiByeD0iMTIiIGZpbGw9IiNmM2Y0ZjYiLz4KPHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIyNCIgZmlsbD0iIzY2NjY2NiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkM8L3RleHQ+Cjwvc3ZnPgo=`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-transparent rounded-2xl"></div>
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
        <div className={`text-center mt-16 scroll-animate delay-800 ${isVisible ? 'animate-slide-up' : ''}`}>
          <button 
            type="button"
            onClick={() => navigate('/categories')}
            className="herb-button-primary"
          >
            {t('common.exploreAllCategories')}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Categories;