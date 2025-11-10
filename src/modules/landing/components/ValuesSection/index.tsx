import type { ValuePoint } from "../../constants";
import "./style.css";

type ValuesSectionProps = {
  values: ValuePoint[];
};

export function ValuesSection({ values }: ValuesSectionProps) {
  return (
    <section className="section" aria-labelledby="valores-title">
      <div className="container">
        <div className="values">
          <header className="values__intro">
            <p className="section__eyebrow">Nosso compromisso</p>
            <h2 id="valores-title">
              Moda que honra a fé com autenticidade, beleza e propósito.
            </h2>
            <p className="section__description">
              Cada detalhe é pensado para transmitir a mensagem com reverência e
              excelência, do design ao atendimento.
            </p>
          </header>
          <div className="values__list">
            {values.map((value) => (
              <article className="values-card" key={value.title}>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

