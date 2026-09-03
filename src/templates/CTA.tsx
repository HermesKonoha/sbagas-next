import { ArrowRightIcon } from 'lucide-react';
import { buttonVariants } from '@/components/ui/buttonVariants';
import { CTABanner } from '@/features/landing/CTABanner';
import { Section } from '@/features/landing/Section';

export const CTA = () => {
  return (
    <Section>
      <CTABanner
        title="Pronto pra uma navalha de verdade?"
        description="Agende seu horário agora e sinta a diferença de um corte de precisão."
        buttons={(
          <a
            className={buttonVariants({ variant: 'secondary', size: 'lg', className: 'whitespace-pre-line' })}
            href="#agendar"
          >
            Começar agora
            <ArrowRightIcon className="ml-1 size-5" />
          </a>
        )}
      />
    </Section>
  );
};
