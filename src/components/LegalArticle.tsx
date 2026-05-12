import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/useLanguage';
import PageHero from './PageHero';
import { useLocalizedPath } from '../hooks/useLocalizedPath';

export type LegalPageKey =
  | 'terms'
  | 'privacy'
  | 'cookies'
  | 'shipping'
  | 'returns'
  | 'support';

export const LegalArticle: React.FC<{ page: LegalPageKey }> = ({ page }) => {
  const { getLegal, language, t } = useLanguage();
  const navigate = useNavigate();
  const lp = useLocalizedPath();
  const L = getLegal(page);

  return (
    <div className="min-h-screen bg-background" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <PageHero title={L.pageTitle} backLabel={t('common.backToHome')} onBack={() => navigate(lp('/'))} />

      <div className="container mx-auto max-w-4xl px-4 py-10 sm:py-14">
        <div className="mac-panel rounded-3xl border border-border/60 bg-card/95 p-6 shadow-sm sm:p-10">
          <h2 className="mb-6 text-xl font-semibold text-primary sm:text-2xl">{L.sectionTitle}</h2>
          <div className="space-y-4 leading-relaxed text-muted-foreground">
            <p>{L.p1}</p>
            <p>{L.p2}</p>
            {L.p3 ? <p>{L.p3}</p> : null}
          </div>
        </div>
      </div>
    </div>
  );
};
