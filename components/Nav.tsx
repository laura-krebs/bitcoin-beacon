"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";

const NAV_LINKS = [
  { href: "/learn", label: "Learn" },
  { href: "/metrics", label: "Metrics" },
  { href: "/about", label: "About" },
];

const LANGS = [
  { code: "EN", label: "EN", available: true },
  { code: "PT", label: "PT — soon", available: false },
  { code: "ES", label: "ES — soon", available: false },
];

export default function Nav() {
  const pathname = usePathname();
  const [langOpen, setLangOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangOpen(false);
      }
    }
    if (langOpen) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [langOpen]);

  return (
    <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "22px 48px", position: "sticky", top: 0, zIndex: 50, backgroundColor: "transparent" }}>
      <Link href="/" style={{ fontSize: "12.1px", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: "#000", textDecoration: "none", display: "inline-flex", flexDirection: "column", alignItems: "center", gap: "5px" }}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 144 145" aria-hidden focusable="false"
          style={{ height: "31px", width: "auto", fill: "#e8dfcd", flexShrink: 0 }}>
          <path d="M37.49,93.47c-.61,1.52-2.17,3.8-5.67,2.94.12.18-8.99-2.24-8.99-2.24l-6.13,14.15,16.09,4.01c2.99.75,5.93,1.53,8.81,2.27l-5.11,20.54,12.35,3.08,5.07-20.32c3.38.91,6.65,1.76,9.86,2.56l-5.05,20.23,12.36,3.08,5.12-20.5c21.08,3.99,36.94,2.38,43.61-16.69,5.38-15.35-.27-24.21-11.36-29.98,8.08-1.86,14.16-7.18,15.79-18.15,2.24-14.99-9.17-23.05-24.78-28.43l5.06-20.31-12.36-3.08-4.93,19.77c-3.25-.81-6.59-1.57-9.91-2.33l4.96-19.9-12.35-3.08-5.07,20.31-24.93-6.17-3.29,13.2s9.17,2.1,8.98,2.23c5.01,1.25,5.91,4.56,5.76,7.19l-13.87,55.63ZM95.98,98.05c-3.82,15.35-29.67,7.05-38.05,4.97l6.79-27.21c8.38,2.09,35.26,6.23,31.27,22.24ZM99.79,58.22c-3.48,13.96-25,6.87-31.98,5.13l6.15-24.68c6.98,1.74,29.46,4.99,25.82,19.55Z" />
        </svg>
        Bitcoin Beacon
      </Link>
      <div style={{ display: "flex", gap: "28px", alignItems: "center" }}>
        {NAV_LINKS.map(({ href, label }) => {
          const active = pathname === href;
          return (
            <Link
              key={href}
              href={href}
              className="hover-muted"
              style={{ fontSize: "11px", fontWeight: 400, letterSpacing: "0.16em", textTransform: "uppercase", color: "#000", textDecoration: "none", fontFamily: "var(--font-space-grotesk), sans-serif" }}
            >
              {label}
            </Link>
          );
        })}
        <div ref={langRef} style={{ position: "relative", display: "flex", alignItems: "center" }}>
          <button
            onClick={() => setLangOpen(!langOpen)}
            className="hover-muted"
            style={{ fontSize: "11px", fontWeight: 400, letterSpacing: "0.16em", textTransform: "uppercase", color: "#000", background: "none", border: "none", cursor: "pointer", fontFamily: "var(--font-space-grotesk), sans-serif", padding: 0, lineHeight: 1 }}
          >
            EN ▾
          </button>
          {langOpen && (
            <div style={{ position: "absolute", top: "calc(100% + 10px)", right: 0, backgroundColor: "#F7931A", border: "0.8px solid #000", minWidth: "130px", zIndex: 100 }}>
              {LANGS.map((lang) => (
                <div
                  key={lang.code}
                  className={lang.available ? "hover-muted" : undefined}
                  style={{ padding: "10px 16px", fontSize: "12px", letterSpacing: "0.12em", textTransform: "uppercase", color: "#000", opacity: lang.available ? 1 : 0.35, borderBottom: "0.8px solid #000", cursor: lang.available ? "pointer" : "default", fontFamily: "var(--font-space-grotesk), sans-serif" }}
                >
                  {lang.label}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
