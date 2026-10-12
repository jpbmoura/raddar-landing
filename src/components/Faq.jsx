import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { FAQ } from "../content";
import SectionHead from "./SectionHead";
import { Stagger, RevealItem, EASE } from "./Reveal";

export default function Faq() {
  const [open, setOpen] = useState(0);

  return (
    <section className="sec" id="faq">
      <div className="ct faq-grid">
        <SectionHead
          className="sticky-head"
          label="Antes de chamar"
          title={<>As perguntas que todo comprador <em>faz primeiro.</em></>}
        />
        <Stagger className="faq" gap={0.07}>
          {FAQ.map((f, i) => {
            const isOpen = open === i;
            return (
              <RevealItem className={`fq ${isOpen ? "is-open" : ""}`} key={f.q}>
                <button
                  className="fq-q"
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                  aria-controls={`fq-${i}`}
                >
                  <span>{f.q}</span>
                  <span className="fq-x" aria-hidden="true" />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`fq-${i}`}
                      className="fq-a"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: EASE }}
                    >
                      <p>{f.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </RevealItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
