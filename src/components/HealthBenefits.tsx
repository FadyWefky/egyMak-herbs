import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/useLanguage';
import placeholderImages from '../utils/placeholderImages';
import LazyImage from './LazyImage';
import SectionTitle from './SectionTitle';
import { useLocalizedPath } from '../hooks/useLocalizedPath';

const HealthBenefits: React.FC = () => {
  const { language, t } = useLanguage();
  const navigate = useNavigate();
  const lp = useLocalizedPath();
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
      id: 'heart-health' as const,
      image: placeholderImages['heart-health.jpg'],
      color: 'from-rose-600 to-blue-900',
    },
    {
      id: 'brain-boost' as const,
      image: placeholderImages['brain-boost.jpg'],
      color: 'from-indigo-600 to-sky-500',
    },
    {
      id: 'immune-support' as const,
      image: placeholderImages['immune-support.jpg'],
      color: 'from-cyan-600 to-blue-800',
    },
    {
      id: 'natural-energy' as const,
      image: placeholderImages['natural-energy.jpg'],
      color: 'from-sky-500 to-blue-950',
    },
    {
      id: 'antioxidants' as const,
      image: placeholderImages['antioxidants.jpg'],
      color: 'from-teal-600 to-blue-900',
    },
    {
      id: 'overall-wellness' as const,
      image: placeholderImages['overall-wellness.jpg'],
      color: 'from-blue-800 to-cyan-500',
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-secondary/30 to-background"
      dir={language === 'ar' ? 'rtl' : 'ltr'}
    >
      <div className="container mx-auto px-4">
        <div className={`scroll-animate ${isVisible ? 'animate-slide-up' : ''}`}>
          <SectionTitle title={t('healthBenefits.title')} subtitle={t('healthBenefits.subtitle')} align="center" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.id}
              className={`group relative herb-card cursor-pointer text-center scroll-animate delay-${(index + 1) * 100} ${
                isVisible ? 'animate-slide-up' : ''
              }`}
              onClick={() => navigate(lp(`/health-benefits/${benefit.id}`))}
            >
              <div className="relative mb-6 overflow-hidden rounded-2xl">
                <LazyImage
                  src={benefit.image}
                  alt={t(`healthBenefits.cards.${benefit.id}.title`)}
                  className="w-full h-32 object-cover rounded-2xl transform transition-all duration-500 group-hover:scale-105"
                  fallback={`data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0IiByeD0iMTIiIGZpbGw9IiNmM2Y0ZjYiLz4KPHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIyNCIgZmlsbD0iIzY2NjY2NiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkg8L3RleHQ+Cjwvc3ZnPgo=`}
                />
                <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-transparent rounded-2xl" />
              </div>

              <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                {t(`healthBenefits.cards.${benefit.id}.title`)}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {t(`healthBenefits.cards.${benefit.id}.description`)}
              </p>

              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/[0.04] to-slate-500/[0.06] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </div>
          ))}
        </div>

        <div className={`text-center mt-16 scroll-animate delay-900 ${isVisible ? 'animate-slide-up' : ''}`}>
          <div className="mac-panel max-w-4xl mx-auto p-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              {t('healthBenefits.ctaTitle')}
            </h3>
            <p className="text-muted-foreground mb-6">
              {t('healthBenefits.ctaSubtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                type="button"
                onClick={() => navigate(lp('/products'))}
                className="herb-button-primary"
              >
                {t('common.exploreProducts')}
              </button>
              <button type="button" className="herb-button-secondary">
                {t('learnMore')}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HealthBenefits;
