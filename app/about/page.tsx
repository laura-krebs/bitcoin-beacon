import BackToTop from "@/components/BackToTop";

const C = { maxWidth: "1200px", margin: "0 auto", padding: "0 32px" } as const;
const M = "var(--font-space-grotesk),sans-serif";
const LBL_STYLE = { fontSize: "12px", fontWeight: 600, color: "#000", letterSpacing: "0.12em", textTransform: "uppercase" as const, opacity: 0.55, marginBottom: "4px", fontFamily: M };
const SECTION_TITLE = { fontSize: "12px", fontWeight: 600, color: "#000", letterSpacing: "0.12em", textTransform: "uppercase" as const, marginBottom: "8px", opacity: 0.55, fontFamily: M };

const DATA_SOURCES = [
  { value: "CBBI", href: "https://colintalkscrypto.com/cbbi" },
  { value: "CoinMarketCap", href: "https://coinmarketcap.com" },
  { value: "Alternative.me", href: "https://alternative.me/crypto/fear-and-greed-index" },
];

const CREDITS = [
  { label: "Created and designed by", value: "@laurakrebs_", href: "https://x.com/laurakrebs_" },
  { label: "Built with", value: "Claude by Anthropic", href: "https://anthropic.com" },
];

const LINK = { fontSize: "12px", color: "#000", textDecoration: "none", lineHeight: 1.6 } as const;

export default function AboutPage() {
  return (
    <>
      {/* PAGE HERO */}
      <section style={{ borderBottom: "0.8px solid #000", padding: "64px 0 52px" }}>
        <div className="page-hero-grid" style={{ ...C, display: "grid", gridTemplateColumns: "1fr 1fr", gap: "64px", alignItems: "start" }}>
          <h1 style={{ fontSize: "52px", fontWeight: 400, letterSpacing: "-0.01em", lineHeight: 1.1, fontFamily: "var(--font-goudy), serif" }}>
            Bitcoin education<br />for everyone
          </h1>
          <p style={{ fontSize: "17px", fontWeight: 400, lineHeight: 1.9, color: "#000", paddingTop: "8px" }}>
            Most tools that track Bitcoin cycles and on-chain data weren&apos;t built with clarity in mind. Bitcoin Beacon brings plain language and full context, so anyone can understand what&apos;s behind the most sound money ever created.
          </p>
        </div>
      </section>

      {/* BODY */}
      <section style={{ borderBottom: "0.8px solid #000", overflowX: "clip", position: "relative" }}>
<div className="about-body-grid" style={{ ...C, display: "grid", gridTemplateColumns: "200px 1fr", gap: "40px", alignItems: "stretch" }}>
          <div className="about-sidebar" style={{ paddingTop: "52px", paddingBottom: "52px" }}>
            {["The problem.", "The goal.", "The solution."].map((label) => (
              <div
                key={label}
                style={{
                  fontSize: "12px",
                  fontWeight: 600,
                  color: "#000",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  marginBottom: "40px",
                  opacity: 0.55,
                  lineHeight: 1.6,
                  fontFamily: M,
                }}
              >
                {label}
              </div>
            ))}
          </div>
          <div style={{ paddingTop: "52px", paddingBottom: "52px" }}>
            {[
              "The biggest barrier to Bitcoin adoption isn't complexity — it's fear. If you don't have the confidence or context to know when it makes sense to get involved, you stay out entirely, and never get close to understanding the true depth of Bitcoin and its ecosystem.",
              "Good information exists. The on-chain data is public, the metrics are well-documented, and tools like CBBI have done serious work aggregating them. But most of these resources weren't built with the non-technical user in mind. They're dense, visually complex, and rarely explain what Bitcoin actually is and how it works.",
              "Bitcoin Beacon started with a simple question: what would this look like with a clean interface and fundamentals explained first, so anyone could understand what they're looking at? The goal was to take the CBBI and present it in the simplest, most accessible way possible. Plain language, and one number that tells you where we are in the cycle, with enough context to actually understand it.",
            ].map((para, i) => (
              <p key={i} style={{ fontSize: "17px", fontWeight: 400, lineHeight: 1.9, color: "#000", marginBottom: "22px" }}>
                {para}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* BOTTOM ROW */}
      <section style={{ padding: "44px 0" }}>
        <div className="about-bottom-grid" style={{ ...C, display: "grid", gridTemplateColumns: "2fr 1fr", gap: "64px" }}>

          {/* Disclaimer */}
          <div>
            <div style={SECTION_TITLE}>Disclaimer</div>
            <p style={{ fontSize: "15px", fontWeight: 400, lineHeight: 1.9, color: "#000" }}>
              Nothing on this site is financial advice. Bitcoin Beacon is an educational tool intended to help people understand Bitcoin and long-term market cycles.
            </p>
          </div>

          {/* Credits — no title, no divider lines */}
          <div className="about-credits" style={{ textAlign: "right" }}>

            {/* Data sources */}
            <div style={{ marginBottom: "16px" }}>
              <div style={SECTION_TITLE}>Data source</div>
              <div style={{ fontSize: "12px", lineHeight: 1.6 }}>
                {DATA_SOURCES.map((s, i) => (
                  <span key={s.value}>
                    <a href={s.href} target="_blank" rel="noopener noreferrer" style={LINK}>{s.value}</a>
                    {i < DATA_SOURCES.length - 1 && <span style={{ opacity: 0.35 }}> · </span>}
                  </span>
                ))}
              </div>
            </div>

            {/* Created by / Built with */}
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {CREDITS.map((c) => (
                <div key={c.value}>
                  <div style={LBL_STYLE}>{c.label}</div>
                  <a href={c.href} target="_blank" rel="noopener noreferrer" style={LINK}>
                    {c.value}
                  </a>
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
