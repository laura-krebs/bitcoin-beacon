export default function AboutPage() {
  return (
    <>
      {/* PAGE HERO */}
      <section style={{ borderBottom: "0.5px solid rgba(0,0,0,0.15)", padding: "64px 32px 48px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "64px", alignItems: "start" }}>
          <h1 style={{ fontSize: "52px", fontWeight: 300, letterSpacing: "-0.03em", lineHeight: 1.1 }}>
            Bitcoin education<br />for everyone.
          </h1>
          <p style={{ fontSize: "13px", lineHeight: 1.9, color: "rgba(0,0,0,0.65)", paddingTop: "8px" }}>
            Most tools that track Bitcoin cycles weren&apos;t built with clarity for newcomers in mind. Bitcoin Beacon started with a simple question: what would this look like with a clean interface and first things explained first?
          </p>
        </div>
      </section>

      {/* BODY */}
      <section style={{ borderBottom: "0.5px solid rgba(0,0,0,0.15)", padding: "48px 32px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "200px 1fr", gap: "64px" }}>
          {/* Left sidebar: section labels */}
          <div style={{ paddingTop: "4px" }}>
            {["The problem", "The approach", "The goal"].map((label) => (
              <div
                key={label}
                style={{
                  fontSize: "9px",
                  color: "rgba(0,0,0,0.35)",
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  marginBottom: "32px",
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
              <p key={i} style={{ fontSize: "13px", lineHeight: 1.9, color: "rgba(0,0,0,0.75)", marginBottom: "20px" }}>
                {para}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* BOTTOM ROW */}
      <section style={{ padding: "40px 32px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "64px" }}>
          {/* Disclaimer */}
          <div>
            <div style={{ fontSize: "9px", color: "rgba(0,0,0,0.35)", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "14px" }}>
              Disclaimer
            </div>
            <p style={{ fontSize: "12px", lineHeight: 1.9, color: "rgba(0,0,0,0.6)" }}>
              Nothing on this site is financial advice. Bitcoin Beacon is an educational tool intended to help people understand Bitcoin and long-term market cycles — not to guide individual investment decisions.
            </p>
          </div>

          {/* Data source */}
          <div>
            <div style={{ fontSize: "9px", color: "rgba(0,0,0,0.35)", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "14px" }}>
              Data Source & Credits
            </div>
            <div style={{ fontSize: "12px", lineHeight: 2, color: "rgba(0,0,0,0.6)" }}>
              <div>
                Data source: CBBI by Colin Talks Crypto{" "}
                <a
                  href="https://colintalkscrypto.com/cbbi"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "rgba(0,0,0,0.5)", textDecoration: "none", borderBottom: "0.5px solid rgba(0,0,0,0.25)" }}
                >
                  colintalkscrypto.com/cbbi
                </a>
              </div>
              <div>
                Built with: Claude by Anthropic{" "}
                <a
                  href="https://anthropic.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "rgba(0,0,0,0.5)", textDecoration: "none", borderBottom: "0.5px solid rgba(0,0,0,0.25)" }}
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
