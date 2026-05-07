"use client";

import { useState, useRef, useEffect } from "react";
import LighthouseSVG from "./LighthouseSVG";
import type { ScoreState } from "@/lib/api";

const SVG_H     = 1810.74;
const SVG_W     = 756.52;
const ARM_SVG_X = 745.64;
// Gap in px above and below the marker line (applied symmetrically)
const MARKER_GAP = 10;

interface Layout { armLength: number; scoreY: number; }

function calcLayout(heroH: number, score: number): Layout {
  const svgScale    = heroH / SVG_H;
  const armLength   = Math.round((ARM_SVG_X - SVG_W / 2) * svgScale);
  const topLimit    = heroH * 0.46;
  const bottomLimit = heroH + 12;
  const scoreY      = Math.round(bottomLimit - (score / 100) * (bottomLimit - topLimit));
  return { armLength, scoreY };
}

function formatScore(score: number): string {
  return score >= 1 && score <= 9 ? `0${score}` : String(score);
}

export default function HomepageHero({ score, state }: { score: number; state: ScoreState }) {
  const heroRef       = useRef<HTMLDivElement>(null);
  const scoreGroupRef = useRef<HTMLDivElement>(null);
  const [layout, setLayout]   = useState<Layout>(() => calcLayout(660, score));
  const [groupH, setGroupH]   = useState(148);

  useEffect(() => {
    const update = () => {
      if (!heroRef.current) return;
      setGroupH(scoreGroupRef.current?.offsetHeight ?? 148);
      setLayout(calcLayout(heroRef.current.offsetHeight, score));
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [score]);

  const { armLength, scoreY } = layout;
  const lineY    = scoreY - 50;
  const lineLeft  = `calc(50% - ${armLength}px - 5px)`;
  const lineWidth = `${2 * armLength}px`;

  return (
    <div className="hero" ref={heroRef}>
      <LighthouseSVG />

      <div style={{ position: "absolute", top: "190px", left: "48px", zIndex: 10, pointerEvents: "none", maxWidth: "420px" }}>
        <div style={{ fontFamily: "var(--font-goudy), serif", fontSize: "62px", fontWeight: 400, letterSpacing: "-0.01em", lineHeight: "57.8px", color: "#000" }}>
          Where are we<br />in the cycle?
        </div>
        <p style={{ fontFamily: "var(--font-space-grotesk), sans-serif", fontSize: "17px", fontWeight: 300, lineHeight: 1.6, color: "#000", marginTop: "145px", marginBottom: 0 }}>
          Follow Bitcoin&apos;s market cycle in real time.<br />The higher the score, the closer we likely<br />are to a cycle top. The lower the score,<br />the safer it historically has been to accumulate.<br />Bitcoin Beacon brings plain language and full<br />context, so anyone can understand what&apos;s behind<br />the most sound money ever created.
        </p>
      </div>

      {/* Score group — bottom edge exactly MARKER_GAP px above the line */}
      <div
        ref={scoreGroupRef}
        style={{ position: "absolute", top: `${lineY - MARKER_GAP - groupH}px`, left: lineLeft, width: lineWidth, zIndex: 12, display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <div className="score-num" style={{ textAlign: "center", width: "100%", transform: "translateX(-5px)" }}>{formatScore(score)}</div>
        <div className="score-lbl" style={{ textAlign: "center" }}>Cycle Score</div>
      </div>

      {/* Horizontal marker line */}
      <div style={{ position: "absolute", top: `${lineY}px`, left: lineLeft, width: lineWidth, height: "0.8px", background: "#000", zIndex: 10, pointerEvents: "none" }} />

      {/* Status tag — exactly MARKER_GAP px below the line */}
      <div style={{ position: "absolute", top: `${lineY + MARKER_GAP}px`, left: lineLeft, width: lineWidth, zIndex: 12, textAlign: "center" }}>
        <div className="score-lbl">{state.label}</div>
      </div>
    </div>
  );
}
