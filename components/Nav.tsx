"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { href: "/learn", label: "LEARN" },
  { href: "/metrics", label: "METRICS" },
  { href: "/about", label: "ABOUT" },
];

export default function Nav() {
  const pathname = usePathname();

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
          <span
            style={{
              fontSize: "12px",
              fontWeight: 400,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: "#000",
              opacity: 0.5,
            }}
          >
            EN ▾
          </span>
        </div>
      </div>
    </nav>
  );
}
