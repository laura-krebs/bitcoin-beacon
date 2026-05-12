"use client";

import { useState, useEffect } from "react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const nearBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 200;
      setVisible(nearBottom);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
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
