export const LOCALES = ['en', 'ru'] as const;
export type Locale = typeof LOCALES[number];

export const DEFAULT_LOCALE: Locale = 'ru';

export const CONTENT_EN = {
  ui: {
    buttons: {
      sign_in: 'Sign In',
      try_now: 'Try Now',
    }
  },
  meta: {
    title: 'Barista Boss CRM - Next Generation Coffee Shop Management',
    description: 'Complete solution for coffee shop management: from orders to analytics. Increase profits and streamline processes with Barista Boss CRM.',
  },
  hero: {
    title: 'Barista Boss CRM',
    subtitle: 'Full business control and planning, even if you are on the other side of the planet',
    description: 'We are not just "another CRM for coffee shops". We have gone through the entire process ourselves — and we live it every day.',
    cta: {
      primary: 'Try for free',
      secondary: 'Learn more'
    }
  },
  about: {
    title: 'Staff is dumb. Money is leaking. You are fed up.',
    subtitle: 'We know how a coffee shop works from the inside: That is why Barista Boss CRM works the way an owner needs it: no fluff, no extras, only what really saves the business.',
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
    title: 'Peace, Freedom and AI Analytics',
    subtitle: 'Everything you need for complete control of your business',
    items: [
      'AI-analytics and forecasting: know in advance how much you will sell and what to buy.',
      'Barista app: checklists, orders, discounts, product control. No excuses.',
      'Owner app: reports, inventory, purchases, shifts — everything in your pocket.'
    ]
  },
  pricing: {
    title: 'How much does peace cost?',
    subtitle: 'Cheaper than your losses from inefficient management.',
    plans: [
      {
        name: 'Solo',
        price: '49 BYN',
        period: '/ month',
        description: 'for one coffee shop',
        features: ['Barista app', 'Owner app', 'AI analytics and forecasting', 'Inventory and procurement control'],
        popular: false
      },
      {
        name: 'Network',
        price: '199 BYN',
        period: '/ month',
        description: 'for coffee shop chains',
        features: ['Everything from Solo plan', 'Management of up to 5 locations', 'Centralized analytics and planning', '24/7 support'],
        popular: true
      },
      {
        name: 'Custom',
        price: 'Custom',
        period: '',
        description: 'for large chains',
        features: ['Custom configuration for your processes', 'Personal manager', 'ERP / POS integrations', 'White-label under your brand'],
        popular: false
      }
    ]
  },
  testimonials: {
    title: 'Our expertise',
    subtitle: 'More than 50 coffee shops already use Barista Boss CRM',
    expert: {
      name: 'Alex Petrov',
      role: 'Barista Boss Founder',
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
    title: 'Stop fighting fires. Time to drink coffee calmly.',
    subtitle: 'Peace and Freedom — that is Barista Boss CRM',
    buttons: {
      primary: 'Try Barista Boss CRM Free',
      secondary: 'Contact us'
    }
  },
  footer: {
    copyright: '© 2024 Barista Boss CRM. All rights reserved.',
    links: {
      privacy: 'Privacy Policy',
      terms: 'Terms of Use',
      contact: 'Contact'
    },
    social: {
      instagram: '@baristaboss_official',
      email: 'hello@baristaboss.com',
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
    title: 'Barista Boss CRM - Управление кофейней нового поколения',
    description: 'Комплексное решение для управления кофейней: от заказов до аналитики. Увеличьте прибыль и упростите процессы с Barista Boss CRM.',
  },
  hero: {
    title: 'Barista Boss CRM',
    subtitle: 'Полный контроль и планирование бизнеса, даже если ты на другом конце планеты',
    description: 'Мы не просто "ещё одна CRM для кофеен". Мы прошли весь процесс сами — и живём этим каждый день.',
    cta: {
      primary: 'Попробовать бесплатно',
      secondary: 'Узнать больше'
    }
  },
  about: {
    title: 'Персонал тупит. Деньги утекают. Ты задолбался?',
    subtitle: 'Мы знаем, как устроена кофейня изнутри: Именно поэтому Barista Boss CRM работает так, как надо владельцу: без воды, без лишнего, только то, что реально спасает бизнес.',
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
    title: 'Спокойствие, Свобода и AI аналитика',
    subtitle: 'Полный контроль над твоим бизнесом в твоих руках',
    items: [
      'AI-аналитика и прогнозирование: знаешь наперёд, сколько продашь и что закупить.',
      'Приложение для баристы: чек-листы, заказы, скидки, контроль продуктов. Никаких оправданий.',
      'Приложение для владельца: отчёты, склад, закупки, смены — всё в кармане.'
    ]
  },
  pricing: {
    title: 'Сколько стоит спокойствие?',
    subtitle: 'Дешевле, чем твои потери от неэффективного управления.',
    plans: [
      {
        name: 'Solo',
        price: '49 BYN',
        period: '/ мес',
        description: 'для одной кофейни',
        features: ['Приложение для баристы', 'Приложение для владельца', 'AI-аналитика и прогнозирование', 'Контроль склада и закупок'],
        popular: false
      },
      {
        name: 'Network',
        price: '199 BYN',
        period: '/ мес',
        description: 'для сети кофеен',
        features: ['Всё из тарифа Solo', 'Управление до 5 точками', 'Централизованная аналитика и планирование', 'Поддержка 24/7'],
        popular: true
      },
      {
        name: 'Custom',
        price: 'Договорная',
        period: '',
        description: 'для больших сетей',
        features: ['Индивидуальная настройка под процессы', 'Персональный менеджер', 'Интеграции с вашей ERP / POS', 'White-label под ваш бренд'],
        popular: false
      }
    ]
  },
  testimonials: {
    title: 'Наша экспертность',
    subtitle: 'Более 50 кофеен уже используют Barista Boss CRM',
    expert: {
      name: 'Алексей Петров',
      role: 'Основатель Barista Boss',
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
    title: 'Хватит тушить пожары. Пора пить кофе спокойно.',
    subtitle: 'Спокойствие и Свобода — это и есть Barista Boss CRM',
    buttons: {
      primary: 'Попробовать Barista Boss CRM бесплатно',
      secondary: 'Связаться с нами'
    }
  },
  footer: {
    copyright: '© 2024 Barista Boss CRM. Все права защищены.',
    links: {
      privacy: 'Политика конфиденциальности',
      terms: 'Условия использования',
      contact: 'Контакты'
    },
    social: {
      instagram: '@baristaboss_official',
      email: 'hello@baristaboss.ru',
      phone: '+7 (999) 123-45-67'
    }
  }
} as const;

export const CONTENT = {
  en: CONTENT_EN,
  ru: CONTENT_RU
} as const;

export type Content = typeof CONTENT_EN;
