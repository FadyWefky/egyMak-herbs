import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
import { useLanguage } from '../contexts/useLanguage';
import heroImage from '../assets/hero-herbs.jpg';

const Hero: React.FC = () => {
  const { t, language } = useLanguage();
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section 
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      dir={language === 'ar' ? 'rtl' : 'ltr'}
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Premium Herbs"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/60 to-transparent"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-accent/30 rounded-full floating-herb"></div>
      <div className="absolute bottom-32 right-16 w-16 h-16 bg-secondary/40 rounded-full floating-herb" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/3 right-1/4 w-12 h-12 bg-accent/50 rounded-full floating-herb" style={{ animationDelay: '2s' }}></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className={`max-w-4xl mx-auto ${isVisible ? 'herb-fade-in animate' : 'herb-fade-in'}`}>
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-card/90 backdrop-blur-sm rounded-full px-4 py-2 mb-6 herb-scale-hover">
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium">100% Natural & Organic</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
            <span className="block text-yellow-500">{t('heroTitle')}</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            {t('heroSubtitle')}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={() => navigate('/products')}
              className="herb-button-primary group"
            >
              <span>{language === 'ar' ? 'استكشف جميع الأعشاب' : 'Explore All Herbs'}</span>
              <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
            
            <button 
              onClick={() => navigate('/products')}
              className="px-6 py-3 bg-card/20 backdrop-blur-sm text-primary-foreground border border-primary-foreground/30 rounded-lg font-medium transition-all duration-300 hover:bg-card/30 hover:scale-105"
            >
              {t('learnMore')}
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 max-w-md mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-1">30+</div>
              <div className="text-sm text-primary-foreground/80">
                {language === 'ar' ? 'أعشاب مميزة' : 'Premium Herbs'}
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-1">4</div>
              <div className="text-sm text-primary-foreground/80">
                {language === 'ar' ? 'فئات رئيسية' : 'Main Categories'}
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-1">100%</div>
              <div className="text-sm text-primary-foreground/80">
                {language === 'ar' ? 'طبيعي' : 'Natural'}
              </div>
            </div>
          </div>
        </div>
      </div>

     
    </section>
  );
};

export default Hero;