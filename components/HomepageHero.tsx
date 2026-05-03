"use client";

import { useState, useRef, useEffect } from "react";
import LighthouseSVG from "./LighthouseSVG";
import type { ScoreState } from "@/lib/api";

// FAROL_final.svg viewBox height and Y coordinate of rays bottom
const SVG_H      = 1810.74;
const RAYS_BTM_Y = 430;

const BLOCK_H  = 142; // 130px score + 12px label
const STATUS_GAP = 14;

export default function HomepageHero({ score, state }: { score: number; state: ScoreState }) {
  const heroRef  = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const leaveTimer = useRef<ReturnType<typeof setTimeout>>();

  const [hovered, setHovered] = useState(false);
  const [pos, setPos] = useState({ titleTop: 213, scoreGroupTop: 346 });

  useEffect(() => {
    const update = () => {
      if (!heroRef.current || !titleRef.current) return;
      const heroH     = heroRef.current.offsetHeight;
      const raysBottom = heroH * (RAYS_BTM_Y / SVG_H);
      const titleTop   = raysBottom + 56;
      const titleH     = titleRef.current.offsetHeight;
      setPos({ titleTop: Math.round(titleTop), scoreGroupTop: Math.round(titleTop + titleH + 9) });
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const onEnter = () => { clearTimeout(leaveTimer.current); setHovered(true); };
  const onLeave = () => { leaveTimer.current = setTimeout(() => setHovered(false), 40); };

  const statusTop = pos.scoreGroupTop + BLOCK_H + STATUS_GAP;

  // Render description: split on "<br>" and insert JSX line breaks
  const descLines = state.description.split("<br>");

  return (
    <div className="hero" ref={heroRef} data-score-hovered={hovered || undefined}>
      <LighthouseSVG />

      {/* Title — position set dynamically from lighthouse geometry */}
      <div
        ref={titleRef}
        className="hero-title"
        style={{ top: `${pos.titleTop}px` }}
      >
        WHERE ARE WE<br />IN THE CYCLE?
      </div>

      {/* Score block */}
      <div
        className="score-block"
        style={{ top: `${pos.scoreGroupTop}px` }}
        onMouseEnter={onEnter}
        onMouseLeave={onLeave}
      >
        <div className="score-line" />
        <div className="score-num-wrap">
          <div className="score-num">{score}</div>
          <div className="score-lbl">Cycle Score</div>
        </div>
        <div className="score-line" />
      </div>

      {/* Status pill + description */}
      <div
        className="status-wrap"
        style={{ top: `${statusTop}px`, left: "50%", transform: "translateX(-50%)" }}
        onMouseEnter={onEnter}
        onMouseLeave={onLeave}
      >
        <div className="status-pill" onMouseEnter={onEnter} onMouseLeave={onLeave}>
          {state.label}
        </div>
        <div className="status-desc" onMouseEnter={onEnter} onMouseLeave={onLeave}>
          {descLines.map((line, i) => (
            <span key={i}>{line}{i < descLines.length - 1 && <br />}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
