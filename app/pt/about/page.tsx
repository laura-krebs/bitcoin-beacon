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
  { label: "Criado e desenhado por", value: "@laurakrebs_",        href: "https://x.com/laurakrebs_" },
  { label: "Desenvolvido com",       value: "Claude by Anthropic", href: "https://anthropic.com" },
];

const LINK = { fontSize: "12px", color: "#000", textDecoration: "none", lineHeight: 1.6 } as const;

export default function AboutPagePT() {
  return (
    <>
      <section style={{ borderBottom: "0.8px solid #000", padding: "64px 0 52px" }}>
        <div className="page-hero-grid" style={{ ...C, display: "grid", gridTemplateColumns: "1fr 1fr", gap: "64px", alignItems: "start" }}>
          <h1 style={{ fontSize: "52px", fontWeight: 400, letterSpacing: "-0.01em", lineHeight: 1.1, fontFamily: "var(--font-goudy), serif" }}>
            Educação sobre Bitcoin<br />para todos.
          </h1>
          <p style={{ fontSize: "17px", fontWeight: 400, lineHeight: 1.9, color: "#000", paddingTop: "8px" }}>
            A maioria das ferramentas que rastreiam ciclos do Bitcoin e dados on-chain não foi construída com clareza em mente. O Bitcoin Beacon traz linguagem simples e contexto completo, para que qualquer pessoa possa entender o que está por trás do dinheiro mais sólido já criado.
          </p>
        </div>
      </section>

      <section style={{ borderBottom: "0.8px solid #000", overflowX: "clip", position: "relative" }}>
        <div className="about-body-grid" style={{ ...C, display: "grid", gridTemplateColumns: "200px 1fr", gap: "40px", alignItems: "stretch" }}>
          <div className="about-sidebar" style={{ paddingTop: "52px", paddingBottom: "52px" }}>
            {["O problema.", "O objetivo.", "A solução.", ""].map((label, i) => label ? (
              <div key={i} style={{ fontSize: "12px", fontWeight: 600, color: "#000", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "40px", opacity: 0.55, lineHeight: 1.6, fontFamily: M }}>
                {label}
              </div>
            ) : null)}
          </div>
          <div style={{ paddingTop: "52px", paddingBottom: "52px" }}>
            {[
              "A maior barreira para a adoção do Bitcoin não é a complexidade — é o medo. Se você não tem confiança ou contexto para saber quando faz sentido se envolver, você fica de fora e nunca chega perto de entender a verdadeira profundidade do Bitcoin e seu ecossistema.",
              "Informação boa existe. Os dados on-chain são públicos, as métricas estão bem documentadas, e ferramentas como o CBBI fizeram um trabalho sério ao agregá-las. Mas a maioria desses recursos não foi construída com o usuário não técnico em mente. São densos, visualmente complexos e raramente explicam o que o Bitcoin realmente é e como funciona.",
              "Bitcoin Beacon começou com uma pergunta simples: como seria isso com uma interface limpa e os fundamentos explicados primeiro, para que qualquer pessoa pudesse entender o que está vendo? O objetivo era pegar o CBBI e apresentá-lo da forma mais simples e acessível possível. Linguagem simples, e um número que diz onde estamos no ciclo, com contexto suficiente para realmente entender.",
              "O objetivo não é substituir as ferramentas originais. É torná-las acessíveis. Encontrar você onde você está, dar um ponto de partida claro e deixar a curiosidade fazer o resto. De DCA a autocustódia e soberania, o caminho para entender o Bitcoin passa pela confiança — e a confiança começa com clareza.",
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
              Nada neste site é aconselhamento financeiro. O Bitcoin Beacon é uma ferramenta educacional destinada a ajudar as pessoas a entender o Bitcoin e os ciclos de mercado de longo prazo.
            </p>
          </div>
          <div className="about-credits" style={{ textAlign: "right" }}>
            <div style={{ marginBottom: "16px" }}>
              <div style={SECTION_TITLE}>Fonte de dados</div>
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
