import "./style.css";
import { Reveal } from "../Reveal";

type FooterSectionProps = {
  whatsappLink: string;
};

export function FooterSection({ whatsappLink }: FooterSectionProps) {
  return (
    <footer className="footer">
      <div className="container footer__container">
        <Reveal className="footer__identity" direction="left">
          <img
            className="footer__brand-logo"
            src="/logomantuspreta.png"
            alt="Mantus Christi"
          />
          <span className="footer__tagline">
            Camisetas católicas · Arte que evangeliza
          </span>
        </Reveal>
        <Reveal
          className="footer__links"
          as="div"
          direction="up"
          delay={120}
        >
          <a href="#lancamento">Coleção Sementes de Fé</a>
          <a href="#colecoes">Coleções</a>
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            Atendimento
          </a>
        </Reveal>
        <Reveal as="span" className="footer__note" direction="right" delay={220}>
          © {new Date().getFullYear()} Mantus Christi. Todos os direitos
          reservados.
        </Reveal>
      </div>
    </footer>
  );
}

