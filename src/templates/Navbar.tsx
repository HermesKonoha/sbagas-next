import { buttonVariants } from '@/components/ui/buttonVariants';
import { CenteredMenu } from '@/features/landing/CenteredMenu';
import { Section } from '@/features/landing/Section';
import { Logo } from './Logo';

export const Navbar = () => {
  return (
    <Section className="px-3 py-6">
      <CenteredMenu
        logo={<Logo />}
        rightMenu={(
          <>
            <li className="mr-2.5 ml-1">
              <a className={buttonVariants()} href="#agendar">
                Agendar
              </a>
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
          <a href="#contato">Contato</a>
        </li>
      </CenteredMenu>
    </Section>
  );
};
