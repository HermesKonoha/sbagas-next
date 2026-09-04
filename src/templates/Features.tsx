import { Background } from '@/components/Background';
import { FeatureCard } from '@/features/landing/FeatureCard';
import { Section } from '@/features/landing/Section';

const SCISSORS_ICON = (
  <svg
    className=""
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M0 0h24v24H0z" stroke="none" />
    <circle cx="6" cy="6" r="3" />
    <circle cx="6" cy="18" r="3" />
    <line x1="20" y1="4" x2="8.12" y2="15.88" />
    <line x1="14.47" y1="14.48" x2="20" y2="20" />
    <line x1="8.12" y1="8.12" x2="12" y2="12" />
  </svg>
);

const BEARD_ICON = (
  <svg
    className=""
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M0 0h24v24H0z" stroke="none" />
    <path d="M8 3h8l2 5H6z" />
    <path d="M6 8h12v2a6 6 0 0 1-12 0z" />
    <line x1="12" y1="14" x2="12" y2="21" />
    <line x1="9" y1="18" x2="15" y2="18" />
  </svg>
);

const DROPLET_ICON = (
  <svg
    className=""
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M0 0h24v24H0z" stroke="none" />
    <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
  </svg>
);

const CALENDAR_ICON = (
  <svg
    className=""
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M0 0h24v24H0z" stroke="none" />
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);

export const Features = () => {
  return (
    <Background>
      <Section
        id="servicos"
        subtitle="Serviços"
        title="Cuidados de precisão para cada cliente"
        description="Do corte clássico ao tratamento completo, entregamos qualidade em cada detalhe."
      >
        <div
          className="
            grid grid-cols-1 gap-x-3 gap-y-8
            md:grid-cols-2
            lg:grid-cols-4
          "
        >
          <FeatureCard icon={SCISSORS_ICON} title="Corte premium">
            Cortes modernos e clássicos feitos por barbeiros experientes, com acabamento de navalha.
          </FeatureCard>

          <FeatureCard icon={BEARD_ICON} title="Barba">
            Modelagem e cuidado completo da barba com toalha quente, óleos e produtos premium.
          </FeatureCard>

          <FeatureCard icon={DROPLET_ICON} title="Hidratação">
            Tratamentos de hidratação capilar e estética facial para manter o visual impecável.
          </FeatureCard>

          <FeatureCard icon={CALENDAR_ICON} title="Agendamento online">
            Marque seu horário em segundos, sem filas e sem espera. Prioridade para planos ativos.
          </FeatureCard>
        </div>
      </Section>
    </Background>
  );
};
