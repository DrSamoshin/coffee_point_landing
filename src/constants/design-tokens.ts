export const DESIGN_TOKENS = {
  colors: {
    primary: '#DCE7C9',      // AU LAIT - светлый фон
    secondary: '#2C3539',    // INKWELL - темный текст
    accent: '#A47B6B',       // CREME BRULEE - акценты
    white: '#FFFFFF',
    black: '#000000',
    gray: {
      50: '#F9FAFB',
      100: '#F3F4F6',
      200: '#E5E7EB',
      300: '#D1D5DB',
      400: '#9CA3AF',
      500: '#6B7280',
      600: '#4B5563',
      700: '#374151',
      800: '#1F2937',
      900: '#111827',
    },
    glass: {
      white: 'rgba(255, 255, 255, 0.1)',      // Полупрозрачный белый
      light: 'rgba(255, 255, 255, 0.15)',     // Светлые блоки
      medium: 'rgba(255, 255, 255, 0.2)',     // Средние блоки
      strong: 'rgba(255, 255, 255, 0.25)',    // Выделенные блоки
      dark: 'rgba(44, 53, 57, 0.1)',          // Темные блоки
      accent: 'rgba(164, 123, 107, 0.1)',     // Акцентные блоки
    }
  },
  spacing: {
    section: {
      mobile: '80px',      // Apple uses generous spacing
      tablet: '100px',
      desktop: '120px',
    },
    container: '1280px',   // Apple's wider container
    padding: {
      mobile: '16px',      // Apple's padding
      tablet: '40px',
      desktop: '80px',
    },
    hero: {
      mobile: '60px',      // Special spacing for hero sections
      tablet: '80px',
      desktop: '100px',
    }
  },
  typography: {
    fontFamily: {
      sans: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
      mono: ['SF Mono', 'Monaco', 'Inconsolata', 'Roboto Mono', 'monospace'],
    },
    fontSize: {
      xs: '0.75rem',       // 12px
      sm: '0.875rem',      // 14px  
      base: '1.0625rem',   // 17px (Apple's body text)
      lg: '1.1875rem',     // 19px
      xl: '1.3125rem',     // 21px
      '2xl': '1.75rem',    // 28px
      '3xl': '2.125rem',   // 34px
      '4xl': '2.5rem',     // 40px
      '5xl': '3.5rem',     // 56px (Apple's large headlines)
      '6xl': '4.5rem',     // 72px
      '7xl': '6rem',       // 96px
    },
    fontWeight: {
      light: '300',
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      black: '900',        // Apple uses heavy weights
    },
    lineHeight: {
      tight: '1.1',        // Apple's tight headlines
      snug: '1.2',         
      normal: '1.47',      // Apple's body line height
      relaxed: '1.6',
    }
  },
  borderRadius: {
    none: '0',
    sm: '0.375rem',       // Apple uses slightly larger radius
    md: '0.5rem',
    lg: '0.75rem',        
    xl: '1rem',           // Apple's card radius
    '2xl': '1.5rem',      // Apple's large components
    '3xl': '2rem',        // Hero elements
    full: '9999px',
  },
  shadows: {
    none: 'none',
    sm: '0 1px 3px rgba(0, 0, 0, 0.1)',
    md: '0 4px 12px rgba(0, 0, 0, 0.15)',  // Apple's subtle shadows
    lg: '0 8px 30px rgba(0, 0, 0, 0.12)',  // Apple's card shadows
    xl: '0 20px 40px rgba(0, 0, 0, 0.1)',  // Hero shadows
    '2xl': '0 40px 80px rgba(0, 0, 0, 0.08)', // Large element shadows
  },
  animation: {
    duration: {
      fast: '0.2s',
      normal: '0.3s',
      slow: '0.5s',
      slower: '0.8s',
    },
    easing: {
      ease: 'cubic-bezier(0.4, 0, 0.2, 1)',
      easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
      easeOut: 'cubic-bezier(0, 0, 0.2, 1)',
      easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
      bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
    }
  },
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },
  zIndex: {
    hide: -1,
    auto: 'auto',
    base: 0,
    docked: 10,
    dropdown: 1000,
    sticky: 1100,
    banner: 1200,
    overlay: 1300,
    modal: 1400,
    popover: 1500,
    skipLink: 1600,
    toast: 1700,
    tooltip: 1800,
  }
} as const;

export type DesignTokens = typeof DESIGN_TOKENS;