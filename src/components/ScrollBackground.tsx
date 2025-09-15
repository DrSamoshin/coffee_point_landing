"use client";

import { useEffect, useRef } from "react";
import { BACKGROUND_GRADIENT } from "@/constants/backgrounds";

type RGB = { r: number; g: number; b: number };

const hexToRgb = (hex: string): RGB => {
  const m = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)!;
  return {
    r: parseInt(m[1], 16),
    g: parseInt(m[2], 16),
    b: parseInt(m[3], 16),
  };
};

const rgbToString = (c: RGB) => `rgba(${c.r}, ${c.g}, ${c.b}, 1)`;
const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
const lerpColor = (a: RGB, b: RGB, t: number): RGB => ({
  r: Math.round(lerp(a.r, b.r, t)),
  g: Math.round(lerp(a.g, b.g, t)),
  b: Math.round(lerp(a.b, b.b, t)),
});

const basePalette = BACKGROUND_GRADIENT.colors.map(hexToRgb);

const buildGradient = (colors: RGB[]) => {
  const n = colors.length;
  const range = BACKGROUND_GRADIENT.endOffset - BACKGROUND_GRADIENT.startOffset;
  const stops = colors.map((c, i) => {
    const pos = BACKGROUND_GRADIENT.startOffset + (i / (n - 1)) * range;
    return `${rgbToString(c)} ${pos.toFixed(2)}%`;
  });
  return `linear-gradient(${BACKGROUND_GRADIENT.angleDeg}deg, ${stops.join(", ")})`;
};

export const ScrollBackground = ({ children }: { children: React.ReactNode }) => {
  const bgRef = useRef<HTMLDivElement | null>(null);
  const reducedMotion = useRef(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      reducedMotion.current = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false;
    }

    const el = bgRef.current;
    if (!el) return;

    // Reduced motion -> static gradient
    if (reducedMotion.current) {
      el.style.background = buildGradient(basePalette);
      return;
    }

    let raf = 0;
    const t0 = performance.now();

    const animate = (now: number) => {
      const n = basePalette.length;
      const step = BACKGROUND_GRADIENT.stepMs;
      const totalShift = (now - t0) / step; // continuous 0..inf
      // Keep shift bounded within [0, n)
      const boundedShift = totalShift % n; // 0..n
      const k = Math.floor(boundedShift);  // integer shift 0..n-1
      const local = boundedShift - k;      // 0..1 within current step

      // Smoothstep easing for the local blend (continuous derivative at ends)
      const t = local * local * (3 - 2 * local);

      // Each stop j blends from base[j - k] to base[j - k - 1] (left neighbor), indices wrap
      const mixed = basePalette.map((_, j) => {
        const a = basePalette[(j - k + n) % n];
        const b = basePalette[(j - k - 1 + n) % n];
        return lerpColor(a, b, t);
      });

      el.style.background = buildGradient(mixed);

      raf = requestAnimationFrame(animate);
    };

    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div className="min-h-screen">
      <div ref={bgRef} className="fixed inset-0 -z-10 pointer-events-none" />
      <div className="relative z-10">{children}</div>
    </div>
  );
};
