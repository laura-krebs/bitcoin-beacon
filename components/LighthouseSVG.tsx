export default function LighthouseSVG() {
  return (
    <picture>
      <source media="(max-width: 768px)" srcSet="/beacon_new3_mobile.svg" />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/beacon_new3.svg"
        alt=""
        aria-hidden
        className="lighthouse-img"
        style={{
          position: "absolute",
          height: "100%",
          width: "auto",
          bottom: 0,
          left: "50%",
          transform: "translateX(-50%)",
          pointerEvents: "none",
        }}
      />
    </picture>
  );
}
