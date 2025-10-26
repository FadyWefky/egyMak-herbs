export const updateDocumentLanguage = (language: string) => {
  const htmlElement = document.documentElement;
  
  // Update lang attribute
  htmlElement.setAttribute('lang', language);
  
  // Update dir attribute for RTL languages
  if (language === 'ar') {
    htmlElement.setAttribute('dir', 'rtl');
  } else {
    htmlElement.setAttribute('dir', 'ltr');
  }
  
  // Update document title based on language
  const titles = {
    en: 'EGYMAK - Premium Egyptian Herbs | Natural Organic Herbs Online',
    ar: 'إيجماك - أعشاب مصرية فاخرة | أعشاب طبيعية وعضوية أونلاين',
    fr: 'EGYMAK - Herbes Égyptiennes Premium | Herbes Naturelles et Organiques en Ligne'
  };
  
  document.title = titles[language as keyof typeof titles] || titles.en;
};

export default updateDocumentLanguage;
