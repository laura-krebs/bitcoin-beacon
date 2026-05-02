import Link from "next/link";
import { fetchMarketData, getScoreState } from "@/lib/api";
import HomepageHero from "@/components/HomepageHero";

export const revalidate = 3600;

const C = { maxWidth: "1200px", margin: "0 auto", padding: "0 48px" } as const;

function formatPrice(price: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
}

export default async function HomePage() {
  const data = await fetchMarketData();
  const { score } = data.cbbi;
  const state = getScoreState(score);

  const W = "rgba(255,255,255,0.85)";
  const WM = "rgba(255,255,255,0.45)";
  const DIV = "0.5px solid rgba(255,255,255,0.1)";

  return (
    <div style={{ backgroundColor: "#000" }}>
      <HomepageHero score={score} state={state} />

      {/* ── METRICS BAR ─────────────────────────────── */}
      <div style={{ borderTop: DIV }}>
        <div style={{ ...C, display: "grid", gridTemplateColumns: "1fr 1fr 1fr" }}>
          <div style={{ padding: "22px 0", borderRight: DIV, textAlign: "center" }}>
            <div style={{ fontSize: "27px", fontWeight: 300, letterSpacing: "-0.02em", color: W, marginBottom: "7px" }}>
              {data.btcPrice > 0 ? formatPrice(data.btcPrice) : "—"}
            </div>
            <div style={{ fontSize: "11px", color: WM, letterSpacing: "0.2em", textTransform: "uppercase" }}>
              BTC Price
            </div>
          </div>

          <div style={{ padding: "22px 0", borderRight: DIV, textAlign: "center" }}>
            <div style={{ fontSize: "27px", fontWeight: 300, letterSpacing: "-0.02em", color: W, marginBottom: "7px" }}>
              {score}
            </div>
            <div style={{ fontSize: "11px", color: WM, letterSpacing: "0.2em", textTransform: "uppercase" }}>
              CBBI Score
            </div>
          </div>

          <div style={{ padding: "22px 0", textAlign: "center" }}>
            <div style={{ fontSize: "27px", fontWeight: 300, letterSpacing: "-0.02em", color: W, marginBottom: "7px" }}>
              {data.fearGreed.value}
            </div>
            <div style={{ fontSize: "11px", color: WM, letterSpacing: "0.2em", textTransform: "uppercase" }}>
              Fear & Greed — {data.fearGreed.classification}
            </div>
          </div>
        </div>
      </div>

      {/* ── LINKS + META BAR ────────────────────────── */}
      <div style={{ borderTop: DIV }}>
        <div style={{ ...C, display: "grid", gridTemplateColumns: "1fr 1fr 1fr" }}>
          <Link
            href="/learn"
            className="link-orange-hover"
            style={{
              padding: "15px 0",
              fontSize: "12px",
              letterSpacing: "0.16em",
              textTransform: "uppercase",
            }}
          >
            What does this mean →
          </Link>
          <Link
            href="/metrics"
            className="link-orange-hover"
            style={{
              padding: "15px 0",
              fontSize: "12px",
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              textAlign: "center",
            }}
          >
            How it&apos;s calculated →
          </Link>
          <div
            style={{
              padding: "15px 0",
              fontSize: "11px",
              color: WM,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              textAlign: "right",
            }}
          >
            Updated daily · 9 on-chain metrics
          </div>
        </div>
      </div>

      {/* ── DISCLAIMER + SOURCE BAR ─────────────────── */}
      <div style={{ borderTop: DIV }}>
        <div style={{ ...C, display: "grid", gridTemplateColumns: "1fr 1fr", alignItems: "center" }}>
          <div
            style={{
              padding: "13px 0",
              fontSize: "11px",
              color: WM,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
            }}
          >
            Not financial advice. Educational purposes only.
          </div>
          <div
            style={{
              padding: "13px 0",
              fontSize: "11px",
              color: WM,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              textAlign: "right",
            }}
          >
            Source: CBBI · CoinGecko · Alternative.me
          </div>
        </div>
      </div>
    </div>
  );
}
