const C = { maxWidth: "1200px", margin: "0 auto", padding: "0 48px" } as const;

const SECTIONS = [
  {
    num: "01",
    title: "What is Bitcoin?",
    body: `Bitcoin is the first form of money in history that no government, bank, or corporation can control. It's not just digital money — it's sovereign money. It runs on a decentralized network where thousands of independent participants control the rules. No single person or institution can change them unilaterally.

Bitcoin was introduced in 2009 by Satoshi Nakamoto, an anonymous person or group whose identity remains unknown to this day. Since then, it has proven itself as the most secure monetary network ever created — and one of the most valuable assets in the world.

There will only ever be 21 million Bitcoin. It's fixed. New Bitcoin is issued through a process called mining, where specialized computers secure the network and are rewarded with newly created coins. This issuance follows a predictable schedule and keeps decreasing over time, with the last Bitcoin expected to be mined around the year 2140.

Compare that to fiat currencies — printed at will by central banks, expanding the money supply whenever it suits policy and quietly diluting their value. The fiat system is a constant erosion of purchasing power. That makes Bitcoin the hardest money humanity has ever known — harder than gold, because you can't increase its supply, no matter how high the demand goes.

Around 1.7 billion adults worldwide have no access to banking services. Bitcoin changes that. If you have internet access, you have access to Bitcoin. No application, no approval, no institution required. It doesn't matter where you were born. For the first time in history, truly open and borderless money exists.`,
    aside: (
      <div>
        <p style={{ fontSize: "15px", lineHeight: 1.9, color: "#000", marginBottom: "24px" }}>
          "Only 21 million Bitcoin will ever exist. Around 19.8 million have already been mined."
        </p>
        <div style={{ borderTop: "0.8px solid #000", paddingTop: "24px" }}>
          <div style={{ fontSize: "11px", fontWeight: 500, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "6px", fontFamily: "var(--font-mono),monospace" }}>Self-custody</div>
          <p style={{ fontSize: "13px", lineHeight: 1.7, color: "#000" }}>
            With Bitcoin, you can be your own bank. When you hold Bitcoin in self-custody, controlling your own private keys, no one can freeze your funds or block a transaction. You take full sovereignty over your money.
          </p>
        </div>
      </div>
    ),
  },
  {
    num: "02",
    title: "Volatility, adoption, and the long-term trend",
    body: `Yes, Bitcoin is volatile. That's not a flaw — it's what early adoption looks like. Short-term, the price moves more aggressively. Long-term, the direction has been consistent: every major price cycle has reached a higher peak than the last. Each cycle resets expectations, shakes out weak hands, and strengthens the network. Long-term holders who understood this have consistently come out ahead.

Why the volatility? Because the world is still waking up to what Bitcoin actually is. As adoption increases — from individuals to institutions to nation-states — liquidity deepens, and volatility gradually compresses. That's already happening, cycle after cycle.`,
    aside: (
      <p style={{ fontSize: "15px", lineHeight: 1.9, color: "#000" }}>
        "Every bear market low has been higher than the previous cycle's low. Long-term holders have never lost money holding through a full cycle."
      </p>
    ),
  },
  {
    num: "03",
    title: "The 4-year cycle and the Halving",
    body: `Bitcoin has a built-in supply shock called the Halving. Roughly every four years, the amount of new Bitcoin entering the system is cut in half. This isn't a policy decision — it's enforced by the protocol itself. Miners who secure the network receive fewer new coins over time, reducing the rate at which new Bitcoin enters circulation — and historically, this has preceded major bull markets. Not because of hype, but because of programmed scarcity meeting growing demand.

This four-year rhythm is what most people mean when they talk about Bitcoin cycles. But there's an open question worth acknowledging: as Bitcoin matures, will the four-year cycle keep playing out the same way? Some analysts say growing institutional adoption and deeper liquidity may be smoothing the pattern — connecting Bitcoin's cycles less to the Halving and more to broader macroeconomic rhythms, which tend to run longer than four years. Either way, one thing remains clear: the fundamentals haven't changed, and the window to accumulate Bitcoin cheaply just gets smaller over time.

The score on Bitcoin Beacon is designed to give you a sense of where we currently stand in the market cycle — however that cycle continues to evolve.`,
    aside: (
      <div>
        <div style={{ fontSize: "11px", color: "#000", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "14px", fontFamily: "var(--font-mono),monospace" }}>Halving Timeline</div>
        {[
          { year: "2012", label: "1st Halving", muted: false },
          { year: "2016", label: "2nd Halving", muted: false },
          { year: "2020", label: "3rd Halving", muted: false },
          { year: "2024", label: "4th Halving", muted: false },
          { year: "~2028", label: "5th Halving", muted: true },
        ].map((h) => (
          <div
            key={h.year}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "baseline",
              padding: "9px 0",
              borderBottom: "0.8px solid #000",
              opacity: h.muted ? 0.35 : 1,
            }}
          >
            <span style={{ fontSize: "14px", fontWeight: 300 }}>{h.year}</span>
            <span style={{ fontSize: "11px", color: "#000", letterSpacing: "0.1em", fontFamily: "var(--font-mono),monospace" }}>{h.label}</span>
          </div>
        ))}
      </div>
    ),
  },
  {
    num: "04",
    title: "What is DCA?",
    body: `DCA stands for Dollar-Cost Averaging. It means investing a fixed amount on a regular schedule, regardless of the price.

Trying to time Bitcoin is a losing game for most people. So you buy consistently instead. When the price is low, your fixed amount buys more Bitcoin. When it's high, it buys less. Over time, your average purchase price smooths out.

Example: if you invest $100 every month for 24 months, some months you'll buy at $60k per Bitcoin, some at $70k, some at $50k. Your average cost will reflect the range, not the worst moment.

DCA is widely considered the most sensible strategy for investing in Bitcoin. This is how serious long-term holders approach it. It removes emotion from the equation.`,
    aside: (
      <div>
        <div style={{ fontSize: "11px", color: "#000", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "14px", fontFamily: "var(--font-mono),monospace" }}>DCA Example</div>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr>
              {["Month", "Price", "Sats"].map((h) => (
                <th key={h} style={{ fontSize: "10px", color: "#000", letterSpacing: "0.12em", textTransform: "uppercase", textAlign: "left", padding: "5px 0", fontWeight: 400, borderBottom: "0.8px solid #000", opacity: 0.45, fontFamily: "var(--font-mono),monospace" }}>
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {[
              ["Jan", "$50,000", "200,000"],
              ["Feb", "$60,000", "166,667"],
              ["Mar", "$70,000", "142,857"],
              ["Avg", "$59,322", "509,524"],
            ].map(([month, price, sats]) => (
              <tr key={month}>
                <td style={{ fontSize: "13px", padding: "7px 0", borderBottom: "0.8px solid #000" }}>{month}</td>
                <td style={{ fontSize: "13px", padding: "7px 0", borderBottom: "0.8px solid #000" }}>{price}</td>
                <td style={{ fontSize: "13px", padding: "7px 0", borderBottom: "0.8px solid #000" }}>{sats}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    ),
  },
  {
    num: "05",
    title: "What are risk metrics?",
    body: `Bitcoin is the most transparent financial system ever created. No one can predict Bitcoin's price precisely, but on-chain data — the publicly visible activity on the Bitcoin blockchain — can reveal patterns that have historically appeared near cycle tops and bottoms.

Risk metrics are tools that read this data and translate it into signals. These signals reflect real behaviour: are long-term holders accumulating? Is sell pressure building? Is the market overheated?

None of these metrics are perfect. But combined, they form a clearer picture than any single indicator alone. This is what CBBI does — it aggregates nine independent on-chain metrics into a single score between 0 and 100. Bitcoin Beacon takes that score and presents it as simply as possible: one number, updated daily, with plain-language context.

Think of these metrics as a compass, not a GPS. They won't tell you the exact destination, but they'll keep you from getting lost.`,
    aside: (
      <p style={{ fontSize: "15px", lineHeight: 1.9, color: "#000" }}>
        "A risk score is not a price prediction. It reflects historical patterns, not certainty about the future."
      </p>
    ),
  },
  {
    num: "06",
    title: "The technology and ecosystem",
    body: `If you only look at Bitcoin's price, you're missing the point. Bitcoin is a protocol. Think of it the way you think about the internet — a base layer for value, a set of open rules that anyone can verify and build on.

The blockchain is a public ledger that records every transaction ever made. It's maintained by thousands of independent computers (nodes) around the world. No single point of failure. No single point of control.

On top of Bitcoin, an ecosystem has grown: the Lightning Network enables instant, near-zero-cost payments. Nostr is an open protocol for decentralised communication — censorship-resistant, permissionless, and built on the same principles as Bitcoin. It uses the Lightning Network natively, meaning communication and payments share the same open infrastructure.

Understanding this layer matters, because once you see Bitcoin as infrastructure — not just an asset — things change completely. Infrastructure that, for the first time, separates money from the state. It's not about whether the price goes up or down. It's about whether a neutral, incorruptible monetary system has a place in this world. And of course the answer is yes. It's possible. It's happening. And it's powerful.`,
    aside: (
      <div>
        {[
          { label: "Lightning Network", desc: "Instant, low-cost payments on top of Bitcoin" },
          { label: "Nostr", desc: "Open, decentralised communication using Lightning natively" },
          { label: "Going further", desc: "Liquid, Ark, Fedimint and others are extending Bitcoin's capabilities in payments, privacy, and custody." },
          { label: "Open source", desc: "The code is public, auditable, maintained by a global community" },
        ].map((item) => (
          <div key={item.label} style={{ marginBottom: "18px" }}>
            <div style={{ fontSize: "11px", fontWeight: 500, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "5px", fontFamily: "var(--font-mono),monospace" }}>{item.label}</div>
            <div style={{ fontSize: "13px", color: "#000", lineHeight: 1.7 }}>{item.desc}</div>
          </div>
        ))}
      </div>
    ),
  },
];

const TOC_ITEMS = [
  { num: "01", title: "What is Bitcoin?" },
  { num: "02", title: "Volatility & adoption" },
  { num: "03", title: "The 4-year cycle" },
  { num: "04", title: "What is DCA?" },
  { num: "05", title: "Risk metrics" },
  { num: "06", title: "Technology" },
];

export default function LearnPage() {
  return (
    <>
      {/* PAGE HERO */}
      <section style={{ borderBottom: "0.8px solid #000", padding: "64px 0 52px" }}>
        <div style={{ ...C, display: "grid", gridTemplateColumns: "1fr 1fr", gap: "64px", alignItems: "start" }}>
          <h1 style={{ fontSize: "52px", fontWeight: 400, letterSpacing: "-0.01em", lineHeight: 1.05, fontFamily: "var(--font-goudy), serif" }}>
            Understanding<br />Bitcoin
          </h1>
          <p style={{ fontSize: "15px", lineHeight: 1.9, color: "#000", paddingTop: "8px" }}>
            Bitcoin can feel overwhelming at first. This page covers the core concepts. Just the foundations you need to understand what you&apos;re looking at and why it matters.
          </p>
        </div>
      </section>

      {/* TABLE OF CONTENTS */}
      <div style={{ borderBottom: "0.8px solid #000" }}>
        <div style={{ ...C, display: "grid", gridTemplateColumns: "repeat(6, 1fr)" }}>
          {TOC_ITEMS.map((item, i) => (
            <a
              key={item.num}
              href={`#section-${item.num}`}
              style={{
                padding: "22px 0",
                paddingRight: "16px",
                borderRight: i < 5 ? "0.8px solid #000" : undefined,
                paddingLeft: i > 0 ? "16px" : 0,
                textDecoration: "none",
                display: "block",
              }}
            >
              <div style={{ fontSize: "11px", color: "#000", letterSpacing: "0.2em", marginBottom: "8px", fontFamily: "var(--font-mono),monospace" }}>{item.num}</div>
              <div style={{ fontSize: "13px", color: "#000", lineHeight: 1.4 }}>{item.title}</div>
            </a>
          ))}
        </div>
      </div>

      {/* SECTIONS */}
      {SECTIONS.map((section, i) => (
        <div
          key={section.num}
          id={`section-${section.num}`}
          style={{ borderBottom: i < SECTIONS.length - 1 ? "0.8px solid #000" : undefined }}
        >
          <div style={{ ...C, display: "grid", gridTemplateColumns: "calc(100% / 6) 1fr 260px" }}>
            {/* Col 1: section number + title */}
            <div style={{ borderRight: "0.8px solid #000", padding: "44px 24px 44px 0" }}>
              <div style={{ fontSize: "11px", color: "#000", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "12px", fontFamily: "var(--font-mono),monospace" }}>
                {section.num}
              </div>
              <div style={{ fontSize: "18px", fontWeight: 500, color: "#000", lineHeight: 1.3, letterSpacing: "-0.01em" }}>
                {section.title}
              </div>
            </div>

            {/* Col 2: body */}
            <div style={{ padding: "44px 44px" }}>
              {section.body.split("\n\n").map((para, j) => (
                <p key={j} style={{ fontSize: "15px", lineHeight: 1.9, color: "#000", marginBottom: "18px" }}>
                  {para.trim()}
                </p>
              ))}
            </div>

            {/* Col 3: aside */}
            <div style={{ borderLeft: "0.8px solid #000", padding: "44px 0 44px 28px" }}>
              {section.aside}
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
