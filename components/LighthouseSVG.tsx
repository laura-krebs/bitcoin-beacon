import { forwardRef } from "react";

const LighthouseSVG = forwardRef<HTMLImageElement>(function LighthouseSVG(_, ref) {
  return (
    <picture>
      <source media="(max-width: 768px)" srcSet="/beacon_new5_mobile.svg" />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        ref={ref}
        src="/beacon_new5.svg"
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
});

export default LighthouseSVG;
