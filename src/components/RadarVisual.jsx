/* Eco discreto do radar, usado ao fundo do CTA final:
   anéis finos, mira e varredura lenta. */

export default function RadarVisual({ className = "" }) {
  return (
    <div className={`radar ${className}`} aria-hidden="true">
      <svg viewBox="-100 -100 200 200" className="radar-grid">
        {[25, 50, 75, 99].map((r) => (
          <circle key={r} r={r} />
        ))}
        <line x1="-100" y1="0" x2="100" y2="0" />
        <line x1="0" y1="-100" x2="0" y2="100" />
        {Array.from({ length: 72 }).map((_, i) => {
          const ang = (i * 5 * Math.PI) / 180;
          const r1 = i % 6 === 0 ? 92 : 95.5;
          return (
            <line
              key={i}
              className="tick"
              x1={Math.sin(ang) * r1}
              y1={-Math.cos(ang) * r1}
              x2={Math.sin(ang) * 99}
              y2={-Math.cos(ang) * 99}
            />
          );
        })}
      </svg>
      <div className="radar-sweep" />
    </div>
  );
}
