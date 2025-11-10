import type { ValuePoint } from "../../constants";
import "./style.css";
import { Reveal } from "../Reveal";

type ValuesSectionProps = {
  values: ValuePoint[];
};

export function ValuesSection({ values }: ValuesSectionProps) {
  return (
    <section className="section" aria-labelledby="valores-title">
      <div className="container">
        <div className="values">
          <Reveal className="values__intro" as="header" direction="left">
            <p className="section__eyebrow">Nosso compromisso</p>
            <h2 id="valores-title">
              Moda que honra a fé com autenticidade, beleza e propósito.
            </h2>
            <p className="section__description">
              Cada detalhe é pensado para transmitir a mensagem com reverência e
              excelência, do design ao atendimento.
            </p>
          </Reveal>
          <div className="values__list">
            {values.map((value, index) => (
              <Reveal
                key={value.title}
                as="article"
                className="values-card"
                direction="up"
                delay={80 * index}
              >
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

