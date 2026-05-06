"use client";

import { useState, useRef, useEffect } from "react";
import LighthouseSVG from "./LighthouseSVG";
import type { ScoreState } from "@/lib/api";

const SVG_H     = 1810.74;
const SVG_W     = 756.52;
const ARM_SVG_X = 745.64;

interface Layout { armLength: number; scoreY: number; }

function calcLayout(heroH: number, score: number): Layout {
  const svgScale    = heroH / SVG_H;
  const armLength   = Math.round((ARM_SVG_X - SVG_W / 2) * svgScale);
  // topLimit unchanged — preserves score=100 position
  const topLimit    = heroH * 0.46;
  // status tag bottom at score=1 = lineY+22 = (scoreY-50)+22 ≈ heroH-20
  const bottomLimit = heroH + 12;
  const scoreY      = Math.round(bottomLimit - (score / 100) * (bottomLimit - topLimit));
  return { armLength, scoreY };
}

function formatScore(score: number): string {
  return score >= 1 && score <= 9 ? `0${score}` : String(score);
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

  const { armLength, scoreY } = layout;
  const lineY   = scoreY - 50;
  // All score elements share this bounding box — identical to the marker line
  const lineLeft  = `calc(50% - ${armLength}px - 5px)`;
  const lineWidth = `${2 * armLength}px`;

  return (
    <div className="hero" ref={heroRef}>
      <LighthouseSVG />

      <div style={{ position: "absolute", top: "150px", left: "48px", zIndex: 10, pointerEvents: "none", maxWidth: "420px" }}>
        <div style={{ fontFamily: "var(--font-goudy), serif", fontSize: "62px", fontWeight: 400, letterSpacing: "-0.01em", lineHeight: "57.8px", color: "#000" }}>
          Where are we<br />in the cycle?
        </div>
        <p style={{ fontFamily: "var(--font-goudy), serif", fontSize: "18px", fontWeight: 300, lineHeight: 1.6, color: "#000", marginTop: "20px", marginBottom: 0 }}>
          Follow Bitcoin&apos;s market cycle in real time. The higher the score climbs on the beacon, the stronger the signal. Bitcoin Beacon brings plain language and full context — so anyone can understand what&apos;s behind the most sound money ever created.
        </p>
      </div>

      {/* Score number + Cycle Score label — same bounding box as line, text-align center */}
      <div style={{ position: "absolute", top: `${lineY - 152}px`, left: lineLeft, width: lineWidth, zIndex: 12, display: "flex", flexDirection: "column", alignItems: "center" }}>
        <div className="score-num" style={{ textAlign: "center", width: "100%", transform: "translateX(-5px)" }}>{formatScore(score)}</div>
        <div className="score-lbl" style={{ textAlign: "center" }}>Cycle Score</div>
      </div>

      {/* Horizontal marker line */}
      <div style={{ position: "absolute", top: `${lineY}px`, left: lineLeft, width: lineWidth, height: "0.8px", background: "#000", zIndex: 10, pointerEvents: "none" }} />

      {/* Status tag — same bounding box as line, 8px below */}
      <div style={{ position: "absolute", top: `${lineY + 8}px`, left: lineLeft, width: lineWidth, zIndex: 12, textAlign: "center" }}>
        <div className="score-lbl">{state.label}</div>
      </div>
    </div>
  );
}
