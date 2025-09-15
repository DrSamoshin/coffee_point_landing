import React from 'react';

type GlassCardProps = {
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
};

// Glass card with 0.4 background opacity as requested
export default function GlassCard({ className = '', style, children }: GlassCardProps) {
  const glassStyle: React.CSSProperties = {
    background: 'rgba(255, 255, 255, 0.2)',
    backdropFilter: 'blur(12px)',
    border: '1px solid rgba(255, 255, 255, 0.3)',
    borderRadius: '24px',
    ...style
  };

  return (
    <div style={glassStyle}>
      {children}
    </div>
  );
}
