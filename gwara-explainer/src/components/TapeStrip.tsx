export const TapeStrip: React.FC<{
  width?: number;
  height?: number;
  rotate?: number;
  color?: string;
  style?: React.CSSProperties;
}> = ({ width = 90, height = 30, rotate = -6, color = "#f4e9c1", style }) => {
  return (
    <div
      style={{
        width,
        height,
        backgroundColor: color,
        opacity: 0.75,
        transform: `rotate(${rotate}deg)`,
        boxShadow: "0 2px 6px rgba(11,35,51,0.2)",
        ...style,
      }}
    />
  );
};
