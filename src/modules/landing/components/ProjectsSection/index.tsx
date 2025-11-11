import "./style.css";
import { Reveal } from "../Reveal";

export function ProjectsSection() {
  return (
    <section
      className="section projects"
      id="projetos"
      aria-labelledby="projetos-title"
    >
      <div className="container projects__container">
        <Reveal
          as="article"
          className="section__header projects__content"
          direction="left"
        >
          <p className="section__eyebrow">Outros projetos</p>
          <h2 id="projetos-title">Mais criações que fortalecem a mensagem</h2>
          <p className="section__description">
            Explore como cada peça do portfólio Mantus Christi foi pensada para
            unir beleza, catequese e propósito. Essas coleções mostram o cuidado
            com narrativa visual e detalhes que inspiram conversas de fé.
          </p>
        </Reveal>
        <Reveal
          as="article"
          className="projects__embed-wrapper"
          direction="right"
          delay={120}
        >
          <iframe
            className="projects__embed"
            src="https://www.behance.net/embed/project/199622209?ilo0=1"
            title="Portfólio de projetos Mantus Christi no Behance"
            height="404"
            width="720"
            allow="clipboard-write"
            allowFullScreen
            loading="lazy"
            frameBorder={0}
            referrerPolicy="strict-origin-when-cross-origin"
          />
        </Reveal>
      </div>
    </section>
  );
}


