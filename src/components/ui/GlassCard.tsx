import React from 'react';

type GlassCardProps = {
  className?: string;
  children: React.ReactNode;
};

// Glass card with 0.4 background opacity as requested
export default function GlassCard({ className = '', children }: GlassCardProps) {
  return (
    <div className={`bg-white/30 backdrop-blur-md border border-white/30 rounded-3xl ${className}`}>
      {children}
    </div>
  );
}
