import { fetchMarketData, getScoreState } from "@/lib/api";
import { translateFearGreed } from "@/lib/locale";
import BackToTop from "@/components/BackToTop";

export const revalidate = 3600;

const C = { maxWidth: "1200px", margin: "0 auto", padding: "0 32px" } as const;
const M = "var(--font-space-grotesk),sans-serif";
const LBL = { fontSize: "12px", fontWeight: 600, color: "#000", letterSpacing: "0.12em", textTransform: "uppercase" as const, opacity: 0.55, fontFamily: M };
const VAL = { fontSize: "27px", fontWeight: 300, marginBottom: "6px" };

const PT_SCORE_LABELS: Record<string, string> = {
  "STACK": "STACK",
  "ACCUMULATE": "ACUMULAR",
  "HODL": "HODL",
  "BULL MOMENTUM": "MOMENTO BULL",
  "PEAK ZONE": "ZONA DE TOPO",
};

const METRICS = [
  { num: "01", name: "Pi Cycle Top",          desc: "Rastreia duas médias móveis. Historicamente sinaliza topos de ciclo quando se cruzam.",                    url: "https://lookintobitcoin.com/charts/pi-cycle-top-indicator",             source: "LookIntoBitcoin" },
  { num: "02", name: "RUPL / NUPL",           desc: "Mede o lucro/prejuízo não realizado de todos os detentores de Bitcoin.",                                    url: "https://lookintobitcoin.com/charts/relative-unrealized-profit--loss",    source: "LookIntoBitcoin" },
  { num: "03", name: "Puell Multiple",        desc: "Receita diária dos mineradores × média anual. Valores altos = pressão de venda.",                           url: "https://lookintobitcoin.com/charts/puell-multiple",                      source: "LookIntoBitcoin" },
  { num: "04", name: "Stock-to-Flow",         desc: "Compara a oferta existente com a nova taxa de emissão.",                                                     url: "https://lookintobitcoin.com/charts/stock-to-flow-model",                 source: "LookIntoBitcoin" },
  { num: "05", name: "2-Year MA Multiplier",  desc: "Rastreia o preço em relação à média móvel de 2 anos.",                                                       url: "https://lookintobitcoin.com/charts/bitcoin-investor-tool",               source: "LookIntoBitcoin" },
  { num: "06", name: "Trolololo Trend Line",  desc: "Regressão logarítmica de longo prazo. Sinaliza extremos de avaliação.",                                      url: "https://www.blockchaincenter.net/bitcoin-rainbow-chart/",                source: "BlockchainCenter" },
  { num: "07", name: "MVRV Z-Score",          desc: "Compara valor de mercado com valor realizado. Um Z-score alto indica mercado superaquecido.",                url: "https://lookintobitcoin.com/charts/mvrv-zscore",                         source: "LookIntoBitcoin" },
  { num: "08", name: "Reserve Risk",          desc: "Mede a confiança dos detentores de longo prazo em relação ao preço.",                                        url: "https://lookintobitcoin.com/charts/reserve-risk",                        source: "LookIntoBitcoin" },
  { num: "09", name: "Woobull Tops",          desc: "Múltiplos modelos de avaliação do Bitcoin sinalizando topos de ciclo.",                                       url: "https://woocharts.com/bitcoin-price-models/",                            source: "Woocharts" },
] as const;

export default async function MetricsPagePT() {
  const data = await fetchMarketData();
  const { score } = data.cbbi;
  const state = getScoreState(score);
  const stateLabel = PT_SCORE_LABELS[state.label] ?? state.label;
  const fgLabel = translateFearGreed(data.fearGreed.classification, "pt");

  return (
    <>
      <section style={{ borderBottom: "0.8px solid #000", padding: "64px 0 52px" }}>
        <div className="page-hero-grid" style={{ ...C, display: "grid", gridTemplateColumns: "1fr 1fr", gap: "64px", alignItems: "start" }}>
          <h1 style={{ fontSize: "52px", fontWeight: 400, letterSpacing: "-0.01em", lineHeight: 1.05, fontFamily: "var(--font-goudy), serif" }}>
            Nove sinais.<br />Um score.
          </h1>
          <p style={{ fontSize: "17px", fontWeight: 400, lineHeight: 1.9, color: "#000", paddingTop: "8px" }}>
            O CBBI agrega nove métricas on-chain independentes em um único score composto entre 0 e 100. Cada métrica demonstrou padrões preditivos perto dos topos e fundos dos ciclos. À medida que o Bitcoin amadurece e a adoção cresce, nenhuma métrica isolada é definitiva — mas combinadas, permanecem eficazes. O composto é projetado para reduzir o ruído.
          </p>
        </div>
      </section>

      <div style={{ borderBottom: "0.8px solid #000" }}>
        <div className="metrics-score-grid" style={{ ...C, display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr" }}>
          {[
            { value: `${score} / 100`, label: "Score Composto", sub: null },
            { value: stateLabel,       label: "Sinal Atual",    sub: null },
            { value: data.btcPrice > 0 ? new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(data.btcPrice) : "—", label: "Preço do BTC", sub: null },
            { value: String(data.fearGreed.value), label: "Medo & Ganância", sub: fgLabel },
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
            As 9 Métricas
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
