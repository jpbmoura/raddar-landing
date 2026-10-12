import { CITIES } from "../content";
import SectionHead from "./SectionHead";
import { Reveal, Stagger, RevealItem } from "./Reveal";
import RNMap from "./RNMap";

export default function Coverage() {
  return (
    <section className="sec sec-alt" id="cobertura">
      <div className="ct cov-grid">
        <div>
          <SectionHead
            label="Cobertura"
            title={<>Do litoral <em>ao Seridó.</em></>}
            sub="Atendimento presencial nos principais polos do Rio Grande do Norte, com visita à loja quando você preferir."
          />
          <Stagger as="ul" className="cities" gap={0.08}>
            {CITIES.map((c) => (
              <RevealItem as="li" key={c.name}>
                <span className="city-dot" />
                <span className="city-name">{c.name}</span>
                <span className="city-reg">{c.region}</span>
              </RevealItem>
            ))}
            <RevealItem as="li" className="city-more">
              <span className="city-dot" />
              <span className="city-name">+ principais polos do RN</span>
            </RevealItem>
          </Stagger>
          <Reveal as="p" className="cov-note">
            Fora desses eixos? Pergunte mesmo assim — em boa parte dos casos conseguimos atender.
          </Reveal>
        </div>
        <Reveal className="cov-map">
          <RNMap />
        </Reveal>
      </div>
    </section>
  );
}
