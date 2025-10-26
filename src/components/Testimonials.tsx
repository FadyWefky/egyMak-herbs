import React, { useEffect, useRef, useState } from 'react';
import { Star, Quote } from 'lucide-react';
import { useLanguage } from '../contexts/useLanguage';

const Testimonials: React.FC = () => {
  const { language } = useLanguage();
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

  const testimonials = [
    {
      name: language === 'ar' ? 'فاطمة أحمد' : 'Fatima Ahmed',
      location: language === 'ar' ? 'القاهرة، مصر' : 'Cairo, Egypt',
      rating: 5,
      text: language === 'ar' 
        ? 'الأعشاب من Egymak غيرت حياتي تماماً. جودة ممتازة ونتائج مذهلة للصحة العامة.'
        : 'Herbs from Egymak have completely transformed my life. Excellent quality and amazing results for overall health.',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      herb: language === 'ar' ? 'البابونج والزنجبيل' : 'Chamomile & Ginger'
    },
    {
      name: language === 'ar' ? 'محمد علي' : 'Mohamed Ali',
      location: language === 'ar' ? 'الإسكندرية، مصر' : 'Alexandria, Egypt',
      rating: 5,
      text: language === 'ar' 
        ? 'أستخدم أعشاب Egymak منذ عامين. طعم رائع وفوائد صحية واضحة. أنصح بها بشدة.'
        : 'I\'ve been using Egymak herbs for two years. Amazing taste and clear health benefits. Highly recommended.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      herb: language === 'ar' ? 'النعناع واللافندر' : 'Peppermint & Lavender'
    },
    {
      name: language === 'ar' ? 'سارة محمود' : 'Sara Mahmoud',
      location: language === 'ar' ? 'الأقصر، مصر' : 'Luxor, Egypt',
      rating: 5,
      text: language === 'ar' 
        ? 'الكركم والريحان من Egymak ساعداني كثيراً في تحسين الهضم وتقوية المناعة.'
        : 'Turmeric and Basil from Egymak have helped me greatly in improving digestion and strengthening immunity.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      herb: language === 'ar' ? 'الكركم والريحان' : 'Turmeric & Basil'
    },
    {
      name: language === 'ar' ? 'أحمد حسن' : 'Ahmed Hassan',
      location: language === 'ar' ? 'الغردقة، مصر' : 'Hurghada, Egypt',
      rating: 5,
      text: language === 'ar' 
        ? 'جودة عالية جداً وخدمة عملاء ممتازة. الأعشاب طازجة ومفيدة للغاية.'
        : 'Very high quality and excellent customer service. The herbs are fresh and very beneficial.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      herb: language === 'ar' ? 'المريمية والزعتر' : 'Sage & Thyme'
    },
    {
      name: language === 'ar' ? 'نور الدين' : 'Nour El-Din',
      location: language === 'ar' ? 'أسوان، مصر' : 'Aswan, Egypt',
      rating: 5,
      text: language === 'ar' 
        ? 'أعشاب طبيعية 100% من مصر. أنصح بها لكل من يبحث عن الصحة الطبيعية.'
        : '100% natural herbs from Egypt. I recommend them to anyone looking for natural health.',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      herb: language === 'ar' ? 'القرفة والليمون' : 'Cinnamon & Lemon Balm'
    },
    {
      name: language === 'ar' ? 'مريم سعد' : 'Mariam Saad',
      location: language === 'ar' ? 'المنيا، مصر' : 'Minya, Egypt',
      rating: 5,
      text: language === 'ar' 
        ? 'تجربة رائعة مع أعشاب Egymak. ساعدتني في الاسترخاء وتحسين النوم.'
        : 'Amazing experience with Egymak herbs. They helped me relax and improve sleep.',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      herb: language === 'ar' ? 'البابونج واللافندر' : 'Chamomile & Lavender'
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
        <div className={`text-center mb-16 scroll-animate ${isVisible ? 'animate-slide-up' : ''}`}>
          <h2 className="text-4xl md:text-5xl font-bold herb-gradient-text mb-4">
            {language === 'ar' ? 'آراء عملائنا' : 'Customer Reviews'}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {language === 'ar' 
              ? 'اكتشف ما يقوله عملاؤنا عن تجربتهم مع أعشاب Egymak'
              : 'Discover what our customers say about their experience with Egymak herbs'
            }
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mt-6"></div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`group herb-card relative scroll-animate delay-${(index + 1) * 100} ${
                isVisible ? 'animate-slide-up' : ''
              }`}
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-10">
                <Quote className="w-12 h-12 text-primary" />
              </div>

              {/* Rating */}
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-muted-foreground leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>

              {/* Customer Info */}
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <span className="text-primary-foreground font-semibold text-lg">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                  <p className="text-xs text-primary font-medium">{testimonial.herb}</p>
                </div>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
            </div>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className={`mt-16 scroll-animate delay-900 ${isVisible ? 'animate-slide-up' : ''}`}>
          <div className="bg-gradient-to-r from-primary to-accent rounded-2xl p-8 text-primary-foreground">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold mb-2 counting-animation">10,000+</div>
                <div className="text-primary-foreground/80">
                  {language === 'ar' ? 'عميل سعيد' : 'Happy Customers'}
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2 counting-animation">50+</div>
                <div className="text-primary-foreground/80">
                  {language === 'ar' ? 'نوع عشب' : 'Herb Varieties'}
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2 counting-animation">4.9</div>
                <div className="text-primary-foreground/80">
                  {language === 'ar' ? 'تقييم العملاء' : 'Customer Rating'}
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2 counting-animation">15+</div>
                <div className="text-primary-foreground/80">
                  {language === 'ar' ? 'سنة خبرة' : 'Years Experience'}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
