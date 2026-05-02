const CONTAINER = { maxWidth: "1200px", margin: "0 auto", padding: "0 48px" } as const;

export default function AboutPage() {
  return (
    <>
      {/* PAGE HERO */}
      <section style={{ borderBottom: "0.5px solid rgba(0,0,0,0.15)", padding: "64px 0 52px" }}>
        <div style={{ ...CONTAINER, display: "grid", gridTemplateColumns: "1fr 1fr", gap: "64px", alignItems: "start" }}>
          <h1 style={{ fontSize: "52px", fontWeight: 300, letterSpacing: "-0.03em", lineHeight: 1.1 }}>
            Bitcoin education<br />for everyone.
          </h1>
          <p style={{ fontSize: "15px", lineHeight: 1.9, color: "#000", paddingTop: "8px" }}>
            Most tools that track Bitcoin cycles weren&apos;t built with clarity for newcomers in mind. Bitcoin Beacon started with a simple question: what would this look like with a clean interface and first things explained first?
          </p>
        </div>
      </section>

      {/* BODY */}
      <section style={{ borderBottom: "0.5px solid rgba(0,0,0,0.15)", padding: "52px 0" }}>
        <div style={{ ...CONTAINER, display: "grid", gridTemplateColumns: "200px 1fr", gap: "64px" }}>
          {/* Left sidebar: section labels */}
          <div style={{ paddingTop: "4px" }}>
            {["The problem", "The approach", "The goal"].map((label) => (
              <div
                key={label}
                style={{
                  fontSize: "11px",
                  color: "#000",
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  marginBottom: "36px",
                  opacity: 0.45,
                }}
              >
                {label}
              </div>
            ))}
          </div>

          {/* Right: body */}
          <div>
            {[
              "The biggest barrier to Bitcoin adoption isn't complexity — it's fear. If you don't have the confidence or context to know when it makes sense to get involved, you stay out entirely, and never get close to understanding the true depth of Bitcoin and its ecosystem.",
              "Good information exists. The on-chain data is public, the metrics are well-documented, and tools like CBBI have done serious work aggregating them. But most of these resources weren't built with the non-technical user in mind. They're dense, visually complex, and rarely explain what Bitcoin actually is and how it works.",
              "Bitcoin Beacon started as a design problem. The goal was to take the CBBI and present it in the simplest, most accessible way possible — clean interface, plain language, one number that tells you where we are in the cycle, with enough context to actually understand Bitcoin.",
              "The aim isn't to replace the original tools — it's to be the front door. To meet you where you are, give you a clear starting point, and let curiosity do the rest. From DCA to self-custody to sovereignty, the path to understanding Bitcoin runs through confidence — and confidence starts with clarity.",
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
        <div style={{ ...CONTAINER, display: "grid", gridTemplateColumns: "1fr 1fr", gap: "64px" }}>
          {/* Disclaimer */}
          <div>
            <div style={{ fontSize: "11px", color: "#000", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "16px", opacity: 0.45 }}>
              Disclaimer
            </div>
            <p style={{ fontSize: "14px", lineHeight: 1.9, color: "#000" }}>
              Nothing on this site is financial advice. Bitcoin Beacon is an educational tool intended to help people understand Bitcoin and long-term market cycles — not to guide individual investment decisions.
            </p>
          </div>

          {/* Data source & credits */}
          <div>
            <div style={{ fontSize: "11px", color: "#000", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "16px", opacity: 0.45 }}>
              Data Source & Credits
            </div>
            <div style={{ fontSize: "14px", lineHeight: 2.2, color: "#000" }}>
              <div>
                Data source: CBBI by Colin Talks Crypto{" "}
                <a
                  href="https://colintalkscrypto.com/cbbi"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#000", textDecoration: "none", borderBottom: "0.5px solid rgba(0,0,0,0.3)" }}
                >
                  colintalkscrypto.com/cbbi
                </a>
              </div>
              <div>
                Created and designed by: @laurakrebs_{" "}
                <a
                  href="https://x.com/laurakrebs_"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#000", textDecoration: "none", borderBottom: "0.5px solid rgba(0,0,0,0.3)" }}
                >
                  x.com/laurakrebs_
                </a>
              </div>
              <div>
                Built with: Claude by Anthropic{" "}
                <a
                  href="https://anthropic.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#000", textDecoration: "none", borderBottom: "0.5px solid rgba(0,0,0,0.3)" }}
                >
                  anthropic.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
