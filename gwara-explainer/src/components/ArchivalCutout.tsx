import { useId } from "react";
import { raggedBlobClipPath } from "./raggedBlob";

// A grain-textured, grayscale, irregularly-torn cutout with a white paper
// border — stands in for the "archival photo cutout" from the reference,
// built entirely from an SVG turbulence filter (no photos, no AI images).
export const ArchivalCutout: React.FC<{
  width: number;
  height: number;
  rotate?: number;
  seed?: number;
  tone?: string;
  style?: React.CSSProperties;
}> = ({ width, height, rotate = 0, seed = 1, tone = "#8a8f94", style }) => {
  const filterId = `archival-grain-${useId()}`;
  const clip = raggedBlobClipPath(seed);
  const border = 14;

  return (
    <div
      style={{
        position: "relative",
        width,
        height,
        transform: `rotate(${rotate}deg)`,
        filter: "drop-shadow(0 10px 16px rgba(11,35,51,0.3))",
        ...style,
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: "#ffffff",
          clipPath: clip,
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: border,
          backgroundColor: tone,
          clipPath: clip,
          overflow: "hidden",
        }}
      >
        <svg width="100%" height="100%" style={{ position: "absolute", inset: 0 }}>
          <filter id={filterId}>
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.06"
              numOctaves="3"
              seed={seed}
            />
            <feColorMatrix type="saturate" values="0" />
            <feComponentTransfer>
              <feFuncA type="linear" slope="0.55" />
            </feComponentTransfer>
          </filter>
          <rect width="100%" height="100%" fill="#000000" filter={`url(#${filterId})`} />
        </svg>
      </div>
    </div>
  );
};
