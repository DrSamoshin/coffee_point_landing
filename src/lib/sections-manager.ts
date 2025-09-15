import { SectionsConfig, DEFAULT_SECTIONS_CONFIG } from '@/constants/sections-config';

export class SectionsManager {
  private config: SectionsConfig;

  constructor(initialConfig: SectionsConfig = DEFAULT_SECTIONS_CONFIG) {
    this.config = { ...initialConfig };
  }

  // Enable/disable sections
  enableSection(sectionKey: keyof SectionsConfig): SectionsManager {
    this.config[sectionKey].enabled = true;
    return this;
  }

  disableSection(sectionKey: keyof SectionsConfig): SectionsManager {
    this.config[sectionKey].enabled = false;
    return this;
  }

  toggleSection(sectionKey: keyof SectionsConfig): SectionsManager {
    this.config[sectionKey].enabled = !this.config[sectionKey].enabled;
    return this;
  }

  // Reorder sections
  setOrder(sectionKey: keyof SectionsConfig, order: number): SectionsManager {
    this.config[sectionKey].order = order;
    return this;
  }

  // Theme management
  setTheme(sectionKey: keyof SectionsConfig, theme: 'light' | 'primary' | 'dark'): SectionsManager {
    this.config[sectionKey].backgroundTheme = theme;
    return this;
  }

  // Bulk operations
  enableOnly(sections: (keyof SectionsConfig)[]): SectionsManager {
    Object.keys(this.config).forEach(key => {
      const sectionKey = key as keyof SectionsConfig;
      this.config[sectionKey].enabled = sections.includes(sectionKey);
    });
    return this;
  }

  disableAll(): SectionsManager {
    Object.keys(this.config).forEach(key => {
      const sectionKey = key as keyof SectionsConfig;
      this.config[sectionKey].enabled = false;
    });
    return this;
  }

  enableAll(): SectionsManager {
    Object.keys(this.config).forEach(key => {
      const sectionKey = key as keyof SectionsConfig;
      this.config[sectionKey].enabled = true;
    });
    return this;
  }

  // Get final config
  getConfig(): SectionsConfig {
    return { ...this.config };
  }

  // Reset to default
  reset(): SectionsManager {
    this.config = { ...DEFAULT_SECTIONS_CONFIG };
    return this;
  }
}

// Quick presets
export const createMinimalLanding = () => 
  new SectionsManager()
    .enableOnly(['hero', 'features', 'cta', 'footer']);

export const createFullLanding = () => 
  new SectionsManager()
    .enableAll();

export const createPricingFocusedLanding = () => 
  new SectionsManager()
    .enableOnly(['hero', 'about', 'pricing', 'testimonials', 'cta', 'footer'])
    .setOrder('pricing', 3);

// Usage examples:
// const config = new SectionsManager()
//   .disableSection('testimonials')
//   .setTheme('hero', 'dark')
//   .getConfig();

// const minimalConfig = createMinimalLanding().getConfig();