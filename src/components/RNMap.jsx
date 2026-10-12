import { useRef } from "react";
import { useInView } from "motion/react";
import { CITIES } from "../content";

/* Silhueta simplificada do RN (lon, lat), em sentido horário a partir de Tibau. */
const OUTLINE = [
  [-37.25, -4.83], [-37.0, -4.95], [-36.75, -5.07], [-36.45, -5.08], [-36.1, -5.07],
  [-35.8, -5.1], [-35.5, -5.17], [-35.27, -5.42], [-35.2, -5.65], [-35.14, -5.95],
  [-35.06, -6.2], [-34.97, -6.48], [-35.3, -6.5], [-35.65, -6.52], [-36.0, -6.55],
  [-36.3, -6.62], [-36.55, -6.85], [-36.75, -6.98], [-36.95, -6.8], [-37.15, -6.68],
  [-37.4, -6.6], [-37.6, -6.38], [-37.82, -6.3], [-38.05, -6.45], [-38.35, -6.52],
  [-38.58, -6.32], [-38.5, -6.05], [-38.25, -5.78], [-38.0, -5.5], [-37.7, -5.22],
  [-37.45, -4.98],
];

const W = 600;
const H = 380;
const PAD = 14;
const LON0 = -38.6;
const LON1 = -34.95;
const LAT0 = -4.8;
const K = (W - PAD * 2) / (LON1 - LON0);

const project = (lon, lat) => [PAD + (lon - LON0) * K, PAD + (LAT0 - lat) * K];
const POLY = OUTLINE.map(([lon, lat]) => project(lon, lat));

const inside = (x, y) => {
  let hit = false;
  for (let i = 0, j = POLY.length - 1; i < POLY.length; j = i++) {
    const [xi, yi] = POLY[i];
    const [xj, yj] = POLY[j];
    if (yi > y !== yj > y && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi) hit = !hit;
  }
  return hit;
};

const PINS = CITIES.map((c) => ({ ...c, xy: project(c.lon, c.lat) }));
const [NX, NY] = PINS[0].xy; // Natal: origem da onda

const STEP = 10;
const DOTS = [];
for (let y = STEP / 2; y < H; y += STEP) {
  for (let x = STEP / 2; x < W; x += STEP) {
    if (inside(x, y)) DOTS.push({ x, y, d: Math.hypot(x - NX, y - NY) });
  }
}
const MAX_D = Math.max(...DOTS.map((d) => d.d));

export default function RNMap() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -15% 0px" });

  return (
    <svg
      ref={ref}
      viewBox={`0 0 ${W} ${H}`}
      className={`rnmap ${inView ? "is-on" : ""}`}
      role="img"
      aria-label="Mapa do Rio Grande do Norte com Natal, Mossoró e Caicó em destaque"
    >
      <g className="rnmap-dots">
        {DOTS.map((p, i) => (
          <circle
            key={i}
            cx={p.x}
            cy={p.y}
            r="1.7"
            style={{ transitionDelay: `${(p.d / MAX_D) * 1.4}s` }}
          />
        ))}
      </g>
      {PINS.map((c, i) => {
        const [x, y] = c.xy;
        const left = x > W * 0.6;
        return (
          <g
            key={c.name}
            className="pin"
            style={{ transitionDelay: `${0.4 + (Math.hypot(x - NX, y - NY) / MAX_D) * 1.4}s` }}
          >
            <circle className="pin-pulse" cx={x} cy={y} r="6" style={{ animationDelay: `${i * 0.6}s` }} />
            <circle className="pin-dot" cx={x} cy={y} r="4.5" />
            <text x={left ? x - 12 : x + 12} y={y + 4} textAnchor={left ? "end" : "start"}>
              {c.name}
            </text>
          </g>
        );
      })}
    </svg>
  );
}
