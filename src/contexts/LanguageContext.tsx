import React, { createContext, useContext, useState, useEffect } from 'react';
import { en } from './lang.en';
import { ar } from './lang.ar';
import { fr } from './lang.fr';
import { updateDocumentLanguage } from '../utils/updateDocumentLanguage';

interface LanguageContextType {
  language: string;
  setLanguage: (lang: string) => void;
  t: (key: string) => string;
  getHerbName: (herb: any) => string;
  getHerbDescription: (herb: any) => string;
  getHerbBenefits: (herb: any) => string[];
  getHerbUses: (herb: any) => string[];
  getCategoryName: (category: any) => string;
  getCategoryDescription: (category: any) => string;
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
      updateDocumentLanguage(lang);
    }
  };

  // Update document language on mount
  useEffect(() => {
    updateDocumentLanguage(language);
  }, [language]);

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

  // Helper functions for herb data
  const getHerbName = (herb: any): string => {
    if (!herb) return '';
    switch (language) {
      case 'ar':
        return herb.nameAr || herb.name;
      case 'fr':
        return herb.nameFr || herb.name;
      default:
        return herb.name;
    }
  };

  const getHerbDescription = (herb: any): string => {
    if (!herb) return '';
    switch (language) {
      case 'ar':
        return herb.descriptionAr || herb.description;
      case 'fr':
        return herb.descriptionFr || herb.description;
      default:
        return herb.description;
    }
  };

  const getHerbBenefits = (herb: any): string[] => {
    if (!herb) return [];
    switch (language) {
      case 'ar':
        return herb.benefitsAr || herb.benefits;
      case 'fr':
        return herb.benefitsFr || herb.benefits;
      default:
        return herb.benefits;
    }
  };

  const getHerbUses = (herb: any): string[] => {
    if (!herb) return [];
    switch (language) {
      case 'ar':
        return herb.usesAr || herb.uses;
      case 'fr':
        return herb.usesFr || herb.uses;
      default:
        return herb.uses;
    }
  };

  const getCategoryName = (category: any): string => {
    if (!category) return '';
    switch (language) {
      case 'ar':
        return category.nameAr || category.name;
      case 'fr':
        return category.nameFr || category.name;
      default:
        return category.name;
    }
  };

  const getCategoryDescription = (category: any): string => {
    if (!category) return '';
    switch (language) {
      case 'ar':
        return category.descriptionAr || category.description;
      case 'fr':
        return category.descriptionFr || category.description;
      default:
        return category.description;
    }
  };

  return (
    <LanguageContext.Provider value={{ 
      language, 
      setLanguage, 
      t, 
      getHerbName, 
      getHerbDescription, 
      getHerbBenefits, 
      getHerbUses,
      getCategoryName,
      getCategoryDescription
    }}>
      {children}
    </LanguageContext.Provider>
  );
};

