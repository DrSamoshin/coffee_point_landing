import GlassCard from '@/components/ui/GlassCard';

type SectionProps = {
  title: React.ReactNode;
  subtitle: string;
  children?: React.ReactNode;
};

export default function Section({ title, subtitle, children }: SectionProps) {
  return (
    <div style={{
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '48px'
    }}>
      <GlassCard style={{
        width: 'calc(100vw - 4rem)',
        maxWidth: '112rem',
        height: 'calc(100vh - 4rem)',
        padding: '64px',
        textAlign: 'center',
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
      }}>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          height: '100%'
        }}>
          <div style={{ width: '100%', margin: '0 auto' }}>
            <h2 style={{
              fontSize: '3.75rem',
              fontWeight: 900,
              color: 'white',
              letterSpacing: '-0.025em',
              marginBottom: '20px'
            }}>
              {title}
            </h2>
            
            <p style={{
              color: 'rgba(255, 255, 255, 0.8)',
              fontSize: '1.625rem',
              marginBottom: '30px'
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