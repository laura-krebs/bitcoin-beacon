"use client";

import { useState, useRef } from "react";
import LighthouseSVG from "./LighthouseSVG";
import type { ScoreState } from "@/lib/api";

interface Props {
  score: number;
  state: ScoreState;
}

const HERO_HEIGHT = 660;
const BLOCK_HEIGHT = 130; // score number (~118px) + label (~12px)
const STATUS_GAP   = 14;

export default function HomepageHero({ score, state }: Props) {
  const [hovered, setHovered] = useState(false);
  const leaveTimer = useRef<ReturnType<typeof setTimeout>>();

  // Debounced leave — prevents flicker when moving between score-block and status-wrap
  const onEnter = () => {
    clearTimeout(leaveTimer.current);
    setHovered(true);
  };
  const onLeave = () => {
    leaveTimer.current = setTimeout(() => setHovered(false), 40);
  };

  // score=100 → top (near lantern); score=0 → base of lighthouse
  const scoreY  = Math.round(200 + (1 - score / 100) * 320);
  const statusY = Math.min(scoreY + BLOCK_HEIGHT + STATUS_GAP, HERO_HEIGHT - 80);

  return (
    <div className="hero" data-score-hovered={hovered || undefined}>
      <LighthouseSVG />

      <div className="hero-title">
        WHERE ARE WE<br />IN THE CYCLE?
      </div>

      {/* Score block — onMouseEnter/Leave trigger unified hover */}
      <div
        className="score-block"
        style={{ top: `${scoreY}px` }}
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

      {/* Status: below score block, centered — same hover zone */}
      <div
        className="status-wrap"
        style={{ top: `${statusY}px`, left: "50%", transform: "translateX(-50%)" }}
        onMouseEnter={onEnter}
        onMouseLeave={onLeave}
      >
        <div className="status-pill" onMouseEnter={onEnter} onMouseLeave={onLeave}>{state.label}</div>
        <div className="status-desc" onMouseEnter={onEnter} onMouseLeave={onLeave}>{state.description}</div>
      </div>
    </div>
  );
}
