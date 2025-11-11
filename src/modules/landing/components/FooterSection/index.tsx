import "./style.css";

type FooterSectionProps = {
  whatsappLink: string;
};

export function FooterSection({ whatsappLink }: FooterSectionProps) {
  return (
    <footer className="footer">
      <div className="container footer__container">
        <div className="footer__identity">
          <img
            className="footer__brand-logo"
            src="/logomantuspreta.png"
            alt="Mantus Christi"
          />
          <span className="footer__tagline">
            Camisetas católicas · Arte que evangeliza
          </span>
        </div>
        <div className="footer__links">
          <a href="#lancamento">Coleção Sementes de Fé</a>
          <a href="#colecoes">Coleções</a>
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            Atendimento
          </a>
        </div>
        <span className="footer__note">
          © {new Date().getFullYear()} Mantus Christi. Todos os direitos
          reservados.
        </span>
      </div>
    </footer>
  );
}

