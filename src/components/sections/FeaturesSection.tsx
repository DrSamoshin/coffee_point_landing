"use client";

import Section from '@/components/ui/Section';
import { t } from '@/lib/i18n';
import { useLocale } from '@/context/LocaleContext';

export default function FeaturesSection() {
  const { locale } = useLocale();
  
  // Получаем массив напрямую из CONTENT
  const features = locale === 'ru' ? [
    '<strong>AI-аналитика и прогнозирование:</strong> знаешь наперёд, сколько продашь и что закупить.',
    '<strong>Приложение для баристы:</strong> чек-листы, заказы, скидки, контроль продуктов. Никаких оправданий.',
    '<strong>Приложение для владельца:</strong> отчёты, склад, закупки, смены — всё в кармане.'
  ] : [
    '<strong>AI-analytics and forecasting:</strong> know in advance how much you will sell and what to buy.',
    '<strong>Barista app:</strong> checklists, orders, discounts, product control. No excuses.',
    '<strong>Owner app:</strong> reports, inventory, purchases, shifts — everything in your pocket.'
  ];
  
  return (
    <Section 
      title={t('features.title', locale)}
      subtitle={t('features.subtitle', locale)}
    >
      <div style={{ 
        marginTop: '40px', 
        display: 'flex', 
        justifyContent: 'center',
        width: '100%'
      }}>
        <ul style={{ 
          listStyle: 'none', 
          padding: 0, 
          margin: 0,
          textAlign: 'center'
        }}>
          {features.map((feature, index) => (
            <li key={index} style={{ 
              color: 'rgba(255, 255, 255, 0.9)', 
              fontSize: '20px', 
              lineHeight: '1.6',
              marginBottom: '24px',
              textAlign: 'center'
            }}
            dangerouslySetInnerHTML={{ __html: `• ${feature}` }}>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}