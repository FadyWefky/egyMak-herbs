import React, { createContext, useContext, useState } from 'react';
import { en } from './lang.en';
import { ar } from './lang.ar';
import { fr } from './lang.fr';

interface LanguageContextType {
  language: string;
  setLanguage: (lang: string) => void;
  t: (key: string) => string;
}
const translations = { en, ar, fr };


export const LanguageContext = createContext<LanguageContextType | undefined>(undefined);


export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Initialize language from localStorage or default to 'en'
  const [language, setLanguageState] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('site_language') || 'en';
    }
    return 'en';
  });

  // Persist language to localStorage
  const setLanguage = (lang: string) => {
    setLanguageState(lang);
    if (typeof window !== 'undefined') {
      localStorage.setItem('site_language', lang);
    }
  };

  // Support nested keys like 'getintouch.title'
  const t = (key: string): string => {
    if (typeof key !== 'string') return '';
    const keys = key.split('.');
    let value: unknown = translations[language as keyof typeof translations];
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = (value as Record<string, unknown>)[k];
      } else {
        return key;
      }
    }
    return typeof value === 'string' ? value : key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

