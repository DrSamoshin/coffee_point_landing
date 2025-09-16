"use client";

import Section from '@/components/ui/Section';
import { t } from '@/lib/i18n';
import { useLocale } from '@/context/LocaleContext';

export default function HeroSection() {
  const { locale } = useLocale();
  
  return (
    <Section 
      title={
        <div style={{ textAlign: 'center' }}>
          <img 
            src="/CP_Stamp.png" 
            alt="Barista Boss Logo" 
            style={{ 
              width: 'clamp(80px, 15vw, 120px)', // 80px-120px
              height: 'clamp(80px, 15vw, 120px)', 
              display: 'block',
              margin: '0 auto'
            }} 
          />
          {t('hero.title', locale)}
        </div>
      }
      subtitle={t('hero.subtitle', locale)}
    >
      <div style={{ 
        marginTop: 'clamp(20px, 5vw, 32px)',
        maxWidth: 'clamp(300px, 80vw, 600px)', // Адаптивная ширина
        margin: 'clamp(20px, 5vw, 32px) auto 0 auto'
      }}>
        <p style={{
          color: 'rgba(255, 255, 255, 0.8)',
          fontSize: 'clamp(16px, 3vw, 20px)', // 16px-20px
          lineHeight: '1.6',
          textAlign: 'center'
        }}>
          {t('hero.description', locale)}
        </p>
      </div>
    </Section>
  );
}