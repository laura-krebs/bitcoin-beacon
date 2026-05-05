const C = { maxWidth: "1200px", margin: "0 auto", padding: "0 48px" } as const;
const LBL_STYLE = { fontSize: "11px", color: "#000", letterSpacing: "0.14em", textTransform: "uppercase" as const, opacity: 0.45, marginBottom: "4px" };
const SECTION_TITLE = { fontSize: "11px", color: "#000", letterSpacing: "0.2em", textTransform: "uppercase" as const, marginBottom: "8px", opacity: 0.45 };

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
        <div style={{ ...C, display: "grid", gridTemplateColumns: "1fr 1fr", gap: "64px", alignItems: "start" }}>
          <h1 style={{ fontSize: "52px", fontWeight: 300, letterSpacing: "-0.03em", lineHeight: 1.1 }}>
            Bitcoin education<br />for everyone
          </h1>
          <p style={{ fontSize: "15px", lineHeight: 1.9, color: "#000", paddingTop: "8px" }}>
            Most tools that track Bitcoin cycles and on-chain data weren&apos;t built with clarity in mind. Bitcoin Beacon started with a simple question: what would this look like with a clean interface and fundamentals explained first, so anyone could understand it?
          </p>
        </div>
      </section>

      {/* BODY */}
      <section style={{ borderBottom: "0.8px solid #000", padding: "52px 0" }}>
        <div style={{ ...C, display: "grid", gridTemplateColumns: "200px 1fr", gap: "64px" }}>
          <div style={{ paddingTop: "4px" }}>
            {["The problem.", "The goal.", "The solution."].map((label) => (
              <div
                key={label}
                style={{
                  fontSize: "11px",
                  color: "#000",
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  marginBottom: "40px",
                  opacity: 0.45,
                  lineHeight: 1.6,
                }}
              >
                {label}
              </div>
            ))}
          </div>
          <div>
            {[
              "The biggest barrier to Bitcoin adoption isn't complexity — it's fear. If you don't have the confidence or context to know when it makes sense to get involved, you stay out entirely, and never get close to understanding the true depth of Bitcoin and its ecosystem.",
              "Good information exists. The on-chain data is public, the metrics are well-documented, and tools like CBBI have done serious work aggregating them. But most of these resources weren't built with the non-technical user in mind. They're dense, visually complex, and rarely explain what Bitcoin actually is and how it works.",
              "Bitcoin Beacon started as a design problem. The goal was to take the CBBI and present it in the simplest, most accessible way possible. Clean interface, plain language, one number that tells you where we are in the cycle, with enough context to actually understand Bitcoin.",
              "The aim isn't to replace the original tools. It's to make them accessible. To meet you where you are, give you a clear starting point, and let curiosity do the rest. From DCA to self-custody to sovereignty, the path to understanding Bitcoin runs through confidence — and confidence starts with clarity.",
            ].map((para, i) => (
              <p key={i} style={{ fontSize: "15px", lineHeight: 1.9, color: "#000", marginBottom: "22px" }}>
                {para}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* BOTTOM ROW */}
      <section style={{ padding: "44px 0" }}>
        <div style={{ ...C, display: "grid", gridTemplateColumns: "1fr 1fr", gap: "64px" }}>

          {/* Disclaimer */}
          <div>
            <div style={SECTION_TITLE}>Disclaimer</div>
            <p style={{ fontSize: "14px", lineHeight: 1.9, color: "#000" }}>
              Nothing on this site is financial advice. Bitcoin Beacon is an educational tool intended to help people understand Bitcoin and long-term market cycles.
            </p>
          </div>

          {/* Credits — no title, no divider lines */}
          <div style={{ textAlign: "right" }}>

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
    </>
  );
}
