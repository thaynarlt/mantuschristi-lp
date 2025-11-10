import type { ProcessStep } from "../../constants";
import "./style.css";
import { Reveal } from "../Reveal";

type ProcessSectionProps = {
  steps: ProcessStep[];
};

export function ProcessSection({ steps }: ProcessSectionProps) {
  return (
    <section
      className="section section--alternate"
      id="como-funciona"
      aria-labelledby="process-title"
    >
      <div className="container">
        <Reveal
          as="header"
          className="section__header section__header--center"
          direction="up"
        >
          <p className="section__eyebrow">Como funciona</p>
          <h2 id="process-title">Um caminho simples, guiado pelo cuidado.</h2>
          <p className="section__description">
            Abrimos ciclos de pedidos, recebemos tudo pelo WhatsApp e te mantemos
            por dentro dos prazos até combinar a entrega perfeita.
          </p>
        </Reveal>
        <div className="process-grid">
          {steps.map((step, index) => (
            <Reveal
              key={step.title}
              as="article"
              className="process-card"
              direction="up"
              delay={90 * index}
            >
              <span className="process-card__index">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

