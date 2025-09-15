import { DESIGN_TOKENS } from '@/constants/design-tokens';

export const sectionStyles = {
  title: {
    fontSize: '3.75rem',
    fontWeight: 900,
    color: 'white',
    letterSpacing: '-0.025em',
    marginBottom: '20px'
  },
  subtitle: {
    color: 'rgba(255, 255, 255, 0.8)',
    fontSize: '1.625rem',
    marginBottom: '30px'
  },
  description: {
    color: 'rgba(255, 255, 255, 0.8)',
    fontSize: '20px',
    lineHeight: '1.6',
    textAlign: 'center' as const
  },
  container: {
    marginTop: '40px',
    display: 'flex',
    justifyContent: 'center' as const,
    width: '100%'
  }
} as const;

export const pricingStyles = {
  card: {
    background: 'transparent',
    border: '2px solid rgba(255, 255, 255, 0.4)',
    borderRadius: '24px',
    padding: '32px',
    textAlign: 'center' as const,
    position: 'relative' as const
  },
  planName: {
    color: 'white',
    fontSize: '24px',
    fontWeight: 700,
    marginBottom: '8px'
  },
  planDescription: {
    color: 'rgba(255, 255, 255, 0.7)',
    fontSize: '17px',
    marginBottom: '16px'
  },
  price: {
    color: 'white',
    fontSize: '36px',
    fontWeight: 900
  },
  period: {
    color: 'rgba(255, 255, 255, 0.7)',
    fontSize: '17px',
    marginLeft: '8px'
  },
  featureList: {
    listStyle: 'none' as const,
    padding: 0,
    margin: 0,
    textAlign: 'left' as const
  },
  feature: {
    color: 'rgba(255, 255, 255, 0.9)',
    fontSize: '19px',
    lineHeight: '1.6',
    marginBottom: '12px',
    paddingLeft: '20px',
    position: 'relative' as const
  }
} as const;