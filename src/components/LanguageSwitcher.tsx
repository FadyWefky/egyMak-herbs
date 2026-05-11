import React from 'react';
import { useLanguage } from '../contexts/useLanguage';
import { Globe } from 'lucide-react';

const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'ar', name: 'العربية', flag: '🇸🇦' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
  ] as const;

  return (
    <div className="inline-flex items-center gap-2 rounded-[10px] border border-border/60 bg-muted/35 px-1 py-1 backdrop-blur-sm">
      <Globe className="w-3.5 h-3.5 text-muted-foreground shrink-0 ms-1" aria-hidden />
      <div className="mac-segmented border-0 bg-transparent p-0 gap-0.5" role="group" aria-label="Language">
        {languages.map((lang) => (
          <button
            key={lang.code}
            type="button"
            onClick={() => setLanguage(lang.code)}
            className={`mac-segment px-2 py-1 min-w-[2rem] ${
              language === lang.code ? 'mac-segment-active' : 'hover:text-foreground'
            }`}
            title={lang.name}
            aria-pressed={language === lang.code}
            aria-label={lang.name}
          >
            <span className="text-base leading-none" aria-hidden>
              {lang.flag}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default LanguageSwitcher;
