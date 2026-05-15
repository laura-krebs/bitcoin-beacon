import Link from "next/link";
import { fetchMarketData } from "@/lib/api";
import type { ScoreState } from "@/lib/api";
import HomepageHero from "@/components/HomepageHero";
import { translateFearGreed } from "@/lib/locale";

export const revalidate = 3600;

const F = "var(--font-space-grotesk),sans-serif";

const PT_SCORE_STATES: ScoreState[] = [
  { label: "STACK",          description: "Historicamente, scores tão baixos têm sido fortes oportunidades de acumulação.",        range: [0,  20] },
  { label: "ACUMULAR",       description: "Faixa de score baixo. Historicamente associado a pontos de entrada favoráveis.",         range: [20, 40] },
  { label: "HODL",           description: "Nível médio, sem sinal forte. Mantenha sua posição e acompanhe o score de perto.",       range: [40, 60] },
  { label: "MOMENTO BULL",   description: "Score em alta. Historicamente associado ao aquecimento do mercado.",                     range: [60, 80] },
  { label: "ZONA DE TOPO",   description: "Faixa de score alto. Historicamente associado aos topos de ciclo. Prossiga com atenção.", range: [80, 101] },
];

function getState(score: number): ScoreState {
  return PT_SCORE_STATES.find(s => score >= s.range[0] && score < s.range[1]) ?? PT_SCORE_STATES[PT_SCORE_STATES.length - 1];
}

function formatPrice(n: number) {
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(n);
}

export default async function HomePT() {
  const data = await fetchMarketData();
  const { score } = data.cbbi;
  const state = getState(score);
  const fgLabel = translateFearGreed(data.fearGreed.classification, "pt");

  return (
    <>
      <div className="mobile-hero-offwhite-title" style={{ display: "none", background: "#e8dfcd", paddingTop: "95px", paddingBottom: "15px", paddingLeft: "32px", paddingRight: "32px", textAlign: "center" }}>
        <div style={{ fontFamily: "var(--font-goudy), serif", fontSize: "52px", fontWeight: 400, letterSpacing: "-0.01em", lineHeight: 1.05, color: "#000" }}>
          Onde estamos<br />no ciclo?
        </div>
      </div>

      <HomepageHero
        score={score}
        state={state}
        heroTextTop="344px"
        heroTextMaxWidth="calc(50% - 228px)"
        heroSubtitleMaxWidth="380px"
        heroTitle={<>Onde estamos<br />no ciclo?</>}
        heroSubtitle="Acompanhe o ciclo de mercado do Bitcoin com dados em tempo real. No Bitcoin Beacon, quanto mais alto o score no farol, mais próximos provavelmente estamos do topo do ciclo. Quanto mais baixo, historicamente mais seguro tem sido acumular."
      />

      <div className="mobile-hero-title-section" style={{ display: "none" }}>
        <div style={{ height: "0.8px", background: "#000" }} />
        <div style={{ padding: "32px 32px 32px", textAlign: "center" }}>
          <p style={{ fontFamily: F, fontSize: "17px", fontWeight: 400, lineHeight: 1.6, color: "#000", margin: 0 }}>
            Acompanhe o ciclo de mercado do Bitcoin com dados em tempo real. No Bitcoin Beacon, quanto mais alto o score no farol, mais próximos provavelmente estamos do topo do ciclo. Quanto mais baixo, historicamente mais seguro tem sido acumular.
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
            Preço do BTC
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
            {data.fearGreed.value} — {fgLabel}
          </div>
          <div style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "#000", opacity: 0.55, marginTop: "6px", fontFamily: F }}>
            Medo &amp; Ganância
          </div>
        </div>
        <div className="metrics-bar-cta" style={{ padding: "26px 48px" }}>
          <Link href="/pt/metrics" className="ilink" style={{ textDecoration: "underline" }}>O que isso significa</Link>
          <Link href="/pt/learn" className="ilink" style={{ textDecoration: "underline" }}>Saiba mais</Link>
        </div>
      </div>

      <div className="homepage-info-row" style={{ display: "flex", justifyContent: "space-between", padding: "13px 48px", borderTop: "0.8px solid #000" }}>
        <Link href="/pt/metrics" className="ilink">O que isso significa →</Link>
        <Link href="/pt/learn" className="ilink">Saiba mais →</Link>
      </div>
    </>
  );
}
