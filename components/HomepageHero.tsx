"use client";

import { useState } from "react";
import LighthouseSVG from "./LighthouseSVG";

interface ScoreState {
  label: string;
  description: string;
}

interface HomepageHeroProps {
  score: number;
  state: ScoreState;
}

export default function HomepageHero({ score, state }: HomepageHeroProps) {
  const [isHovered, setIsHovered] = useState(false);

  const heroHeight = 700;
  // Vertical range: score=0 → near bottom, score=100 → near top (below title)
  const apexY = 155;
  const baseY = 635;
  const scoreY = baseY - (score / 100) * (baseY - apexY);

  const scoreColor = isHovered ? "#F7931A" : "#ffffff";
  const lineOpacity = isHovered ? "rgba(247,147,26,0.55)" : "rgba(255,255,255,0.1)";

  return (
    <section
      style={{
        position: "relative",
        minHeight: `${heroHeight}px`,
        overflow: "hidden",
        backgroundColor: "#000",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <LighthouseSVG height={heroHeight} theme="dark" isHovered={isHovered} />

      {/* Title — large, centered, overlays rays */}
      <div
        style={{
          position: "absolute",
          top: "100px",
          left: 0,
          right: 0,
          textAlign: "center",
          zIndex: 10,
          pointerEvents: "none",
        }}
      >
        <span
          style={{
            fontSize: "18px",
            fontWeight: 400,
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.85)",
          }}
        >
          WHERE ARE WE IN THE CYCLE?
        </span>
      </div>

      {/* Horizontal marker line at score position */}
      <div
        style={{
          position: "absolute",
          top: scoreY,
          left: 0,
          right: 0,
          height: 0,
          borderTop: `0.5px solid ${lineOpacity}`,
          zIndex: 8,
          transition: "border-color 0.35s ease",
          pointerEvents: "none",
        }}
      />

      {/* Score block + status pill — move together with score */}
      <div
        style={{
          position: "absolute",
          top: scoreY,
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 10,
          display: "flex",
          alignItems: "center",
          gap: "44px",
        }}
      >
        {/* Score number + label */}
        <div style={{ textAlign: "center" }}>
          <div
            style={{
              fontSize: "118px",
              fontWeight: 300,
              letterSpacing: "-0.04em",
              lineHeight: 1,
              color: scoreColor,
              transition: "color 0.35s ease",
            }}
          >
            {score}
          </div>
          <div
            style={{
              fontSize: "14px",
              color: "rgba(255,255,255,0.5)",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              marginTop: "8px",
            }}
          >
            Cycle Score
          </div>
        </div>

        {/* Status pill + description */}
        <div style={{ maxWidth: "210px" }}>
          <div
            style={{
              display: "inline-block",
              border: "0.5px solid rgba(255,255,255,0.35)",
              padding: "5px 13px",
              marginBottom: "10px",
            }}
          >
            <span
              style={{
                fontSize: "11px",
                fontWeight: 500,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "#fff",
              }}
            >
              {state.label}
            </span>
          </div>
          <p
            style={{
              fontSize: "12px",
              color: "rgba(255,255,255,0.5)",
              letterSpacing: "0.04em",
              lineHeight: 1.65,
            }}
          >
            {state.description}
          </p>
        </div>
      </div>
    </section>
  );
}
