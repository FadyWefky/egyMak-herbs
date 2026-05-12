import React, { useLayoutEffect, useRef, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocalizedPath } from '../hooks/useLocalizedPath';
import { ArrowRight, Sparkles } from 'lucide-react';
import gsap from 'gsap';
import { useLanguage } from '../contexts/useLanguage';
import heroImage from '../assets/hero-herbs.jpg';
import LazyImage from './LazyImage';

const Hero: React.FC = React.memo(() => {
  const { t, language } = useLanguage();
  const navigate = useNavigate();
  const lp = useLocalizedPath();
  const [isVisible, setIsVisible] = useState(false);
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const tmr = setTimeout(() => setIsVisible(true), 80);
    return () => clearTimeout(tmr);
  }, []);

  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.hero-gsap',
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.09, ease: 'power3.out', delay: 0.04 }
      );
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={rootRef}
      id="home"
      className="relative flex min-h-[calc(100svh-4rem)] items-center justify-center overflow-hidden md:min-h-[calc(100svh-4.5rem)]"
      dir={language === 'ar' ? 'rtl' : 'ltr'}
    >
      <div className="absolute inset-0">
        <LazyImage
          src={heroImage}
          alt={t('hero.imageAlt')}
          className="min-h-[calc(100svh-4rem)] h-full w-full object-cover md:min-h-[calc(100svh-4.5rem)]"
          fallback="/placeholder.svg"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/50 via-slate-900/55 to-slate-950/70" />
        <div
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_35%,transparent_0%,rgba(15,23,42,0.65)_75%)]"
          aria-hidden
        />
      </div>

      <div className="absolute top-24 start-6 hidden h-14 w-14 rounded-full bg-white/10 blur-md sm:block" />
      <div
        className="absolute bottom-24 end-10 hidden h-12 w-12 rounded-full bg-white/10 sm:block"
        style={{ animationDelay: '1s' }}
      />

      <div className={`relative z-10 mx-auto max-w-4xl px-4 py-28 text-center sm:py-32 ${isVisible ? 'scroll-animate animate-slide-up' : ''}`}>
        <div className="hero-gsap mb-6 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-5 py-2 backdrop-blur-md">
          <Sparkles className="h-4 w-4 shrink-0 text-sky-200" />
          <span className="text-sm font-semibold tracking-wide text-white drop-shadow-md">{t('hero.badge')}</span>
        </div>

        <h1 className="hero-gsap mb-5 text-5xl font-extrabold leading-[1.06] tracking-tight md:text-7xl">
          <span className="block text-white drop-shadow-[0_4px_32px_rgba(0,0,0,0.65)]">EGYMAK</span>
          <span className="mt-3 block text-lg font-bold uppercase tracking-[0.14em] text-white/95 drop-shadow-[0_2px_20px_rgba(0,0,0,0.55)] md:text-3xl">
            {t('hero.brandLine')}
          </span>
        </h1>

        <p className="hero-gsap mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-white/93 drop-shadow-[0_2px_18px_rgba(0,0,0,0.5)] md:text-2xl">
          {t('heroSubtitle')}
        </p>

        <div className="hero-gsap flex flex-col items-center justify-center gap-4 sm:flex-row">
          <button type="button" onClick={() => navigate(lp('/products'))} className="herb-button-primary group">
            <span>{t('common.exploreAllHerbs')}</span>
            <ArrowRight className="ms-1 h-5 w-5 transition-transform duration-300 group-hover:translate-x-0.5 rtl:rotate-180 rtl:group-hover:-translate-x-0.5" />
          </button>

          <button
            type="button"
            onClick={() => navigate(lp('/sourcing'))}
            className="rounded-xl border border-white/35 bg-white/10 px-6 py-3 font-semibold text-white backdrop-blur-sm transition duration-500 ease-out hover:border-white/55 hover:bg-white/16"
          >
            {t('sourcing')}
          </button>
        </div>

        <div className="hero-gsap mx-auto mt-14 grid max-w-md grid-cols-3 gap-4 border-t border-white/15 pt-8 md:gap-8">
          <div className="text-center">
            <div className="mb-1 text-2xl font-bold text-sky-100/95 drop-shadow-sm md:text-3xl">30+</div>
            <div className="text-xs text-white/85 md:text-sm">{t('hero.statPremiumHerbs')}</div>
          </div>
          <div className="text-center">
            <div className="mb-1 text-2xl font-bold text-white drop-shadow-sm md:text-3xl">4</div>
            <div className="text-xs text-white/85 md:text-sm">{t('hero.statCategories')}</div>
          </div>
          <div className="text-center">
            <div className="mb-1 text-2xl font-bold text-white drop-shadow-sm md:text-3xl">100%</div>
            <div className="text-xs text-white/85 md:text-sm">{t('hero.statNatural')}</div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default Hero;
