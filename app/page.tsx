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
      {/* Mobile-only: title in off-white area ABOVE beacon */}
      <div className="mobile-hero-offwhite-title" style={{ display: "none", background: "#e8dfcd", paddingTop: "95px", paddingBottom: "15px", paddingLeft: "32px", paddingRight: "32px", textAlign: "center" }}>
        <div style={{ fontFamily: "var(--font-goudy), serif", fontSize: "52px", fontWeight: 400, letterSpacing: "-0.01em", lineHeight: 1.05, color: "#000" }}>
          Where are we<br />in the cycle?
        </div>
      </div>

      <HomepageHero score={score} state={state} />

      {/* Mobile-only: divider + "?" info + subtitle BELOW beacon */}
      <div className="mobile-hero-title-section" style={{ display: "none" }}>
        {/* Divider below SVG — thicker to match section boundaries */}
        <div style={{ height: "0.8px", background: "rgba(0,0,0,0.2)" }} />
        {/* Subtitle — equal padding for vertical centering */}
        <div style={{ padding: "32px 32px 32px", textAlign: "center" }}>
          <p style={{ fontFamily: "var(--font-space-grotesk), sans-serif", fontSize: "17px", fontWeight: 400, lineHeight: 1.6, color: "#000", margin: 0 }}>
            Follow Bitcoin&apos;s market cycle with real time data.<br />The higher the score on the beacon, the closer we likely are to a cycle top. The lower the score, the safer it historically has been to accumulate.
          </p>
        </div>
        {/* Bottom divider */}
        <div style={{ height: "0.5px", background: "rgba(0,0,0,0.15)" }} />
      </div>

      {/* ── METRICS ROW ────────────────────────────── */}
      <div className="homepage-metrics-bar" style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", borderTop: "0.8px solid #000" }}>
        <div className="metrics-bar-btc" style={{ padding: "26px 48px", borderRight: "0.8px solid #000" }}>
          <div style={{ fontSize: "26px", fontWeight: 300, color: "#000", letterSpacing: "-0.02em", fontFamily: F }}>
            {data.btcPrice > 0 ? formatPrice(data.btcPrice) : "—"}
          </div>
          <div style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "#000", opacity: 0.55, marginTop: "6px", fontFamily: F }}>
            BTC Price
          </div>
        </div>
        <div className="metrics-bar-score" style={{ padding: "26px 48px", borderRight: "0.8px solid #000" }}>
          <div style={{ fontSize: "26px", fontWeight: 300, color: "#000", letterSpacing: "-0.02em", fontFamily: F }}>
            {score} <span style={{ fontSize: "26px", fontWeight: 300 }}>/ 100</span>
          </div>
          <div style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "#000", opacity: 0.55, marginTop: "6px", fontFamily: F }}>
            CBBI Score
          </div>
        </div>
        <div className="metrics-bar-fg" style={{ padding: "26px 48px" }}>
          <div style={{ fontSize: "26px", fontWeight: 300, color: "#000", letterSpacing: "-0.02em", fontFamily: F }}>
            {data.fearGreed.value} — {data.fearGreed.classification}
          </div>
          <div style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "#000", opacity: 0.55, marginTop: "6px", fontFamily: F }}>
            Fear & Greed
          </div>
        </div>
        <div className="metrics-bar-cta" style={{ padding: "26px 48px" }}>
          <Link href="/metrics" className="ilink">What does this mean →</Link>
          <Link href="/learn" className="ilink">Learn more →</Link>
        </div>
      </div>

      {/* ── INFO ROW ───────────────────────────────── */}
      <div className="homepage-info-row" style={{ display: "flex", justifyContent: "space-between", padding: "13px 48px", borderTop: "0.8px solid #000" }}>
        <Link href="/metrics" className="ilink">What does this mean →</Link>
        <Link href="/learn" className="ilink">Learn more →</Link>
      </div>
    </>
  );
}
