"use client";

import React, { useState, useRef, useEffect, useLayoutEffect } from "react";
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

interface HomepageHeroProps {
  score: number;
  state: ScoreState;
  heroTitle?: React.ReactNode;
  heroSubtitle?: React.ReactNode;
  heroTextTop?: string;
  heroTextMaxWidth?: string;
  heroSubtitleMaxWidth?: string;
}

export default function HomepageHero({ score, state, heroTitle, heroSubtitle, heroTextTop = "384px", heroTextMaxWidth = "calc(50% - 198px)", heroSubtitleMaxWidth = "440px" }: HomepageHeroProps) {
  const heroRef       = useRef<HTMLDivElement>(null);
  const scoreGroupRef = useRef<HTMLDivElement>(null);
  const lineLeftRef   = useRef<HTMLDivElement>(null);
  const lineRightRef  = useRef<HTMLDivElement>(null);
  const [layout, setLayout] = useState<Layout>(() => calcLayout(660, score));
  const [groupH, setGroupH] = useState(148);
  const [popupOpen, setPopupOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(() =>
    typeof window !== "undefined" ? window.innerWidth : 1440
  );
  const [layoutReady, setLayoutReady] = useState(false);

  // Desktop: runs synchronously before paint — positions score correctly on first frame.
  useLayoutEffect(() => {
    if (!heroRef.current || window.innerWidth < 768) return;
    const h = heroRef.current.offsetHeight;
    if (h <= 0) return;
    setWindowWidth(window.innerWidth);
    setGroupH(scoreGroupRef.current?.offsetHeight ?? 148);
    setLayout(calcLayout(h, score));
    setLayoutReady(true);
  }, [score]);

  // Mobile + resize: ResizeObserver fires on every dimension change, including cached-image
  // navigations where onLoad never fires. requestAnimationFrame ensures layout is settled.
  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;
    let rafId: ReturnType<typeof requestAnimationFrame>;
    const recalc = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        if (!heroRef.current) return;
        const h = heroRef.current.offsetHeight;
        if (h <= 0) return;
        setWindowWidth(window.innerWidth);
        setGroupH(scoreGroupRef.current?.offsetHeight ?? 148);
        setLayout(calcLayout(h, score));
        setLayoutReady(true);
      });
    };
    const ro = new ResizeObserver(recalc);
    ro.observe(hero);
    window.addEventListener("resize", recalc);
    recalc();
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", recalc);
      cancelAnimationFrame(rafId);
    };
  }, [score]);

  // Restart marker line animation on every mount (covers back-navigation).
  useEffect(() => {
    [lineLeftRef.current, lineRightRef.current].forEach(el => {
      if (!el) return;
      el.style.animation = "none";
      void el.offsetHeight; // force reflow so browser registers the reset
      el.style.animation = "";
    });
  }, []);

  const isMobile = windowWidth < 768;
  const { armLength, scoreY } = layout;
  const lineY    = scoreY - 50;
  const lineLeft = isMobile
    ? `calc(50% - ${armLength}px + 1px)`
    : `calc(50% - ${armLength}px - 5px)`;
  const lineWidth = `${2 * armLength}px`;

  return (
    <div className="hero" ref={heroRef}>
      <LighthouseSVG />

      <div className="hero-text-overlay" style={{ position: "absolute", top: heroTextTop, left: "48px", zIndex: 10, pointerEvents: "none", maxWidth: heroTextMaxWidth }}>
        <div style={{ fontFamily: "var(--font-goudy), serif", fontSize: "52px", fontWeight: 400, letterSpacing: "-0.01em", lineHeight: 1.05, color: "#000" }}>
          {heroTitle ?? <>Where are we<br />in the cycle?</>}
        </div>
        <p style={{ fontFamily: "var(--font-space-grotesk), sans-serif", fontSize: "17px", fontWeight: 400, lineHeight: 1.6, color: "#000", marginTop: "45px", marginBottom: 0, maxWidth: heroSubtitleMaxWidth }}>
          {heroSubtitle ?? <>Follow Bitcoin&apos;s market cycle with real time data.<br />The higher the score on the beacon, the closer we likely are to a cycle top. The lower the score, the safer it historically has been to accumulate.</>}
        </p>
      </div>

      {/* Score group — bottom edge exactly MARKER_GAP px above the line */}
      <div
        ref={scoreGroupRef}
        onClick={() => setPopupOpen(v => !v)}
        style={{ position: "absolute", top: `${lineY - MARKER_GAP - groupH}px`, left: lineLeft, width: lineWidth, zIndex: 12, display: "flex", flexDirection: "column", alignItems: "center", cursor: "pointer", opacity: layoutReady ? 1 : 0, transition: "opacity 0.15s ease" }}
      >
        {/* Flanking lines centered on score number midpoint */}
        <div className="score-lines-row" style={{ display: "flex", alignItems: "center", gap: "30px" }}>
          <div ref={lineLeftRef}  className="line-left"  style={{ width: "44px", height: "0.8px", background: "#000", flexShrink: 0 }} />
          <div className="score-num" style={{ paddingRight: "4px", transform: isMobile ? "translateX(4px)" : "translateX(-2px)" }}>{formatScore(score)}</div>
          <div ref={lineRightRef} className="line-right" style={{ width: "44px", height: "0.8px", background: "#000", flexShrink: 0 }} />
        </div>
        <div className="score-lbl" style={{ textAlign: "center", marginTop: "-4px", transform: isMobile ? "translateX(4px)" : "translateX(-2px)" }}>Cycle Score</div>
      </div>

      {/* Status tag — close to CYCLE SCORE label */}
      <div
        style={{ position: "absolute", top: `${lineY - MARKER_GAP - 1}px`, left: lineLeft, width: lineWidth, zIndex: 12, textAlign: "center", cursor: "default", transform: isMobile ? "translateX(4px)" : "translateX(-2px)", opacity: layoutReady ? 1 : 0, transition: "opacity 0.15s ease" }}
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
