import { useEffect, useRef } from "react";
import { animate, useInView, useReducedMotion } from "motion/react";

/* Conta de 0 até `value` quando entra na tela. */
export default function Counter({ value, duration = 1.6 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -10% 0px" });
  const reduce = useReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!el || !inView) return;
    if (reduce) {
      el.textContent = value;
      return;
    }
    const ctrl = animate(0, value, {
      duration,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => (el.textContent = Math.round(v)),
    });
    return () => ctrl.stop();
  }, [inView, value, duration, reduce]);

  return <span ref={ref}>0</span>;
}
