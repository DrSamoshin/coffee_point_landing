export const COLORS = {
  // Global colors
  graphite: '#111315',
  orange: '#FF9500',
  green: '#34C759',

  // Gradient palette (from the reference image)
  gradient: {
    blue: '#4E86A3',
    lightBlue: '#8FB1C3',
    cream: '#F4E9DF',
    peach: '#EDC09A',
    taupe: '#C59888',
  },
} as const;

export const GRADIENT_PALETTE = [
  COLORS.gradient.blue,
  COLORS.gradient.lightBlue,
  COLORS.gradient.cream,
  COLORS.gradient.peach,
  COLORS.gradient.taupe,
] as const;

export type ColorKeys = keyof typeof COLORS;

// Helper: darken hex color by factor (0..1)
const darkenHex = (hex: string, factor = 0.8) => {
  const m = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (!m) return hex;
  const r = Math.max(0, Math.min(255, Math.round(parseInt(m[1], 16) * factor)));
  const g = Math.max(0, Math.min(255, Math.round(parseInt(m[2], 16) * factor)));
  const b = Math.max(0, Math.min(255, Math.round(parseInt(m[3], 16) * factor)));
  const toHex = (v: number) => v.toString(16).padStart(2, '0');
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
};

// 20% darker palette for the gradient
export const GRADIENT_PALETTE_DARK = GRADIENT_PALETTE.map((c) => darkenHex(c, 0.8));
