"use client";

import React from 'react';

type ButtonProps = {
  label?: string;
  labelKey?: string; // i18n key; if provided takes precedence over label
  color?: string; // solid background color; if provided, no transparency
  className?: string;
  onClick?: () => void;
};

import { t } from "@/lib/i18n";
import { useLocale } from "@/context/LocaleContext";
import { COLORS } from "@/constants/colors";

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

  const buttonStyle: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    whiteSpace: 'nowrap',
    lineHeight: 1,
    borderRadius: '16px',
    fontSize: '16px',
    fontWeight: 500,
    backdropFilter: 'blur(12px)',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: hasColor ? borderSemi : 'rgba(255, 255, 255, 0.3)',
    outline: 'none',
    transition: 'all 0.3s ease',
    background: hasColor ? bgSemi : 'transparent',
    color: hasColor ? 'white' : 'white',
    cursor: 'pointer',
    ...baseStyle
  };

  const [isHovered, setIsHovered] = React.useState(false);
  const [isFocused, setIsFocused] = React.useState(false);

  const hoverStyle: React.CSSProperties = (isHovered || isFocused) ? {
    background: hasColor ? bgHover : 'rgba(255, 255, 255, 0.8)',
    borderColor: hasColor ? borderHover : 'white',
    color: hasColor ? COLORS.graphite : '#111315'
  } : {};

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={finalLabel}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      style={{
        ...buttonStyle,
        ...hoverStyle
      }}
    >
      {finalLabel}
    </button>
  );
}
