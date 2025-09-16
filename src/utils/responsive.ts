/**
 * Responsive utilities for mobile-first design
 */

export const BREAKPOINTS = {
  mobile: 0,
  tablet: 768,
  desktop: 1024,
  large: 1280
} as const;

export type BreakpointKey = keyof typeof BREAKPOINTS;

/**
 * Media queries for different screen sizes
 */
export const mediaQueries = {
  mobile: `@media (max-width: ${BREAKPOINTS.tablet - 1}px)`,
  tablet: `@media (min-width: ${BREAKPOINTS.tablet}px) and (max-width: ${BREAKPOINTS.desktop - 1}px)`,
  desktop: `@media (min-width: ${BREAKPOINTS.desktop}px)`,
  large: `@media (min-width: ${BREAKPOINTS.large}px)`
} as const;

/**
 * Responsive values utility
 */
export function responsive<T>(values: {
  mobile: T;
  tablet?: T;
  desktop?: T;
  large?: T;
}): T {
  // В React это будет определяться через window.innerWidth или CSS
  // Для статических стилей возвращаем mobile значение
  return values.mobile;
}

/**
 * Check if current screen size matches breakpoint
 */
export function useMediaQuery(query: string): boolean {
  if (typeof window === 'undefined') return false;
  
  return window.matchMedia(query).matches;
}

/**
 * Get responsive CSS for different screen sizes
 */
export function getResponsiveCSS(styles: {
  mobile: React.CSSProperties;
  tablet?: React.CSSProperties;
  desktop?: React.CSSProperties;
  large?: React.CSSProperties;
}): React.CSSProperties {
  // Базовые мобильные стили
  return styles.mobile;
}