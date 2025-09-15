"use client";

type ButtonProps = {
  label?: string;
  labelKey?: string; // i18n key; if provided takes precedence over label
  color?: string; // solid background color; if provided, no transparency
  className?: string;
  onClick?: () => void;
};

import { t } from "@/lib/i18n";
import { useLocale } from "@/context/LocaleContext";

// Convert hex (#RRGGBB) to rgba string with given alpha
const hexToRgba = (hex: string, alpha: number) => {
  const m = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (!m) return null;
  const r = parseInt(m[1], 16);
  const g = parseInt(m[2], 16);
  const b = parseInt(m[3], 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

export default function Button({ label, labelKey, color, className = "", onClick }: ButtonProps) {
  const { locale } = useLocale();
  const finalLabel = labelKey ? t(labelKey, locale) : label ?? "";
  const hasColor = Boolean(color);
  const bgSolid = hasColor ? (color as string) : 'transparent';
  const bgSemi = hasColor ? (hexToRgba(color as string, 0.4) || bgSolid) : 'transparent';
  const bgHover = 'rgba(255,255,255,0.8)';
  const borderSemi = hasColor ? (hexToRgba(color as string, 0.4) || bgSolid) : 'rgba(255,255,255,0.30)';
  const borderHover = 'white';
  const baseStyle: React.CSSProperties = {
    padding: '14px 24px',
  } as React.CSSProperties;

  return (
    <>
      <button
        type="button"
        onClick={onClick}
        aria-label={finalLabel}
        className={`inline-flex items-center justify-center whitespace-nowrap leading-none rounded-2xl text-base md:text-lg font-medium backdrop-blur-md border focus-visible:outline-none transition-colors ${hasColor ? 'colored text-gray-900' : 'bg-transparent text-white border-white/30 hover:bg-white/80 hover:text-gray-900 hover:border-white focus-visible:bg-white/80 focus-visible:text-gray-900 focus-visible:border-white'} ${className}`}
        style={{
          ...baseStyle,
          // CSS vars for colored variant
          ['--btn-bg' as any]: bgSemi,
          ['--btn-bg-hover' as any]: bgHover,
          ['--btn-bd' as any]: borderSemi,
          ['--btn-bd-hover' as any]: borderHover,
        }}
      >
        {finalLabel}
      </button>

      {/* Hover styles for colored variant */}
      <style jsx>{`
        button.colored {
          background: var(--btn-bg);
          border-color: var(--btn-bd);
          color: #111315;
        }
        button.colored:hover, button.colored:focus-visible {
          background: var(--btn-bg-hover);
          border-color: var(--btn-bd-hover);
        }
      `}</style>
    </>
  );
}
