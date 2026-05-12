import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Eye } from 'lucide-react';
import { healthBenefitsMapping, Herb } from '../data/herbs';
import { useLanguage } from '../contexts/useLanguage';
import HerbModal from '../components/HerbModal';
import PageHero from '../components/PageHero';
import { useLocalizedPath } from '../hooks/useLocalizedPath';

const HealthBenefits: React.FC = () => {
  const { language, t, getHerbName, getHerbDescription, getHerbBenefits } = useLanguage();
  const navigate = useNavigate();
  const lp = useLocalizedPath();
  const { benefitId } = useParams<{ benefitId: string }>();
  const [selectedHerb, setSelectedHerb] = useState<Herb | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const benefitData = benefitId
    ? healthBenefitsMapping[benefitId as keyof typeof healthBenefitsMapping]
    : null;

  const handleHerbClick = (herb: Herb) => {
    setSelectedHerb(herb);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedHerb(null);
  };

  if (!benefitData || !benefitId) {
    return (
      <div
        className="min-h-screen bg-background flex items-center justify-center px-4"
        dir={language === 'ar' ? 'rtl' : 'ltr'}
      >
        <div className="mac-panel max-w-md w-full p-10 text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">{t('healthBenefitsDetail.notFound')}</h1>
          <button type="button" onClick={() => navigate(lp('/'))} className="herb-button-primary">
            {t('healthBenefitsDetail.backHome')}
          </button>
        </div>
      </div>
    );
  }

  const title = t(`healthBenefits.cards.${benefitId}.title`);

  return (
    <div className="min-h-screen bg-background" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <PageHero
        title={title}
        subtitle={t('healthBenefitsDetail.discoverCount', { count: benefitData.herbs.length })}
        backLabel={t('healthBenefitsDetail.backHome')}
        onBack={() => navigate(lp('/'))}
      />

      <div className="py-10 sm:py-16">
        <div className="container mx-auto px-4">
          {benefitData.herbs.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {benefitData.herbs.map((herb) => {
                const herbName = getHerbName(herb);
                const desc = getHerbDescription(herb);
                const ben = getHerbBenefits(herb);

                return (
                  <div
                    key={herb.id}
                    className="group herb-card cursor-pointer relative overflow-hidden"
                    onClick={() => handleHerbClick(herb)}
                  >
                    {herb.badge && (
                      <div className="absolute top-4 start-4 z-10 px-3 py-1 bg-accent text-accent-foreground text-xs font-medium rounded-full">
                        {herb.badge}
                      </div>
                    )}

                    <div className="relative overflow-hidden rounded-lg mb-4">
                      <img
                        src={herb.image}
                        alt={herbName}
                        className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                      <div className="absolute inset-0 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <button
                          type="button"
                          className="w-10 h-10 mac-panel flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
                          aria-label={t('viewDetails')}
                        >
                          <Eye className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-xs text-muted-foreground bg-secondary px-2 py-1 rounded-md">
                          {t(`products.cat.${herb.category}`)}
                        </span>
                        <div className="flex items-center gap-1 shrink-0 text-sm text-muted-foreground">
                          <span className="font-medium text-foreground">{herb.rating}</span>
                          <span className="text-xs">({herb.reviews})</span>
                        </div>
                      </div>

                      <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                        {herbName}
                      </h3>

                      <p className="text-sm text-muted-foreground line-clamp-2">{desc}</p>

                      <div className="flex flex-wrap gap-1">
                        {ben.slice(0, 3).map((b, index) => (
                          <span
                            key={index}
                            className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md"
                          >
                            {b}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-16 mac-panel max-w-lg mx-auto p-10">
              <div className="text-6xl mb-4" aria-hidden>
                🌿
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">{t('healthBenefitsDetail.noHerbs')}</h3>
              <p className="text-muted-foreground">{t('healthBenefitsDetail.noHerbsHint')}</p>
            </div>
          )}
        </div>
      </div>

      <HerbModal herb={selectedHerb} isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default HealthBenefits;
