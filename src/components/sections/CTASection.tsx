"use client";

import Section from '@/components/ui/Section';
import Button from '@/components/ui/Button';
import { t } from '@/lib/i18n';
import { useLocale } from '@/context/LocaleContext';

export default function CTASection() {
  const { locale } = useLocale();
  
  return (
    <Section 
      title={t('cta.title', locale)}
      subtitle={t('cta.subtitle', locale)}
    >
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        marginTop: '48px'
      }}>
        <Button labelKey="cta.buttons.primary" />
      </div>
    </Section>
  );
}