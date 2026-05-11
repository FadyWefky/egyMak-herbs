import React from 'react';
import { useLanguage } from '../contexts/useLanguage';

export type LegalPageKey =
  | 'terms'
  | 'privacy'
  | 'cookies'
  | 'shipping'
  | 'returns'
  | 'support';

export const LegalArticle: React.FC<{ page: LegalPageKey }> = ({ page }) => {
  const { getLegal, language } = useLanguage();
  const L = getLegal(page);

  return (
    <div
      className="container mx-auto px-4 py-16"
      dir={language === 'ar' ? 'rtl' : 'ltr'}
    >
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12 text-foreground">{L.pageTitle}</h1>

        <div className="mac-panel p-8">
          <h2 className="text-2xl font-semibold mb-6 text-primary">{L.sectionTitle}</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>{L.p1}</p>
            <p>{L.p2}</p>
            {L.p3 ? <p>{L.p3}</p> : null}
          </div>
        </div>
      </div>
    </div>
  );
};
