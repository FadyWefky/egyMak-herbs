import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, ChefHat, Heart, Flower, Coffee, Eye } from 'lucide-react';
import { categoriesData, Herb } from '../data/herbs';
import { useLanguage } from '../contexts/useLanguage';
import HerbModal from '../components/HerbModal';

const Categories: React.FC = () => {
  const { language, t, getCategoryName, getCategoryDescription, getHerbName } = useLanguage();
  const navigate = useNavigate();
  const [selectedHerb, setSelectedHerb] = useState<Herb | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleHerbClick = (herb: Herb) => {
    setSelectedHerb(herb);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedHerb(null);
  };

  const getIcon = (iconName: string) => {
    const icons = {
      ChefHat,
      Heart,
      Flower,
      Coffee,
    };
    return icons[iconName as keyof typeof icons] || ChefHat;
  };

  return (
    <div className="min-h-screen bg-background" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <div className="bg-gradient-to-r from-primary to-accent text-primary-foreground py-16">
        <div className="container mx-auto px-4">
          <button
            type="button"
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-200 mb-6"
          >
            <ArrowLeft className="w-5 h-5 rtl:rotate-180" />
            <span>{t('categoriesPage.back')}</span>
          </button>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">{t('categoriesPage.title')}</h1>
          <p className="text-xl text-primary-foreground/80 max-w-2xl">{t('categoriesPage.subtitle')}</p>
        </div>
      </div>

      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {categoriesData.map((category) => {
              const IconComponent = getIcon(category.icon);
              const categoryName = getCategoryName(category);
              const categoryDesc = getCategoryDescription(category);

              return (
                <div
                  key={category.id}
                  className="mac-window bg-card overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  <div className={`bg-gradient-to-br ${category.color} p-8 text-white`}>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center shrink-0">
                        <IconComponent className="w-8 h-8" />
                      </div>
                      <div className="min-w-0">
                        <h2 className="text-2xl font-bold">{categoryName}</h2>
                        <p className="text-white/80">{categoryDesc}</p>
                      </div>
                    </div>
                    <div className="text-sm text-white/80">
                      {t('categoriesPage.listing', { count: category.herbs.length })}
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {category.herbs.map((herb) => {
                        const herbName = getHerbName(herb);

                        return (
                          <div
                            key={herb.id}
                            className="group cursor-pointer mac-panel p-4 hover:bg-muted/30 transition-colors duration-200"
                            onClick={() => handleHerbClick(herb)}
                          >
                            <div className="flex items-center gap-3">
                              <img
                                src={herb.image}
                                alt={herbName}
                                className="w-12 h-12 rounded-[10px] object-cover shrink-0"
                              />
                              <div className="flex-1 min-w-0">
                                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors duration-200 truncate">
                                  {herbName}
                                </h3>
                                <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
                                  {herb.badge && (
                                    <span className="px-2 py-0.5 bg-accent text-accent-foreground rounded-full text-xs">
                                      {herb.badge}
                                    </span>
                                  )}
                                </div>
                              </div>
                              <button
                                type="button"
                                className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 p-2 hover:bg-background rounded-lg shrink-0"
                                aria-label={t('viewDetails')}
                              >
                                <Eye className="w-4 h-4" />
                              </button>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <HerbModal herb={selectedHerb} isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default Categories;
