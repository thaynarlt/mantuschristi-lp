import { useState } from "react";
import type { FeaturedRelease } from "../../constants";
import "./style.css";
import { Reveal } from "../Reveal";

type HeroSectionProps = {
  featuredRelease: FeaturedRelease;
  whatsappLink: string;
};

const NAV_ITEMS = [
  { href: "#lancamento", label: "Último lançamento" },
  { href: "#colecoes", label: "Coleções" },
  { href: "#como-funciona", label: "Como funciona" },
];

export function HeroSection({
  featuredRelease,
  whatsappLink,
}: HeroSectionProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

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
          <div className="hero__nav-actions">
            <div className="hero__links">
              {NAV_ITEMS.map((item) => (
                <a key={item.href} href={item.href}>
                  {item.label}
                </a>
              ))}
            </div>
            <a
              className="button button--ghost hero__cta"
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              Falar no WhatsApp
            </a>
            <button
              type="button"
              className="hero__menu-toggle"
              aria-label="Abrir menu"
              aria-haspopup="true"
              aria-expanded={isMenuOpen}
              onClick={() => setIsMenuOpen(true)}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
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
            <p className="hero__release-description">
              {featuredRelease.description}
            </p>
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
      <div
        className={`hero__sidebar-overlay${
          isMenuOpen ? " hero__sidebar-overlay--visible" : ""
        }`}
        aria-hidden={!isMenuOpen}
        onClick={closeMenu}
      />
      <aside
        className={`hero__sidebar${isMenuOpen ? " hero__sidebar--open" : ""}`}
        aria-hidden={!isMenuOpen}
      >
        <div className="hero__sidebar-header">
          <span>Menu</span>
          <button
            type="button"
            className="hero__menu-close"
            aria-label="Fechar menu"
            onClick={closeMenu}
          >
            <span />
            <span />
          </button>
        </div>
        <nav className="hero__sidebar-links" aria-label="Links principais">
          {NAV_ITEMS.map((item) => (
            <a key={item.href} href={item.href} onClick={closeMenu}>
              {item.label}
            </a>
          ))}
          <a
            className="button button--secondary hero__sidebar-cta"
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
          >
            Falar no WhatsApp
          </a>
        </nav>
      </aside>
    </header>
  );
}
