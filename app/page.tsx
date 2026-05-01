import Link from "next/link";
import { fetchMarketData, getScoreState } from "@/lib/api";
import LighthouseSVG from "@/components/LighthouseSVG";
import DisclaimerTooltip from "@/components/DisclaimerTooltip";

export const revalidate = 3600;

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

  const heroHeight = 700;
  const apexY = 68;
  const baseY = 680;
  const scoreY = baseY - (score / 100) * (baseY - apexY);

  return (
    <>
      {/* HERO */}
      <section
        style={{
          position: "relative",
          minHeight: `${heroHeight}px`,
          overflow: "hidden",
          backgroundColor: "#F7931A",
        }}
      >
        <LighthouseSVG height={heroHeight} />

        {/* Top-left overlay */}
        <div
          style={{
            position: "absolute",
            top: "32px",
            left: "32px",
            zIndex: 10,
          }}
        >
          <p style={{ fontSize: "9px", color: "rgba(0,0,0,0.35)", letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: "8px" }}>
            Where are we in the cycle?
          </p>
          <div
            style={{
              display: "inline-block",
              border: "0.5px solid rgba(0,0,0,0.3)",
              padding: "4px 10px",
            }}
          >
            <span style={{ fontSize: "9px", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase" }}>
              {state.label}
            </span>
          </div>
          <p style={{ marginTop: "6px", fontSize: "9px", color: "rgba(0,0,0,0.45)", letterSpacing: "0.08em", maxWidth: "200px", lineHeight: 1.6 }}>
            {state.description}
          </p>
        </div>

        {/* Top-right overlay */}
        <div
          style={{
            position: "absolute",
            top: "32px",
            right: "32px",
            zIndex: 10,
            textAlign: "right",
          }}
        >
          <p style={{ fontSize: "9px", color: "rgba(0,0,0,0.35)", letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: "4px" }}>
            Updated Daily
          </p>
          <p style={{ fontSize: "9px", color: "rgba(0,0,0,0.35)", letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: "8px" }}>
            9 On-Chain Metrics
          </p>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "flex-end", gap: "6px" }}>
            <p style={{ fontSize: "8px", color: "rgba(0,0,0,0.28)", letterSpacing: "0.1em", textTransform: "uppercase" }}>
              Not Financial Advice. Educational Purposes Only.
            </p>
            <DisclaimerTooltip />
          </div>
        </div>

        {/* Score positioned by value */}
        <div
          style={{
            position: "absolute",
            left: "50%",
            transform: "translate(-50%, -50%)",
            top: `${scoreY}px`,
            zIndex: 10,
            textAlign: "center",
          }}
        >
          {/* Full-width horizontal marker line */}
          <div
            style={{
              position: "absolute",
              left: "50vw",
              transform: "translateX(-50vw)",
              width: "100vw",
              top: "50%",
              height: "0",
              borderTop: "0.5px solid rgba(0,0,0,0.2)",
              zIndex: -1,
            }}
          />
          <div style={{ fontSize: "118px", fontWeight: 300, letterSpacing: "-0.04em", lineHeight: 1 }}>
            {score}
          </div>
          <div style={{ fontSize: "8.5px", color: "rgba(0,0,0,0.35)", letterSpacing: "0.2em", textTransform: "uppercase", marginTop: "6px" }}>
            Cycle Score
          </div>
        </div>
      </section>

      {/* METRICS BAR */}
      <div style={{ borderTop: "0.5px solid rgba(0,0,0,0.18)" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr" }}>
          {/* BTC Price */}
          <div style={{ padding: "20px 32px", borderRight: "0.5px solid rgba(0,0,0,0.15)", textAlign: "center" }}>
            <div style={{ fontSize: "27px", fontWeight: 300, letterSpacing: "-0.02em", marginBottom: "6px" }}>
              {data.btcPrice > 0 ? formatPrice(data.btcPrice) : "—"}
            </div>
            <div style={{ fontSize: "8px", color: "rgba(0,0,0,0.35)", letterSpacing: "0.2em", textTransform: "uppercase" }}>
              BTC Price
            </div>
          </div>

          {/* CBBI Score */}
          <div style={{ padding: "20px 32px", borderRight: "0.5px solid rgba(0,0,0,0.15)", textAlign: "center" }}>
            <div style={{ fontSize: "27px", fontWeight: 300, letterSpacing: "-0.02em", marginBottom: "6px" }}>
              {score}
            </div>
            <div style={{ fontSize: "8px", color: "rgba(0,0,0,0.35)", letterSpacing: "0.2em", textTransform: "uppercase" }}>
              CBBI Score
            </div>
          </div>

          {/* Fear & Greed */}
          <div style={{ padding: "20px 32px", textAlign: "center" }}>
            <div style={{ fontSize: "27px", fontWeight: 300, letterSpacing: "-0.02em", marginBottom: "6px" }}>
              {data.fearGreed.value}
            </div>
            <div style={{ fontSize: "8px", color: "rgba(0,0,0,0.35)", letterSpacing: "0.2em", textTransform: "uppercase" }}>
              Fear & Greed — {data.fearGreed.classification}
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div style={{ borderTop: "0.5px solid rgba(0,0,0,0.15)" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", padding: "0 32px" }}>
          <Link
            href="/learn"
            style={{
              padding: "14px 0",
              fontSize: "9px",
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: "#000",
              textDecoration: "none",
            }}
          >
            What does this mean →
          </Link>
          <Link
            href="/metrics"
            style={{
              padding: "14px 0",
              fontSize: "9px",
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: "#000",
              textDecoration: "none",
              textAlign: "center",
            }}
          >
            How it&apos;s calculated →
          </Link>
          <div
            style={{
              padding: "14px 0",
              fontSize: "9px",
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: "rgba(0,0,0,0.4)",
              textAlign: "right",
            }}
          >
            Source: CBBI · CoinGecko · Alternative.me
          </div>
        </div>
      </div>
    </>
  );
}
