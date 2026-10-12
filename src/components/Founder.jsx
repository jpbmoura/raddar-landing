import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import founder from "../assets/founder.webp";
import { FOUNDER } from "../content";
import { Reveal } from "./Reveal";

export default function Founder() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [-28, 28]);

  return (
    <section className="sec founder" ref={ref}>
      <div className="ct founder-grid">
        <Reveal className="founder-photo">
          <div className="founder-frame">
            <motion.img
              src={founder}
              alt={`${FOUNDER.name}, fundador da Raddar`}
              loading="lazy"
              width="480"
              height="600"
              style={{ y, scale: 1.12 }}
            />
          </div>
          <span className="founder-tag mono">28 anos de varejo no RN</span>
        </Reveal>

        <div className="founder-copy">
          <Reveal as="p" className="label">Quem atende você</Reveal>
          <Reveal as="blockquote" delay={0.08}>
            <span className="quote-mark" aria-hidden="true">“</span>
            {FOUNDER.quote}
          </Reveal>
          <Reveal className="founder-sign" delay={0.16}>
            <strong>{FOUNDER.name}</strong>
            <span>{FOUNDER.role}</span>
          </Reveal>
          <Reveal className="founder-past" delay={0.22}>
            <span className="label">Experiência com</span>
            <p>{FOUNDER.pastBrands.join("  ·  ")}</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
