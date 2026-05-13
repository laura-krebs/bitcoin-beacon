"use client";

import { useState, useEffect } from "react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const footer = document.querySelector("footer");
    if (!footer) return;
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0 }
    );
    observer.observe(footer);
    return () => observer.disconnect();
  }, []);

  return (
    <button
      className="back-to-top-btn"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      style={{
        position: "fixed",
        bottom: "48px",
        right: "48px",
        zIndex: 100,
        fontFamily: "var(--font-space-grotesk), sans-serif",
        fontSize: "10px",
        fontWeight: 400,
        letterSpacing: "0.16em",
        textTransform: "uppercase",
        color: "#000",
        background: "none",
        border: "none",
        cursor: "pointer",
        padding: 0,
        opacity: visible ? 0.55 : 0,
        transition: "opacity 0.3s ease",
        pointerEvents: visible ? "auto" : "none",
      }}
    >
      Back to top ↑
    </button>
  );
}
