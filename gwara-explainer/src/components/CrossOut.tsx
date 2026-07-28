// Two hand-drawn diagonal strokes crossing out whatever sits underneath —
// used to retire the old curriculum template.
export const CrossOut: React.FC<{
  width: number;
  height: number;
  color?: string;
  strokeWidth?: number;
  progress: number;
}> = ({ width, height, color = "#1f2937", strokeWidth = 12, progress }) => {
  const dash1 = 1 - Math.max(0, Math.min(1, progress * 1.4));
  const dash2 = 1 - Math.max(0, Math.min(1, (progress - 0.35) * 1.6));

  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      style={{ position: "absolute", inset: 0 }}
    >
      <path
        d={`M ${width * 0.08},${height * 0.1} L ${width * 0.92},${height * 0.9}`}
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        pathLength={1}
        strokeDasharray={1}
        strokeDashoffset={dash1}
      />
      <path
        d={`M ${width * 0.92},${height * 0.1} L ${width * 0.08},${height * 0.9}`}
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        pathLength={1}
        strokeDasharray={1}
        strokeDashoffset={dash2}
      />
    </svg>
  );
};
