import { fetchMarketData, getScoreState } from "@/lib/api";

export const revalidate = 3600;

const CONTAINER = { maxWidth: "1200px", margin: "0 auto", padding: "0 48px" } as const;

const METRICS = [
  {
    num: "01",
    name: "Pi Cycle Top",
    desc: "Tracks two moving averages. Historically signals cycle tops when they cross.",
    source: "LookIntoBitcoin",
    url: "https://lookintobitcoin.com/charts/pi-cycle-top-indicator",
    key: "PiCycleTop",
  },
  {
    num: "02",
    name: "RUPL / NUPL",
    desc: "Measures unrealized profit/loss across all Bitcoin holders.",
    source: "LookIntoBitcoin",
    url: "https://lookintobitcoin.com/charts/relative-unrealized-profit--loss",
    key: "RUPL",
  },
  {
    num: "03",
    name: "Puell Multiple",
    desc: "Compares daily miner revenue to its annual average. High values = sell pressure.",
    source: "LookIntoBitcoin",
    url: "https://lookintobitcoin.com/charts/puell-multiple",
    key: "PuellMultiple",
  },
  {
    num: "04",
    name: "Stock-to-Flow",
    desc: "Compares existing supply to new issuance rate. Models long-term price.",
    source: "LookIntoBitcoin",
    url: "https://lookintobitcoin.com/charts/stock-to-flow-model",
    key: "StockToFlow",
  },
  {
    num: "05",
    name: "2-Year MA Multiplier",
    desc: "Tracks price relative to 2-year moving average. Identifies macro extremes.",
    source: "LookIntoBitcoin",
    url: "https://lookintobitcoin.com/charts/bitcoin-investor-tool",
    key: "TwoYearMAMultiplier",
  },
  {
    num: "06",
    name: "Trolololo Trend Line",
    desc: "Long-term logarithmic regression band. Flags deviation from trend.",
    source: "CBBI",
    url: "https://colintalkscrypto.com/cbbi",
    key: "TrololoTrendLine",
  },
  {
    num: "07",
    name: "MVRV Z-Score",
    desc: "Market value vs realized value. High Z-score = market overheated.",
    source: "LookIntoBitcoin",
    url: "https://lookintobitcoin.com/charts/mvrv-zscore",
    key: "MVRVZScore",
  },
  {
    num: "08",
    name: "Reserve Risk",
    desc: "Confidence of long-term holders vs current price. Low = good risk/reward.",
    source: "LookIntoBitcoin",
    url: "https://lookintobitcoin.com/charts/reserve-risk",
    key: "ReserveRisk",
  },
  {
    num: "09",
    name: "Woobull Tops",
    desc: "On-chain network valuation model tracking price deviation.",
    source: "CBBI",
    url: "https://colintalkscrypto.com/cbbi",
    key: "WoobullTops",
  },
] as const;

function SignalBar({ value }: { value: number }) {
  const hue = Math.max(0, 120 - value * 1.2);
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "10px", marginTop: "12px" }}>
      <div style={{ width: "100%", height: "2px", background: "rgba(0,0,0,0.08)", position: "relative" }}>
        <div
          style={{
            position: "absolute", left: 0, top: 0, height: "2px",
            width: `${value}%`,
            backgroundColor: `hsl(${hue},70%,35%)`,
            opacity: 0.6,
          }}
        />
      </div>
      <span style={{ fontSize: "11px", color: "#000", minWidth: "28px" }}>{value}</span>
    </div>
  );
}

