import { PAINS } from "../content";
import SectionHead from "./SectionHead";
import { Reveal, Stagger, RevealItem } from "./Reveal";
import { spotlight } from "./spotlight";

export default function Problem() {
  return (
    <section className="sec" id="problema">
      <div className="ct">
        <SectionHead
          label="O problema"
          title={<>Três ralos por onde a sua <em>margem</em> escorre todo mês.</>}
        />
        <Stagger className="pains" gap={0.1}>
          {PAINS.map((p) => (
            <RevealItem as="article" className="pain card-spot" key={p.n} onPointerMove={spotlight}>
              <span className="pain-n">{p.n}</span>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
            </RevealItem>
          ))}
        </Stagger>
        <Reveal className="bridge">
          <span className="bridge-mark" aria-hidden="true" />
          <p>
            A Raddar fecha os três: <strong>preço de fábrica</strong>,{" "}
            <strong>reposição acompanhada</strong> e <strong>um contato que resolve</strong>.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
