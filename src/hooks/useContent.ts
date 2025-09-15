import { useLocale } from '@/context/LocaleContext';
import { CONTENT } from '@/constants/locales';
import type { Content } from '@/constants/locales';

/**
 * Hook для получения локализованного контента
 * Возвращает весь контент для текущего языка
 */
export function useContent(): Content {
  const { locale } = useLocale();
  return CONTENT[locale];
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
      let value: any = content;
      
      for (const key of keys) {
        value = value?.[key];
        if (value === undefined) return path; // fallback to key
      }
      
      return typeof value === 'string' ? value : path;
    }
  };
}