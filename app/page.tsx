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
    <div style={{ background: "#000" }}>
      <HomepageHero score={score} state={state} />

      {/* ── METRICS ROW ─────────────────────────────────── */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", borderTop: "0.5px solid rgba(255,255,255,0.18)" }}>
        <div style={{ padding: "26px 48px", borderRight: "0.5px solid rgba(255,255,255,0.18)" }}>
          <div style={{ fontSize: "26px", fontWeight: 300, color: "#fff", letterSpacing: "-0.02em", fontFamily: F }}>
            {data.btcPrice > 0 ? formatPrice(data.btcPrice) : "—"}
          </div>
          <div style={{ fontSize: "13px", fontWeight: 400, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)", marginTop: "6px", fontFamily: F }}>
            BTC Price
          </div>
        </div>
        <div style={{ padding: "26px 48px", borderRight: "0.5px solid rgba(255,255,255,0.18)" }}>
          <div style={{ fontSize: "26px", fontWeight: 300, color: "#fff", letterSpacing: "-0.02em", fontFamily: F }}>
            {score}
          </div>
          <div style={{ fontSize: "13px", fontWeight: 400, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)", marginTop: "6px", fontFamily: F }}>
            CBBI Score
          </div>
        </div>
        <div style={{ padding: "26px 48px" }}>
          <div style={{ fontSize: "26px", fontWeight: 300, color: "#fff", letterSpacing: "-0.02em", fontFamily: F }}>
            {data.fearGreed.value} — {data.fearGreed.classification}
          </div>
          <div style={{ fontSize: "13px", fontWeight: 400, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)", marginTop: "6px", fontFamily: F }}>
            Fear & Greed
          </div>
        </div>
      </div>

      {/* ── INFO ROW ────────────────────────────────────── */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "13px 48px", borderTop: "0.5px solid rgba(255,255,255,0.14)" }}>
        <div style={{ display: "flex", gap: "28px" }}>
          <Link href="/learn" className="ilink">What does this mean →</Link>
          <Link href="/metrics" className="ilink">How it&apos;s calculated →</Link>
        </div>
        <div style={{ display: "flex", gap: "18px", alignItems: "center" }}>
          <span style={{ fontSize: "11px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#fff", fontFamily: F }}>Updated daily</span>
          <span style={{ fontSize: "11px", color: "rgba(255,255,255,0.4)", fontFamily: F }}>·</span>
          <span style={{ fontSize: "11px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#fff", fontFamily: F }}>9 on-chain metrics</span>
        </div>
      </div>

      {/* ── NFA ROW ─────────────────────────────────────── */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "11px 48px", borderTop: "0.5px solid rgba(255,255,255,0.1)" }}>
        <span style={{ fontSize: "10px", letterSpacing: "0.13em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)", fontFamily: F }}>
          Not financial advice. Educational purposes only.
        </span>
        <span style={{ fontSize: "10px", letterSpacing: "0.13em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)", fontFamily: F }}>
          Source: CBBI · CoinGecko · Alternative.me
        </span>
      </div>
    </div>
  );
}
