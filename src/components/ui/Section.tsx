import GlassCard from '@/components/ui/GlassCard';
import { useEffect, useRef, useState } from 'react';

type SectionProps = {
  title: React.ReactNode;
  subtitle: string;
  children?: React.ReactNode;
};

export default function Section({ title, subtitle, children }: SectionProps) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [isOverflowing, setIsOverflowing] = useState(false);

  useEffect(() => {
    const checkOverflow = () => {
      if (contentRef.current) {
        const isOverflow = contentRef.current.scrollHeight > contentRef.current.clientHeight;
        setIsOverflowing(isOverflow);
      }
    };

    checkOverflow();
    window.addEventListener('resize', checkOverflow);
    
    return () => window.removeEventListener('resize', checkOverflow);
  }, [children]);

  return (
    <div style={{
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 'clamp(16px, 4vw, 48px)'
    }}>
      <GlassCard style={{
        width: 'calc(100vw - clamp(32px, 8vw, 96px))', // 2 * padding
        maxWidth: '112rem',
        height: 'calc(100vh - clamp(32px, 8vw, 96px))', // 2 * padding
        padding: '16px',
        textAlign: 'center',
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        overflow: 'hidden' // Скрываем переполнение на уровне карточки
      }}>
        <div 
          ref={contentRef}
          className="section-content"
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: isOverflowing ? 'flex-start' : 'center',
            alignItems: 'center',
            height: '100%',
            overflow: 'auto',
            padding: '20px 0'
          }}>
          <div style={{ 
            width: '100%', 
            margin: '0 auto',
            maxWidth: 'clamp(300px, 90vw, 1000px)',
            minHeight: 'min-content' // Минимальная высота по содержимому
          }}>
            <h2 style={{
              fontSize: 'clamp(2rem, 8vw, 3.75rem)',
              fontWeight: 900,
              color: 'white',
              letterSpacing: '-0.025em',
              marginBottom: 'clamp(32px, 6vw, 48px)',
              lineHeight: '1.1'
            }}>
              {title}
            </h2>
            
            <p style={{
              color: 'rgba(255, 255, 255, 0.8)',
              fontSize: 'clamp(1.125rem, 4vw, 1.625rem)',
              marginBottom: 'clamp(20px, 5vw, 30px)',
              lineHeight: '1.4'
            }}>
              {subtitle}
            </p>
            
            {children}
          </div>
        </div>
      </GlassCard>
    </div>
  );
}