import React, { useEffect, useRef, useState } from 'react';
import { Star, Quote } from 'lucide-react';
import { useLanguage } from '../contexts/useLanguage';

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
        <div className={`text-center mb-16 scroll-animate ${isVisible ? 'animate-slide-up' : ''}`}>
          <h2 className="text-4xl md:text-5xl font-bold herb-gradient-text mb-4">
            {t('testimonials.title')}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t('testimonials.subtitle')}
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
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
                {[...Array(testimonial.rating)].map((_, i) => (
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
          ))}
        </div>

        <div className={`mt-16 scroll-animate delay-900 ${isVisible ? 'animate-slide-up' : ''}`}>
          <div className="mac-window bg-gradient-to-r from-primary to-accent p-8 text-primary-foreground">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold mb-2 counting-animation">10,000+</div>
                <div className="text-primary-foreground/80">{t('testimonials.statHappyCustomers')}</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2 counting-animation">50+</div>
                <div className="text-primary-foreground/80">{t('testimonials.statHerbVarieties')}</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2 counting-animation">4.9</div>
                <div className="text-primary-foreground/80">{t('testimonials.statCustomerRating')}</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2 counting-animation">15+</div>
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
