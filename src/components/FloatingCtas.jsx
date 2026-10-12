import { AnimatePresence, motion } from "motion/react";
import { MSG, go } from "../content";
import { WhatsIcon } from "./Icons";
import { EASE } from "./Reveal";

/* Barra fixa no mobile + botão redondo no desktop, após o hero. */
export default function FloatingCtas({ on }) {
  return (
    <AnimatePresence>
      {on && (
        <>
          <motion.div
            key="mbar"
            className="mbar"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ duration: 0.45, ease: EASE }}
          >
            <button className="bt mbar-bt" onClick={() => go(MSG.float)}>
              <WhatsIcon s={18} /> Ver preços no WhatsApp
            </button>
          </motion.div>
          <motion.button
            key="float"
            className="float"
            onClick={() => go(MSG.float)}
            aria-label="Falar no WhatsApp"
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.6 }}
            transition={{ duration: 0.4, ease: EASE }}
          >
            <WhatsIcon s={22} />
          </motion.button>
        </>
      )}
    </AnimatePresence>
  );
}
