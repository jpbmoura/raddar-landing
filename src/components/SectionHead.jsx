import { Reveal } from "./Reveal";

export default function SectionHead({ label, title, sub, className = "" }) {
  return (
    <div className={`sec-head ${className}`}>
      <Reveal as="p" className="label">{label}</Reveal>
      <Reveal as="h2" delay={0.06}>{title}</Reveal>
      {sub && <Reveal as="p" className="sec-sub" delay={0.12}>{sub}</Reveal>}
    </div>
  );
}
