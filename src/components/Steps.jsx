import { useRef } from "react";
import { motion, useScroll, useSpring } from "motion/react";
import { STEPS, MSG, go } from "../content";
import SectionHead from "./SectionHead";
import { Reveal, Stagger, RevealItem } from "./Reveal";
import { WhatsIcon } from "./Icons";

export default function Steps() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 75%", "end 55%"] });
  const fill = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });

  return (
    <section className="sec sec-alt" id="como">
      <div className="ct steps-grid">
        <SectionHead
          className="sticky-head"
          label="Como funciona"
          title={<>Da primeira mensagem ao produto <em>na prateleira.</em></>}
          sub="Três passos, sem burocracia. Você só fecha pedido se a condição valer a pena."
        />
        <div>
          <Stagger as="ol" className="steps" ref={ref} gap={0.12}>
            <span className="steps-rail" aria-hidden="true">
              <motion.span className="steps-fill" style={{ scaleY: fill }} />
            </span>
            {STEPS.map((s) => (
              <RevealItem as="li" className="step" key={s.n}>
                <span className="step-n">{s.n}</span>
                <div>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </div>
              </RevealItem>
            ))}
          </Stagger>
          <Reveal className="steps-cta">
            <button className="bt bt-lg" onClick={() => go(MSG.steps)}>
              <WhatsIcon s={17} /> Dar o passo 1
            </button>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
