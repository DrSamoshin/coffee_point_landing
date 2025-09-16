export const PRICING_PLANS = {
  ru: [
    {
      name: 'Solo',
      price: '49 BYN',
      period: '/ мес',
      description: 'для одной кофейни',
      features: [
        'Приложение для баристы', 
        'Приложение для владельца', 
        'AI-аналитика и прогнозирование', 
        'Контроль склада и закупок'
      ],
      popular: false
    },
    {
      name: 'Network',
      price: '199 BYN',
      period: '/ мес',
      description: 'для сети кофеен',
      features: [
        'Всё из тарифа Solo', 
        'Управление до 5 точками', 
        'Централизованная аналитика и планирование', 
        'Поддержка 24/7'
      ],
      popular: false
    },
    {
      name: 'Custom',
      price: 'Договорная',
      period: '',
      description: 'для больших сетей',
      features: [
        'Индивидуальная настройка под процессы', 
        'Персональный менеджер', 
        'Интеграции с вашей ERP / POS', 
        'White-label под ваш бренд'
      ],
      popular: false
    }
  ],
  en: [
    {
      name: 'Solo',
      price: '49 BYN',
      period: '/ month',
      description: 'for one coffee shop',
      features: [
        'Barista app', 
        'Owner app', 
        'AI analytics and forecasting', 
        'Inventory and procurement control'
      ],
      popular: false
    },
    {
      name: 'Network',
      price: '199 BYN',
      period: '/ month',
      description: 'for coffee shop chains',
      features: [
        'Everything from Solo plan', 
        'Management of up to 5 locations', 
        'Centralized analytics and planning', 
        '24/7 support'
      ],
      popular: false
    },
    {
      name: 'Custom',
      price: 'Custom',
      period: '',
      description: 'for large chains',
      features: [
        'Custom configuration for your processes', 
        'Personal manager', 
        'ERP / POS integrations', 
        'White-label under your brand'
      ],
      popular: false
    }
  ]
} as const;

export type PricingPlan = {
  name: string;
  price: string;
  period: string;
  description: string;
  features: readonly string[];
  popular: boolean;
};