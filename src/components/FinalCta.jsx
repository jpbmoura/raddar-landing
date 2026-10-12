import logo from "../assets/logo.png";
import { MSG, CONTACT, go } from "../content";
import { Reveal } from "./Reveal";
import { WhatsIcon } from "./Icons";
import RadarVisual from "./RadarVisual";

export default function FinalCta() {
  return (
    <section className="final">
      <RadarVisual className="final-radar" />
      <div className="final-glow" aria-hidden="true" />
      <div className="ct final-in">
        <Reveal>
          <img src={logo} alt="Raddar" className="final-logo" loading="lazy" width="589" height="128" />
        </Reveal>
        <Reveal as="h2" delay={0.06}>
          Sua próxima compra pode sair <em>com preço de fábrica.</em>
        </Reveal>
        <Reveal delay={0.12}>
          <button className="bt bt-xl bt-glow" onClick={() => go(MSG.final)}>
            <WhatsIcon s={19} /> Chamar no WhatsApp
          </button>
        </Reveal>
        <Reveal as="p" className="final-alt" delay={0.18}>
          {CONTACT.phone} · <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
        </Reveal>
        <Reveal as="p" className="ps" delay={0.24}>
          <span>P.S.</span> A tabela vai no mesmo dia. Se há ruptura na sua prateleira agora, cada dia
          sem pedido é venda indo para o concorrente.
        </Reveal>
      </div>
    </section>
  );
}
