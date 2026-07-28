// A hand-drawn checkmark that draws itself in as `progress` goes 0 -> 1.
export const Checkmark: React.FC<{
  width: number;
  height: number;
  color?: string;
  strokeWidth?: number;
  progress: number;
}> = ({ width, height, color = "#2f7ff2", strokeWidth = 14, progress }) => {
  const dash = 1 - Math.max(0, Math.min(1, progress));
  const d = `M ${width * 0.14},${height * 0.52} L ${width * 0.4},${height * 0.8} L ${width * 0.88},${height * 0.16}`;

  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
      <path
        d={d}
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        pathLength={1}
        strokeDasharray={1}
        strokeDashoffset={dash}
      />
    </svg>
  );
};
