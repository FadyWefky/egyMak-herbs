import React, { useEffect, useRef, useState } from 'react';
import { Star, Quote } from 'lucide-react';
import { useLanguage } from '../contexts/useLanguage';
import SectionTitle from './SectionTitle';

const Testimonials: React.FC = () => {
  const { language, t, getTestimonialItems } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const testimonials = getTestimonialItems();

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

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-background"
      dir={language === 'ar' ? 'rtl' : 'ltr'}
    >
      <div className="container mx-auto px-4">
        <div className={`scroll-animate ${isVisible ? 'animate-slide-up' : ''}`}>
          <SectionTitle
            title={t('testimonials.title')}
            subtitle={t('testimonials.subtitle')}
            align="center"
            className="!mb-3 md:!mb-4"
          />
          <p className="mx-auto mb-12 max-w-2xl text-center text-sm text-muted-foreground/90 md:mb-16 md:text-start">
            {t('testimonials.moderationNote')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => {
            const starCount = Math.min(5, Math.max(1, testimonial.rating ?? 5));
            return (
            <div
              key={`${testimonial.name}-${index}`}
              className={`group herb-card relative scroll-animate delay-${(index + 1) * 100} ${
                isVisible ? 'animate-slide-up' : ''
              }`}
            >
              <div className="absolute top-6 end-6 opacity-10 pointer-events-none">
                <Quote className="w-12 h-12 text-primary" />
              </div>

              <div className="flex items-center gap-1 mb-4">
                {[...Array(starCount)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>

              <p className="text-muted-foreground leading-relaxed mb-6 italic">
                &ldquo;{testimonial.text}&rdquo;
              </p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shrink-0">
                  <span className="text-primary-foreground font-semibold text-lg">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div className="min-w-0">
                  <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                  <p className="text-xs text-primary font-medium">{testimonial.herb}</p>
                </div>
              </div>

              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg pointer-events-none" />
            </div>
          );
          })}
        </div>

        <div className={`mt-16 scroll-animate delay-900 ${isVisible ? 'animate-slide-up' : ''}`}>
          <div className="mac-window bg-gradient-to-r from-primary to-accent p-8 text-primary-foreground">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold mb-2 counting-animation">
                  {t('testimonials.statHappyCustomersValue')}
                </div>
                <div className="text-primary-foreground/80">{t('testimonials.statHappyCustomers')}</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2 counting-animation">
                  {t('testimonials.statHerbVarietiesValue')}
                </div>
                <div className="text-primary-foreground/80">{t('testimonials.statHerbVarieties')}</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2 counting-animation">
                  {t('testimonials.statCustomerRatingValue')}
                </div>
                <div className="text-primary-foreground/80">{t('testimonials.statCustomerRating')}</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2 counting-animation">
                  {t('testimonials.statYearsExperienceValue')}
                </div>
                <div className="text-primary-foreground/80">{t('testimonials.statYearsExperience')}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
