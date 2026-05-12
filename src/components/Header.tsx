import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useLanguage } from '../contexts/useLanguage';
import LanguageSwitcher from './LanguageSwitcher';
import { useLocalizedPath } from '../hooks/useLocalizedPath';
import { stripLangPrefix } from '../utils/localePath';

const Header: React.FC = React.memo(() => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { t, language } = useLanguage();
  const navigate = useNavigate();
  const location = useLocation();
  const lp = useLocalizedPath();
  const pathRest = stripLangPrefix(location.pathname);
  const isHome = pathRest === '/' || pathRest === '';
  const navOnHero = isHome && !isScrolled;

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 48);
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      if (pathRest !== '/' && pathRest !== '') {
        navigate(lp('/'));
        setTimeout(() => {
          document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 120);
      } else {
        document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  const navigationItems: { key: string; href: string }[] = [
    { key: 'home', href: '/' },
    { key: 'categories', href: '#categories' },
    { key: 'about', href: '/about' },
    { key: 'sourcing', href: '/sourcing' },
    { key: 'contact', href: '#contact' },
  ];

  const linkClass = `rounded-lg px-2 py-2 text-xs font-semibold uppercase tracking-wide transition-colors duration-500 sm:px-2.5 lg:text-sm ${
    navOnHero ? 'text-primary-foreground hover:bg-white/10' : 'text-foreground hover:text-primary'
  }`;

  const logoCompact = isScrolled;

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-[background,box-shadow,backdrop-filter] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
        isScrolled ? 'header-scrolled' : 'header-transparent'
      }`}
      dir={language === 'ar' ? 'rtl' : 'ltr'}
    >
      <div className="mx-auto max-w-6xl min-w-0 px-3 sm:px-4 md:px-6">
        <div className="flex min-h-[3.75rem] items-center justify-between gap-2 py-2 md:h-[4.25rem] md:gap-4">
          <Link
            to={lp('/')}
            className={`flex shrink-0 items-center rounded-2xl p-0.5 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
              navOnHero
                ? 'bg-white/95 ring-2 ring-white/80 shadow-md hover:ring-primary/25'
                : 'bg-transparent shadow-none ring-0 hover:opacity-90'
            } ${logoCompact ? 'scale-95 md:scale-100' : 'scale-100'}`}
            aria-label={t('home')}
          >
            <img
              src="/logo.png"
              alt={t('footer.logoAlt')}
              width={72}
              height={72}
              className={`rounded-xl object-contain transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                logoCompact ? 'h-9 w-9 sm:h-10 sm:w-10 md:h-11 md:w-11' : 'h-10 w-10 sm:h-11 sm:w-11 md:h-[3.25rem] md:w-[3.25rem]'
              }`}
              decoding="async"
              fetchPriority="high"
            />
          </Link>

          <nav className="hidden min-w-0 flex-1 justify-center px-1 md:flex">
            <div className="flex max-w-full flex-wrap items-center justify-center gap-x-1 gap-y-1 lg:gap-x-2">
              {navigationItems.map((item) =>
                item.href.startsWith('#') ? (
                  <a key={item.key} href={item.href} onClick={(e) => handleNavClick(e, item.href)} className={linkClass}>
                    {t(item.key)}
                  </a>
                ) : (
                  <Link key={item.key} to={lp(item.href)} className={linkClass}>
                    {t(item.key)}
                  </Link>
                )
              )}
            </div>
          </nav>

          <div className="flex shrink-0 items-center gap-2 sm:gap-3">
            <div className={`${isScrolled ? 'hidden md:block' : ''}`}>
              <LanguageSwitcher variant={navOnHero ? 'onHero' : 'default'} />
            </div>

            <button
              type="button"
              className={`rounded-xl p-2.5 transition-colors duration-500 md:hidden ${
                navOnHero ? 'text-primary-foreground hover:bg-white/10' : 'text-foreground hover:bg-muted'
              }`}
              onClick={() => setIsMenuOpen((o) => !o)}
              aria-expanded={isMenuOpen}
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {isMenuOpen ? (
          <div
            className={`border-t border-border/60 bg-card/90 py-4 backdrop-blur-2xl md:hidden ${
              isScrolled ? 'rounded-b-2xl' : 'shadow-lg'
            }`}
          >
            <nav className="flex flex-col gap-1 px-2">
              {navigationItems.map((item) =>
                item.href.startsWith('#') ? (
                  <a
                    key={item.key}
                    href={item.href}
                    onClick={(e) => {
                      handleNavClick(e, item.href);
                      setIsMenuOpen(false);
                    }}
                    className="rounded-xl px-4 py-3 font-medium text-foreground transition-colors duration-300 hover:bg-secondary"
                  >
                    {t(item.key)}
                  </a>
                ) : (
                  <Link
                    key={item.key}
                    to={lp(item.href)}
                    onClick={() => setIsMenuOpen(false)}
                    className="rounded-xl px-4 py-3 font-medium text-foreground transition-colors duration-300 hover:bg-secondary"
                  >
                    {t(item.key)}
                  </Link>
                )
              )}
              <div className="mt-4 border-t border-border/60 pt-4">
                <p className="mb-2 px-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  {t('common.language')}
                </p>
                <div className="px-2">
                  <LanguageSwitcher variant="default" />
                </div>
              </div>
            </nav>
          </div>
        ) : null}
      </div>
    </header>
  );
});

export default Header;
