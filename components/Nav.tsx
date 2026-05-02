"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";

const NAV_LINKS = [
  { href: "/learn", label: "LEARN" },
  { href: "/metrics", label: "METRICS" },
  { href: "/about", label: "ABOUT" },
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
    <nav
      style={{
        borderBottom: "0.5px solid rgba(0,0,0,0.15)",
        position: "sticky",
        top: 0,
        zIndex: 50,
        backgroundColor: "#F7931A",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 48px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "52px",
        }}
      >
        <Link
          href="/"
          style={{
            fontSize: "14px",
            fontWeight: 600,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "#000",
            textDecoration: "none",
          }}
        >
          BITCOIN BEACON
        </Link>

        <div style={{ display: "flex", alignItems: "center", gap: "32px" }}>
          {NAV_LINKS.map(({ href, label }) => {
            const active = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                style={{
                  fontSize: "12px",
                  fontWeight: active ? 500 : 400,
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  color: "#000",
                  textDecoration: "none",
                  opacity: active ? 1 : 0.5,
                }}
              >
                {label}
              </Link>
            );
          })}

          {/* Language dropdown */}
          <div ref={langRef} style={{ position: "relative" }}>
            <button
              onClick={() => setLangOpen(!langOpen)}
              style={{
                fontSize: "12px",
                fontWeight: 400,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: "#000",
                opacity: 0.5,
                background: "none",
                border: "none",
                cursor: "pointer",
                fontFamily: "inherit",
                padding: 0,
              }}
            >
              EN ▾
            </button>
            {langOpen && (
              <div
                style={{
                  position: "absolute",
                  top: "calc(100% + 10px)",
                  right: 0,
                  backgroundColor: "#F7931A",
                  border: "0.5px solid rgba(0,0,0,0.15)",
                  minWidth: "130px",
                  zIndex: 100,
                }}
              >
                {LANGS.map((lang) => (
                  <div
                    key={lang.code}
                    style={{
                      padding: "10px 16px",
                      fontSize: "11px",
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                      color: "#000",
                      opacity: lang.available ? 1 : 0.35,
                      borderBottom: "0.5px solid rgba(0,0,0,0.08)",
                      cursor: lang.available ? "pointer" : "default",
                    }}
                  >
                    {lang.label}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
