import { DESIGN_TOKENS } from '@/constants/design-tokens';

/**
 * Responsive section styles
 */
export const sectionStyles = {
  title: {
    fontSize: 'clamp(2rem, 8vw, 3.75rem)', // Адаптивный размер
    fontWeight: 900,
    color: 'white',
    letterSpacing: '-0.025em',
    marginBottom: 'clamp(16px, 4vw, 20px)',
    lineHeight: '1.1'
  },
  subtitle: {
    color: 'rgba(255, 255, 255, 0.8)',
    fontSize: 'clamp(1.125rem, 4vw, 1.625rem)', // 18px - 26px
    marginBottom: 'clamp(20px, 5vw, 30px)',
    lineHeight: '1.4'
  },
  description: {
    color: 'rgba(255, 255, 255, 0.8)',
    fontSize: 'clamp(16px, 3vw, 20px)', // 16px - 20px
    lineHeight: '1.6',
    textAlign: 'center' as const
  },
  container: {
    marginTop: 'clamp(24px, 6vw, 40px)',
    display: 'flex',
    justifyContent: 'center' as const,
    width: '100%'
  }
} as const;

export const pricingStyles = {
  card: {
    background: 'transparent',
    border: '2px solid rgba(255, 255, 255, 0.4)',
    borderRadius: 'clamp(16px, 4vw, 24px)',
    padding: 'clamp(20px, 5vw, 32px)', // Адаптивные отступы
    textAlign: 'center' as const,
    position: 'relative' as const,
    height: '100%', // Заполняет всю доступную высоту в grid
    display: 'flex',
    flexDirection: 'column' as const,
    justifyContent: 'flex-start' // Контент прижат к верху
  },
  planName: {
    color: 'white',
    fontSize: 'clamp(18px, 3.5vw, 20px)', // 18px-20px
    fontWeight: 700,
    marginBottom: 'clamp(6px, 2vw, 8px)'
  },
  planDescription: {
    color: 'rgba(255, 255, 255, 0.7)',
    fontSize: 'clamp(14px, 2.5vw, 15px)', // 14px-15px
    marginBottom: 'clamp(12px, 3vw, 16px)'
  },
  price: {
    color: 'white',
    fontSize: 'clamp(24px, 5vw, 28px)', // 24px-28px
    fontWeight: 900
  },
  period: {
    color: 'rgba(255, 255, 255, 0.7)',
    fontSize: 'clamp(12px, 2.5vw, 14px)', // 12px-14px
    marginLeft: 'clamp(6px, 2vw, 8px)'
  },
  featureList: {
    listStyle: 'none' as const,
    padding: 0,
    margin: 0,
    textAlign: 'left' as const
  },
  feature: {
    color: 'rgba(255, 255, 255, 0.9)',
    fontSize: 'clamp(14px, 2.5vw, 16px)', // 14px-16px
    lineHeight: '1.6',
    marginBottom: 'clamp(8px, 2vw, 10px)',
    paddingLeft: 'clamp(16px, 4vw, 20px)',
    position: 'relative' as const
  }
} as const;