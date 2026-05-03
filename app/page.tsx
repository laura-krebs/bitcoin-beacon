import Link from "next/link";
import { fetchMarketData, getScoreState } from "@/lib/api";
import HomepageHero from "@/components/HomepageHero";

export const revalidate = 3600;

const F = "var(--font-space-grotesk),sans-serif";

function formatPrice(n: number) {
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(n);
}

export default async function HomePage() {
  const data = await fetchMarketData();
  const { score } = data.cbbi;
  const state = getScoreState(score);

  return (
    <>
      <HomepageHero score={score} state={state} />

      {/* ── METRICS ROW ────────────────────────────── */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", borderTop: "0.8px solid rgba(0,0,0,0.15)" }}>
        <div style={{ padding: "26px 48px", borderRight: "0.8px solid rgba(0,0,0,0.15)" }}>
          <div style={{ fontSize: "26px", fontWeight: 300, color: "#000", letterSpacing: "-0.02em", fontFamily: F }}>
            {data.btcPrice > 0 ? formatPrice(data.btcPrice) : "—"}
          </div>
          <div style={{ fontSize: "11px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#000", opacity: 0.45, marginTop: "6px", fontFamily: F }}>
            BTC Price
          </div>
        </div>
        <div style={{ padding: "26px 48px", borderRight: "0.8px solid rgba(0,0,0,0.15)" }}>
          <div style={{ fontSize: "26px", fontWeight: 300, color: "#000", letterSpacing: "-0.02em", fontFamily: F }}>
            {score}
          </div>
          <div style={{ fontSize: "11px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#000", opacity: 0.45, marginTop: "6px", fontFamily: F }}>
            CBBI Score
          </div>
        </div>
        <div style={{ padding: "26px 48px" }}>
          <div style={{ fontSize: "26px", fontWeight: 300, color: "#000", letterSpacing: "-0.02em", fontFamily: F }}>
            {data.fearGreed.value} — {data.fearGreed.classification}
          </div>
          <div style={{ fontSize: "11px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#000", opacity: 0.45, marginTop: "6px", fontFamily: F }}>
            Fear & Greed
          </div>
        </div>
      </div>

      {/* ── INFO ROW ───────────────────────────────── */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "13px 48px", borderTop: "0.8px solid rgba(0,0,0,0.1)" }}>
        <div style={{ display: "flex", gap: "28px" }}>
          <Link href="/metrics" className="ilink">What does this mean →</Link>
          <Link href="/learn" className="ilink">Learn more →</Link>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <span style={{ fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", color: "#000", fontFamily: F }}>
            Real time data
          </span>
          <a
            href="https://x.com/bitcoinbeacon"
            target="_blank"
            rel="noopener noreferrer"
            className="hover-muted"
            style={{ display: "flex", alignItems: "center", gap: "7px", color: "#000", textDecoration: "none", fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", fontFamily: F }}
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
            Follow for daily cycle alerts →
          </a>
        </div>
      </div>
    </>
  );
}
