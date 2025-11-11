import type { PreviousCollection } from "../../constants";
import "./style.css";
import { Reveal } from "../Reveal";

type CollectionsSectionProps = {
  collections: PreviousCollection[];
  formLink: string;
};

export function CollectionsSection({
  collections,
  formLink,
}: CollectionsSectionProps) {
  return (
    <section className="section" id="colecoes" aria-labelledby="colecoes-title">
      <div className="container">
        <Reveal
          as="header"
          className="section__header section__header--center"
          direction="up"
        >
          <p className="section__eyebrow">Coleções anteriores</p>
          <h2 id="colecoes-title">
            Cada coleção nasce de uma devoção e conversa com a vida real.
          </h2>
          <p className="section__description">
            Conheça as camisetas que já tocaram corações e levaram a mensagem de
            Cristo para as ruas. Entre em contato para saber sobre novas
            reposições e tamanhos disponíveis.
          </p>
        </Reveal>
        <div className="collection-grid">
          {collections.map((collection, index) => (
            <Reveal
              key={collection.name}
              as="article"
              className="collection-card"
              direction={index % 2 === 0 ? "up" : "right"}
              delay={80 * index}
            >
              <div className="collection-card__media">
                <img
                  src={collection.image}
                  alt={`Camiseta da coleção ${collection.name}`}
                  loading="lazy"
                />
              </div>
              <div className="collection-card__content">
                <span className="collection-card__theme">
                  {collection.theme}
                </span>
                <h3>{collection.name}</h3>
                <p>{collection.description}</p>
                <p className="collection-card__availability">
                  {collection.availability}
                </p>
                <a
                  className="button button--secondary collection-card__cta"
                  href={formLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Quero esse modelo
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
