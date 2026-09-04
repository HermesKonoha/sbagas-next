import { buttonVariants } from '@/components/ui/buttonVariants';
import { Section } from '@/features/landing/Section';
import { AllPlans } from '@/utils/PricingPlans';
import { PricingCard } from '@/features/billing/PricingCard';

export const Pricing = () => {
  return (
    <Section
      subtitle="Planos"
      title="Escolha o plano que combina com você"
      description="Planos mensais sem fidelidade. Cancele quando quiser."
    >
      <div
        id="planos"
        className="
          grid grid-cols-1 gap-x-6 gap-y-8
          @xl:grid-cols-2
          @4xl:grid-cols-3
        "
      >
        {AllPlans.map(plan => (
          <PricingCard
            key={plan.name}
            plan={plan}
            button={(
              <a
                className={buttonVariants({
                  size: 'sm',
                  className: 'w-full',
                })}
                href="#agendar"
              >
                Começar agora
              </a>
            )}
          />
        ))}
      </div>
    </Section>
  );
};
