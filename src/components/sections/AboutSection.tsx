"use client";

import Section from '@/components/ui/Section';
import { t } from '@/lib/i18n';
import { useLocale } from '@/context/LocaleContext';

export default function AboutSection() {
  const { locale } = useLocale();
  
  return (
    <Section 
      title={t('about.title', locale)}
      subtitle={t('about.subtitle', locale)}
    />
  );
}