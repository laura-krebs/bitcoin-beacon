const F = "var(--font-space-grotesk),sans-serif";
const T = {
  fontSize: "10px",
  letterSpacing: "0.13em",
  textTransform: "uppercase" as const,
  color: "#000" as const,
  opacity: 0.45,
  fontFamily: F,
};

export default function Footer() {
  return (
    <footer style={{ borderTop: "0.8px solid rgba(0,0,0,0.15)" }}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          alignItems: "center",
          padding: "11px 48px",
        }}
      >
        <span style={T}>Not financial advice. Educational purposes only.</span>
        <span style={{ ...T, textAlign: "center" }}>© 2026 Bitcoin Beacon · All rights reserved</span>
        <span style={{ ...T, textAlign: "right" }}>Source: CBBI · CoinGecko · Alternative.me</span>
      </div>
    </footer>
  );
}
