export const SUPPORTED_LOCALES = ['en', 'ar', 'fr'] as const;
export type AppLocale = (typeof SUPPORTED_LOCALES)[number];

export function isSupportedLocale(s: string): s is AppLocale {
  return (SUPPORTED_LOCALES as readonly string[]).includes(s);
}

/** Path after locale segment, e.g. `/en/about` → `/about`, `/en` → `/` */
export function stripLangPrefix(pathname: string): string {
  const m = pathname.match(/^\/(en|ar|fr)(\/.*)?$/);
  if (!m) return pathname;
  return m[2] || '/';
}

/** `/en` + `/about` → `/en/about`; `/en` + `/` → `/en` */
export function withLocalePrefix(lang: string, path: string): string {
  const normalized = path.startsWith('/') ? path : `/${path}`;
  if (normalized === '/') return `/${lang}`;
  return `/${lang}${normalized}`;
}

export function localeFromPathname(pathname: string): AppLocale | null {
  const m = pathname.match(/^\/(en|ar|fr)(?:\/|$)/);
  if (m && isSupportedLocale(m[1])) return m[1];
  return null;
}
