import { tornEdgeClipPath } from "./tornEdge";

// A single "cutout" paper rectangle with a torn top/bottom edge and a soft
// drop shadow — the base collage unit re-used across scenes (a scheme of
// work, a stat card, a flow-chart node...).
export const PaperCard: React.FC<{
  width: number;
  height: number;
  fill?: string;
  rotate?: number;
  seed?: number;
  style?: React.CSSProperties;
}> = ({ width, height, fill = "#ffffff", rotate = 0, seed = 1, style }) => {
  return (
    <div
      style={{
        width,
        height,
        backgroundColor: fill,
        clipPath: tornEdgeClipPath(seed),
        transform: `rotate(${rotate}deg)`,
        filter: "drop-shadow(0 10px 18px rgba(11,35,51,0.28))",
        ...style,
      }}
    />
  );
};
