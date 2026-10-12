import { motion } from "motion/react";
import { MSG, go } from "../content";
import { WhatsIcon, ArrowIcon } from "./Icons";
import DDMark from "./DDMark";
import { EASE } from "./Reveal";

const line = {
  hidden: { opacity: 0, y: 28, filter: "blur(10px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.9, ease: EASE } },
};

const TRUST = ["Resposta no mesmo dia", "Sem pedido mínimo pra conversar", "Nota fiscal direto da fábrica"];

export default function Hero() {
  return (
    <section className="hero" id="topo">
      <div className="ct hero-grid">
        <motion.div
          className="hero-copy"
          initial="hidden"
          animate="show"
          variants={{ show: { transition: { staggerChildren: 0.09, delayChildren: 0.15 } } }}
        >
          <motion.p className="eyebrow" variants={line}>
            <span className="live-dot" />
            Representação comercial · Varejo do RN
          </motion.p>

          <h1 className="hero-title">
            <motion.span className="hero-line" variants={line}>Compre</motion.span>{" "}
            <motion.span className="hero-line" variants={line}>
              <em>direto da indústria.</em>
            </motion.span>
          </h1>

          <motion.p className="hero-sub" variants={line}>
            A margem do intermediário fica com você.
          </motion.p>

          <motion.p className="lead" variants={line}>
            A Raddar gere mais de 10 marcas líderes de alimentos, limpeza e descartáveis. Seu pedido
            sai faturado direto da fábrica, com atendimento de quem vende para o varejo potiguar há
            28 anos.
          </motion.p>

          <motion.div className="hero-cta" variants={line}>
            <button className="bt bt-lg bt-glow" onClick={() => go(MSG.hero)}>
              <WhatsIcon s={17} /> Ver preços no WhatsApp
            </button>
            <a href="#marcas" className="bt-ghost">
              Ver as marcas <ArrowIcon />
            </a>
          </motion.div>

          <motion.ul className="trust" variants={line}>
            {TRUST.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </motion.ul>
        </motion.div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, y: 12, filter: "blur(12px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.2, ease: EASE, delay: 0.4 }}
        >
          <DDMark />
        </motion.div>
      </div>
    </section>
  );
}
