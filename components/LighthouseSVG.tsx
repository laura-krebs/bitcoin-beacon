// viewBox "-14 0 1200 980": x=-14 aligns circle (cx=585.65) with container center
// Removed: two horizontal rays (y2=369 left/right), stem, hg lines, tower walls
export default function LighthouseSVG() {
  const cx = 585.65;
  const cy = 369.17;
  const r  = 38;

  return (
    <svg
      className="hero-svg"
      viewBox="-14 0 1200 980"
      preserveAspectRatio="xMidYMin meet"
      style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
      aria-hidden
    >
      <g className="rays">
        <line className="ray" x1={cx} y1={cy} x2="590.55" y2="135"/>
        <line className="ray" x1={cx} y1={cy} x2="638"    y2="145"/>
        <line className="ray" x1={cx} y1={cy} x2="680"    y2="175"/>
        <line className="ray" x1={cx} y1={cy} x2="789"    y2="248"/>
        <line className="ray" x1={cx} y1={cy} x2="857"    y2="314"/>
        {/* x2=1100 y2=369 removed — horizontal right */}
        <line className="ray" x1={cx} y1={cy} x2="980"    y2="550"/>
        <line className="ray" x1={cx} y1={cy} x2="850"    y2="700"/>
        <line className="ray" x1={cx} y1={cy} x2="700"    y2="980"/>
        <line className="ray" x1={cx} y1={cy} x2="620"    y2="980"/>
        <line className="ray" x1={cx} y1={cy} x2="550"    y2="980"/>
        <line className="ray" x1={cx} y1={cy} x2="470"    y2="980"/>
        <line className="ray" x1={cx} y1={cy} x2="320"    y2="850"/>
        <line className="ray" x1={cx} y1={cy} x2="190"    y2="700"/>
        <line className="ray" x1={cx} y1={cy} x2="80"     y2="550"/>
        {/* x2=70 y2=369 removed — horizontal left */}
        <line className="ray" x1={cx} y1={cy} x2="310"    y2="248"/>
        <line className="ray" x1={cx} y1={cy} x2="378"    y2="175"/>
        <line className="ray" x1={cx} y1={cy} x2="490"    y2="145"/>
        <line className="ray" x1={cx} y1={cy} x2="532"    y2="135"/>
        <line className="ray" x1={cx} y1={cy} x2="558"    y2="132"/>
        <line className="ray" x1={cx} y1={cy} x2="613"    y2="132"/>
        <line className="ray" x1={cx} y1={cy} x2="720"    y2="200"/>
      </g>

      <circle className="ln" cx={cx} cy={cy} r={r}/>
      <circle cx={cx} cy={cy} r="3.5" fill="black" opacity="0.25"/>
    </svg>
  );
}
