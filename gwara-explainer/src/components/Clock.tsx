// A simple hand-drawn-style clock face. `rotations` is how many full turns
// the minute hand sweeps through as progress goes 0 -> 1 — used to sell
// "hours piling up" by spinning fast through a full day and beyond.
export const Clock: React.FC<{
  size: number;
  color?: string;
  progress: number;
  rotations?: number;
}> = ({ size, color = "#1f2937", progress, rotations = 3 }) => {
  const angle = progress * rotations * 360;
  const hourAngle = progress * rotations * 30;
  const r = size / 2;

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      <circle
        cx={r}
        cy={r}
        r={r - 8}
        fill="#ffffff"
        stroke={color}
        strokeWidth={7}
      />
      {Array.from({ length: 12 }, (_, i) => {
        const tickAngle = (i / 12) * 360;
        const x1 = r + Math.sin((tickAngle * Math.PI) / 180) * (r - 18);
        const y1 = r - Math.cos((tickAngle * Math.PI) / 180) * (r - 18);
        const x2 = r + Math.sin((tickAngle * Math.PI) / 180) * (r - 26);
        const y2 = r - Math.cos((tickAngle * Math.PI) / 180) * (r - 26);
        return (
          <line
            key={i}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke={color}
            strokeWidth={4}
            strokeLinecap="round"
          />
        );
      })}
      <line
        x1={r}
        y1={r}
        x2={r + Math.sin((hourAngle * Math.PI) / 180) * (r * 0.42)}
        y2={r - Math.cos((hourAngle * Math.PI) / 180) * (r * 0.42)}
        stroke={color}
        strokeWidth={8}
        strokeLinecap="round"
      />
      <line
        x1={r}
        y1={r}
        x2={r + Math.sin((angle * Math.PI) / 180) * (r * 0.64)}
        y2={r - Math.cos((angle * Math.PI) / 180) * (r * 0.64)}
        stroke="#2f7ff2"
        strokeWidth={6}
        strokeLinecap="round"
      />
      <circle cx={r} cy={r} r={9} fill={color} />
    </svg>
  );
};
