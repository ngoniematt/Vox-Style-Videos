import { AbsoluteFill } from "remotion";
import { COLORS, FONT_FAMILY } from "../constants";

// Temporary stand-in for scenes not yet built, so the full-length
// composition plays back and can be scrubbed while each scene is
// implemented one at a time.
export const PlaceholderScene: React.FC<{ label: string }> = ({ label }) => {
  return (
    <AbsoluteFill
      style={{
        backgroundColor: COLORS.blue,
        fontFamily: FONT_FAMILY,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div style={{ color: COLORS.white, fontSize: 40, opacity: 0.5 }}>
        {label}
      </div>
    </AbsoluteFill>
  );
};
