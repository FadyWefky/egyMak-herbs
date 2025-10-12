import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, ChefHat, Heart, Flower, Coffee, Eye } from 'lucide-react';
import { categoriesData, Herb } from '../data/herbs';
import { useLanguage } from '../contexts/useLanguage';
import HerbModal from '../components/HerbModal';

const Categories: React.FC = () => {
  const { language } = useLanguage();
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
      Coffee
    };
    return icons[iconName as keyof typeof icons] || ChefHat;
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary to-accent text-primary-foreground py-16">
        <div className="container mx-auto px-4">
          <button
            onClick={() => navigate('/')}
            className="flex items-center space-x-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-200 mb-6"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Home</span>
          </button>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            {language === 'ar' ? 'فئات الأعشاب' : 'Herb Categories'}
          </h1>
          <p className="text-xl text-primary-foreground/80 max-w-2xl">
            {language === 'ar' 
              ? 'استكشف مجموعتنا الواسعة من الأعشاب الطبيعية المصنفة حسب الاستخدام'
              : 'Explore our wide collection of natural herbs categorized by usage'
            }
          </p>
        </div>
      </div>

      {/* Categories */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {categoriesData.map((category) => {
              const IconComponent = getIcon(category.icon);
              const categoryName = language === 'ar' ? category.nameAr : category.name;
              const categoryDesc = language === 'ar' ? category.descriptionAr : category.description;

              return (
                <div
                  key={category.id}
                  className="bg-card rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  {/* Category Header */}
                  <div className={`bg-gradient-to-br ${category.color} p-8 text-white`}>
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
                        <IconComponent className="w-8 h-8" />
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold">{categoryName}</h2>
                        <p className="text-white/80">{categoryDesc}</p>
                      </div>
                    </div>
                    <div className="text-sm text-white/80">
                      {category.herbs.length} {language === 'ar' ? 'منتج' : 'products'}
                    </div>
                  </div>

                  {/* Herbs Grid */}
                  <div className="p-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {category.herbs.map((herb) => {
                        const herbName = language === 'ar' ? herb.nameAr : herb.name;
                        
                        return (
                          <div
                            key={herb.id}
                            className="group cursor-pointer bg-secondary/30 rounded-lg p-4 hover:bg-secondary/50 transition-colors duration-200"
                            onClick={() => handleHerbClick(herb)}
                          >
                            <div className="flex items-center space-x-3">
                              <img
                                src={herb.image}
                                alt={herbName}
                                className="w-12 h-12 rounded-lg object-cover"
                              />
                              <div className="flex-1 min-w-0">
                                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors duration-200 truncate">
                                  {herbName}
                                </h3>
                                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                                  {herb.badge && (
                                    <span className="px-2 py-0.5 bg-accent text-accent-foreground rounded-full text-xs">
                                      {herb.badge}
                                    </span>
                                  )}
                                </div>
                              </div>
                              <button className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 p-2 hover:bg-background rounded-lg">
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

      {/* Herb Modal */}
      <HerbModal
        herb={selectedHerb}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </div>
  );
};

export default Categories;