export default async function MetricsPage() {
  const data = await fetchMarketData();
  const { score, metrics } = data.cbbi;
  const state = getScoreState(score);

  return (
    <>
      {/* PAGE HERO */}
      <section style={{ borderBottom: "0.5px solid rgba(0,0,0,0.15)", padding: "64px 0 52px" }}>
        <div style={{ ...CONTAINER, display: "grid", gridTemplateColumns: "1fr 1fr", gap: "64px", alignItems: "start" }}>
          <h1 style={{ fontSize: "52px", fontWeight: 300, letterSpacing: "-0.03em", lineHeight: 1.05 }}>
            9 signals.<br />One score.
          </h1>
          <p style={{ fontSize: "15px", lineHeight: 1.9, color: "#000", paddingTop: "8px" }}>
            The CBBI (Colin Talks Crypto Bitcoin Bull Run Index) aggregates nine independent on-chain metrics into a single composite score between 0 and 100. Each metric has historically shown predictive patterns near cycle tops and bottoms. No single metric is definitive — the composite is designed to reduce noise.
          </p>
        </div>
      </section>

      {/* SCORE SUMMARY BAR */}
      <div style={{ borderBottom: "0.5px solid rgba(0,0,0,0.15)" }}>
        <div style={{ ...CONTAINER, display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr" }}>
          <div style={{ padding: "22px 0", borderRight: "0.5px solid rgba(0,0,0,0.12)", paddingRight: "32px" }}>
            <div style={{ fontSize: "27px", fontWeight: 300, marginBottom: "6px" }}>{score}</div>
            <div style={{ fontSize: "11px", color: "#000", letterSpacing: "0.2em", textTransform: "uppercase" }}>Composite Score</div>
          </div>
          <div style={{ padding: "22px 32px", borderRight: "0.5px solid rgba(0,0,0,0.12)" }}>
            <div style={{ fontSize: "15px", fontWeight: 500, marginBottom: "6px", letterSpacing: "0.06em" }}>{state.label}</div>
            <div style={{ fontSize: "11px", color: "#000", letterSpacing: "0.2em", textTransform: "uppercase" }}>Current Signal</div>
          </div>
          <div style={{ padding: "22px 32px", borderRight: "0.5px solid rgba(0,0,0,0.12)" }}>
            <div style={{ fontSize: "27px", fontWeight: 300, marginBottom: "6px" }}>
              {data.btcPrice > 0
                ? new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(data.btcPrice)
                : "—"}
            </div>
            <div style={{ fontSize: "11px", color: "#000", letterSpacing: "0.2em", textTransform: "uppercase" }}>BTC Price</div>
          </div>
          <div style={{ padding: "22px 32px" }}>
            <div style={{ fontSize: "15px", fontWeight: 300, marginBottom: "6px" }}>Daily</div>
            <div style={{ fontSize: "11px", color: "#000", letterSpacing: "0.2em", textTransform: "uppercase" }}>Update Frequency</div>
          </div>
        </div>
      </div>

      {/* SECTION LABEL */}
      <div style={{ borderBottom: "0.5px solid rgba(0,0,0,0.1)" }}>
        <div style={{ ...CONTAINER, padding: "22px 48px" }}>
          <span style={{ fontSize: "11px", color: "#000", letterSpacing: "0.22em", textTransform: "uppercase", opacity: 0.5 }}>
            The 9 Metrics
          </span>
        </div>
      </div>

      {/* METRICS GRID 3×3 */}
      <div style={{ borderBottom: "0.5px solid rgba(0,0,0,0.15)" }}>
        <div
          style={{
            ...CONTAINER,
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
          }}
        >
          {METRICS.map((m, i) => {
            const value = metrics[m.key as keyof typeof metrics];
            const col = i % 3;
            const row = Math.floor(i / 3);
            return (
              <div
                key={m.num}
                style={{
                  padding: "32px 28px 28px",
                  borderRight: col < 2 ? "0.5px solid rgba(0,0,0,0.12)" : undefined,
                  borderBottom: row < 2 ? "0.5px solid rgba(0,0,0,0.12)" : undefined,
                }}
              >
                <div style={{ fontSize: "11px", color: "#000", letterSpacing: "0.18em", marginBottom: "10px", opacity: 0.4 }}>
                  {m.num}
                </div>
                <div style={{ fontSize: "15px", fontWeight: 500, marginBottom: "12px", letterSpacing: "-0.01em" }}>
                  {m.name}
                </div>
                <p style={{ fontSize: "13px", lineHeight: 1.9, color: "#000", marginBottom: "10px" }}>
                  {m.desc}
                </p>
                <SignalBar value={value} />
                <div style={{ marginTop: "16px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontSize: "11px", color: "#000", letterSpacing: "0.1em", opacity: 0.45 }}>
                    {m.source}
                  </span>
                  <a
                    href={m.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ fontSize: "11px", color: "#000", letterSpacing: "0.1em", textDecoration: "none" }}
                  >
                    View chart →
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* FOOTER DISCLAIMER */}
      <div style={CONTAINER}>
        <p style={{ fontSize: "13px", lineHeight: 1.9, color: "#000", maxWidth: "640px", padding: "32px 0", opacity: 0.5 }}>
          The composite score and individual signals are sourced from CBBI by Colin Talks Crypto and LookIntoBitcoin. None of this constitutes financial advice. Educational and informational purposes only.
        </p>
      </div>
    </>
  );
}
