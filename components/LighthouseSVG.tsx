interface LighthouseSVGProps {
  height?: number;
  theme?: "light" | "dark";
  isHovered?: boolean;
}

export default function LighthouseSVG({
  height = 700,
  theme = "light",
  isHovered = false,
}: LighthouseSVGProps) {
  const vbWidth = 800;
  const vbHeight = 760;
  const cx = vbWidth / 2; // 400

  const lanternCy = 72;
  const lanternROuter = 22;
  const lanternRInner = 9;

  const stroke = theme === "dark" ? "white" : "black";

  // First horizontal band: just below the lantern, within ray zone
  const towerTopY = lanternCy + lanternROuter + 10; // 104
  const towerBottomY = vbHeight + 40;             // 800
  const towerTopHalfW = 16;
  const towerBottomHalfW = 44;
  // t = 1/10 → first of 9 bands
  const bandT = 1 / 10;
  const bandY = towerTopY + bandT * (towerBottomY - towerTopY);
  const bandHalfW = towerTopHalfW + bandT * (towerBottomHalfW - towerTopHalfW);

  // Rays: 0=right, 90=down, 270=up (standard math, SVG y-down)
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
      {/* Stem: vertical line from top of SVG down to the lantern */}
      <line
        x1={cx} y1={0}
        x2={cx} y2={lanternCy - lanternROuter}
        stroke={stroke} strokeWidth="0.55"
        opacity={theme === "dark" ? "0.25" : "0.2"}
      />

      {/* Lantern */}
      <circle
        cx={cx} cy={lanternCy} r={lanternROuter}
        fill="none" stroke={stroke} strokeWidth="0.55"
        opacity={theme === "dark" ? "0.35" : "0.22"}
      />
      <circle
        cx={cx} cy={lanternCy} r={lanternRInner}
        fill={stroke} opacity={theme === "dark" ? "0.18" : "0.12"}
      />

      {/* First horizontal band only (near rays) */}
      <g>
        <line
          x1={cx - bandHalfW} y1={bandY}
          x2={cx + bandHalfW} y2={bandY}
          stroke={stroke} strokeWidth="0.4"
          opacity={theme === "dark" ? "0.22" : "0.14"}
        />
        <line
          x1={cx - bandHalfW - 4} y1={bandY}
          x2={cx - bandHalfW + 4} y2={bandY}
          stroke={stroke} strokeWidth="0.5"
          opacity={theme === "dark" ? "0.32" : "0.22"}
        />
        <line
          x1={cx + bandHalfW - 4} y1={bandY}
          x2={cx + bandHalfW + 4} y2={bandY}
          stroke={stroke} strokeWidth="0.5"
          opacity={theme === "dark" ? "0.32" : "0.22"}
        />
      </g>

      {/* Light rays — animated when hovered */}
      <g className={isHovered ? "rays-animated" : ""}>
        {RAYS.map(([angleDeg, len], i) => {
          const rad = (angleDeg * Math.PI) / 180;
          const x2 = cx + Math.cos(rad) * len;
          const y2 = lanternCy + Math.sin(rad) * len;
          return (
            <line
              key={i}
              x1={cx} y1={lanternCy}
              x2={x2} y2={y2}
              stroke={stroke} strokeWidth="0.4"
              opacity="0.13"
            />
          );
        })}
      </g>
    </svg>
  );
}
