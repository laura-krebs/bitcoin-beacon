export default function LighthouseSVG({ height = 700 }: { height?: number }) {
  const width = 800;
  const apexX = width / 2;
  const apexY = 68;
  const coneHalfAngle = 38; // degrees from center axis
  const baseY = height + 20;

  // Cone boundary lines
  const rad = (coneHalfAngle * Math.PI) / 180;
  const leftBaseX = apexX - Math.tan(rad) * (baseY - apexY);
  const rightBaseX = apexX + Math.tan(rad) * (baseY - apexY);

  // Horizontal guide lines inside cone
  const guideLines: number[] = [];
  const guideCount = 10;
  for (let i = 1; i <= guideCount; i++) {
    guideLines.push(apexY + (i / (guideCount + 1)) * (baseY - apexY));
  }

  // Light rays from apex
  const rayAngles = [-55, -42, -28, -14, 0, 14, 28, 42, 55];
  const rayLength = 60;

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      width="100%"
      height="100%"
      preserveAspectRatio="xMidYMid slice"
      style={{ position: "absolute", inset: 0, pointerEvents: "none" }}
      aria-hidden
    >
      {/* Cone left boundary */}
      <line
        x1={apexX}
        y1={apexY}
        x2={leftBaseX}
        y2={baseY}
        stroke="black"
        strokeWidth="0.55"
        opacity="0.18"
      />
      {/* Cone right boundary */}
      <line
        x1={apexX}
        y1={apexY}
        x2={rightBaseX}
        y2={baseY}
        stroke="black"
        strokeWidth="0.55"
        opacity="0.18"
      />
      {/* Center axis */}
      <line
        x1={apexX}
        y1={apexY}
        x2={apexX}
        y2={baseY}
        stroke="black"
        strokeWidth="0.45"
        opacity="0.14"
      />

      {/* Guide lines inside cone */}
      {guideLines.map((y, i) => {
        const t = (y - apexY) / (baseY - apexY);
        const lx = apexX - Math.tan(rad) * (y - apexY);
        const rx = apexX + Math.tan(rad) * (y - apexY);
        const tickLen = 4;
        return (
          <g key={i}>
            <line
              x1={lx}
              y1={y}
              x2={rx}
              y2={y}
              stroke="black"
              strokeWidth="0.4"
              opacity={0.1 + t * 0.08}
            />
            {/* tick marks at cone boundaries */}
            <line x1={lx - tickLen} y1={y} x2={lx + tickLen} y2={y} stroke="black" strokeWidth="0.5" opacity="0.2" />
            <line x1={rx - tickLen} y1={y} x2={rx + tickLen} y2={y} stroke="black" strokeWidth="0.5" opacity="0.2" />
          </g>
        );
      })}

      {/* Light source circle */}
      <circle
        cx={apexX}
        cy={apexY}
        r={6}
        fill="none"
        stroke="black"
        strokeWidth="0.55"
        opacity="0.22"
      />
      <circle cx={apexX} cy={apexY} r={2.5} fill="black" opacity="0.15" />

      {/* Radiating rays */}
      {rayAngles.map((angle, i) => {
        const radAngle = ((angle - 90) * Math.PI) / 180;
        const x2 = apexX + Math.cos(radAngle) * rayLength;
        const y2 = apexY + Math.sin(radAngle) * rayLength;
        return (
          <line
            key={i}
            x1={apexX}
            y1={apexY}
            x2={x2}
            y2={y2}
            stroke="black"
            strokeWidth="0.4"
            opacity="0.14"
          />
        );
      })}
    </svg>
  );
}
