import { forwardRef } from "react";
import { motion } from "motion/react";

export const EASE = [0.22, 1, 0.36, 1];

const item = {
  hidden: { opacity: 0, y: 18, filter: "blur(6px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.75, ease: EASE } },
};

/* Revela um bloco ao entrar na tela (uma vez só). */
export function Reveal({ as = "div", delay = 0, className, children, ...rest }) {
  const M = motion[as];
  return (
    <M
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      variants={item}
      transition={{ delay }}
      {...rest}
    >
      {children}
    </M>
  );
}

/* Container que escalona a entrada dos filhos <RevealItem>. */
export const Stagger = forwardRef(function Stagger(
  { as = "div", gap = 0.08, delay = 0, className, children, ...rest },
  ref
) {
  const M = motion[as];
  return (
    <M
      ref={ref}
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      variants={{ hidden: {}, show: { transition: { staggerChildren: gap, delayChildren: delay } } }}
      {...rest}
    >
      {children}
    </M>
  );
});

export function RevealItem({ as = "div", className, children, ...rest }) {
  const M = motion[as];
  return (
    <M className={className} variants={item} {...rest}>
      {children}
    </M>
  );
}
