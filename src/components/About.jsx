import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Sparkles, Users, Quote } from 'lucide-react';
import { useLanguage } from '../contexts/useLanguage';
import aboutImage from '../assets/about.jpeg';
import SectionTitle from './SectionTitle';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100, damping: 20 } },
};

export default function About() {
  const { t, language } = useLanguage();
  const alt = t('aboutImageAlt');
  const papers = [t('aboutParagraph1'), t('aboutParagraph2'), t('aboutParagraph3')];
  const stats = [
    { value: t('aboutPage.stat1Value'), label: t('aboutPage.stat1Label') },
    { value: t('aboutPage.stat2Value'), label: t('aboutPage.stat2Label') },
    { value: t('aboutPage.stat3Value'), label: t('aboutPage.stat3Label') },
  ];
  const pillars = [
    { title: t('aboutPage.pillar1Title'), body: t('aboutPage.pillar1Body'), icon: Sparkles },
    { title: t('aboutPage.pillar2Title'), body: t('aboutPage.pillar2Body'), icon: Leaf },
    { title: t('aboutPage.pillar3Title'), body: t('aboutPage.pillar3Body'), icon: Users },
  ];
  const timeline = [t('aboutPage.timeline1'), t('aboutPage.timeline2'), t('aboutPage.timeline3')];

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-gradient-to-b from-background via-[hsl(42,48%,97%)]/80 to-background py-16 md:py-24"
      dir={language === 'ar' ? 'rtl' : 'ltr'}
    >
      <div
        className="pointer-events-none absolute -top-24 end-0 h-72 w-72 rounded-full bg-[hsl(152,35%,42%)]/10 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute bottom-0 start-0 h-64 w-64 rounded-full bg-[hsl(28,40%,45%)]/10 blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl px-4">
        <SectionTitle title={t('aboutTitle')} subtitle={t('aboutPage.subtitle')} className="!mb-12 md:!mb-16" />

        <div className="mb-14 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
              transition={{ delay: i * 0.08 }}
              className="rounded-2xl border border-border/60 bg-card/90 p-6 text-center shadow-sm backdrop-blur-sm"
            >
              <div className="text-3xl font-extrabold text-[hsl(152,36%,34%)] md:text-4xl">{s.value}</div>
              <p className="mt-2 text-sm font-medium leading-snug text-muted-foreground">{s.label}</p>
            </motion.div>
          ))}
        </div>

        <div className="mb-16 grid gap-8 lg:grid-cols-2 lg:gap-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
            className="flex flex-col gap-5"
          >
            {papers.map((text, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="group relative overflow-hidden rounded-2xl border border-border/70 bg-card p-6 shadow-[0_12px_40px_hsla(210,40%,20%,0.06)] transition hover:-translate-y-0.5 hover:border-[hsl(152,36%,38%)]/35 hover:shadow-lg md:p-7"
              >
                <div
                  className="absolute -end-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br from-[hsl(152,40%,42%)]/15 to-[hsl(28,45%,48%)]/10 blur-2xl transition group-hover:opacity-100"
                  aria-hidden
                />
                <p className="relative text-[1.02rem] leading-relaxed text-foreground/95 md:text-lg">{text}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 90, damping: 18 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-md">
              <div
                className="absolute inset-0 rotate-1 scale-[1.02] rounded-3xl bg-gradient-to-tr from-[hsl(152,32%,36%)]/25 to-[hsl(28,42%,42%)]/20 blur-xl"
                aria-hidden
              />
              <img
                src={aboutImage}
                alt={alt}
                loading="lazy"
                decoding="async"
                className="relative z-[1] aspect-[4/5] w-full rounded-3xl border border-white/30 object-cover shadow-2xl ring-1 ring-black/5 md:aspect-auto md:max-h-[min(100%,520px)]"
              />
            </div>
          </motion.div>
        </div>

        <div className="mb-16 grid gap-5 md:grid-cols-3">
          {pillars.map(({ title, body, icon: Icon }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, type: 'spring', stiffness: 120, damping: 22 }}
              className="relative overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-b from-card to-[hsl(152,25%,97%)]/50 p-6"
            >
              <div className="mb-4 inline-flex rounded-xl bg-primary/8 p-3 text-[hsl(152,36%,34%)]">
                <Icon className="h-6 w-6" aria-hidden />
              </div>
              <h3 className="mb-2 text-lg font-bold text-foreground">{title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground md:text-[0.95rem]">{body}</p>
            </motion.div>
          ))}
        </div>

        <div className="mb-14 grid gap-4 md:grid-cols-3">
          {timeline.map((item, idx) => (
            <div
              key={idx}
              className="flex gap-4 rounded-2xl border border-border/60 bg-card/95 p-5 shadow-sm"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[hsl(152,36%,38%)]/12 text-sm font-bold text-[hsl(152,36%,32%)]">
                {idx + 1}
              </span>
              <p className="text-sm leading-relaxed text-muted-foreground md:text-[0.95rem]">{item}</p>
            </div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl border border-primary/15 bg-primary p-8 text-primary-foreground shadow-xl md:p-10"
        >
          <Quote className="absolute end-6 top-6 h-16 w-16 opacity-10" aria-hidden />
          <blockquote className="relative text-lg font-medium leading-relaxed md:text-xl">&ldquo;{t('aboutPage.quote')}&rdquo;</blockquote>
          <p className="relative mt-4 text-sm font-semibold uppercase tracking-wider text-primary-foreground/75">
            {t('aboutPage.quoteRole')}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-10 rounded-2xl border border-dashed border-[hsl(152,36%,38%)]/35 bg-muted/30 px-6 py-8 text-center md:px-10"
        >
          <h3 className="text-lg font-bold text-foreground md:text-xl">{t('aboutPage.beltTitle')}</h3>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
            {t('aboutPage.beltBody')}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
