"use client";

import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  if (isHome) {
    // ── Dark footer (homepage) — matches mockup
    return (
      <footer style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "18px 48px", borderTop: "0.5px solid rgba(255,255,255,0.1)", backgroundColor: "#000" }}>
        <span style={{ fontSize: "10px", letterSpacing: "0.13em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)", fontFamily: "var(--font-space-grotesk),sans-serif" }}>
          © 2026 Bitcoin Beacon · All rights reserved
        </span>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <a href="https://x.com/bitcoinbeacon" target="_blank" rel="noopener noreferrer" className="footer-x" aria-label="X">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>
          <a href="https://x.com/bitcoinbeacon" target="_blank" rel="noopener noreferrer" className="footer-alert">
            Follow for daily cycle alerts →
          </a>
        </div>
      </footer>
    );
  }

  // ── Orange footer (all other pages)
  return (
    <footer style={{ borderTop: "0.5px solid rgba(0,0,0,0.15)" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 48px", height: "52px", display: "flex", alignItems: "center", justifyContent: "flex-end" }}>
        <a href="https://x.com/bitcoinbeacon" target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", gap: "10px", color: "#000", textDecoration: "none", fontSize: "11px", letterSpacing: "0.12em", textTransform: "uppercase" }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
          Follow for daily cycle alerts →
        </a>
      </div>
    </footer>
  );
}
