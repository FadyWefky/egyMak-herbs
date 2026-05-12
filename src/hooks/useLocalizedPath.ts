import { useParams } from 'react-router-dom';
import { useLanguage } from '../contexts/useLanguage';
import { isSupportedLocale, withLocalePrefix } from '../utils/localePath';

/** Build paths like `/en/about` from a path without locale, e.g. `/about` or `/products`. */
export function useLocalizedPath() {
  const { lang } = useParams<{ lang: string }>();
  const { language } = useLanguage();
  const active = lang && isSupportedLocale(lang) ? lang : language;

  return (path: string = '/') => {
    const normalized = path.startsWith('/') ? path : `/${path}`;
    return withLocalePrefix(active, normalized);
  };
}
