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

          <FeatureCard icon={SCISSORS_ICON} title="Barba">
            Modelagem e cuidado completo da barba com toalha quente, óleos e produtos premium.
          </FeatureCard>

          <FeatureCard icon={SCISSORS_ICON} title="Hidratação">
            Tratamentos de hidratação capilar e estética facial para manter o visual impecável.
          </FeatureCard>

          <FeatureCard icon={SCISSORS_ICON} title="Agendamento online">
            Marque seu horário em segundos, sem filas e sem espera. Prioridade para planos ativos.
          </FeatureCard>
        </div>
      </Section>
    </Background>
  );
};
