import { fetchMarketData, getScoreState } from "@/lib/api";

export const revalidate = 3600;

const C = { maxWidth: "1200px", margin: "0 auto", padding: "0 48px" } as const;
const LBL = { fontSize: "11px", color: "#000", letterSpacing: "0.2em", textTransform: "uppercase" as const, opacity: 0.5 };
const VAL = { fontSize: "27px", fontWeight: 300, marginBottom: "6px" };

const METRICS = [
  { num: "01", name: "Pi Cycle Top", desc: "Tracks two moving averages. Historically signals cycle tops when they cross.", url: "https://lookintobitcoin.com/charts/pi-cycle-top-indicator", source: "LookIntoBitcoin" },
  { num: "02", name: "RUPL / NUPL", desc: "Measures unrealized profit/loss across all Bitcoin holders.", url: "https://lookintobitcoin.com/charts/relative-unrealized-profit--loss", source: "LookIntoBitcoin" },
  { num: "03", name: "Puell Multiple", desc: "Compares daily miner revenue to its annual average. High values = sell pressure.", url: "https://lookintobitcoin.com/charts/puell-multiple", source: "LookIntoBitcoin" },
  { num: "04", name: "Stock-to-Flow", desc: "Compares existing supply to new issuance rate. Models long-term price.", url: "https://lookintobitcoin.com/charts/stock-to-flow-model", source: "LookIntoBitcoin" },
  { num: "05", name: "2-Year MA Multiplier", desc: "Tracks price relative to 2-year moving average. Identifies macro extremes.", url: "https://lookintobitcoin.com/charts/bitcoin-investor-tool", source: "LookIntoBitcoin" },
  { num: "06", name: "Trolololo Trend Line", desc: "Long-term logarithmic regression band. Flags deviation from trend.", url: "https://www.blockchaincenter.net/bitcoin-rainbow-chart/", source: "BlockchainCenter" },
  { num: "07", name: "MVRV Z-Score", desc: "Market value vs realized value. High Z-score = market overheated.", url: "https://lookintobitcoin.com/charts/mvrv-zscore", source: "LookIntoBitcoin" },
  { num: "08", name: "Reserve Risk", desc: "Confidence of long-term holders vs current price. Low = good risk/reward.", url: "https://lookintobitcoin.com/charts/reserve-risk", source: "LookIntoBitcoin" },
  { num: "09", name: "Woobull Tops", desc: "On-chain network valuation model tracking price deviation.", url: "https://woocharts.com/bitcoin-price-models/", source: "Woocharts" },
] as const;

export default async function MetricsPage() {
  const data = await fetchMarketData();
  const { score } = data.cbbi;
  const state = getScoreState(score);

  return (
    <>
      {/* PAGE HERO */}
      <section style={{ borderBottom: "0.8px solid #000", padding: "64px 0 52px" }}>
        <div style={{ ...C, display: "grid", gridTemplateColumns: "1fr 1fr", gap: "64px", alignItems: "start" }}>
          <h1 style={{ fontSize: "52px", fontWeight: 300, letterSpacing: "-0.03em", lineHeight: 1.05 }}>
            9 on-chain metrics<br />One score
          </h1>
          <p style={{ fontSize: "15px", lineHeight: 1.9, color: "#000", paddingTop: "8px" }}>
            The CBBI aggregates nine independent on-chain metrics into a single composite score between 0 and 100. The higher the score, the closer we likely are to a cycle top. The lower the score, the safer it historically has been to accumulate. Each metric has shown predictive patterns near cycle tops and bottoms. As Bitcoin matures and adoption grows, no single metric is definitive — but combined, they remain effective. The composite is designed to reduce noise.
          </p>
        </div>
      </section>

      {/* SCORE SUMMARY BAR */}
      <div style={{ borderBottom: "0.8px solid #000" }}>
        <div style={{ ...C, display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr" }}>
          {[
            { value: String(score), label: "Composite Score" },
            { value: state.label, label: "Current Signal" },
            { value: data.btcPrice > 0 ? new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(data.btcPrice) : "—", label: "BTC Price" },
            { value: "Daily", label: "Update Frequency" },
          ].map((box, i) => (
            <div key={box.label} style={{ padding: "22px 28px", borderRight: i < 3 ? "0.8px solid #000" : undefined, paddingLeft: i === 0 ? 0 : undefined, paddingRight: i === 3 ? 0 : undefined }}>
              <div style={VAL}>{box.value}</div>
              <div style={LBL}>{box.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* SECTION LABEL */}
      <div style={{ borderBottom: "0.8px solid #000" }}>
        <div style={{ ...C, padding: "22px 48px" }}>
          <span style={{ fontSize: "11px", color: "#000", letterSpacing: "0.22em", textTransform: "uppercase" }}>
            The 9 Metrics
          </span>
        </div>
      </div>

      {/* METRICS GRID 3×3 */}
      <div style={{ borderBottom: "0.8px solid #000" }}>
        <div style={{ ...C, display: "grid", gridTemplateColumns: "repeat(3, 1fr)" }}>
          {METRICS.map((m, i) => {
            const col = i % 3;
            const row = Math.floor(i / 3);
            return (
              <div
                key={m.num}
                style={{
                  paddingTop: "32px",
                  paddingBottom: "28px",
                  paddingLeft: col === 0 ? 0 : "28px",
                  paddingRight: col === 2 ? 0 : "28px",
                  textAlign: "left",
                  borderRight: col < 2 ? "0.8px solid #000" : undefined,
                  borderBottom: row < 2 ? "0.8px solid #000" : undefined,
                }}
              >
                <div style={{ fontSize: "11px", color: "#000", letterSpacing: "0.18em", marginBottom: "10px" }}>
                  {m.num}
                </div>
                <div style={{ fontSize: "15px", fontWeight: 500, marginBottom: "12px", letterSpacing: "-0.01em" }}>
                  {m.name}
                </div>
                <p style={{ fontSize: "13px", lineHeight: 1.9, color: "#000", marginBottom: "14px" }}>
                  {m.desc}
                </p>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontSize: "11px", color: "#000", letterSpacing: "0.1em", opacity: 0.4 }}>
                    {m.source}
                  </span>
                  <a
                    href={m.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ fontSize: "11px", color: "#000", letterSpacing: "0.1em", textDecoration: "none", opacity: 0.6 }}
                  >
                    View chart →
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
