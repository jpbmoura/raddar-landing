import { STATS } from "../content";
import Counter from "./Counter";
import { Stagger, RevealItem } from "./Reveal";

export default function StatsStrip() {
  return (
    <section className="stats" aria-label="Números da Raddar">
      <Stagger className="ct stats-grid" gap={0.1}>
        {STATS.map((s) => (
          <RevealItem className="stat" key={s.label}>
            <span className="stat-n">
              {s.prefix}
              <Counter value={s.value} />
              <span className="stat-suf">{s.suffix}</span>
            </span>
            <span className="stat-t">{s.label}</span>
          </RevealItem>
        ))}
      </Stagger>
    </section>
  );
}
