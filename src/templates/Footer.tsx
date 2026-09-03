import { CenteredFooter } from '@/features/landing/CenteredFooter';
import { Section } from '@/features/landing/Section';
import { Logo } from './Logo';

export const Footer = () => {
  return (
    <Section className="pt-0 pb-16" id="contato">
      <CenteredFooter
        logo={<Logo />}
        name="Navalha Barbearia"
        iconList={null}
        legalLinks={(
          <>
            <li>
              <a href="#">Termos de serviço</a>
            </li>
            <li>
              <a href="#">Política de privacidade</a>
            </li>
          </>
        )}
      >
        <li>
          <a href="#servicos">Serviços</a>
        </li>

        <li>
          <a href="#planos">Planos</a>
        </li>

        <li>
          <a href="#barbeiros">Barbeiros</a>
        </li>

        <li>
          <a href="#contato">Contato</a>
        </li>
      </CenteredFooter>
    </Section>
  );
};
