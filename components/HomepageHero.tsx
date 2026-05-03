import LighthouseSVG from "./LighthouseSVG";
import type { ScoreState } from "@/lib/api";

interface Props {
  score: number;
  state: ScoreState;
}

const HERO_HEIGHT = 660;
// Score block height: 118px number + 2px margin + 10px label ≈ 130px
const BLOCK_HEIGHT = 130;
const STATUS_GAP   = 14;

export default function HomepageHero({ score, state }: Props) {
  // score=100 → near lantern (top of lighthouse area); score=0 → base
  // Linear interpolation: apexY=200 (high, below title), baseY=520 (low, near hero bottom)
  const scoreY  = Math.round(200 + (1 - score / 100) * 320);
  // Status pill: below the score block, horizontally centered
  const statusY = Math.min(scoreY + BLOCK_HEIGHT + STATUS_GAP, HERO_HEIGHT - 80);

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

      {/* Status: below score block, centered on page */}
      <div
        className="status-wrap"
        style={{ top: `${statusY}px`, left: "50%", transform: "translateX(-50%)" }}
      >
        <div className="status-pill">{state.label}</div>
        <div className="status-desc">{state.description}</div>
      </div>
    </div>
  );
}
