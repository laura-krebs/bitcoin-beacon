export default function LighthouseSVG() {
  return (
    <img
      src="/beacon_new2.svg"
      alt=""
      aria-hidden
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
  );
}
