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
              width: '120px', 
              height: '120px', 
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
        marginTop: '32px',
        maxWidth: '600px',
        margin: '32px auto 0 auto'
      }}>
        <p style={{
          color: 'rgba(255, 255, 255, 0.8)',
          fontSize: '20px',
          lineHeight: '1.6',
          textAlign: 'center'
        }}>
          {t('hero.description', locale)}
        </p>
      </div>
    </Section>
  );
}