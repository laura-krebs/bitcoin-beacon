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
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", borderTop: "0.8px solid #000" }}>
        <div style={{ padding: "26px 48px", borderRight: "0.8px solid #000" }}>
          <div style={{ fontSize: "26px", fontWeight: 300, color: "#000", letterSpacing: "-0.02em", fontFamily: F }}>
            {data.btcPrice > 0 ? formatPrice(data.btcPrice) : "—"}
          </div>
          <div style={{ fontSize: "11px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#000", opacity: 0.45, marginTop: "6px", fontFamily: F }}>
            BTC Price
          </div>
        </div>
        <div style={{ padding: "26px 48px", borderRight: "0.8px solid #000" }}>
          <div style={{ fontSize: "26px", fontWeight: 300, color: "#000", letterSpacing: "-0.02em", fontFamily: F }}>
            {score} <span style={{ fontSize: "26px", fontWeight: 300 }}>/ 100</span>
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
      <div style={{ display: "flex", justifyContent: "space-between", padding: "13px 48px", borderTop: "0.8px solid #000" }}>
        <Link href="/metrics" className="ilink">What does this mean →</Link>
        <Link href="/learn" className="ilink">Learn more →</Link>
      </div>
    </>
  );
}
