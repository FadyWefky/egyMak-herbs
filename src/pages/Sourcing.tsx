import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Leaf, Sprout, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../contexts/useLanguage';
import PageHero from '../components/PageHero';
import { useLocalizedPath } from '../hooks/useLocalizedPath';

const Sourcing: React.FC = () => {
  const { t, language } = useLanguage();
  const navigate = useNavigate();
  const lp = useLocalizedPath();

  useEffect(() => {
    document.title = t('sourcingPage.metaTitle');
  }, [t, language]);

  const cards = [
    { icon: Sprout, title: t('sourcingPage.c1Title'), body: t('sourcingPage.c1Body') },
    { icon: Leaf, title: t('sourcingPage.c2Title'), body: t('sourcingPage.c2Body') },
    { icon: ShieldCheck, title: t('sourcingPage.c3Title'), body: t('sourcingPage.c3Body') },
  ];

  return (
    <div className="min-h-screen bg-background" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <PageHero
        title={t('sourcingPage.title')}
        subtitle={t('sourcingPage.subtitle')}
        backLabel={t('common.backToHome')}
        onBack={() => navigate(lp('/'))}
      />

      <div className="container mx-auto max-w-6xl px-4 py-12 md:py-16">
        <div className="mb-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map(({ icon: Icon, title, body }) => (
            <div
              key={title}
              className="herb-card group relative overflow-hidden border-border/70 bg-gradient-to-b from-card to-muted/25"
            >
              <div className="absolute -end-8 -top-8 h-28 w-28 rounded-full bg-primary/10 blur-2xl opacity-70 transition-opacity group-hover:opacity-100" />
              <div className="mb-4 inline-flex rounded-xl bg-primary/8 p-3 text-primary">
                <Icon className="h-7 w-7" aria-hidden />
              </div>
              <h3 className="mb-3 text-xl font-bold tracking-tight text-foreground">{title}</h3>
              <p className="text-[0.95rem] leading-relaxed text-muted-foreground">{body}</p>
            </div>
          ))}
        </div>

        <div className="mac-panel rounded-3xl border border-[hsl(152,30%,88%)] bg-gradient-to-br from-card via-card to-[hsl(42,40%,97%)]/80 p-8 md:p-10">
          <p className="text-lg leading-relaxed text-muted-foreground">{t('sourcingPage.pLead')}</p>
        </div>
      </div>
    </div>
  );
};

export default Sourcing;
