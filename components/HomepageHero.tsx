import LighthouseSVG from "./LighthouseSVG";
import type { ScoreState } from "@/lib/api";

interface Props {
  score: number;
  state: ScoreState;
}

export default function HomepageHero({ score, state }: Props) {
  // Position score block vertically based on score value.
  // Calibrated so score=38 → top≈391px (matches mockup), score=100 → 190px, score=0 → 520px.
  const scoreY = Math.max(190, Math.round(520 - (score / 100) * 330));
  const statusY = scoreY + 18;

  return (
    <div className="hero">
      <LighthouseSVG />

      <div className="hero-title">
        WHERE ARE WE<br />IN THE CYCLE?
      </div>

      <div className="score-block" style={{ top: `${scoreY}px` }}>
        <div className="score-line" />
        <div className="score-num-wrap">
          <div className="score-num">{score}</div>
          <div className="score-lbl">Cycle Score</div>
        </div>
        <div className="score-line" />
      </div>

      <div className="status-wrap" style={{ top: `${statusY}px`, left: "calc(50% + 175px)" }}>
        <div className="status-pill">{state.label}</div>
        <div className="status-desc">{state.description}</div>
      </div>
    </div>
  );
}
