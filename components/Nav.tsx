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
  const isHome = pathname === "/";
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

  if (isHome) {
    // ── Dark nav (homepage) — matches mockup exactly
    return (
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "22px 48px",
          position: "relative",
          zIndex: 20,
          backgroundColor: "#000",
        }}
      >
        <Link href="/" style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: "#fff", textDecoration: "none" }}>
          Bitcoin Beacon
        </Link>
        <div style={{ display: "flex", gap: "28px", alignItems: "center" }}>
          {NAV_LINKS.map(({ href, label }) => (
            <Link key={href} href={href} className="nav-link-dark">{label}</Link>
          ))}
          <div ref={langRef} style={{ position: "relative" }}>
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="nav-link-dark"
              style={{ background: "none", border: "none", cursor: "pointer", fontFamily: "inherit", padding: 0 }}
            >
              EN ▾
            </button>
            {langOpen && (
              <div style={{ position: "absolute", top: "calc(100% + 10px)", right: 0, backgroundColor: "#111", border: "0.5px solid rgba(255,255,255,0.15)", minWidth: "130px", zIndex: 100 }}>
                {LANGS.map((lang) => (
                  <div key={lang.code} style={{ padding: "10px 16px", fontSize: "11px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#fff", opacity: lang.available ? 1 : 0.3, borderBottom: "0.5px solid rgba(255,255,255,0.08)", cursor: lang.available ? "pointer" : "default" }}>
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

  // ── Orange nav (all other pages) — same size/alignment as homepage
  return (
    <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "22px 48px", borderBottom: "0.5px solid rgba(0,0,0,0.15)", position: "sticky", top: 0, zIndex: 50, backgroundColor: "#F7931A" }}>
      <Link href="/" style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: "#000", textDecoration: "none" }}>
        Bitcoin Beacon
      </Link>
      <div style={{ display: "flex", gap: "28px", alignItems: "center" }}>
        {NAV_LINKS.map(({ href, label }) => {
          const active = pathname === href;
          return (
            <Link key={href} href={href} style={{ fontSize: "9.5px", fontWeight: 400, letterSpacing: "0.16em", textTransform: "uppercase", color: "#000", textDecoration: "none", opacity: active ? 1 : 0.45 }}>
              {label}
            </Link>
          );
        })}
        <div ref={langRef} style={{ position: "relative" }}>
          <button onClick={() => setLangOpen(!langOpen)} style={{ fontSize: "9.5px", fontWeight: 400, letterSpacing: "0.16em", textTransform: "uppercase", color: "#000", opacity: 0.45, background: "none", border: "none", cursor: "pointer", fontFamily: "inherit", padding: 0 }}>
            EN ▾
          </button>
          {langOpen && (
            <div style={{ position: "absolute", top: "calc(100% + 10px)", right: 0, backgroundColor: "#F7931A", border: "0.5px solid rgba(0,0,0,0.15)", minWidth: "130px", zIndex: 100 }}>
              {LANGS.map((lang) => (
                <div key={lang.code} style={{ padding: "10px 16px", fontSize: "11px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#000", opacity: lang.available ? 1 : 0.35, borderBottom: "0.5px solid rgba(0,0,0,0.08)", cursor: lang.available ? "pointer" : "default" }}>
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
