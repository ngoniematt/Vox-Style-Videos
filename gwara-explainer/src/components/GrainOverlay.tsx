// Subtle paper-grain noise over the whole frame, via an SVG turbulence filter.
export const GrainOverlay: React.FC<{ opacity?: number }> = ({
  opacity = 0.06,
}) => {
  return (
    <svg
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        mixBlendMode: "multiply",
        opacity,
        pointerEvents: "none",
      }}
    >
      <filter id="paper-grain">
        <feTurbulence
          type="fractalNoise"
          baseFrequency="0.9"
          numOctaves="2"
          seed="7"
          stitchTiles="stitch"
        />
        <feColorMatrix type="saturate" values="0" />
      </filter>
      <rect width="100%" height="100%" filter="url(#paper-grain)" />
    </svg>
  );
};
