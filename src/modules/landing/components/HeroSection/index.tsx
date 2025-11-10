import type { FeaturedRelease } from "../../constants";
import "./style.css";
import { Reveal } from "../Reveal";

type HeroSectionProps = {
  featuredRelease: FeaturedRelease;
  whatsappLink: string;
};

export function HeroSection({
  featuredRelease,
  whatsappLink,
}: HeroSectionProps) {
  return (
    <header className="hero">
      <div className="container">
        <Reveal as="nav" className="hero__nav" aria-label="Principal">
          <div className="hero__brand">
            <img
              className="hero__brand-logo"
              src="/logomantus.png"
              alt="Mantus Christi"
            />
            <span className="hero__brand-tagline">
              Camisetas católicas com propósito
            </span>
          </div>
          <div className="hero__links">
            <a href="#lancamento">Último lançamento</a>
            <a href="#colecoes">Coleções</a>
            <a href="#como-funciona">Como funciona</a>
          </div>
          <a
            className="button button--ghost"
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            Falar no WhatsApp
          </a>
        </Reveal>

        <div className="hero__content">
          <Reveal className="hero__copy" direction="up" delay={80}>
            <p className="hero__eyebrow">Nova camiseta disponível</p>
            <h1>
              Vista histórias que inspiram fé e despertam conversas com Deus.
            </h1>
            <p className="hero__description">
              A Mantus Christi cria camisetas católicas que unem arte, catequese
              e design contemporâneo. Cada peça é um convite para evangelizar
              com estilo e leveza.
            </p>
            <div className="hero__actions">
              <a className="button button--primary" href="#lancamento">
                Ver nova camiseta
              </a>
              <a
                className="button button--secondary"
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Pedir pelo WhatsApp
              </a>
            </div>
          </Reveal>

          <Reveal
            as="article"
            className="hero__release-card"
            id="lancamento"
            direction="right"
            delay={150}
          >
            <div className="hero__release-header">
              <span className="hero__release-tag">
                {featuredRelease.release}
              </span>
              <h2>{featuredRelease.name}</h2>
            </div>
            <p>{featuredRelease.description}</p>
            <ul className="hero__release-list">
              {featuredRelease.highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <img
              src={featuredRelease.image}
              alt={`Camiseta ${featuredRelease.name}`}
              loading="lazy"
            />
            <a
              className="button button--block"
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              Garantir minha camiseta
            </a>
          </Reveal>
        </div>
      </div>
    </header>
  );
}
