"use client";

import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();

  // Homepage: copyright + X/follow have been moved into the bottom bars in page.tsx
  if (pathname === "/") return null;

  // Orange footer (all other pages) — matches homepage layout: copyright left, X/follow right
  return (
    <footer style={{ borderTop: "0.8px solid rgba(0,0,0,0.15)" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 48px", height: "52px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <span style={{ fontSize: "10px", letterSpacing: "0.13em", textTransform: "uppercase", color: "#000", opacity: 0.45 }}>
          © 2026 Bitcoin Beacon · All rights reserved
        </span>
        <a
          href="https://x.com/bitcoinbeacon"
          target="_blank"
          rel="noopener noreferrer"
          style={{ display: "flex", alignItems: "center", gap: "8px", color: "#000", textDecoration: "none", fontSize: "11px", letterSpacing: "0.13em", textTransform: "uppercase" }}
        >
          <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
          Follow for daily cycle alerts →
        </a>
      </div>
    </footer>
  );
}
