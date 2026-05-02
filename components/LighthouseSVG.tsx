export default function LighthouseSVG({ height = 700 }: { height?: number }) {
  const vbWidth = 800;
  const vbHeight = 760;
  const cx = vbWidth / 2; // 400

  // Lantern: separate circle at top
  const lanternCy = 72;
  const lanternROuter = 22;
  const lanternRInner = 9;

  // Tower walls: start below the lantern with a visible gap
  const towerTopY = lanternCy + lanternROuter + 10; // 104
  const towerTopHalfW = 16;
  const towerBottomY = vbHeight + 40; // bleeds off bottom
  const towerBottomHalfW = 44;

  // Horizontal bands inside tower
  const bandCount = 9;
  const bands = Array.from({ length: bandCount }, (_, i) => {
    const t = (i + 1) / (bandCount + 1);
    const y = towerTopY + t * (towerBottomY - towerTopY);
    const halfW = towerTopHalfW + t * (towerBottomHalfW - towerTopHalfW);
    return { y, lx: cx - halfW, rx: cx + halfW };
  });

  // Rays radiating from lantern in all directions
  // Angles: 0=right, 90=down (SVG coords), 270=up
  // Lengths vary by direction (longer horizontal/downward, shorter upward)
  const RAYS: [number, number][] = [
    [0, 260], [15, 150], [30, 120], [45, 105],
    [60, 130], [75, 160], [90, 200],
    [105, 160], [120, 130], [135, 105],
    [150, 120], [165, 150], [180, 260],
    [195, 120], [210, 90], [225, 55],
    [240, 60], [255, 68], [270, 80],
    [285, 68], [300, 60], [315, 55],
    [330, 90], [345, 120],
  ];

  return (
    <svg
      viewBox={`0 0 ${vbWidth} ${vbHeight}`}
      width="100%"
      height="100%"
      preserveAspectRatio="xMidYMin slice"
      style={{ position: "absolute", inset: 0, pointerEvents: "none" }}
      aria-hidden
    >
      {/* Tower left wall */}
      <line
        x1={cx - towerTopHalfW} y1={towerTopY}
        x2={cx - towerBottomHalfW} y2={towerBottomY}
        stroke="black" strokeWidth="0.55" opacity="0.2"
      />
      {/* Tower right wall */}
      <line
        x1={cx + towerTopHalfW} y1={towerTopY}
        x2={cx + towerBottomHalfW} y2={towerBottomY}
        stroke="black" strokeWidth="0.55" opacity="0.2"
      />
      {/* Center axis */}
      <line
        x1={cx} y1={towerTopY}
        x2={cx} y2={towerBottomY}
        stroke="black" strokeWidth="0.4" opacity="0.12"
      />

      {/* Horizontal bands inside tower */}
      {bands.map(({ y, lx, rx }, i) => (
        <g key={i}>
          <line x1={lx} y1={y} x2={rx} y2={y} stroke="black" strokeWidth="0.4" opacity="0.14" />
          <line x1={lx - 4} y1={y} x2={lx + 4} y2={y} stroke="black" strokeWidth="0.5" opacity="0.22" />
          <line x1={rx - 4} y1={y} x2={rx + 4} y2={y} stroke="black" strokeWidth="0.5" opacity="0.22" />
        </g>
      ))}

      {/* Lantern (separate element at top, with gap above tower) */}
      <circle cx={cx} cy={lanternCy} r={lanternROuter} fill="none" stroke="black" strokeWidth="0.55" opacity="0.22" />
      <circle cx={cx} cy={lanternCy} r={lanternRInner} fill="black" opacity="0.12" />

      {/* Light rays radiating in all directions */}
      {RAYS.map(([angleDeg, len], i) => {
        const rad = (angleDeg * Math.PI) / 180;
        const x2 = cx + Math.cos(rad) * len;
        const y2 = lanternCy + Math.sin(rad) * len;
        return (
          <line
            key={i}
            x1={cx} y1={lanternCy}
            x2={x2} y2={y2}
            stroke="black" strokeWidth="0.4" opacity="0.13"
          />
        );
      })}
    </svg>
  );
}
