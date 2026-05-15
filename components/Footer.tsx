"use client";

import { usePathname } from "next/navigation";

const F = "var(--font-space-grotesk),sans-serif";
const T = {
  fontSize: "10px",
  fontWeight: 400,
  letterSpacing: "0.12em",
  textTransform: "uppercase" as const,
  color: "#000" as const,
  opacity: 0.55,
  fontFamily: F,
};

const CONTENT = {
  en: {
    disclaimer: "Not financial advice. Educational purposes only.",
    copyright: "© 2026 Bitcoin Beacon",
    openSource: "Open Source",
    source: "Source: CBBI · CoinMarketCap · Alternative.me",
  },
  pt: {
    disclaimer: "Não é aconselhamento financeiro. Apenas fins educacionais.",
    copyright: "© 2026 Bitcoin Beacon",
    openSource: "Código Aberto",
    source: "Fonte: CBBI · CoinMarketCap · Alternative.me",
  },
  es: {
    disclaimer: "No es asesoramiento financiero. Solo fines educativos.",
    copyright: "© 2026 Bitcoin Beacon",
    openSource: "Código Abierto",
    source: "Fuente: CBBI · CoinMarketCap · Alternative.me",
  },
};

export default function Footer() {
  const pathname = usePathname();
  const locale = pathname.startsWith("/pt") ? "pt" : pathname.startsWith("/es") ? "es" : "en";
  const c = CONTENT[locale];

  return (
    <footer style={{ borderTop: "0.8px solid #000" }}>
      <div
        className="footer-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          alignItems: "center",
          padding: "11px 48px",
        }}
      >
        <span className="footer-disclaimer" style={T}>{c.disclaimer}</span>
        <span style={{ ...T, textAlign: "center" }}>
          {c.copyright} ·{" "}
          <a
            href="https://github.com/laura-krebs/bitcoin-beacon"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#000", textDecoration: "none" }}
          >
            {c.openSource}
          </a>
        </span>
        <span style={{ ...T, textAlign: "right" }}>{c.source}</span>
      </div>
    </footer>
  );
}
