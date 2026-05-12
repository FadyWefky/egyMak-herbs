import React, { createContext, useContext, useState, useEffect } from 'react';
import { en } from './lang.en';
import { ar } from './lang.ar';
import { fr } from './lang.fr';
import { updateDocumentLanguage } from '../utils/updateDocumentLanguage';
import { localeFromPathname } from '../utils/localePath';
import type { TestimonialItem } from './localeTypes';

type FaqItem = { question: string; answer: string };

interface LanguageContextType {
  language: string;
  setLanguage: (lang: string) => void;
  t: (key: string, vars?: Record<string, string | number>) => string;
  getTestimonialItems: () => TestimonialItem[];
  getFaqItems: () => FaqItem[];
  getLegal: (page: 'terms' | 'privacy' | 'cookies' | 'shipping' | 'returns' | 'support') => {
    pageTitle: string;
    sectionTitle: string;
    p1: string;
    p2: string;
    p3?: string;
  };
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
  const [language, setLanguageState] = useState(() => {
    if (typeof window !== 'undefined') {
      const fromUrl = localeFromPathname(window.location.pathname);
      if (fromUrl) return fromUrl;
      return localStorage.getItem('site_language') || 'en';
    }
    return 'en';
  });

  const setLanguage = (lang: string) => {
    setLanguageState(lang);
    if (typeof window !== 'undefined') {
      localStorage.setItem('site_language', lang);
      updateDocumentLanguage(lang);
    }
  };

  useEffect(() => {
    updateDocumentLanguage(language);
  }, [language]);

  const t = (key: string, vars?: Record<string, string | number>): string => {
    if (typeof key !== 'string') return '';
    const keyParts = key.split('.');
    let value: unknown = translations[language as keyof typeof translations];
    for (const k of keyParts) {
      if (value && typeof value === 'object' && k in value) {
        value = (value as Record<string, unknown>)[k];
      } else {
        return key;
      }
    }
    let out = typeof value === 'string' ? value : key;
    if (vars && typeof out === 'string') {
      for (const [vk, vv] of Object.entries(vars)) {
        out = out.replace(new RegExp(`\\{\\{${vk}\\}\\}`, 'g'), String(vv));
      }
    }
    return out;
  };

  const getTestimonialItems = (): TestimonialItem[] => {
    const tr = translations[language as keyof typeof translations] as typeof en;
    const items = tr.testimonials?.items;
    if (Array.isArray(items) && items.length > 0) return items;
    return en.testimonials.items;
  };

  const getFaqItems = (): FaqItem[] => {
    const tr = translations[language as keyof typeof translations] as typeof en;
    const items = tr.faq?.items;
    if (Array.isArray(items) && items.length > 0) return items as FaqItem[];
    return en.faq.items as FaqItem[];
  };

  const getLegal = (page: 'terms' | 'privacy' | 'cookies' | 'shipping' | 'returns' | 'support') => {
    const tr = translations[language as keyof typeof translations] as typeof en;
    const block = tr.legal?.[page];
    if (block) return block as { pageTitle: string; sectionTitle: string; p1: string; p2: string; p3?: string };
    return en.legal[page] as { pageTitle: string; sectionTitle: string; p1: string; p2: string; p3?: string };
  };

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
      getTestimonialItems,
      getFaqItems,
      getLegal,
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

