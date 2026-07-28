// A hand-drawn-looking marker circle that "draws itself" in as `progress`
// goes 0 -> 1. Two slightly offset ellipses give it a sketchy, imperfect
// feel instead of a clean vector oval.
export const MarkerCircle: React.FC<{
  width: number;
  height: number;
  color?: string;
  strokeWidth?: number;
  progress: number;
}> = ({ width, height, color = "#e67e22", strokeWidth = 10, progress }) => {
  const dash = 1 - Math.max(0, Math.min(1, progress));

  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      style={{ position: "absolute", inset: 0, overflow: "visible" }}
    >
      <ellipse
        cx={width / 2}
        cy={height / 2}
        rx={width / 2 - strokeWidth}
        ry={height / 2 - strokeWidth}
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        pathLength={1}
        strokeDasharray={1}
        strokeDashoffset={dash}
        transform={`rotate(-4 ${width / 2} ${height / 2})`}
      />
      <ellipse
        cx={width / 2 + 4}
        cy={height / 2 - 2}
        rx={width / 2 - strokeWidth - 6}
        ry={height / 2 - strokeWidth - 4}
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth * 0.6}
        strokeLinecap="round"
        pathLength={1}
        strokeDasharray={1}
        strokeDashoffset={dash}
        transform={`rotate(3 ${width / 2} ${height / 2})`}
        opacity={0.7}
      />
    </svg>
  );
};
