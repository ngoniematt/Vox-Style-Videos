import { Halftone } from "./Halftone";

// The reference-look backdrop: a warm yellow field meeting an off-white
// field along a diagonal seam, plus a halftone dot cluster in one corner —
// the classic Vox editorial-collage backdrop.
export const SplitBackground: React.FC<{
  yellow?: string;
  cream?: string;
}> = ({ yellow = "#f4c14a", cream = "#f7f1e1" }) => {
  return (
    <div style={{ position: "absolute", inset: 0 }}>
      <div style={{ position: "absolute", inset: 0, backgroundColor: cream }} />
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: yellow,
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
        <Halftone color="#1a5276" size={16} opacity={0.16} />
      </div>
    </div>
  );
};
