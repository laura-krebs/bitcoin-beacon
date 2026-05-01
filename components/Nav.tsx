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
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 32px",
          height: "48px",
        }}
      >
        <Link
          href="/"
          style={{
            fontSize: "11px",
            fontWeight: 600,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "#000",
            textDecoration: "none",
          }}
        >
          BITCOIN BEACON
        </Link>

        <div style={{ display: "flex", alignItems: "center", gap: "28px" }}>
          {NAV_LINKS.map(({ href, label }) => {
            const active = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                style={{
                  fontSize: "9.5px",
                  fontWeight: 400,
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  color: active ? "#000" : "rgba(0,0,0,0.45)",
                  textDecoration: "none",
                }}
              >
                {label}
              </Link>
            );
          })}
          <span
            style={{
              fontSize: "9.5px",
              fontWeight: 400,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: "rgba(0,0,0,0.45)",
            }}
          >
            EN ▾
          </span>
        </div>
      </div>
    </nav>
  );
}
