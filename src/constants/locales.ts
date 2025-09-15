export const LOCALES = ['en', 'ru'] as const;
export type Locale = typeof LOCALES[number];

export const DEFAULT_LOCALE: Locale = 'en';

export const CONTENT_EN = {
  ui: {
    buttons: {
      sign_in: 'Sign In',
      try_now: 'Try Now',
    }
  },
  meta: {
    title: 'Coffee Point - Next Generation Coffee Shop Management',
    description: 'Complete solution for coffee shop management: from orders to analytics. Increase profits and streamline processes with Coffee Point.',
  },
  hero: {
    title: 'Manage your coffee shop easily and efficiently',
    subtitle: 'Complete solution for modern coffee shops',
    description: 'Automate orders, control inventory, analyze sales and increase profits.',
    cta: {
      primary: 'Try for free',
      secondary: 'Learn more'
    }
  },
  about: {
    title: 'Problems we solve',
    subtitle: 'Coffee shop owners face multiple challenges every day',
    problems: [
      {
        title: 'Time wasted on accounting',
        description: 'Manual order and inventory tracking takes precious time',
      },
      {
        title: 'Unclear reporting',
        description: 'Hard to understand which drinks bring more profit',
      },
      {
        title: 'Order mistakes',
        description: 'Human factor leads to losses and customer dissatisfaction',
      }
    ]
  },
  features: {
    title: 'All tools in one solution',
    subtitle: 'Coffee Point combines order management, inventory and analytics',
    items: [
      {
        title: 'Order System',
        description: 'Intuitive interface for quick order processing',
        benefits: ['Reduced service time', 'Fewer mistakes', 'Payment integration']
      },
      {
        title: 'Inventory Management',
        description: 'Automatic stock control and purchasing',
        benefits: ['Low stock alerts', 'Supply history', 'Demand forecasting']
      },
      {
        title: 'Sales Analytics',
        description: 'Detailed reports and forecasts for decision making',
        benefits: ['Product popularity analysis', 'Profit reports', 'Sales forecasting']
      }
    ]
  },
  pricing: {
    title: 'Choose the right plan',
    subtitle: 'Transparent pricing with no hidden fees',
    plans: [
      {
        name: 'Basic',
        price: '$49',
        period: 'per month',
        description: 'For small coffee shops',
        features: ['Up to 100 orders per day', 'Basic analytics', 'Email support'],
        popular: false
      },
      {
        name: 'Optimal',
        price: '$99',
        period: 'per month',
        description: 'Most popular plan',
        features: ['Up to 500 orders per day', 'Advanced analytics', 'Priority support', 'Delivery integration'],
        popular: true
      },
      {
        name: 'Professional',
        price: 'Custom',
        period: '',
        description: 'For coffee shop chains',
        features: ['Unlimited orders', 'Custom reports', 'Personal manager', 'API access'],
        popular: false
      }
    ]
  },
  testimonials: {
    title: 'Our expertise',
    subtitle: 'More than 50 coffee shops already use Coffee Point',
    expert: {
      name: 'Alex Petrov',
      role: 'Coffee Point Founder',
      bio: '10+ years in restaurant business. Helped automate more than 100 establishments.',
    },
    reviews: [
      {
        text: 'In the first month, we reduced accounting time by 70%. Now more time for customers.',
        author: 'Maria Ivanova',
        role: 'Owner of "Morning Coffee"'
      },
      {
        text: 'Analytics helped understand which drinks are unprofitable. Increased profit by 25%.',
        author: 'Denis Sidorov', 
        role: 'Manager of "Coffee Lab"'
      }
    ]
  },
  cta: {
    title: 'Start managing your coffee shop efficiently today',
    subtitle: 'Join more than 50 coffee shops that have already automated their business',
    buttons: {
      primary: 'Try for free',
      secondary: 'Contact us'
    }
  },
  footer: {
    copyright: '© 2024 Coffee Point. All rights reserved.',
    links: {
      privacy: 'Privacy Policy',
      terms: 'Terms of Use',
      contact: 'Contact'
    },
    social: {
      instagram: '@coffeepoint_official',
      email: 'hello@coffeepoint.com',
      phone: '+1 (555) 123-4567'
    }
  }
} as const;

