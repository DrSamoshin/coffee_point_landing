"use client";

import Section from '@/components/ui/Section';
import PricingCard from '@/components/ui/PricingCard';
import { t } from '@/lib/i18n';
import { useLocale } from '@/context/LocaleContext';
import { PRICING_PLANS } from '@/constants/pricing-plans';

export default function PricingSection() {
  const { locale } = useLocale();
  const plans = PRICING_PLANS[locale];
  
  return (
    <Section 
      title={t('pricing.title', locale)}
      subtitle={t('pricing.subtitle', locale)}
    >
      <div style={{
        marginTop: '40px',
        display: 'flex',
        justifyContent: 'center',
        width: '100%'
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr',
          gap: '24px',
          maxWidth: '1000px',
          width: '100%'
        }}>
          {plans.map((plan, index) => (
            <PricingCard 
              key={index} 
              plan={plan} 
              isPopular={plan.popular} 
            />
          ))}
        </div>
      </div>
    </Section>
  );
}