/** Pricing plans */
export const PLAN_NAME = {
  BRONZE: 'bronze',
  PRATA: 'prata',
  OURO: 'ouro',
} as const;

export type PricingPlan = {
  name: string;
  price: number;
  description: string;
  features: string[];
};

/** List of subscription plans. */
const Plans: PricingPlan[] = [
  {
    name: PLAN_NAME.BRONZE,
    price: 79,
    description: 'Mensal Bronze',
    features: [
      '1 corte por mês',
      'Barba inclusa',
      'Produtos premium',
      'Agendamento online',
    ],
  },
  {
    name: PLAN_NAME.PRATA,
    price: 119,
    description: 'Mensal Prata',
    features: [
      '2 cortes por mês',
      'Barba inclusa',
      'Hidratação capilar',
      'Produtos premium',
      'Prioridade no agendamento',
    ],
  },
  {
    name: PLAN_NAME.OURO,
    price: 179,
    description: 'Mensal Ouro',
    features: [
      '4 cortes por mês',
      'Barba inclusa',
      'Hidratação capilar',
      'Tratamento estético facial',
      'Produtos premium',
      'Agendamento prioritário',
    ],
  },
];

export const AllPlans = Plans;