export const CONTENT_RU = {
  ui: {
    buttons: {
      sign_in: 'Войти',
      try_now: 'Попробовать',
    }
  },
  meta: {
    title: 'Coffee Point - Управление кофейней нового поколения',
    description: 'Комплексное решение для управления кофейней: от заказов до аналитики. Увеличьте прибыль и упростите процессы с Coffee Point.',
  },
  hero: {
    title: 'Управляйте кофейней легко и эффективно',
    subtitle: 'Комплексное решение для современных кофеен',
    description: 'Автоматизируйте заказы, контролируйте склад, анализируйте продажи и увеличивайте прибыль.',
    cta: {
      primary: 'Попробовать бесплатно',
      secondary: 'Узнать больше'
    }
  },
  about: {
    title: 'Проблемы, которые мы решаем',
    subtitle: 'Владельцы кофеен сталкиваются с множеством вызовов каждый день',
    problems: [
      {
        title: 'Потери времени на учет',
        description: 'Ручное ведение учета заказов и склада отнимает драгоценное время',
      },
      {
        title: 'Непрозрачная отчетность',
        description: 'Сложно понять, какие напитки приносят больше прибыли',
      },
      {
        title: 'Ошибки в заказах',
        description: 'Человеческий фактор приводит к потерям и недовольству клиентов',
      }
    ]
  },
  features: {
    title: 'Все инструменты в одном решении',
    subtitle: 'Coffee Point объединяет управление заказами, складом и аналитикой',
    items: [
      {
        title: 'Система заказов',
        description: 'Интуитивный интерфейс для быстрого оформления заказов',
        benefits: ['Сокращение времени обслуживания', 'Снижение ошибок', 'Интеграция с оплатой']
      },
      {
        title: 'Управление складом',
        description: 'Автоматический контроль остатков и закупок',
        benefits: ['Предупреждения о низких остатках', 'История поставок', 'Прогнозирование потребностей']
      },
      {
        title: 'Аналитика продаж',
        description: 'Детальные отчеты и прогнозы для принятия решений',
        benefits: ['Анализ популярности товаров', 'Отчеты по прибыли', 'Прогнозы продаж']
      }
    ]
  },
  pricing: {
    title: 'Выберите подходящий тариф',
    subtitle: 'Прозрачные цены без скрытых платежей',
    plans: [
      {
        name: 'Базовый',
        price: '2 990',
        period: 'в месяц',
        description: 'Для небольших кофеен',
        features: ['До 100 заказов в день', 'Базовая аналитика', 'Поддержка по email'],
        popular: false
      },
      {
        name: 'Оптимальный',
        price: '4 990',
        period: 'в месяц',
        description: 'Самый популярный тариф',
        features: ['До 500 заказов в день', 'Расширенная аналитика', 'Приоритетная поддержка', 'Интеграция с доставкой'],
        popular: true
      },
      {
        name: 'Профессиональный',
        price: 'По запросу',
        period: '',
        description: 'Для сетей кофеен',
        features: ['Неограниченные заказы', 'Индивидуальные отчеты', 'Персональный менеджер', 'API доступ'],
        popular: false
      }
    ]
  },
  testimonials: {
    title: 'Наша экспертность',
    subtitle: 'Более 50 кофеен уже используют Coffee Point',
    expert: {
      name: 'Алексей Петров',
      role: 'Основатель Coffee Point',
      bio: '10+ лет в ресторанном бизнесе. Помог автоматизировать более 100 заведений.',
    },
    reviews: [
      {
        text: 'За первый месяц использования сократили время на учет на 70%. Теперь больше времени на клиентов.',
        author: 'Мария Иванова',
        role: 'Владелица "Утренний кофе"'
      },
      {
        text: 'Аналитика помогла понять, какие напитки убыточны. Увеличили прибыль на 25%.',
        author: 'Денис Сидоров', 
        role: 'Управляющий "Coffee Lab"'
      }
    ]
  },
  cta: {
    title: 'Начните управлять кофейней эффективно уже сегодня',
    subtitle: 'Присоединяйтесь к более чем 50 кофейням, которые уже автоматизировали свой бизнес',
    buttons: {
      primary: 'Попробовать бесплатно',
      secondary: 'Связаться с нами'
    }
  },
  footer: {
    copyright: '© 2024 Coffee Point. Все права защищены.',
    links: {
      privacy: 'Политика конфиденциальности',
      terms: 'Условия использования',
      contact: 'Контакты'
    },
    social: {
      instagram: '@coffeepoint_official',
      email: 'hello@coffeepoint.ru',
      phone: '+7 (999) 123-45-67'
    }
  }
} as const;

export const CONTENT = {
  en: CONTENT_EN,
  ru: CONTENT_RU
} as const;

export type Content = typeof CONTENT_EN;
