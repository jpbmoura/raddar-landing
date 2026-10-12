/* "DD" da logo Raddar redesenhado em vetor (viewBox 240×120):
   um D e um D espelhado que se cruzam no centro. */

const PATHS = [
  "M116 60 A44 44 0 0 0 72 16 H20 V104 H72 A44 44 0 0 0 116 60",
  "M124 60 A44 44 0 0 1 168 16 H220 V104 H168 A44 44 0 0 1 124 60",
];

const STROKE = 18;

export default function DDMark() {
  return (
    <svg viewBox="0 0 240 120" className="dd" aria-hidden="true">
      <g className="dd-glow" strokeWidth={STROKE} fill="none" strokeLinejoin="miter">
        {PATHS.map((d) => <path key={d} d={d} />)}
      </g>

      <g className="dd-stroke" strokeWidth={STROKE} fill="none" strokeLinejoin="miter">
        {PATHS.map((d) => <path key={d} d={d} />)}
      </g>
    </svg>
  );
}
