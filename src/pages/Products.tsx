import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Grid, List, Star, Eye, Heart } from 'lucide-react';
import { herbsData, Herb } from '../data/herbs';
import { useLanguage } from '../contexts/useLanguage';
import HerbModal from '../components/HerbModal';
import PageHero from '../components/PageHero';
import { useLocalizedPath } from '../hooks/useLocalizedPath';

const Products: React.FC = () => {
  const { language, t, getHerbName, getHerbDescription } = useLanguage();
  const navigate = useNavigate();
  const lp = useLocalizedPath();
  const [selectedHerb, setSelectedHerb] = useState<Herb | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('name');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const categories = [
    { value: 'all', label: t('products.cat.all') },
    { value: 'culinary', label: t('products.cat.culinary') },
    { value: 'medicinal', label: t('products.cat.medicinal') },
    { value: 'aromatic', label: t('products.cat.aromatic') },
    { value: 'tea', label: t('products.cat.tea') },
  ];

  const sortOptions = [
    { value: 'name', label: t('products.sortName') },
    { value: 'rating', label: t('products.sortRating') },
    { value: 'reviews', label: t('products.sortReviews') },
  ];

  const filteredAndSortedHerbs = useMemo(() => {
    let filtered = herbsData.filter((herb) => {
      const herbName = getHerbName(herb);
      const matchesSearch = herbName.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || herb.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });

    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'name':
          return getHerbName(a).localeCompare(getHerbName(b));
        case 'rating':
          return b.rating - a.rating;
        case 'reviews':
          return b.reviews - a.reviews;
        default:
          return 0;
      }
    });

    return filtered;
  }, [searchTerm, selectedCategory, sortBy, getHerbName]);

  const handleHerbClick = (herb: Herb) => {
    setSelectedHerb(herb);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedHerb(null);
  };

  const catLabel = (slug: string) => t(`products.cat.${slug}` as string);

  return (
    <div className="min-h-screen bg-background" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <PageHero
        title={t('products.title')}
        subtitle={t('products.subtitle')}
        backLabel={t('common.backToHome')}
        onBack={() => navigate(lp('/'))}
      />

      <div className="py-8 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-4 items-stretch lg:items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute start-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none" />
              <input
                type="text"
                placeholder={t('products.searchPlaceholder')}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="mac-textfield w-full ps-11 pe-4 py-3 bg-background min-h-[48px]"
              />
            </div>

            <div className="flex flex-wrap gap-3 items-center">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="mac-textfield px-4 py-3 bg-background min-h-[48px] w-auto"
                aria-label={t('products.categoryLabel')}
              >
                {categories.map((category) => (
                  <option key={category.value} value={category.value}>
                    {category.label}
                  </option>
                ))}
              </select>

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="mac-textfield px-4 py-3 bg-background min-h-[48px] w-auto"
                aria-label={t('products.sortLabel')}
              >
                {sortOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>

              <div className="mac-segmented p-1">
                <button
                  type="button"
                  onClick={() => setViewMode('grid')}
                  className={`mac-segment ${viewMode === 'grid' ? 'mac-segment-active' : ''}`}
                  aria-pressed={viewMode === 'grid'}
                  aria-label="Grid"
                >
                  <Grid className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => setViewMode('list')}
                  className={`mac-segment ${viewMode === 'list' ? 'mac-segment-active' : ''}`}
                  aria-pressed={viewMode === 'list'}
                  aria-label="List"
                >
                  <List className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          <div className="mt-4 text-sm text-muted-foreground">
            {t('products.results', { count: filteredAndSortedHerbs.length })}
          </div>
        </div>
      </div>

      <div className="py-8">
        <div className="container mx-auto px-4">
          {viewMode === 'grid' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredAndSortedHerbs.map((herb) => {
                const herbName = getHerbName(herb);

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
                        <button
                          type="button"
                          className="w-10 h-10 mac-panel flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
                          aria-label={t('addToCart')}
                        >
                          <Heart className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-xs text-muted-foreground bg-secondary px-2 py-1 rounded-md">
                          {catLabel(herb.category)}
                        </span>
                        <div className="flex items-center gap-1 shrink-0">
                          <Star className="w-4 h-4 fill-accent text-accent" />
                          <span className="text-sm font-medium">{herb.rating}</span>
                          <span className="text-xs text-muted-foreground">({herb.reviews})</span>
                        </div>
                      </div>

                      <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                        {herbName}
                      </h3>

                      <button
                        type="button"
                        className="w-full bg-secondary hover:bg-primary hover:text-primary-foreground text-foreground py-2.5 rounded-[10px] transition-all duration-300 font-medium"
                      >
                        {t('viewDetails')}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="space-y-4">
              {filteredAndSortedHerbs.map((herb) => {
                const herbName = getHerbName(herb);
                const herbDescription = getHerbDescription(herb);

                return (
                  <div
                    key={herb.id}
                    className="group cursor-pointer mac-panel p-6 hover:shadow-lg transition-shadow duration-300"
                    onClick={() => handleHerbClick(herb)}
                  >
                    <div className="flex items-center gap-6">
                      <img
                        src={herb.image}
                        alt={herbName}
                        className="w-20 h-20 rounded-[10px] object-cover shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                          <div className="min-w-0">
                            <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                              {herbName}
                            </h3>
                            <p className="text-muted-foreground mt-1 line-clamp-2">{herbDescription}</p>
                            <div className="flex flex-wrap items-center gap-3 md:gap-4 mt-2 text-sm text-muted-foreground">
                              <span className="bg-secondary px-2 py-1 rounded-md">{catLabel(herb.category)}</span>
                              <div className="flex items-center gap-1">
                                <Star className="w-4 h-4 fill-accent text-accent" />
                                <span>{herb.rating}</span>
                                <span>({herb.reviews})</span>
                              </div>
                              <span>{herb.weight}</span>
                            </div>
                          </div>
                          <div className="text-start sm:text-end shrink-0">
                            {herb.badge && (
                              <span className="inline-block px-2 py-1 bg-accent text-accent-foreground text-xs rounded-md">
                                {herb.badge}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {filteredAndSortedHerbs.length === 0 && (
            <div className="text-center py-16 mac-panel max-w-lg mx-auto p-10">
              <div className="text-6xl mb-4" aria-hidden>
                🔍
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">{t('products.noResultsTitle')}</h3>
              <p className="text-muted-foreground">{t('products.noResultsHint')}</p>
            </div>
          )}
        </div>
      </div>

      <HerbModal herb={selectedHerb} isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default Products;
