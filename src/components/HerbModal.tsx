import React from 'react';
import { X, Star, Leaf, MapPin } from 'lucide-react';
import { Herb } from '../data/herbs';
import { useLanguage } from '../contexts/useLanguage';

interface HerbModalProps {
  herb: Herb | null;
  isOpen: boolean;
  onClose: () => void;
}

const HerbModal: React.FC<HerbModalProps> = ({ herb, isOpen, onClose }) => {
  const { language, t, getHerbName, getHerbDescription, getHerbBenefits, getHerbUses } =
    useLanguage();

  if (!isOpen || !herb) return null;

  const name = getHerbName(herb);
  const description = getHerbDescription(herb);
  const benefits = getHerbBenefits(herb);
  const uses = getHerbUses(herb);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/45 backdrop-blur-md"
      dir={language === 'ar' ? 'rtl' : 'ltr'}
      role="dialog"
      aria-modal="true"
      aria-labelledby="herb-modal-title"
    >
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto mac-window">
        <button
          type="button"
          onClick={onClose}
          className="absolute top-3 end-3 z-10 w-10 h-10 mac-panel flex items-center justify-center hover:bg-muted transition-colors duration-200"
          aria-label={t('common.close')}
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
          <div className="relative">
            <img
              src={herb.image}
              alt={name}
              className="w-full h-80 lg:h-full min-h-[280px] object-cover lg:rounded-s-[11px] rounded-t-[11px] lg:rounded-tr-none"
            />
            {herb.badge && (
              <div className="absolute top-4 start-4 px-3 py-1 bg-accent text-accent-foreground text-sm font-medium rounded-full">
                {herb.badge}
              </div>
            )}
            <div className="absolute bottom-4 start-4 flex items-center gap-2 mac-panel px-3 py-2">
              <Star className="w-4 h-4 fill-accent text-accent shrink-0" />
              <span className="text-sm font-medium">{herb.rating}</span>
              <span className="text-xs text-muted-foreground">
                ({herb.reviews} {t('herbModal.reviewsLabel')})
              </span>
            </div>
          </div>

          <div className="p-8 space-y-6 bg-card/95">
            <div>
              <h2 id="herb-modal-title" className="text-3xl font-bold text-foreground mb-2">
                {name}
              </h2>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 shrink-0" />
                <span>{herb.origin}</span>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{t('herbModal.description')}</h3>
              <p className="text-muted-foreground leading-relaxed">{description}</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                <Leaf className="w-5 h-5 text-primary shrink-0" />
                {t('herbModal.benefits')}
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm">
                    <div className="w-2 h-2 bg-primary rounded-full shrink-0 mt-1.5" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">{t('herbModal.commonUses')}</h3>
              <div className="flex flex-wrap gap-2">
                {uses.map((use, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm border border-border/60"
                  >
                    {use}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HerbModal;
