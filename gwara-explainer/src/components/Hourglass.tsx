// A simple hand-drawn-style hourglass: sketchy double-stroke outline plus a
// sand fill that drains from the top bulb into the bottom one as
// `fillProgress` goes 0 (full top) -> 1 (full bottom).
export const Hourglass: React.FC<{
  width: number;
  height: number;
  color?: string;
  fillProgress: number;
}> = ({ width, height, color = "#0b2333", fillProgress }) => {
  const w = width;
  const h = height;
  const neck = w * 0.14;
  const outline = `M${w * 0.12},${h * 0.04} L${w * 0.88},${h * 0.04} L${w * 0.5 + neck / 2},${h * 0.5} L${w * 0.88},${h * 0.96} L${w * 0.12},${h * 0.96} L${w * 0.5 - neck / 2},${h * 0.5} Z`;

  const topSandHeight = (1 - fillProgress) * (h * 0.42);
  const bottomSandHeight = fillProgress * (h * 0.42);

  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${w} ${h}`}
      style={{ overflow: "visible" }}
    >
      <clipPath id="hourglass-top">
        <path d={`M${w * 0.14},${h * 0.06} L${w * 0.86},${h * 0.06} L${w * 0.5 + neck / 2},${h * 0.48} L${w * 0.5 - neck / 2},${h * 0.48} Z`} />
      </clipPath>
      <clipPath id="hourglass-bottom">
        <path d={`M${w * 0.5 - neck / 2},${h * 0.52} L${w * 0.5 + neck / 2},${h * 0.52} L${w * 0.86},${h * 0.94} L${w * 0.14},${h * 0.94} Z`} />
      </clipPath>

      <rect
        x={0}
        y={h * 0.06}
        width={w}
        height={topSandHeight}
        fill="#e67e22"
        clipPath="url(#hourglass-top)"
      />
      <rect
        x={0}
        y={h * 0.94 - bottomSandHeight}
        width={w}
        height={bottomSandHeight}
        fill="#e67e22"
        clipPath="url(#hourglass-bottom)"
      />

      <path d={outline} fill="none" stroke={color} strokeWidth={7} strokeLinejoin="round" />
      <rect x={w * 0.08} y={0} width={w * 0.84} height={h * 0.05} rx={4} fill={color} />
      <rect x={w * 0.08} y={h * 0.95} width={w * 0.84} height={h * 0.05} rx={4} fill={color} />
    </svg>
  );
};
