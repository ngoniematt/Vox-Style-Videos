// Editorial halftone dot field — a repeating radial-gradient pattern, the
// classic Vox/print-collage texture. Pure CSS, no images.
export const Halftone: React.FC<{
  color?: string;
  size?: number;
  opacity?: number;
}> = ({ color = "#0b2333", size = 22, opacity = 0.08 }) => {
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        opacity,
        pointerEvents: "none",
        backgroundImage: `radial-gradient(${color} 26%, transparent 27%)`,
        backgroundSize: `${size}px ${size}px`,
      }}
    />
  );
};
