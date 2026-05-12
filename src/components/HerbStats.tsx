import React, { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../contexts/useLanguage';
import { herbsData } from '../data/herbs';
import placeholderImages from '../utils/placeholderImages';
import LazyImage from './LazyImage';
import SectionTitle from './SectionTitle';

const HerbStats: React.FC = () => {
  const { language, t } = useLanguage();
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

  const totalHerbs = herbsData.length;
  const totalCategories = 4;
  const averageRating = (
    herbsData.reduce((sum, herb) => sum + herb.rating, 0) / totalHerbs
  ).toFixed(1);
  const totalReviews = herbsData.reduce((sum, herb) => sum + herb.reviews, 0);
  const premiumHerbs = herbsData.filter((herb) => herb.badge).length;
  const egyptianHerbs = herbsData.filter((herb) => herb.origin === 'Egypt').length;

  const stats = [
    {
      image: placeholderImages['herb_varities.jpg'],
      value: totalHerbs,
      labelKey: 'herbStats.labels.varieties',
      descKey: 'herbStats.descriptions.varieties',
    },
    {
      image: placeholderImages['main-categories.jpg'],
      value: totalCategories,
      labelKey: 'herbStats.labels.categories',
      descKey: 'herbStats.descriptions.categories',
    },
    {
      image: placeholderImages['rating.jpg'],
      value: averageRating,
      labelKey: 'herbStats.labels.rating',
      descKey: 'herbStats.descriptions.rating',
    },
    {
      image: placeholderImages['sutomer_reviews.jpg'],
      value: totalReviews.toLocaleString(),
      labelKey: 'herbStats.labels.reviews',
      descKey: 'herbStats.descriptions.reviews',
    },
    {
      image: placeholderImages['premium_herbs.jpg'],
      value: premiumHerbs,
      labelKey: 'herbStats.labels.premium',
      descKey: 'herbStats.descriptions.premium',
    },
    {
      image: placeholderImages['egyptian_herbs.jpg'],
      value: egyptianHerbs,
      labelKey: 'herbStats.labels.egyptian',
      descKey: 'herbStats.descriptions.egyptian',
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-background to-secondary/20"
      dir={language === 'ar' ? 'rtl' : 'ltr'}
    >
      <div className="container mx-auto px-4">
        <div className={`scroll-animate ${isVisible ? 'animate-slide-up' : ''}`}>
          <SectionTitle title={t('herbStats.title')} subtitle={t('herbStats.subtitle')} align="center" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div
              key={stat.labelKey}
              className={`group herb-card text-center scroll-animate delay-${(index + 1) * 100} ${
                isVisible ? 'animate-slide-up' : ''
              }`}
            >
              <div className="relative mb-6 overflow-hidden rounded-2xl">
                <LazyImage
                  src={stat.image}
                  alt={t(stat.labelKey)}
                  className="w-full h-32 object-cover rounded-2xl transform transition-all duration-500 group-hover:scale-105"
                  fallback={`data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0IiByeD0iMTIiIGZpbGw9IiNmM2Y0ZjYiLz4KPHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIyNCIgZmlsbD0iIzY2NjY2NiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPlM8L3RleHQ+Cjwvc3ZnPgo=`}
                />
                <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-transparent rounded-2xl" />
              </div>

              <div className="space-y-3">
                <div className="text-4xl font-bold text-foreground group-hover:text-primary transition-colors duration-300 counting-animation">
                  {stat.value}
                </div>
                <h3 className="text-xl font-semibold text-foreground">{t(stat.labelKey)}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">{t(stat.descKey)}</p>
              </div>

              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
            </div>
          ))}
        </div>

        <div className={`mt-16 text-center scroll-animate delay-900 ${isVisible ? 'animate-slide-up' : ''}`}>
          <div className="mac-panel max-w-4xl mx-auto p-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">{t('herbStats.whyTitle')}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
              <div className="flex items-center justify-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full shrink-0" />
                <span className="text-muted-foreground">{t('herbStats.why1')}</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full shrink-0" />
                <span className="text-muted-foreground">{t('herbStats.why2')}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HerbStats;
