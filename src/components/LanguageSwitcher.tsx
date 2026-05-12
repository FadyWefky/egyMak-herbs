import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/useLanguage';
import { stripLangPrefix, withLocalePrefix } from '../utils/localePath';
import { Globe } from 'lucide-react';

export type LanguageSwitcherVariant = 'default' | 'onHero';

type LanguageSwitcherProps = {
  variant?: LanguageSwitcherVariant;
};

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ variant = 'default' }) => {
  const { language, setLanguage } = useLanguage();
  const navigate = useNavigate();
  const location = useLocation();

  const languages = [
    { code: 'en' as const, name: 'English', short: 'EN' },
    { code: 'ar' as const, name: 'العربية', short: 'AR' },
    { code: 'fr' as const, name: 'Français', short: 'FR' },
  ];

  const isHero = variant === 'onHero';

  const switchTo = (code: string) => {
    const rest = stripLangPrefix(location.pathname);
    const suffix = rest === '/' ? '/' : rest;
    navigate(withLocalePrefix(code, suffix));
    setLanguage(code);
  };

  return (
    <div
      className={
        isHero
          ? 'inline-flex items-center gap-2 rounded-2xl border border-slate-900/12 bg-white/95 px-2 py-1.5 shadow-[0_10px_40px_rgba(0,0,0,0.18)] backdrop-blur-md ring-1 ring-white/70'
          : 'inline-flex items-center gap-2 rounded-[10px] border border-border/60 bg-muted/35 px-1 py-1 backdrop-blur-sm'
      }
    >
      <Globe
        className={`ms-1 h-3.5 w-3.5 shrink-0 ${isHero ? 'text-primary' : 'text-muted-foreground'}`}
        aria-hidden
      />
      <div className="mac-segmented border-0 bg-transparent p-0 gap-0.5" role="group" aria-label="Language">
        {languages.map((lang) => {
          const active = language === lang.code;
          return (
            <button
              key={lang.code}
              type="button"
              onClick={() => switchTo(lang.code)}
              className={`mac-segment min-w-[2.25rem] rounded-lg px-2 py-1 font-semibold transition-all duration-300 ease-out ${
                active
                  ? isHero
                    ? 'bg-primary text-primary-foreground shadow-md ring-1 ring-primary/25'
                    : 'mac-segment-active'
                  : isHero
                    ? 'text-slate-700 hover:bg-slate-100/90'
                    : 'text-muted-foreground hover:text-foreground'
              }`}
              title={lang.name}
              aria-pressed={active}
              aria-label={lang.name}
            >
              <span className="text-[11px] leading-none tracking-tight sm:text-xs" aria-hidden>
                {lang.short}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default LanguageSwitcher;
