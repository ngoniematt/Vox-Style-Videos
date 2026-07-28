import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { COLORS, FONT_FAMILY, GWARA_FACTS } from "../constants";

// Scene 1 — Cold open (0-10s)
// "Every term. Every subject." -> the number 16 -> who it belongs to.
export const Scene1ColdOpen: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const line1Progress = spring({
    frame,
    fps,
    config: { damping: 200 },
    durationInFrames: 20,
  });
  const line2Progress = spring({
    frame: frame - 18,
    fps,
    config: { damping: 200 },
    durationInFrames: 20,
  });

  // Lines 1+2 hold, then clear out to make room for the number.
  const linesExitOpacity = interpolate(frame, [95, 115], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const linesExitY = interpolate(frame, [95, 115], [0, -60], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const numberEnter = spring({
    frame: frame - 120,
    fps,
    config: { damping: 12, mass: 0.6 },
    durationInFrames: 25,
  });
  const numberOpacity = interpolate(numberEnter, [0, 1], [0, 1]);
  const numberScale = interpolate(numberEnter, [0, 1], [0.6, 1]);

  const labelOpacity = interpolate(frame, [150, 172], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const labelY = interpolate(frame, [150, 172], [20, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const subjectsOpacity = interpolate(frame, [190, 212], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const subjectsY = interpolate(frame, [190, 212], [20, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const contextOpacity = interpolate(frame, [230, 255], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const contextY = interpolate(frame, [230, 255], [20, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: COLORS.white,
        fontFamily: FONT_FAMILY,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* Beat 1: "Every term. Every subject." */}
      <AbsoluteFill
        style={{
          justifyContent: "center",
          alignItems: "center",
          opacity: linesExitOpacity,
          transform: `translateY(${linesExitY}px)`,
        }}
      >
        <div style={{ textAlign: "center" }}>
          <div
            style={{
              fontSize: 88,
              fontWeight: 800,
              color: COLORS.ink,
              opacity: line1Progress,
              transform: `translateY(${interpolate(line1Progress, [0, 1], [24, 0])}px)`,
              letterSpacing: -1,
            }}
          >
            Every term.
          </div>
          <div
            style={{
              fontSize: 88,
              fontWeight: 800,
              color: COLORS.navy,
              opacity: line2Progress,
              transform: `translateY(${interpolate(line2Progress, [0, 1], [24, 0])}px)`,
              letterSpacing: -1,
              marginTop: 8,
            }}
          >
            Every subject.
          </div>
        </div>
      </AbsoluteFill>

      {/* Beat 2: the number 16, large, plus who it belongs to */}
      <AbsoluteFill
        style={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div style={{ textAlign: "center", padding: "0 80px" }}>
          <div
            style={{
              fontSize: 480,
              fontWeight: 900,
              color: COLORS.navy,
              lineHeight: 1,
              opacity: numberOpacity,
              transform: `scale(${numberScale})`,
            }}
          >
            {GWARA_FACTS.schemesPerTerm}
          </div>
          <div
            style={{
              fontSize: 52,
              fontWeight: 700,
              color: COLORS.ink,
              opacity: labelOpacity,
              transform: `translateY(${labelY}px)`,
              marginTop: 8,
            }}
          >
            schemes of work
          </div>
          <div
            style={{
              fontSize: 34,
              fontWeight: 600,
              color: COLORS.accent,
              opacity: subjectsOpacity,
              transform: `translateY(${subjectsY}px)`,
              marginTop: 28,
              letterSpacing: 0.5,
            }}
          >
            {GWARA_FACTS.subjects.join(" · ")}
          </div>
          <div
            style={{
              fontSize: 30,
              fontWeight: 400,
              color: COLORS.navyDark,
              opacity: contextOpacity,
              transform: `translateY(${contextY}px)`,
              marginTop: 24,
              lineHeight: 1.4,
            }}
          >
            One teacher. Six forms.
            <br />
            Written by hand, every single term.
          </div>
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
