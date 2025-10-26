import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Star, ShoppingCart, Eye } from 'lucide-react';
import { useLanguage } from '../contexts/useLanguage';
import { herbsData, Herb } from '../data/herbs';
import { getHerbImage } from '../utils/herbImageMapping';
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

  // Get featured products (first 4 herbs with badges or highest ratings)
  const featuredProducts = herbsData
    .filter(herb => herb.badge || herb.rating >= 4.8)
    .slice(0, 4);

  const handleHerbClick = (herb: Herb) => {
    setSelectedHerb(herb);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedHerb(null);
  };

  return (
    <section 
      ref={sectionRef}
      className="py-20 bg-background"
      dir={language === 'ar' ? 'rtl' : 'ltr'}
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className={`text-center mb-16 scroll-animate ${isVisible ? 'animate-slide-up' : ''}`}>
          <h2 className="text-4xl md:text-5xl font-bold herb-gradient-text mb-4">
            {t('featuredProducts')}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Handpicked premium herbs for your culinary and wellness journey
          </p>
        </div>

        {/* Products Grid */}
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
              {/* Badge */}
                {herb.badge && (
                <div className="absolute top-4 left-4 z-10 px-3 py-1 bg-accent text-accent-foreground text-xs font-medium rounded-full">
                    {herb.badge}
                </div>
              )}

              {/* Product Image */}
              <div className="relative overflow-hidden rounded-lg mb-4">
                <LazyImage
                  src={getHerbImage(herb.id)}
                  alt={herbName}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  fallback="/placeholder.svg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Hover Actions */}
                <div className="absolute inset-0 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <button className="w-10 h-10 bg-card rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors duration-200">
                    <Eye className="w-4 h-4" />
                  </button>
                  </div>
              </div>

              {/* Product Info */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground bg-secondary px-2 py-1 rounded">
                      {herb.category}
                  </span>
                  <div className="flex items-center space-x-1">
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

        {/* View All Button */}
        <div className={`text-center mt-12 scroll-animate delay-800 ${isVisible ? 'animate-slide-up' : ''}`}>
          <button 
            onClick={() => navigate('/products')}
            className="herb-button-primary"
          >
            View All Products
          </button>
        </div>
      </div>

      {/* Herb Modal */}
      <HerbModal
        herb={selectedHerb}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </section>
  );
};

export default FeaturedProducts;