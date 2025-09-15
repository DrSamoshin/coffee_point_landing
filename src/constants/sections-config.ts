export interface SectionConfig {
  enabled: boolean;
  order: number;
  backgroundTheme?: 'light' | 'primary' | 'dark';
}

export interface SectionsConfig {
  hero: SectionConfig;
  about: SectionConfig;
  features: SectionConfig;
  pricing: SectionConfig;
  testimonials: SectionConfig;
  cta: SectionConfig;
  footer: SectionConfig;
}

export const DEFAULT_SECTIONS_CONFIG: SectionsConfig = {
  hero: {
    enabled: true,
    order: 1,
    backgroundTheme: 'light'
  },
  about: {
    enabled: true,
    order: 2,
    backgroundTheme: 'primary'
  },
  features: {
    enabled: true,
    order: 3,
    backgroundTheme: 'light'
  },
  pricing: {
    enabled: true,
    order: 4,
    backgroundTheme: 'primary'
  },
  testimonials: {
    enabled: true,
    order: 5,
    backgroundTheme: 'light'
  },
  cta: {
    enabled: true,
    order: 6,
    backgroundTheme: 'dark'
  },
  footer: {
    enabled: true,
    order: 7,
    backgroundTheme: 'dark'
  }
};

export const BACKGROUND_THEMES = {
  light: {
    from: '#F0F5E5',
    to: '#DCE7C9',
    text: '#2C3539'
  },
  primary: {
    from: '#DCE7C9',
    to: '#E8F0D1',
    text: '#2C3539'
  },
  dark: {
    from: '#2C3539',
    to: '#1F2427',
    text: '#FFFFFF'
  }
} as const;