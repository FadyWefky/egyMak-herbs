import React, { useEffect, useRef, useState } from 'react';
import { Star, ShoppingCart, Eye } from 'lucide-react';
import { useLanguage } from '../contexts/useLanguage';

const FeaturedProducts: React.FC = () => {
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

  const products = [
    {
      id: 1,
      name: 'Premium Basil',
      price: '$12.99',
      originalPrice: '$15.99',
      rating: 4.8,
      reviews: 124,
      category: 'Culinary',
      image: 'https://images.unsplash.com/photo-1618164436241-4473940d1f5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      badge: 'Best Seller'
    },
    {
      id: 2,
      name: 'Organic Rosemary',
      price: '$8.99',
      originalPrice: null,
      rating: 4.9,
      reviews: 89,
      category: 'Culinary',
      image: 'https://images.unsplash.com/photo-1509987738-57c02b5c6cb3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      badge: 'New'
    },
    {
      id: 3,
      name: 'Chamomile Flowers',
      price: '$16.99',
      originalPrice: '$19.99',
      rating: 4.7,
      reviews: 203,
      category: 'Tea Herbs',
      image: 'https://images.unsplash.com/photo-1563122797-6c3c2b9cb5c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      badge: 'Popular'
    },
    {
      id: 4,
      name: 'Lavender Buds',
      price: '$22.99',
      originalPrice: null,
      rating: 5.0,
      reviews: 156,
      category: 'Aromatic',
      image: 'https://images.unsplash.com/photo-1590736969955-71cc94901144?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      badge: 'Premium'
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className="py-20 bg-background"
      dir={language === 'ar' ? 'rtl' : 'ltr'}
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className={`text-center mb-16 ${isVisible ? 'herb-fade-in animate' : 'herb-fade-in'}`}>
          <h2 className="text-4xl md:text-5xl font-bold herb-gradient-text mb-4">
            {t('featuredProducts')}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Handpicked premium herbs for your culinary and wellness journey
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div
              key={product.id}
              className={`group herb-card relative overflow-hidden ${
                isVisible ? 'herb-fade-in animate' : 'herb-fade-in'
              }`}
              style={{ animationDelay: isVisible ? `${index * 200}ms` : '0ms' }}
            >
              {/* Badge */}
              {product.badge && (
                <div className="absolute top-4 left-4 z-10 px-3 py-1 bg-accent text-accent-foreground text-xs font-medium rounded-full">
                  {product.badge}
                </div>
              )}

              {/* Product Image */}
              <div className="relative overflow-hidden rounded-lg mb-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
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
                    {product.category}
                  </span>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 fill-accent text-accent" />
                    <span className="text-sm font-medium">{product.rating}</span>
                    <span className="text-xs text-muted-foreground">({product.reviews})</span>
                  </div>
                </div>

                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                  {product.name}
                </h3>

                <div className="flex items-center space-x-2">
                  <span className="text-lg font-bold text-primary">{product.price}</span>
                  {product.originalPrice && (
                    <span className="text-sm text-muted-foreground line-through">
                      {product.originalPrice}
                    </span>
                  )}
                </div>

                {/* <button className="w-full bg-secondary hover:bg-primary hover:text-primary-foreground text-foreground py-2 rounded-lg transition-all duration-300 font-medium">
                  {t('addToCart')}
                </button> */}
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className={`text-center mt-12 ${isVisible ? 'herb-fade-in animate' : 'herb-fade-in'}`} style={{ animationDelay: '800ms' }}>
          <button className="herb-button-primary">
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;