import { useId } from "react";

// A curved, marker-style arrow that draws itself in as `progress` goes
// 0 -> 1, connecting two collage elements — the signature Vox annotation.
export const HandDrawnArrow: React.FC<{
  width: number;
  height: number;
  d: string;
  color?: string;
  strokeWidth?: number;
  progress: number;
}> = ({ width, height, d, color = "#0b2333", strokeWidth = 9, progress }) => {
  const markerId = `arrowhead-${useId()}`;
  const dash = 1 - Math.max(0, Math.min(1, progress));

  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      style={{ position: "absolute", overflow: "visible" }}
    >
      <defs>
        <marker
          id={markerId}
          markerWidth="10"
          markerHeight="10"
          refX="6"
          refY="5"
          orient="auto"
        >
          <path d="M0,0 L10,5 L0,10 Z" fill={color} />
        </marker>
      </defs>
      <path
        d={d}
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        pathLength={1}
        strokeDasharray={1}
        strokeDashoffset={dash}
        markerEnd={progress > 0.85 ? `url(#${markerId})` : undefined}
      />
    </svg>
  );
};
