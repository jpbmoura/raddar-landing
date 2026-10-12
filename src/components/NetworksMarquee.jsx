import { NETWORKS } from "../content";
import { Reveal } from "./Reveal";

export default function NetworksMarquee() {
  const row = (hidden) => (
    <ul className="mq-row" aria-hidden={hidden || undefined}>
      {NETWORKS.map((n) => (
        <li key={n}>
          <span className="mq-sep">✦</span>
          {n}
        </li>
      ))}
    </ul>
  );

  return (
    <section className="nets">
      <Reveal as="p" className="label center">
        Redes onde construímos relacionamento em 28 anos de varejo
      </Reveal>
      <div className="mq">
        <div className="mq-track">
          {row(false)}
          {row(true)}
        </div>
      </div>
    </section>
  );
}
