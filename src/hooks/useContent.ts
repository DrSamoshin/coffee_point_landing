import { useLocale } from '@/context/LocaleContext';
import { CONTENT } from '@/constants/locales';
import type { Content } from '@/constants/locales';

/**
 * Hook для получения локализованного контента
 * Возвращает весь контент для текущего языка
 */
export function useContent(): Content {
  const { locale } = useLocale();
  return CONTENT[locale] as Content;
}

/**
 * Hook для получения переводов с fallback
 */
export function useTranslation() {
  const content = useContent();
  
  return {
    content,
    t: (path: string) => {
      const keys = path.split('.');
      let value: unknown = content;
      
      for (const key of keys) {
        if (value && typeof value === 'object' && value !== null && key in value) {
          value = (value as Record<string, unknown>)[key];
        } else {
          return path; // fallback to key
        }
      }
      
      return typeof value === 'string' ? value : path;
    }
  };
}