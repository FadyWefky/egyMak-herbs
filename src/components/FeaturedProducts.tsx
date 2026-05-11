import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Star, Eye } from 'lucide-react';
import { useLanguage } from '../contexts/useLanguage';
import { herbsData, Herb } from '../data/herbs';
import HerbModal from './HerbModal';
import LazyImage from './LazyImage';

const FeaturedProducts: React.FC = () => {
  const { t, language, getHerbName } = useLanguage();
  const navigate = useNavigate();
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [selectedHerb, setSelectedHerb] = useState<Herb | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  const featuredProducts = herbsData
    .filter((herb) => herb.badge || herb.rating >= 4.8)
    .slice(0, 4);

  const handleHerbClick = (herb: Herb) => {
    setSelectedHerb(herb);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedHerb(null);
  };

  const categoryLabel = (slug: string) => t(`products.cat.${slug}`);

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-background"
      dir={language === 'ar' ? 'rtl' : 'ltr'}
    >
      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 scroll-animate ${isVisible ? 'animate-slide-up' : ''}`}>
          <h2 className="text-4xl md:text-5xl font-bold herb-gradient-text mb-4">
            {t('featuredProducts')}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t('featured.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((herb, index) => {
            const herbName = getHerbName(herb);

            return (
              <div
                key={herb.id}
                className={`group herb-card cursor-pointer relative overflow-hidden scroll-animate delay-${(index + 1) * 100} ${
                  isVisible ? 'animate-slide-up' : ''
                }`}
                onClick={() => handleHerbClick(herb)}
              >
                {herb.badge && (
                  <div className="absolute top-4 start-4 z-10 px-3 py-1 bg-accent text-accent-foreground text-xs font-medium rounded-full">
                    {herb.badge}
                  </div>
                )}

                <div className="relative overflow-hidden rounded-lg mb-4">
                  <LazyImage
                    src={herb.image}
                    alt={herbName}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                    fallback="/placeholder.svg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="absolute inset-0 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <button
                      type="button"
                      className="w-10 h-10 mac-panel flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
                      aria-label={t('viewDetails')}
                    >
                      <Eye className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-xs text-muted-foreground bg-secondary px-2 py-1 rounded-md">
                      {categoryLabel(herb.category)}
                    </span>
                    <div className="flex items-center gap-1 shrink-0">
                      <Star className="w-4 h-4 fill-accent text-accent" />
                      <span className="text-sm font-medium">{herb.rating}</span>
                      <span className="text-xs text-muted-foreground">({herb.reviews})</span>
                    </div>
                  </div>

                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                    {herbName}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>

        <div className={`text-center mt-12 scroll-animate delay-800 ${isVisible ? 'animate-slide-up' : ''}`}>
          <button type="button" onClick={() => navigate('/products')} className="herb-button-primary">
            {t('common.viewAllProducts')}
          </button>
        </div>
      </div>

      <HerbModal herb={selectedHerb} isOpen={isModalOpen} onClose={closeModal} />
    </section>
  );
};

export default FeaturedProducts;
