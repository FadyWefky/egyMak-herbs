import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, Heart, Brain, Shield, Zap, Leaf, Users, Eye } from 'lucide-react';
import { healthBenefitsMapping, Herb } from '../data/herbs';
import { useLanguage } from '../contexts/useLanguage';
import HerbModal from '../components/HerbModal';

const HealthBenefits: React.FC = () => {
  const { language } = useLanguage();
  const navigate = useNavigate();
  const { benefitId } = useParams<{ benefitId: string }>();
  const [selectedHerb, setSelectedHerb] = useState<Herb | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const benefitData = benefitId ? healthBenefitsMapping[benefitId as keyof typeof healthBenefitsMapping] : null;

  const handleHerbClick = (herb: Herb) => {
    setSelectedHerb(herb);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedHerb(null);
  };

  const getIcon = (benefitId: string) => {
    const icons = {
      'heart-health': Heart,
      'brain-boost': Brain,
      'immune-support': Shield,
      'natural-energy': Zap,
      'antioxidants': Leaf,
      'overall-wellness': Users
    };
    return icons[benefitId as keyof typeof icons] || Heart;
  };

  if (!benefitData) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">
            {language === 'ar' ? 'الفوائد الصحية غير موجودة' : 'Health Benefit Not Found'}
          </h1>
          <button
            onClick={() => navigate('/')}
            className="herb-button-primary"
          >
            {language === 'ar' ? 'العودة للصفحة الرئيسية' : 'Back to Home'}
          </button>
        </div>
      </div>
    );
  }

  const IconComponent = getIcon(benefitId || '');
  const title = language === 'ar' ? benefitData.titleAr : benefitData.title;

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
            <span>{language === 'ar' ? 'العودة للصفحة الرئيسية' : 'Back to Home'}</span>
          </button>
          
          <div className="flex items-center space-x-6 mb-6">
            <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center">
              <IconComponent className="w-10 h-10 text-white" />
            </div>
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-2">{title}</h1>
              <p className="text-xl text-primary-foreground/80">
                {language === 'ar' 
                  ? `اكتشف ${benefitData.herbs.length} عشب طبيعي يدعم ${title.toLowerCase()}`
                  : `Discover ${benefitData.herbs.length} natural herbs that support ${title.toLowerCase()}`
                }
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Herbs Grid */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          {benefitData.herbs.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {benefitData.herbs.map((herb) => {
                const herbName = language === 'ar' ? herb.nameAr : herb.name;
                
                return (
                  <div
                    key={herb.id}
                    className="group herb-card cursor-pointer relative overflow-hidden"
                    onClick={() => handleHerbClick(herb)}
                  >
                    {/* Badge */}
                    {herb.badge && (
                      <div className="absolute top-4 left-4 z-10 px-3 py-1 bg-accent text-accent-foreground text-xs font-medium rounded-full">
                        {herb.badge}
                      </div>
                    )}

                    {/* Product Image */}
                    <div className="relative overflow-hidden rounded-lg mb-4">
                      <img
                        src={herb.image}
                        alt={herbName}
                        className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      
                      {/* Hover Actions */}
                      <div className="absolute inset-0 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <button className="w-10 h-10 bg-card rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors duration-200">
                          <Eye className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    {/* Product Info */}
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-muted-foreground bg-secondary px-2 py-1 rounded">
                          {herb.category}
                        </span>
                        <div className="flex items-center space-x-1">
                          <span className="text-sm font-medium">{herb.rating}</span>
                          <span className="text-xs text-muted-foreground">({herb.reviews})</span>
                        </div>
                      </div>

                      <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                        {herbName}
                      </h3>

                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {language === 'ar' ? herb.descriptionAr : herb.description}
                      </p>

                      <div className="flex flex-wrap gap-1">
                        {herb.benefits.slice(0, 3).map((benefit, index) => (
                          <span
                            key={index}
                            className="px-2 py-1 bg-primary/10 text-primary text-xs rounded"
                          >
                            {language === 'ar' ? herb.benefitsAr[index] : benefit}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🌿</div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {language === 'ar' ? 'لا توجد أعشاب متاحة' : 'No herbs available'}
              </h3>
              <p className="text-muted-foreground">
                {language === 'ar' 
                  ? 'جاري إضافة المزيد من الأعشاب لهذه الفئة'
                  : 'More herbs are being added to this category'
                }
              </p>
            </div>
          )}
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

export default HealthBenefits;
