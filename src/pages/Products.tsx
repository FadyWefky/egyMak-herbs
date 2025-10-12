import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Search, Filter, Grid, List, Star, Eye, Heart, ShoppingCart } from 'lucide-react';
import { herbsData, Herb } from '../data/herbs';
import { useLanguage } from '../contexts/useLanguage';
import HerbModal from '../components/HerbModal';

const Products: React.FC = () => {
  const { language } = useLanguage();
  const navigate = useNavigate();
  const [selectedHerb, setSelectedHerb] = useState<Herb | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('name');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const categories = [
    { value: 'all', label: language === 'ar' ? 'الكل' : 'All' },
    { value: 'culinary', label: language === 'ar' ? 'الطهوية' : 'Culinary' },
    { value: 'medicinal', label: language === 'ar' ? 'الطبية' : 'Medicinal' },
    { value: 'aromatic', label: language === 'ar' ? 'العطرية' : 'Aromatic' },
    { value: 'tea', label: language === 'ar' ? 'الشاي' : 'Tea' }
  ];

  const sortOptions = [
    { value: 'name', label: language === 'ar' ? 'الاسم' : 'Name' },
    { value: 'price-low', label: language === 'ar' ? 'السعر: منخفض إلى عالي' : 'Price: Low to High' },
    { value: 'price-high', label: language === 'ar' ? 'السعر: عالي إلى منخفض' : 'Price: High to Low' },
    { value: 'rating', label: language === 'ar' ? 'التقييم' : 'Rating' }
  ];

  const filteredAndSortedHerbs = useMemo(() => {
    let filtered = herbsData.filter(herb => {
      const matchesSearch = language === 'ar' 
        ? herb.nameAr.toLowerCase().includes(searchTerm.toLowerCase())
        : herb.name.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesCategory = selectedCategory === 'all' || herb.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });

    // Sort herbs
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'name':
          return language === 'ar' 
            ? a.nameAr.localeCompare(b.nameAr)
            : a.name.localeCompare(b.name);
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'rating':
          return b.rating - a.rating;
        default:
          return 0;
      }
    });

    return filtered;
  }, [searchTerm, selectedCategory, sortBy, language]);

  const handleHerbClick = (herb: Herb) => {
    setSelectedHerb(herb);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedHerb(null);
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
            {language === 'ar' ? 'جميع المنتجات' : 'All Products'}
          </h1>
          <p className="text-xl text-primary-foreground/80 max-w-2xl">
            {language === 'ar' 
              ? 'اكتشف مجموعتنا الكاملة من الأعشاب الطبيعية عالية الجودة'
              : 'Discover our complete collection of premium natural herbs'
            }
          </p>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="py-8 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder={language === 'ar' ? 'البحث عن الأعشاب...' : 'Search herbs...'}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-4 items-center">
              {/* Category Filter */}
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              >
                {categories.map(category => (
                  <option key={category.value} value={category.value}>
                    {category.label}
                  </option>
                ))}
              </select>

              {/* Sort */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              >
                {sortOptions.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>

              {/* View Mode */}
              <div className="flex bg-background border border-border rounded-lg p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded ${viewMode === 'grid' ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:text-foreground'}`}
                >
                  <Grid className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded ${viewMode === 'list' ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:text-foreground'}`}
                >
                  <List className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Results Count */}
          <div className="mt-4 text-sm text-muted-foreground">
            {filteredAndSortedHerbs.length} {language === 'ar' ? 'منتج' : 'products'} found
          </div>
        </div>
      </div>

      {/* Products Grid/List */}
      <div className="py-8">
        <div className="container mx-auto px-4">
          {viewMode === 'grid' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredAndSortedHerbs.map((herb) => {
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
                        <button className="w-10 h-10 bg-card rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors duration-200">
                          <Heart className="w-4 h-4" />
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
                          <Star className="w-4 h-4 fill-accent text-accent" />
                          <span className="text-sm font-medium">{herb.rating}</span>
                          <span className="text-xs text-muted-foreground">({herb.reviews})</span>
                        </div>
                      </div>

                      <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                        {herbName}
                      </h3>


                      <button className="w-full bg-secondary hover:bg-primary hover:text-primary-foreground text-foreground py-2 rounded-lg transition-all duration-300 font-medium">
                        {language === 'ar' ? 'عرض التفاصيل' : 'View Details'}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="space-y-4">
              {filteredAndSortedHerbs.map((herb) => {
                const herbName = language === 'ar' ? herb.nameAr : herb.name;
                const herbDescription = language === 'ar' ? herb.descriptionAr : herb.description;
                
                return (
                  <div
                    key={herb.id}
                    className="group cursor-pointer bg-card rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
                    onClick={() => handleHerbClick(herb)}
                  >
                    <div className="flex items-center space-x-6">
                      <img
                        src={herb.image}
                        alt={herbName}
                        className="w-20 h-20 rounded-lg object-cover"
                      />
                      <div className="flex-1">
                        <div className="flex items-start justify-between">
                          <div>
                            <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                              {herbName}
                            </h3>
                            <p className="text-muted-foreground mt-1 line-clamp-2">
                              {herbDescription}
                            </p>
                            <div className="flex items-center space-x-4 mt-2 text-sm text-muted-foreground">
                              <span className="bg-secondary px-2 py-1 rounded">{herb.category}</span>
                              <div className="flex items-center space-x-1">
                                <Star className="w-4 h-4 fill-accent text-accent" />
                                <span>{herb.rating}</span>
                                <span>({herb.reviews})</span>
                              </div>
                              <span>{herb.weight}</span>
                            </div>
                          </div>
                          <div className="text-right">
                            {herb.badge && (
                              <span className="inline-block px-2 py-1 bg-accent text-accent-foreground text-xs rounded">
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
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {language === 'ar' ? 'لم يتم العثور على منتجات' : 'No products found'}
              </h3>
              <p className="text-muted-foreground">
                {language === 'ar' 
                  ? 'جرب البحث بكلمات مختلفة أو تصفح الفئات الأخرى'
                  : 'Try searching with different keywords or browse other categories'
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

export default Products;
