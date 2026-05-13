"use client";

import { useState, useRef, useEffect } from "react";
import LighthouseSVG from "./LighthouseSVG";
import type { ScoreState } from "@/lib/api";

const SVG_H     = 1810.74;
const SVG_W     = 756.52;
const ARM_SVG_X = 745.64;
const MARKER_GAP = 10;

interface Layout { armLength: number; scoreY: number; }

function calcLayout(heroH: number, score: number): Layout {
  const svgScale    = heroH / SVG_H;
  const armLength   = Math.round((ARM_SVG_X - SVG_W / 2) * svgScale);
  const topLimit    = heroH * 0.46 + 175;
  const bottomLimit = heroH + 12;
  const score1Y     = bottomLimit - 0.01 * (bottomLimit - topLimit) + 10;
  const score100Y   = topLimit - 52;
  const scoreY      = Math.round(score1Y + ((score - 1) / 99) * (score100Y - score1Y));
  return { armLength, scoreY };
}

function formatScore(score: number): string {
  return score >= 1 && score <= 9 ? `0${score}` : String(score);
}

export default function HomepageHero({ score, state }: { score: number; state: ScoreState }) {
  const heroRef       = useRef<HTMLDivElement>(null);
  const scoreGroupRef = useRef<HTMLDivElement>(null);
  const [layout, setLayout] = useState<Layout>(() => calcLayout(660, score));
  const [groupH, setGroupH] = useState(148);
  const [popupOpen, setPopupOpen] = useState(false);

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
  const lineLeft = `calc(50% - ${armLength}px - 5px)`;
  const lineWidth = `${2 * armLength}px`;

  return (
    <div className="hero" ref={heroRef}>
      <LighthouseSVG />

      <div className="hero-text-overlay" style={{ position: "absolute", top: "384px", left: "48px", zIndex: 10, pointerEvents: "none", maxWidth: "calc(50% - 198px)" }}>
        <div style={{ fontFamily: "var(--font-goudy), serif", fontSize: "52px", fontWeight: 400, letterSpacing: "-0.01em", lineHeight: 1.05, color: "#000" }}>
          Where are we<br />in the cycle?
        </div>
        <p style={{ fontFamily: "var(--font-space-grotesk), sans-serif", fontSize: "17px", fontWeight: 400, lineHeight: 1.6, color: "#000", marginTop: "45px", marginBottom: 0, maxWidth: "440px" }}>
          Follow Bitcoin&apos;s market cycle with real time data.<br />The higher the score on the beacon, the closer we likely are to a cycle top. The lower the score, the safer it historically has been to accumulate.
        </p>
      </div>

      {/* Score group — bottom edge exactly MARKER_GAP px above the line */}
      <div
        ref={scoreGroupRef}
        onClick={() => setPopupOpen(v => !v)}
        style={{ position: "absolute", top: `${lineY - MARKER_GAP - groupH}px`, left: lineLeft, width: lineWidth, zIndex: 12, display: "flex", flexDirection: "column", alignItems: "center", cursor: "pointer" }}
      >
        {/* Flanking lines centered on score number midpoint */}
        <div style={{ display: "flex", alignItems: "center", gap: "30px" }}>
          <div className="line-left" style={{ width: "44px", height: "0.8px", background: "#000", flexShrink: 0 }} />
          <div className="score-num" style={{ paddingRight: "4px", transform: "translateX(-2px)" }}>{formatScore(score)}</div>
          <div className="line-right" style={{ width: "44px", height: "0.8px", background: "#000", flexShrink: 0 }} />
        </div>
        <div className="score-lbl" style={{ textAlign: "center", marginTop: "-4px", transform: "translateX(-2px)" }}>Cycle Score</div>
      </div>

      {/* Status tag — close to CYCLE SCORE label */}
      <div
        style={{ position: "absolute", top: `${lineY - MARKER_GAP - 1}px`, left: lineLeft, width: lineWidth, zIndex: 12, textAlign: "center", cursor: "default", transform: "translateX(-2px)" }}
      >
        <div className="score-lbl" style={{ fontWeight: 700 }}>{state.label}</div>
      </div>

      {/* Score popup — tap/click on all screens */}
      {popupOpen && (
        <>
          <div onClick={() => setPopupOpen(false)} style={{ position: "fixed", inset: 0, zIndex: 199 }} />
          <div style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            background: "#F7931A",
            border: "1px solid #000",
            borderRadius: "4px",
            padding: "24px 40px 24px 24px",
            width: "min(320px, calc(100vw - 64px))",
            zIndex: 200,
            fontFamily: "var(--font-space-grotesk), sans-serif",
            fontSize: "14px",
            fontWeight: 400,
            lineHeight: 1.6,
            color: "#000",
            textAlign: "center",
          }}>
            <button onClick={() => setPopupOpen(false)} style={{ position: "absolute", top: "10px", right: "12px", background: "none", border: "none", cursor: "pointer", fontSize: "18px", color: "#000", lineHeight: 1, padding: 0 }}>×</button>
            {state.description}
          </div>
        </>
      )}
    </div>
  );
}
