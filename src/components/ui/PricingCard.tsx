import { pricingStyles } from '@/styles/section-styles';
import type { PricingPlan } from '@/constants/pricing-plans';

interface PricingCardProps {
  plan: PricingPlan;
  isPopular?: boolean;
}

export default function PricingCard({ plan, isPopular = false }: PricingCardProps) {
  return (
    <div style={pricingStyles.card}>
      {isPopular && (
        <div style={{
          position: 'absolute',
          top: '-10px',
          left: '50%',
          transform: 'translateX(-50%)',
          background: 'white',
          color: 'black',
          padding: '4px 16px',
          borderRadius: '12px',
          fontSize: '14px',
          fontWeight: 600
        }}>
          Популярный
        </div>
      )}
      
      <h3 style={pricingStyles.planName}>
        {plan.name}
      </h3>
      
      <p style={pricingStyles.planDescription}>
        {plan.description}
      </p>
      
      <div style={{ marginBottom: '24px' }}>
        <span style={pricingStyles.price}>
          {plan.price}
        </span>
        {plan.period && (
          <span style={pricingStyles.period}>
            {plan.period}
          </span>
        )}
      </div>
      
      <ul style={pricingStyles.featureList}>
        {plan.features.map((feature, index) => (
          <li key={index} style={pricingStyles.feature}>
            <span style={{
              position: 'absolute',
              left: '0',
              color: 'white'
            }}>
              ✓
            </span>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}