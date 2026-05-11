import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
import { useLanguage } from '../contexts/useLanguage';
import heroImage from '../assets/hero-herbs.jpg';
import LazyImage from './LazyImage';

const Hero: React.FC = React.memo(() => {
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
      <div className="absolute inset-0">
        <LazyImage
          src={heroImage}
          alt={t('hero.imageAlt')}
          className="w-full h-full object-cover min-h-[100vh]"
          fallback="/placeholder.svg"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/55 to-accent/25" />
      </div>

      <div className="absolute top-20 start-10 w-20 h-20 bg-accent/20 rounded-full floating-herb blur-sm" />
      <div
        className="absolute bottom-32 end-16 w-16 h-16 bg-primary-foreground/10 rounded-full floating-herb"
        style={{ animationDelay: '1s' }}
      />
      <div
        className="absolute top-1/3 end-1/4 w-12 h-12 bg-accent/25 rounded-full floating-herb"
        style={{ animationDelay: '2s' }}
      />

      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className={`max-w-4xl mx-auto scroll-animate ${isVisible ? 'animate-slide-up' : ''}`}>
          <div className="inline-flex items-center gap-2 bg-card/90 backdrop-blur-md border border-border/40 rounded-full px-5 py-2 mb-6 shadow-lg herb-scale-hover mac-panel">
            <Sparkles className="w-4 h-4 text-accent shrink-0" />
            <span className="text-sm font-semibold text-foreground tracking-wide">
              {t('hero.badge')}
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold text-primary-foreground mb-6 leading-tight drop-shadow-md">
            <span className="block text-accent tracking-tight">EGYMAK</span>
            <span className="block text-2xl md:text-3xl mt-3 font-bold text-primary-foreground/95 uppercase tracking-[0.12em]">
              {t('hero.brandLine')}
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            {t('heroSubtitle')}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => navigate('/products')}
              className="herb-button-primary group"
            >
              <span>{t('common.exploreAllHerbs')}</span>
              <ArrowRight className="w-5 h-5 ms-1 transition-transform duration-300 group-hover:translate-x-0.5 rtl:rotate-180 rtl:group-hover:-translate-x-0.5" />
            </button>

            <button
              onClick={() => navigate('/products')}
              className="px-6 py-3 bg-primary-foreground/10 backdrop-blur-md text-primary-foreground border border-primary-foreground/40 rounded-xl font-semibold transition-all duration-300 hover:bg-primary-foreground/20 hover:border-accent/60 hover:scale-[1.02] mac-panel border-primary-foreground/30"
            >
              {t('learnMore')}
            </button>
          </div>

          <div className="grid grid-cols-3 gap-6 md:gap-8 mt-16 max-w-md mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-1">30+</div>
              <div className="text-sm text-primary-foreground/80">{t('hero.statPremiumHerbs')}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-1">4</div>
              <div className="text-sm text-primary-foreground/80">{t('hero.statCategories')}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-1">100%</div>
              <div className="text-sm text-primary-foreground/80">{t('hero.statNatural')}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default Hero;
