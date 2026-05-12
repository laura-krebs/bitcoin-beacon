"use client";

import { useState, useRef, useEffect, useCallback } from "react";
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
  const scoreY      = Math.round(bottomLimit - (score / 100) * (bottomLimit - topLimit));
  return { armLength, scoreY };
}

function formatScore(score: number): string {
  return score >= 1 && score <= 9 ? `0${score}` : String(score);
}

export default function HomepageHero({ score, state }: { score: number; state: ScoreState }) {
  const heroRef       = useRef<HTMLDivElement>(null);
  const scoreGroupRef = useRef<HTMLDivElement>(null);
  const leaveTimer    = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [layout, setLayout] = useState<Layout>(() => calcLayout(660, score));
  const [groupH, setGroupH] = useState(148);
  const [isHovered, setIsHovered] = useState(false);

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

  const handleEnter = useCallback(() => {
    if (leaveTimer.current) clearTimeout(leaveTimer.current);
    setIsHovered(true);
  }, []);

  const handleLeave = useCallback(() => {
    // Small delay so moving between score group and status tag doesn't flicker
    leaveTimer.current = setTimeout(() => setIsHovered(false), 80);
  }, []);

  const { armLength, scoreY } = layout;
  const lineY     = scoreY - 50;
  const lineLeft  = `calc(50% - ${armLength}px - 5px)`;
  const lineWidth = `${2 * armLength}px`;
  // Tooltip starts 8px to the right of the bounding box right edge (right edge = 50% + armLength)
  const tooltipLeft = `calc(50% + ${armLength - 17}px)`;

  return (
    <div className="hero" ref={heroRef}>
      <LighthouseSVG />

      <div style={{ position: "absolute", top: "384px", left: "48px", zIndex: 10, pointerEvents: "none", maxWidth: "420px" }}>
        <div style={{ fontFamily: "var(--font-goudy), serif", fontSize: "62px", fontWeight: 400, letterSpacing: "-0.01em", lineHeight: "57.8px", color: "#000" }}>
          Where are we<br />in the cycle?
        </div>
        <p style={{ fontFamily: "var(--font-space-grotesk), sans-serif", fontSize: "17px", fontWeight: 400, lineHeight: 1.6, color: "#000", marginTop: "45px", marginBottom: 0 }}>
          Follow Bitcoin&apos;s market cycle with real time data. The higher the score on the beacon, the closer we likely are to a cycle top. The lower the score, the safer it historically has been to accumulate.
        </p>
      </div>

      {/* Score group — bottom edge exactly MARKER_GAP px above the line */}
      <div
        ref={scoreGroupRef}
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
        style={{ position: "absolute", top: `${lineY - MARKER_GAP - groupH}px`, left: lineLeft, width: lineWidth, zIndex: 12, display: "flex", flexDirection: "column", alignItems: "center", cursor: "default" }}
      >
        {/* Flanking lines centered on score number midpoint */}
        <div style={{ display: "flex", alignItems: "center", gap: "30px" }}>
          <div style={{ width: "44px", height: "0.8px", background: "#000", flexShrink: 0, transform: "translateX(-2px)" }} />
          <div className="score-num" style={{ paddingRight: "4px", transform: "translateX(-2px)" }}>{formatScore(score)}</div>
          <div style={{ width: "44px", height: "0.8px", background: "#000", flexShrink: 0, transform: "translateX(-2px)" }} />
        </div>
        <div className="score-lbl" style={{ textAlign: "center", marginTop: "-4px", transform: "translateX(-2px)" }}>Cycle Score</div>
      </div>

      {/* Status tag — close to CYCLE SCORE label */}
      <div
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
        style={{ position: "absolute", top: `${lineY - MARKER_GAP - 1}px`, left: lineLeft, width: lineWidth, zIndex: 12, textAlign: "center", cursor: "default", transform: "translateX(-2px)" }}
      >
        <div className="score-lbl" style={{ fontWeight: 700 }}>{state.label}</div>
      </div>

      {/* Tooltip — fades in on hover, aligned with status tag */}
      <div style={{
        position: "absolute",
        top: `${lineY - MARKER_GAP - groupH + 32}px`,
        transform: "translateY(-50%)",
        left: tooltipLeft,
        zIndex: 20,
        backgroundColor: "#F7931A",
        color: "#000",
        border: "1px solid #000",
        fontFamily: "var(--font-space-grotesk), sans-serif",
        fontSize: "12px",
        fontWeight: 400,
        lineHeight: 1.5,
        padding: "6px 10px",
        borderRadius: "20px",
        maxWidth: "none",
        opacity: isHovered ? 1 : 0,
        transition: "opacity 0.2s ease",
        pointerEvents: "none",
        whiteSpace: "nowrap",
      }}>
        → {state.description}
      </div>
    </div>
  );
}
