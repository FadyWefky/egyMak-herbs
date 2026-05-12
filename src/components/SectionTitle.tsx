import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLanguage } from '../contexts/useLanguage';

gsap.registerPlugin(ScrollTrigger);

export type SectionTitleProps = {
  title: string;
  subtitle?: string;
  eyebrow?: string;
  className?: string;
  align?: 'center' | 'start';
};

const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  subtitle,
  eyebrow,
  className = '',
  align = 'center',
}) => {
  const { language } = useLanguage();
  const isRtl = language === 'ar';
  const rootRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const eyebrowRef = useRef<HTMLParagraphElement>(null);

  useLayoutEffect(() => {
    const root = rootRef.current;
    const line = lineRef.current;
    const h = titleRef.current;
    const sub = subRef.current;
    const eye = eyebrowRef.current;
    if (!root || !h || !line) return;

    const lineOrigin = isRtl ? '100% 50%' : '0% 50%';
    const titleFromX = isRtl ? 22 : -22;

    gsap.set(line, { scaleX: 0, transformOrigin: lineOrigin });
    gsap.set(h, { opacity: 0, x: titleFromX });
    if (sub) gsap.set(sub, { opacity: 0, y: 10 });
    if (eye) gsap.set(eye, { opacity: 0, y: 5 });

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: { trigger: root, start: 'top 90%', once: true },
      });
      if (eye) tl.fromTo(eye, { opacity: 0, y: 5 }, { opacity: 1, y: 0, duration: 0.55, ease: 'sine.out' });
      tl.to(line, { scaleX: 1, duration: 1.05, ease: 'power1.inOut' }, eye ? '-=0.2' : 0);
      tl.to(h, { opacity: 1, x: 0, duration: 0.95, ease: 'sine.out' }, '-=0.72');
      if (sub) tl.to(sub, { opacity: 1, y: 0, duration: 0.75, ease: 'sine.out' }, '-=0.55');
    }, root);

    return () => ctx.revert();
  }, [title, subtitle, eyebrow, align, isRtl]);

  const rowDir =
    align === 'center'
      ? 'flex flex-col items-center gap-4 md:flex-row md:items-center md:justify-center'
      : 'flex flex-col gap-4 sm:flex-row sm:items-center';

  const textBlock = align === 'center' ? 'text-center md:text-start' : 'text-start';
  const titleBlock = `${textBlock} max-w-3xl`;

  return (
    <div ref={rootRef} className={`mb-12 md:mb-16 ${className}`} dir={isRtl ? 'rtl' : 'ltr'}>
      {eyebrow ? (
        <p ref={eyebrowRef} className={`section-eyebrow mb-3 ${align === 'center' ? 'text-center' : 'text-start'}`}>
          {eyebrow}
        </p>
      ) : null}
      <div className={rowDir}>
        <div
          ref={lineRef}
          className="h-1 w-16 shrink-0 rounded-full bg-gradient-to-r from-primary via-primary/80 to-slate-600 md:w-24"
          aria-hidden
        />
        <div className={`min-w-0 flex-1 ${align === 'center' ? 'md:max-w-3xl' : ''}`}>
          <h2 ref={titleRef} className={`text-4xl font-bold tracking-tight md:text-5xl ${titleBlock} section-heading-display`}>
            {title}
          </h2>
          {subtitle ? (
            <p ref={subRef} className={`mt-4 text-lg leading-relaxed text-muted-foreground ${textBlock}`}>
              {subtitle}
            </p>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default SectionTitle;
