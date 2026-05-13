"use client";

import { useState } from "react";

export default function MobileScoreInfo({ description }: { description: string }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        aria-label="What does this score mean?"
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          width: "26px",
          height: "26px",
          borderRadius: "50%",
          background: "#F7931A",
          border: "0.8px solid #000",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          fontSize: "12px",
          fontFamily: "var(--font-space-grotesk), sans-serif",
          fontWeight: 600,
          color: "#000",
          zIndex: 10,
          padding: 0,
          lineHeight: 1,
        }}
      >
        ?
      </button>

      {open && (
        <>
          {/* Backdrop */}
          <div
            onClick={() => setOpen(false)}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 199,
            }}
          />
          {/* Popup */}
          <div
            style={{
              position: "fixed",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              background: "#F7931A",
              border: "1px solid #000",
              borderRadius: "4px",
              padding: "16px 40px 16px 16px",
              width: "calc(100vw - 64px)",
              maxWidth: "320px",
              zIndex: 200,
              fontFamily: "var(--font-space-grotesk), sans-serif",
              fontSize: "14px",
              fontWeight: 400,
              lineHeight: 1.6,
              color: "#000",
            }}
          >
            <button
              onClick={() => setOpen(false)}
              aria-label="Close"
              style={{
                position: "absolute",
                top: "10px",
                right: "12px",
                background: "none",
                border: "none",
                cursor: "pointer",
                fontSize: "18px",
                color: "#000",
                lineHeight: 1,
                padding: 0,
              }}
            >
              ×
            </button>
            → {description}
          </div>
        </>
      )}
    </>
  );
}
