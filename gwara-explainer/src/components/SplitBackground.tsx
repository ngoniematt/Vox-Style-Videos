import { Halftone } from "./Halftone";

// The reference-look backdrop: a light blue field meeting a white field
// along a diagonal seam, plus a halftone dot cluster in one corner — the
// classic Vox editorial-collage backdrop, kept to the blue/white palette.
export const SplitBackground: React.FC<{
  blue?: string;
  white?: string;
}> = ({ blue = "#8fc2ff", white = "#f7fafd" }) => {
  return (
    <div style={{ position: "absolute", inset: 0 }}>
      <div style={{ position: "absolute", inset: 0, backgroundColor: white }} />
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: blue,
          clipPath: "polygon(0% 0%, 58% 0%, 42% 100%, 0% 100%)",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: 260,
          height: 260,
        }}
      >
        <Halftone color="#2f7ff2" size={16} opacity={0.16} />
      </div>
    </div>
  );
};
