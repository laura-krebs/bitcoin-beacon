import { fetchMarketData, getScoreState } from "@/lib/api";
import { translateFearGreed } from "@/lib/locale";
import BackToTop from "@/components/BackToTop";

export const revalidate = 3600;

const C = { maxWidth: "1200px", margin: "0 auto", padding: "0 32px" } as const;
const M = "var(--font-space-grotesk),sans-serif";
const LBL = { fontSize: "12px", fontWeight: 600, color: "#000", letterSpacing: "0.12em", textTransform: "uppercase" as const, opacity: 0.55, fontFamily: M };
const VAL = { fontSize: "27px", fontWeight: 300, marginBottom: "6px" };

const ES_SCORE_LABELS: Record<string, string> = {
  "STACK": "STACK",
  "ACCUMULATE": "ACUMULAR",
  "HODL": "HODL",
  "BULL MOMENTUM": "IMPULSO ALCISTA",
  "PEAK ZONE": "ZONA PICO",
};

const METRICS = [
  { num: "01", name: "Pi Cycle Top",          desc: "Rastrea dos medias móviles. Históricamente señala máximos de ciclo cuando se cruzan.",                    url: "https://lookintobitcoin.com/charts/pi-cycle-top-indicator",             source: "LookIntoBitcoin" },
  { num: "02", name: "RUPL / NUPL",           desc: "Mide el beneficio/pérdida no realizado de todos los tenedores de Bitcoin.",                               url: "https://lookintobitcoin.com/charts/relative-unrealized-profit--loss",    source: "LookIntoBitcoin" },
  { num: "03", name: "Puell Multiple",        desc: "Ingresos diarios de los mineros × promedio anual. Valores altos = presión de venta.",                     url: "https://lookintobitcoin.com/charts/puell-multiple",                      source: "LookIntoBitcoin" },
  { num: "04", name: "Stock-to-Flow",         desc: "Compara la oferta existente con la nueva tasa de emisión.",                                               url: "https://lookintobitcoin.com/charts/stock-to-flow-model",                 source: "LookIntoBitcoin" },
  { num: "05", name: "2-Year MA Multiplier",  desc: "Rastrea el precio en relación a la media móvil de 2 años.",                                               url: "https://lookintobitcoin.com/charts/bitcoin-investor-tool",               source: "LookIntoBitcoin" },
  { num: "06", name: "Trolololo Trend Line",  desc: "Regresión logarítmica a largo plazo. Señala extremos de valoración.",                                     url: "https://www.blockchaincenter.net/bitcoin-rainbow-chart/",                source: "BlockchainCenter" },
  { num: "07", name: "MVRV Z-Score",          desc: "Compara valor de mercado con valor realizado. Un Z-score alto indica mercado sobrecalentado.",             url: "https://lookintobitcoin.com/charts/mvrv-zscore",                         source: "LookIntoBitcoin" },
  { num: "08", name: "Reserve Risk",          desc: "Mide la confianza de los tenedores a largo plazo en relación al precio.",                                 url: "https://lookintobitcoin.com/charts/reserve-risk",                        source: "LookIntoBitcoin" },
  { num: "09", name: "Woobull Tops",          desc: "Múltiples modelos de valoración de Bitcoin que señalan máximos de ciclo.",                                url: "https://woocharts.com/bitcoin-price-models/",                            source: "Woocharts" },
] as const;

export default async function MetricsPageES() {
  const data = await fetchMarketData();
  const { score } = data.cbbi;
  const state = getScoreState(score);
  const stateLabel = ES_SCORE_LABELS[state.label] ?? state.label;
  const fgLabel = translateFearGreed(data.fearGreed.classification, "es");

  return (
    <>
      <section style={{ borderBottom: "0.8px solid #000", padding: "64px 0 52px" }}>
        <div className="page-hero-grid" style={{ ...C, display: "grid", gridTemplateColumns: "1fr 1fr", gap: "64px", alignItems: "start" }}>
          <h1 style={{ fontSize: "52px", fontWeight: 400, letterSpacing: "-0.01em", lineHeight: 1.05, fontFamily: "var(--font-goudy), serif" }}>
            Nueve señales.<br />Un score.
          </h1>
          <p style={{ fontSize: "17px", fontWeight: 400, lineHeight: 1.9, color: "#000", paddingTop: "8px" }}>
            El CBBI agrega nueve métricas on-chain independientes en un único score compuesto entre 0 y 100. Cada métrica ha mostrado patrones predictivos cerca de los máximos y mínimos de los ciclos. A medida que Bitcoin madura y la adopción crece, ninguna métrica por sí sola es definitiva — pero combinadas, siguen siendo efectivas. El compuesto está diseñado para reducir el ruido.
          </p>
        </div>
      </section>

      <div style={{ borderBottom: "0.8px solid #000" }}>
        <div className="metrics-score-grid" style={{ ...C, display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr" }}>
          {[
            { value: `${score} / 100`, label: "Score Compuesto", sub: null },
            { value: stateLabel,       label: "Señal Actual",    sub: null },
            { value: data.btcPrice > 0 ? new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(data.btcPrice) : "—", label: "Precio BTC", sub: null },
            { value: String(data.fearGreed.value), label: "Miedo & Codicia", sub: fgLabel },
          ].map((box, i) => (
            <div key={box.label} style={{ padding: "22px 28px", borderRight: i < 3 ? "0.8px solid #000" : undefined, paddingLeft: i === 0 ? 0 : undefined, paddingRight: i === 3 ? 0 : undefined }}>
              <div style={VAL}>{box.value}{box.sub ? ` — ${box.sub}` : ""}</div>
              <div style={LBL}>{box.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ borderBottom: "0.8px solid #000" }}>
        <div style={{ ...C, padding: "22px 32px" }}>
          <span style={{ fontSize: "12px", fontWeight: 600, color: "#000", letterSpacing: "0.12em", textTransform: "uppercase", fontFamily: M }}>
            Las 9 Métricas
          </span>
        </div>
      </div>

      <div>
        <div className="metrics-cards-grid" style={{ ...C, display: "grid", gridTemplateColumns: "repeat(3, 1fr)" }}>
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
                <div style={{ fontSize: "12px", fontWeight: 600, color: "#000", letterSpacing: "0.12em", marginBottom: "10px", fontFamily: M }}>{m.num}</div>
                <div style={{ fontSize: "18px", fontWeight: 500, marginBottom: "12px", letterSpacing: "-0.01em" }}>{m.name}</div>
                <p style={{ fontSize: "17px", fontWeight: 400, lineHeight: 1.8, color: "#000", marginBottom: "14px" }}>{m.desc}</p>
                <div className="metric-source-row" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontSize: "12px", fontWeight: 400, color: "#000", letterSpacing: "0.12em", opacity: 0.55, fontFamily: M }}>{m.source}</span>
                  <a href={m.url} target="_blank" rel="noopener noreferrer" style={{ fontSize: "11px", color: "#000", letterSpacing: "0.12em", textDecoration: "none", opacity: 0.6, fontFamily: M }}>
                    Ver gráfico →
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <BackToTop />
    </>
  );
}
