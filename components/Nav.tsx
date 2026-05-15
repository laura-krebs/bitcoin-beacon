"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";

const LINK_STYLE = {
  fontSize: "12px",
  fontWeight: 400,
  letterSpacing: "0.12em",
  textTransform: "uppercase" as const,
  color: "#000",
  textDecoration: "none",
  fontFamily: "var(--font-space-grotesk), sans-serif",
};

export default function Nav() {
  const [langOpen, setLangOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  const locale = pathname.startsWith("/pt") ? "pt" : pathname.startsWith("/es") ? "es" : "en";
  const prefix = locale === "en" ? "" : `/${locale}`;
  // Strip locale prefix to get the bare page path (e.g. "/learn")
  const basePath = pathname.replace(/^\/(pt|es)/, "") || "/";

  const NAV_LINKS = [
    { href: `${prefix}/learn`, label: "Learn" },
    { href: `${prefix}/metrics`, label: "Metrics" },
    { href: `${prefix}/about`, label: "About" },
  ];

  const localePath = (code: string) => {
    const p = basePath === "/" ? "" : basePath;
    if (code === "en") return `/${p}`.replace("//", "/") || "/";
    return `/${code}${p}` || `/${code}`;
  };

  const LANGS = [
    { code: "en", label: "EN" },
    { code: "pt", label: "PT" },
    { code: "es", label: "ES" },
  ];

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (langRef.current && !langRef.current.contains(e.target as Node)) setLangOpen(false);
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) setMenuOpen(false);
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="site-nav" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "22px 48px", position: "sticky", top: 0, zIndex: 50, backgroundColor: "transparent" }}>

      {/* Logo */}
      <Link href={prefix || "/"} style={{ fontSize: "13px", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: "#000", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "10px", whiteSpace: "nowrap", flexShrink: 0 }}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 144 145" aria-hidden focusable="false"
          className="bitcoin-symbol-svg"
          style={{ height: "34px", width: "auto", fill: "#e8dfcd", flexShrink: 0, position: "relative", top: "-3px" }}>
          <path d="M37.49,93.47c-.61,1.52-2.17,3.8-5.67,2.94.12.18-8.99-2.24-8.99-2.24l-6.13,14.15,16.09,4.01c2.99.75,5.93,1.53,8.81,2.27l-5.11,20.54,12.35,3.08,5.07-20.32c3.38.91,6.65,1.76,9.86,2.56l-5.05,20.23,12.36,3.08,5.12-20.5c21.08,3.99,36.94,2.38,43.61-16.69,5.38-15.35-.27-24.21-11.36-29.98,8.08-1.86,14.16-7.18,15.79-18.15,2.24-14.99-9.17-23.05-24.78-28.43l5.06-20.31-12.36-3.08-4.93,19.77c-3.25-.81-6.59-1.57-9.91-2.33l4.96-19.9-12.35-3.08-5.07,20.31-24.93-6.17-3.29,13.2s9.17,2.1,8.98,2.23c5.01,1.25,5.91,4.56,5.76,7.19l-13.87,55.63ZM95.98,98.05c-3.82,15.35-29.67,7.05-38.05,4.97l6.79-27.21c8.38,2.09,35.26,6.23,31.27,22.24ZM99.79,58.22c-3.48,13.96-25,6.87-31.98,5.13l6.15-24.68c6.98,1.74,29.46,4.99,25.82,19.55Z" />
        </svg>
        <span style={{ position: "relative", top: "-2px" }}>Bitcoin Beacon</span>
      </Link>

      {/* Desktop nav links */}
      <div className="nav-links" style={{ display: "flex", gap: "28px", alignItems: "center" }}>
        {NAV_LINKS.map(({ href, label }) => (
          <Link key={href} href={href} className="hover-muted" style={LINK_STYLE}>{label}</Link>
        ))}
        <div ref={langRef} style={{ position: "relative", display: "flex", alignItems: "center" }}>
          <button
            onClick={() => setLangOpen(!langOpen)}
            className="hover-muted"
            style={{ ...LINK_STYLE, background: "none", border: "none", cursor: "pointer", padding: 0, lineHeight: 1 }}
          >
            {locale.toUpperCase()} ▾
          </button>
          {langOpen && (
            <div style={{ position: "absolute", top: "calc(100% + 10px)", right: 0, backgroundColor: "#F7931A", border: "0.8px solid #000", minWidth: "80px", zIndex: 100 }}>
              {LANGS.map((lang, i) => (
                <Link
                  key={lang.code}
                  href={localePath(lang.code)}
                  onClick={() => setLangOpen(false)}
                  className={lang.code !== locale ? "hover-muted" : undefined}
                  style={{ display: "block", padding: "10px 16px", fontSize: "12px", letterSpacing: "0.12em", textTransform: "uppercase", color: "#000", fontWeight: lang.code === locale ? 600 : 400, borderBottom: i < LANGS.length - 1 ? "0.8px solid #000" : undefined, textDecoration: "none", fontFamily: "var(--font-space-grotesk), sans-serif" }}
                >
                  {lang.label}
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Burger menu (mobile) */}
      <div ref={menuRef} className="nav-burger" style={{ position: "relative" }}>
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ background: "none", border: "none", cursor: "pointer", padding: "4px", display: "flex", alignItems: "center", position: "relative", top: "-2px" }}
          aria-label="Menu"
        >
          <svg width="20" height="12" viewBox="0 0 20 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="0" y1="1" x2="20" y2="1" stroke="#000" strokeWidth="1.5"/>
            <line x1="0" y1="6" x2="20" y2="6" stroke="#000" strokeWidth="1.5"/>
            <line x1="0" y1="11" x2="20" y2="11" stroke="#000" strokeWidth="1.5"/>
          </svg>
        </button>
        {menuOpen && (
          <div style={{ position: "absolute", top: "calc(100% + 10px)", right: 0, backgroundColor: "#F7931A", border: "0.8px solid #000", minWidth: "160px", zIndex: 100 }}>
            {NAV_LINKS.map(({ href, label }) => (
              <Link key={href} href={href} onClick={() => setMenuOpen(false)} style={{ display: "block", padding: "10px 16px", ...LINK_STYLE, borderBottom: "0.8px solid #000" }}>
                {label}
              </Link>
            ))}
            {LANGS.map((lang, i) => (
              <Link
                key={lang.code}
                href={localePath(lang.code)}
                onClick={() => setMenuOpen(false)}
                style={{ display: "block", padding: "10px 16px", ...LINK_STYLE, fontWeight: lang.code === locale ? 600 : 400, borderBottom: i < LANGS.length - 1 ? "0.8px solid #000" : undefined }}
              >
                Language — {lang.label}
              </Link>
            ))}
          </div>
        )}
      </div>

    </nav>
  );
}
