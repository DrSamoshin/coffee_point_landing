import { CONTENT, DEFAULT_LOCALE, type Locale, type Content } from '@/constants/locales';

export function getContent(locale: Locale = DEFAULT_LOCALE): Content {
  return CONTENT[locale] || CONTENT[DEFAULT_LOCALE];
}

export function isValidLocale(locale: string): locale is Locale {
  return locale === 'en' || locale === 'ru';
}

// Simple dot-path translator using CONTENT map; defaults to English
export function t(path: string, locale: Locale = DEFAULT_LOCALE): string {
  const dict = CONTENT[locale] || CONTENT[DEFAULT_LOCALE];
  const parts = path.split('.');
  let node: any = dict;
  for (const p of parts) {
    if (node && typeof node === 'object' && p in node) node = node[p];
    else return path; // fallback to key
  }
  return typeof node === 'string' ? node : path;
}
