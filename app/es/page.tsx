import Link from "next/link";
import { fetchMarketData } from "@/lib/api";
import type { ScoreState } from "@/lib/api";
import HomepageHero from "@/components/HomepageHero";

export const revalidate = 3600;

const F = "var(--font-space-grotesk),sans-serif";

const ES_SCORE_STATES: ScoreState[] = [
  { label: "STACK",            description: "Históricamente, scores tan bajos han sido fuertes oportunidades de acumulación.",        range: [0,  20] },
  { label: "ACUMULAR",         description: "Rango de score bajo. Históricamente asociado a puntos de entrada favorables.",            range: [20, 40] },
  { label: "HODL",             description: "Nivel medio, sin señal fuerte. Mantén tu posición y sigue el score de cerca.",           range: [40, 60] },
  { label: "IMPULSO ALCISTA",  description: "Score en alza. Históricamente asociado al calentamiento del mercado.",                   range: [60, 80] },
  { label: "ZONA PICO",        description: "Rango de score alto. Históricamente asociado a los máximos del ciclo. Procede con cautela.", range: [80, 101] },
];

function getState(score: number): ScoreState {
  return ES_SCORE_STATES.find(s => score >= s.range[0] && score < s.range[1]) ?? ES_SCORE_STATES[ES_SCORE_STATES.length - 1];
}

function formatPrice(n: number) {
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(n);
}

export default async function HomeES() {
  const data = await fetchMarketData();
  const { score } = data.cbbi;
  const state = getState(score);

  return (
    <>
      <div className="mobile-hero-offwhite-title" style={{ display: "none", background: "#e8dfcd", paddingTop: "95px", paddingBottom: "15px", paddingLeft: "32px", paddingRight: "32px", textAlign: "center" }}>
        <div style={{ fontFamily: "var(--font-goudy), serif", fontSize: "52px", fontWeight: 400, letterSpacing: "-0.01em", lineHeight: 1.05, color: "#000" }}>
          ¿Dónde estamos<br />en el ciclo?
        </div>
      </div>

      <HomepageHero score={score} state={state} />

      <div className="mobile-hero-title-section" style={{ display: "none" }}>
        <div style={{ height: "0.8px", background: "#000" }} />
        <div style={{ padding: "32px 32px 32px", textAlign: "center" }}>
          <p style={{ fontFamily: F, fontSize: "17px", fontWeight: 400, lineHeight: 1.6, color: "#000", margin: 0 }}>
            Sigue el ciclo de mercado de Bitcoin con datos en tiempo real. En Bitcoin Beacon, cuanto más alto el score en el faro, más cerca probablemente estamos del tope del ciclo. Cuanto más bajo, históricamente más seguro ha sido acumular.
          </p>
        </div>
        <div style={{ height: "0.5px", background: "rgba(0,0,0,0.15)" }} />
      </div>

      <div className="homepage-metrics-bar" style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", borderTop: "0.8px solid #000" }}>
        <div className="metrics-bar-btc" style={{ padding: "26px 48px", borderRight: "0.8px solid #000" }}>
          <div style={{ fontSize: "26px", fontWeight: 300, color: "#000", letterSpacing: "-0.02em", fontFamily: F }}>
            {data.btcPrice > 0 ? formatPrice(data.btcPrice) : "—"}
          </div>
          <div style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "#000", opacity: 0.55, marginTop: "6px", fontFamily: F }}>
            Precio BTC
          </div>
        </div>
        <div className="metrics-bar-score" style={{ padding: "26px 48px", borderRight: "0.8px solid #000" }}>
          <div style={{ fontSize: "26px", fontWeight: 300, color: "#000", letterSpacing: "-0.02em", fontFamily: F }}>
            {score} <span style={{ fontSize: "26px", fontWeight: 300 }}>/ 100</span>
          </div>
          <div style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "#000", opacity: 0.55, marginTop: "6px", fontFamily: F }}>
            Score CBBI
          </div>
        </div>
        <div className="metrics-bar-fg" style={{ padding: "26px 48px" }}>
          <div style={{ fontSize: "26px", fontWeight: 300, color: "#000", letterSpacing: "-0.02em", fontFamily: F }}>
            {data.fearGreed.value} — {data.fearGreed.classification}
          </div>
          <div style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "#000", opacity: 0.55, marginTop: "6px", fontFamily: F }}>
            Miedo &amp; Codicia
          </div>
        </div>
        <div className="metrics-bar-cta" style={{ padding: "26px 48px" }}>
          <Link href="/es/metrics" className="ilink" style={{ textDecoration: "underline" }}>¿Qué significa esto?</Link>
          <Link href="/es/learn" className="ilink" style={{ textDecoration: "underline" }}>Más información</Link>
        </div>
      </div>

      <div className="homepage-info-row" style={{ display: "flex", justifyContent: "space-between", padding: "13px 48px", borderTop: "0.8px solid #000" }}>
        <Link href="/es/metrics" className="ilink">¿Qué significa esto? →</Link>
        <Link href="/es/learn" className="ilink">Más información →</Link>
      </div>
    </>
  );
}
