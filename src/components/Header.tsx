import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useLanguage } from '../contexts/useLanguage';
import LanguageSwitcher from './LanguageSwitcher';

const Header: React.FC = React.memo(() => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { t, language } = useLanguage();
  const navigate = useNavigate();
  const location = useLocation();
  const isHome = location.pathname === '/';
  const navOnHero = isHome && !isScrolled;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      // If we're not on home page, navigate to home first
      if (window.location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          const element = document.querySelector(href);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 100);
      } else {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    }
  };

  const navigationItems = [
    { key: 'home', href: '/' },
    { key: 'categories', href: '#categories' },
    { key: 'about', href: '/about' },
    { key: 'contact', href: '#contact' }
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'header-scrolled' 
          : 'header-transparent'
      }`}
      dir={language === 'ar' ? 'rtl' : 'ltr'}
    >
      <div className={`max-w-6xl mx-auto px-6 ${isScrolled ? '' : ''}`}>
        <div className="flex items-center justify-center h-16 md:h-[4.25rem] relative">
          {/* Logo - Centered */}
          <div className="absolute start-0 flex items-center gap-2 herb-scale-hover">
            <img 
              src="/logo.png" 
              alt={t('footer.logoAlt')}
              width={64}
              height={64}
              className="w-14 h-14 md:w-16 md:h-16 rounded-xl object-contain shadow-sm"
            />
          </div>

          {/* Desktop Navigation - Centered */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {navigationItems.map((item) => (
              item.href.startsWith('#') ? (
                <a
                  key={item.key}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`transition-colors duration-300 font-semibold relative group px-3 py-2 text-sm uppercase tracking-wide ${
                    navOnHero
                      ? 'text-primary-foreground/95 hover:text-accent'
                      : 'text-foreground hover:text-accent'
                  }`}
                >
                  {t(item.key)}
                  <span className="absolute bottom-0 start-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full" />
                </a>
              ) : (
                <Link
                  key={item.key}
                  to={item.href}
                  className={`transition-colors duration-300 font-semibold relative group px-3 py-2 text-sm uppercase tracking-wide ${
                    navOnHero
                      ? 'text-primary-foreground/95 hover:text-accent'
                      : 'text-foreground hover:text-accent'
                  }`}
                >
                  {t(item.key)}
                  <span className="absolute bottom-0 start-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full" />
                </Link>
              )
            ))}
          </nav>

          {/* Right side controls */}
          <div className="absolute end-0 flex items-center gap-3 md:gap-4">
            <div
              className={
                navOnHero
                  ? '[&_button]:bg-primary-foreground/12 [&_button]:hover:bg-primary-foreground/20 [&_button]:text-primary-foreground [&_button]:border [&_button]:border-primary-foreground/25'
                  : ''
              }
            >
              <LanguageSwitcher />
            </div>
            
            {/* Mobile menu button */}
            <button
              className={`md:hidden p-2 rounded-xl transition-colors duration-200 ${
                navOnHero ? 'hover:bg-primary-foreground/10 text-primary-foreground' : 'hover:bg-secondary text-foreground'
              }`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className={`md:hidden border-t border-border/60 bg-card/98 backdrop-blur-lg ${
            isScrolled ? 'rounded-b-2xl' : 'shadow-lg'
          }`}>
            <nav className="py-4 space-y-1">
              {navigationItems.map((item) => (
                item.href.startsWith('#') ? (
                  <a
                    key={item.key}
                    href={item.href}
                    onClick={(e) => {
                      handleNavClick(e, item.href);
                      setIsMenuOpen(false);
                    }}
                    className="block px-4 py-3 text-foreground hover:text-accent hover:bg-secondary/60 rounded-lg transition-colors duration-300 font-medium"
                  >
                    {t(item.key)}
                  </a>
                ) : (
                  <Link
                    key={item.key}
                    to={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="block px-4 py-3 text-foreground hover:text-accent hover:bg-secondary/60 rounded-lg transition-colors duration-300 font-medium"
                  >
                    {t(item.key)}
                  </Link>
                )
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
});

export default Header;