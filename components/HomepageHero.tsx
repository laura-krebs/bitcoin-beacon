"use client";

import { useState, useRef, useEffect } from "react";
import LighthouseSVG from "./LighthouseSVG";
import type { ScoreState } from "@/lib/api";

// SVG geometry constants (FAROL_final.svg viewBox 0 0 756.52 1810.74)
const SVG_H      = 1810.74;
const SVG_W      = 756.52;
const ARM_SVG_X  = 745.64; // rightmost arm endpoint x in SVG coords

// Distance from info-block top to pill vertical center (px)
// score-num (130) + score-lbl (12 incl margin-top:2) + gap (8) + pill/2 (11) = 161
const PILL_OFFSET = 161;

interface Layout {
  armLength:    number;
  scoreY:       number;
  infoBlockTop: number;
}

function calcLayout(heroH: number, score: number): Layout {
  const svgScale   = heroH / SVG_H;
  const armLength  = Math.round((ARM_SVG_X - SVG_W / 2) * svgScale); // ~134px
  const topLimit   = heroH * 0.18;
  const bottomLimit = heroH - 60;
  const scoreY     = Math.round(bottomLimit - (score / 100) * (bottomLimit - topLimit));
  const infoBlockTop = Math.max(10, scoreY - PILL_OFFSET);
  return { armLength, scoreY, infoBlockTop };
}

export default function HomepageHero({ score, state }: { score: number; state: ScoreState }) {
  const heroRef = useRef<HTMLDivElement>(null);
  const [layout, setLayout] = useState<Layout>(() => calcLayout(660, score));

  useEffect(() => {
    const update = () => {
      if (!heroRef.current) return;
      setLayout(calcLayout(heroRef.current.offsetHeight, score));
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [score]);

  const { armLength, scoreY, infoBlockTop } = layout;
  const descLines = state.description.split("<br>");

  return (
    <div className="hero" ref={heroRef}>
      <LighthouseSVG />

      {/* Title — top-left corner, fixed */}
      <div className="hero-title" style={{ top: "80px", left: "48px" }}>
        WHERE ARE WE<br />IN THE CYCLE?
      </div>

      {/* Horizontal score line — spans arm length each side from center */}
      <div
        style={{
          position: "absolute",
          top: `${scoreY}px`,
          left: `calc(50% - ${armLength}px)`,
          width: `${2 * armLength}px`,
          height: "0.8px",
          background: "#000",
          zIndex: 10,
          pointerEvents: "none",
        }}
      />

      {/* Info block — right of line, pill vertically aligned with line */}
      <div
        style={{
          position: "absolute",
          top: `${infoBlockTop}px`,
          left: `calc(50% + ${armLength + 15}px)`,
          zIndex: 12,
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        <div className="score-num">{score}</div>
        <div className="score-lbl">Cycle Score</div>
        <div className="status-pill" style={{ marginTop: "8px" }}>
          {state.label}
        </div>
        <div className="status-desc" style={{ marginTop: "7px" }}>
          {descLines.map((line, i) => (
            <span key={i}>{line}{i < descLines.length - 1 && <br />}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
