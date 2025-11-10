import "./style.css";

type CallToActionSectionProps = {
  whatsappLink: string;
};

export function CallToActionSection({
  whatsappLink,
}: CallToActionSectionProps) {
  return (
    <section className="cta" aria-labelledby="cta-title">
      <div className="container cta__container">
        <div className="cta__content">
          <p className="cta__eyebrow">Pronto para vestir a missão?</p>
          <h2 id="cta-title">Vamos desenhar a próxima história juntos.</h2>
          <p>
            Fale com nosso time agora mesmo pelo WhatsApp, garanta o último
            lançamento e descubra possibilidades exclusivas para grupos,
            comunidades e eventos.
          </p>
        </div>
        <a
          className="button button--contrast"
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          Conversar no WhatsApp
        </a>
      </div>
    </section>
  );
}

