import { GRADIENT_PALETTE_DARK } from './colors';

export const BACKGROUND_GRADIENT = {
  // Colors: 20% darker version of the palette
  colors: GRADIENT_PALETTE_DARK,
  angleDeg: 120,       // Gradient angle
  startOffset: -20,    // Extend before viewport to avoid visible center
  endOffset: 120,      // Extend after viewport
  // Time to morph one step (color -> left neighbor)
  stepMs: 2400,
} as const;

export type BackgroundGradient = typeof BACKGROUND_GRADIENT;
