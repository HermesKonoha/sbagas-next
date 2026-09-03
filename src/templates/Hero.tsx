import { ArrowRightIcon, CalendarIcon } from 'lucide-react';
import { buttonVariants } from '@/components/ui/buttonVariants';
import { CenteredHero } from '@/features/landing/CenteredHero';
import { Section } from '@/features/landing/Section';

export const Hero = () => {
  return (
    <Section className="py-36">
      <CenteredHero
        banner={(
          <span
            className="inline-flex w-fit shrink-0 items-center justify-center gap-1 overflow-hidden rounded-md border px-2 py-0.5 text-xs font-medium whitespace-nowrap border-transparent bg-secondary text-secondary-foreground"
          >
            ✂️ Barbearia Navalha
          </span>
        )}
        title={(
          <>
            Barbearia <span className="text-primary">Navalha</span>
          </>
        )}
        description="Cortes, barba e cuidados com a precisão que você merece"
        buttons={(
          <>
            <a
              className={buttonVariants({ variant: 'outline', size: 'lg' })}
              href="#planos"
            >
              Ver planos
            </a>

            <a
              className={buttonVariants({ size: 'lg' })}
              href="#agendar"
            >
              <CalendarIcon className="mr-2 size-5" />
              Agendar
              <ArrowRightIcon className="ml-1 size-5" />
            </a>
          </>
        )}
      />
    </Section>
  );
};
