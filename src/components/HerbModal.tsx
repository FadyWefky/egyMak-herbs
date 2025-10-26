import React from 'react';
import { X, Star, Leaf, MapPin, Weight } from 'lucide-react';
import { Herb } from '../data/herbs';
import { useLanguage } from '../contexts/useLanguage';

interface HerbModalProps {
  herb: Herb | null;
  isOpen: boolean;
  onClose: () => void;
}

const HerbModal: React.FC<HerbModalProps> = ({ herb, isOpen, onClose }) => {
  const { language, getHerbName, getHerbDescription, getHerbBenefits, getHerbUses } = useLanguage();

  if (!isOpen || !herb) return null;

  const name = getHerbName(herb);
  const description = getHerbDescription(herb);
  const benefits = getHerbBenefits(herb);
  const uses = getHerbUses(herb);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-card rounded-2xl shadow-2xl">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 bg-background/80 hover:bg-background rounded-full flex items-center justify-center transition-colors duration-200"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
          {/* Image Section */}
          <div className="relative">
            <img
              src={herb.image}
              alt={name}
              className="w-full h-80 lg:h-full object-cover rounded-t-2xl lg:rounded-l-2xl lg:rounded-tr-none"
            />
            {herb.badge && (
              <div className="absolute top-4 left-4 px-3 py-1 bg-accent text-accent-foreground text-sm font-medium rounded-full">
                {herb.badge}
              </div>
            )}
            <div className="absolute bottom-4 left-4 flex items-center space-x-2 bg-background/80 backdrop-blur-sm rounded-full px-3 py-2">
              <Star className="w-4 h-4 fill-accent text-accent" />
              <span className="text-sm font-medium">{herb.rating}</span>
              <span className="text-xs text-muted-foreground">({herb.reviews} reviews)</span>
            </div>
          </div>

          {/* Content Section */}
          <div className="p-8 space-y-6">
            {/* Header */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-2">{name}</h2>
              <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                <div className="flex items-center space-x-1">
                  <MapPin className="w-4 h-4" />
                  <span>{herb.origin}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Weight className="w-4 h-4" />
                  <span>{herb.weight}</span>
                </div>
              </div>
            </div>


            {/* Description */}
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Description</h3>
              <p className="text-muted-foreground leading-relaxed">{description}</p>
            </div>

            {/* Benefits */}
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center">
                <Leaf className="w-5 h-5 mr-2 text-primary" />
                Benefits
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center space-x-2 text-sm">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-muted-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Uses */}
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">Common Uses</h3>
              <div className="flex flex-wrap gap-2">
                {uses.map((use, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm"
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
