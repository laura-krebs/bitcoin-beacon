"use client";

import { useState } from "react";

export default function DisclaimerTooltip() {
  const [open, setOpen] = useState(false);

  return (
    <span style={{ position: "relative", display: "inline-block" }}>
      <button
        onClick={() => setOpen(!open)}
        style={{
          fontSize: "9px",
          color: "rgba(0,0,0,0.4)",
          background: "none",
          border: "0.8px solid rgba(0,0,0,0.3)",
          cursor: "pointer",
          padding: "1px 5px",
          fontFamily: "inherit",
          letterSpacing: "0.08em",
        }}
        aria-label="Disclaimer info"
      >
        ?
      </button>
      {open && (
        <div
          style={{
            position: "absolute",
            top: "calc(100% + 8px)",
            right: 0,
            width: "280px",
            background: "#F7931A",
            border: "0.8px solid rgba(0,0,0,0.2)",
            padding: "16px",
            zIndex: 100,
          }}
        >
          <p style={{ fontSize: "11px", lineHeight: 1.8, color: "rgba(0,0,0,0.75)", marginBottom: "10px" }}>
            The CBBI is not investment advice. It intends to be a fun way of looking at long-term price movements, disregarding daily noise in volatility.
          </p>
          <p style={{ fontSize: "11px", lineHeight: 1.8, color: "rgba(0,0,0,0.55)" }}>
            None of the metrics CBBI uses have experienced a macro economic recession/depression and thus this element is not factored in. CBBI&apos;s creator believes a negative macro economic environment could affect Bitcoin&apos;s prices to the downside more than has been seen in standard Bitcoin bear markets.
          </p>
          <button
            onClick={() => setOpen(false)}
            style={{
              marginTop: "10px",
              fontSize: "9px",
              color: "rgba(0,0,0,0.45)",
              background: "none",
              border: "none",
              cursor: "pointer",
              letterSpacing: "0.1em",
              fontFamily: "inherit",
            }}
          >
            CLOSE ×
          </button>
        </div>
      )}
    </span>
  );
}
