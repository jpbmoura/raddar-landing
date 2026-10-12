import { BRANDS, MSG, go } from "../content";
import SectionHead from "./SectionHead";
import { Stagger, RevealItem } from "./Reveal";
import { ArrowIcon } from "./Icons";
import { spotlight } from "./spotlight";

export default function Brands() {
  return (
    <section className="sec" id="marcas">
      <div className="ct">
        <SectionHead
          className="center"
          label="Portfólio"
          title={<>As marcas que você passa a <em>comprar direto.</em></>}
          sub="Toque em qualquer marca para receber a tabela dela no WhatsApp."
        />
        <Stagger className="brands" gap={0.07}>
          {BRANDS.map((b) => (
            <RevealItem
              as="button"
              className="brand card-spot"
              key={b.key}
              onPointerMove={spotlight}
              onClick={() => go(MSG.brand(b.name))}
              aria-label={`Pedir tabela da ${b.name} no WhatsApp`}
            >
              <span className="brand-chip">
                <img src={b.logo} alt="" loading="lazy" width="480" height="300" />
              </span>
              <span className="brand-name">{b.name}</span>
              <span className="brand-cat">{b.cat}</span>
              {b.sub && <span className="brand-sub">{b.sub}</span>}
              <span className="brand-cta">
                Pedir tabela <ArrowIcon s={13} />
              </span>
            </RevealItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
