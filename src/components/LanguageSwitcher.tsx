import React from 'react';
import { useLanguage } from '../contexts/useLanguage';
import { Globe } from 'lucide-react';

const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'ar', name: 'العربية', flag: '🇸🇦' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' }
  ];

  return (
    <div className="relative group">
      <button className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-secondary/50 hover:bg-secondary transition-all duration-300">
        <Globe className="w-4 h-4" />
        <span className="text-sm font-medium">
          {languages.find(lang => lang.code === language)?.flag}
        </span>
      </button>
      
      <div className="absolute top-full right-0 mt-2 bg-card border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
        {languages.map((lang) => (
          <button
            key={lang.code}
            onClick={() => setLanguage(lang.code)}
            className={`w-full px-4 py-2 text-left hover:bg-secondary transition-colors first:rounded-t-lg last:rounded-b-lg flex items-center space-x-3 ${
              language === lang.code ? 'bg-primary text-primary-foreground' : ''
            }`}
          >
            <span>{lang.flag}</span>
            <span className="text-sm">{lang.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default LanguageSwitcher;