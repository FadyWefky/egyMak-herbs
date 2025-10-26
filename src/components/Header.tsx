import React, { useState, useEffect } from 'react';
import { ShoppingCart, Menu, X, Leaf } from 'lucide-react';
import { useLanguage } from '../contexts/useLanguage';
import LanguageSwitcher from './LanguageSwitcher';

const Header: React.FC = React.memo(() => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { t, language } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { key: 'home', href: '/' },
    { key: 'categories', href: '#categories' },
    { key: 'about', href: 'about' },
    { key: 'contact', href: '#contact' }
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg mx-8 md:mx-20 mt-4 rounded-b-2xl' 
          : 'bg-transparent'
      }`}
      dir={language === 'ar' ? 'rtl' : 'ltr'}
    >
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex items-center justify-center h-16 relative">
          {/* Logo - Centered */}
          <div className="absolute left-0 flex items-center space-x-2 herb-scale-hover">
            <img 
              src="/src/assets/logo.png" 
              alt="EGYMAK - Premium Egyptian Herbs Logo" 
              className="w-16 h-15  rounded-lg"
            />
          </div>

          {/* Desktop Navigation - Centered */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <a
                key={item.key}
                href={item.href}
                className="text-foreground hover:text-primary transition-colors duration-300 font-medium relative group px-3 py-2"
              >
                {t(item.key)}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Right side controls */}
          <div className="absolute right-0 flex items-center space-x-4">
            <LanguageSwitcher />
            
            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-secondary transition-colors duration-200"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className={`md:hidden border-t bg-card/95 backdrop-blur-md ${
            isScrolled ? 'rounded-b-2xl' : ''
          }`}>
            <nav className="py-4 space-y-2">
              {navigationItems.map((item) => (
                <a
                  key={item.key}
                  href={item.href}
                  className="block px-4 py-2 text-foreground hover:text-primary hover:bg-secondary/50 transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t(item.key)}
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
});

export default Header;