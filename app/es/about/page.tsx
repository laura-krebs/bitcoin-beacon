import BackToTop from "@/components/BackToTop";

const C = { maxWidth: "1200px", margin: "0 auto", padding: "0 32px" } as const;
const M = "var(--font-space-grotesk),sans-serif";
const LBL_STYLE = { fontSize: "12px", fontWeight: 600, color: "#000", letterSpacing: "0.12em", textTransform: "uppercase" as const, opacity: 0.55, marginBottom: "4px", fontFamily: M };
const SECTION_TITLE = { fontSize: "12px", fontWeight: 600, color: "#000", letterSpacing: "0.12em", textTransform: "uppercase" as const, marginBottom: "8px", opacity: 0.55, fontFamily: M };

const DATA_SOURCES = [
  { value: "CBBI",           href: "https://colintalkscrypto.com/cbbi" },
  { value: "CoinMarketCap",  href: "https://coinmarketcap.com" },
  { value: "Alternative.me", href: "https://alternative.me/crypto/fear-and-greed-index" },
];

const CREDITS = [
  { label: "Creado y diseñado por", value: "@laurakrebs_",        href: "https://x.com/laurakrebs_" },
  { label: "Desarrollado con",      value: "Claude by Anthropic", href: "https://anthropic.com" },
];

const LINK = { fontSize: "12px", color: "#000", textDecoration: "none", lineHeight: 1.6 } as const;

export default function AboutPageES() {
  return (
    <>
      <section style={{ borderBottom: "0.8px solid #000", padding: "64px 0 52px" }}>
        <div className="page-hero-grid" style={{ ...C, display: "grid", gridTemplateColumns: "1fr 1fr", gap: "64px", alignItems: "start" }}>
          <h1 style={{ fontSize: "52px", fontWeight: 400, letterSpacing: "-0.01em", lineHeight: 1.1, fontFamily: "var(--font-goudy), serif" }}>
            Educación sobre Bitcoin<br />para todos.
          </h1>
          <p style={{ fontSize: "17px", fontWeight: 400, lineHeight: 1.9, color: "#000", paddingTop: "8px" }}>
            La mayoría de las herramientas que rastrean ciclos de Bitcoin y datos on-chain no fueron construidas con claridad en mente. Bitcoin Beacon trae lenguaje simple y contexto completo, para que cualquier persona pueda entender lo que hay detrás del dinero más sólido jamás creado.
          </p>
        </div>
      </section>

      <section style={{ borderBottom: "0.8px solid #000", overflowX: "clip", position: "relative" }}>
        <div className="about-body-grid" style={{ ...C, display: "grid", gridTemplateColumns: "200px 1fr", gap: "40px", alignItems: "stretch" }}>
          <div className="about-sidebar" style={{ paddingTop: "52px", paddingBottom: "52px" }}>
            {["El problema.", "El objetivo.", "La solución.", ""].map((label, i) => label ? (
              <div key={i} style={{ fontSize: "12px", fontWeight: 600, color: "#000", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "40px", opacity: 0.55, lineHeight: 1.6, fontFamily: M }}>
                {label}
              </div>
            ) : null)}
          </div>
          <div style={{ paddingTop: "52px", paddingBottom: "52px" }}>
            {[
              "La mayor barrera para la adopción de Bitcoin no es la complejidad — es el miedo. Si no tienes la confianza o el contexto para saber cuándo tiene sentido involucrarte, te quedas fuera y nunca llegas a entender la verdadera profundidad de Bitcoin y su ecosistema.",
              "Existe buena información. Los datos on-chain son públicos, las métricas están bien documentadas, y herramientas como el CBBI han hecho un trabajo serio al agregarlas. Pero la mayoría de estos recursos no fueron construidos pensando en el usuario no técnico. Son densos, visualmente complejos y rara vez explican qué es realmente Bitcoin y cómo funciona.",
              "Bitcoin Beacon comenzó con una pregunta simple: ¿cómo se vería esto con una interfaz clara y los fundamentos explicados primero, para que cualquiera pudiera entender lo que está viendo? El objetivo era tomar el CBBI y presentarlo de la forma más simple y accesible posible. Lenguaje simple, y un número que te dice dónde estamos en el ciclo, con suficiente contexto para realmente entenderlo.",
              "El objetivo no es reemplazar las herramientas originales. Es hacerlas accesibles. Encontrarte donde estás, darte un punto de partida claro y dejar que la curiosidad haga el resto. De DCA a autocustodia y soberanía, el camino para entender Bitcoin pasa por la confianza — y la confianza comienza con la claridad.",
            ].map((para, i) => (
              <p key={i} style={{ fontSize: "17px", fontWeight: 400, lineHeight: 1.9, color: "#000", marginBottom: "22px" }}>{para}</p>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "44px 0" }}>
        <div className="about-bottom-grid" style={{ ...C, display: "grid", gridTemplateColumns: "2fr 1fr", gap: "64px" }}>
          <div>
            <div style={SECTION_TITLE}>Aviso legal</div>
            <p style={{ fontSize: "15px", fontWeight: 400, lineHeight: 1.9, color: "#000" }}>
              Nada en este sitio es asesoramiento financiero. Bitcoin Beacon es una herramienta educativa destinada a ayudar a las personas a entender Bitcoin y los ciclos de mercado a largo plazo.
            </p>
          </div>
          <div className="about-credits" style={{ textAlign: "right" }}>
            <div style={{ marginBottom: "16px" }}>
              <div style={SECTION_TITLE}>Fuente de datos</div>
              <div style={{ fontSize: "12px", lineHeight: 1.6 }}>
                {DATA_SOURCES.map((s, i) => (
                  <span key={s.value}>
                    <a href={s.href} target="_blank" rel="noopener noreferrer" style={LINK}>{s.value}</a>
                    {i < DATA_SOURCES.length - 1 && <span style={{ opacity: 0.35 }}> · </span>}
                  </span>
                ))}
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {CREDITS.map((c) => (
                <div key={c.value}>
                  <div style={LBL_STYLE}>{c.label}</div>
                  <a href={c.href} target="_blank" rel="noopener noreferrer" style={LINK}>{c.value}</a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <BackToTop />
    </>
  );
}
