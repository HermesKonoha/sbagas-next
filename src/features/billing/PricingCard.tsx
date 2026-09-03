import type { PricingPlan } from '@/types/Subscription';
import { PricingFeatureItem } from './PricingFeatureItem';

export const PricingCard = (props: {
  plan: PricingPlan;
  button: React.ReactNode;
}) => {
  return (
    <div className="rounded-xl border border-border px-6 py-8 text-center">
      <div className="text-lg font-semibold">
        {props.plan.description}
      </div>

      <div className="mt-3 flex items-center justify-center">
        <div className="text-5xl font-bold">
          R$ {props.plan.price}
        </div>

        <div className="ml-1 text-muted-foreground">
          / mês
        </div>
      </div>

      <div className="mt-2 mb-5 text-sm text-muted-foreground capitalize">
        {props.plan.name}
      </div>

      {props.button}

      <ul className="mt-8 space-y-3 text-left">
        {props.plan.features.map(feature => (
          <PricingFeatureItem key={feature}>
            {feature}
          </PricingFeatureItem>
        ))}
      </ul>
    </div>
  );
};
