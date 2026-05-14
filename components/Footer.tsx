const F = "var(--font-space-grotesk),sans-serif";
const T = {
  fontSize: "10px",
  fontWeight: 400,
  letterSpacing: "0.12em",
  textTransform: "uppercase" as const,
  color: "#000" as const,
  opacity: 0.55,
  fontFamily: F,
};

export default function Footer() {
  return (
    <footer style={{ borderTop: "0.8px solid #000" }}>
      <div
        className="footer-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          alignItems: "center",
          padding: "11px 48px",
        }}
      >
        <span className="footer-disclaimer" style={T}>Not financial advice. Educational purposes only.</span>
        <span style={{ ...T, textAlign: "center" }}>
          © 2026 Bitcoin Beacon ·{" "}
          <a
            href="https://github.com/laura-krebs/bitcoin-beacon"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#000", textDecoration: "none" }}
          >
            Open Source
          </a>
        </span>
        <span style={{ ...T, textAlign: "right" }}>Source: CBBI · CoinMarketCap · Alternative.me</span>
      </div>
    </footer>
  );
}
