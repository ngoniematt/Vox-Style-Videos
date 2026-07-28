import React from "react";
import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
  Sequence,
} from "remotion";
import { COLORS, FACTS, FONT_FAMILY } from "../constants";

const Line1: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const opacity = interpolate(frame, [0, 15, 40, 55], [0, 1, 1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const y = spring({ frame, fps, from: 30, to: 0, config: { damping: 200 } });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: COLORS.navyDark,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          opacity,
          transform: `translateY(${y}px)`,
          color: COLORS.white,
          fontFamily: FONT_FAMILY,
          fontSize: 88,
          fontWeight: 700,
          textAlign: "center",
          letterSpacing: -1,
        }}
      >
        Every term.
      </div>
    </AbsoluteFill>
  );
};

const Line2: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const opacity = interpolate(frame, [0, 15, 40, 55], [0, 1, 1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const y = spring({ frame, fps, from: 30, to: 0, config: { damping: 200 } });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: COLORS.navyDark,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          opacity,
          transform: `translateY(${y}px)`,
          color: COLORS.accent,
          fontFamily: FONT_FAMILY,
          fontSize: 88,
          fontWeight: 700,
          textAlign: "center",
          letterSpacing: -1,
        }}
      >
        Every subject.
      </div>
    </AbsoluteFill>
  );
};

const NumberReveal: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const scale = spring({
    frame,
    fps,
    from: 0.4,
    to: 1,
    config: { damping: 12, stiffness: 120, mass: 0.6 },
  });
  const opacity = interpolate(frame, [0, 12], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const subOpacity = interpolate(frame, [30, 45], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const subY = interpolate(frame, [30, 45], [20, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: COLORS.navy,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          opacity,
          transform: `scale(${scale})`,
          color: COLORS.white,
          fontFamily: FONT_FAMILY,
          fontSize: 420,
          fontWeight: 800,
          lineHeight: 1,
        }}
      >
        {FACTS.schemesPerTerm}
      </div>
      <div
        style={{
          opacity: subOpacity,
          transform: `translateY(${subY}px)`,
          color: COLORS.accent,
          fontFamily: FONT_FAMILY,
          fontSize: 46,
          fontWeight: 600,
          marginTop: 16,
          textAlign: "center",
        }}
      >
        schemes of work
      </div>
    </AbsoluteFill>
  );
};

const SubjectsContext: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const headerOpacity = interpolate(frame, [0, 12], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: COLORS.navy,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        padding: 80,
      }}
    >
      <div
        style={{
          opacity: headerOpacity,
          color: COLORS.white,
          fontFamily: FONT_FAMILY,
          fontSize: 40,
          fontWeight: 600,
          marginBottom: 48,
          textAlign: "center",
        }}
      >
        One teacher. Three subjects. Six forms.
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 24,
          width: "100%",
        }}
      >
        {FACTS.subjects.map((subject, i) => {
          const delay = 15 + i * 10;
          const chipOpacity = interpolate(
            frame,
            [delay, delay + 15],
            [0, 1],
            { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
          );
          const chipX = interpolate(frame, [delay, delay + 15], [-60, 0], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          });
          return (
            <div
              key={subject}
              style={{
                opacity: chipOpacity,
                transform: `translateX(${chipX}px)`,
                backgroundColor: COLORS.accent,
                color: COLORS.white,
                fontFamily: FONT_FAMILY,
                fontSize: 40,
                fontWeight: 700,
                padding: "18px 32px",
                borderRadius: 12,
                textAlign: "center",
              }}
            >
              {subject}
            </div>
          );
        })}
      </div>
    </AbsoluteFill>
  );
};

export const Scene1ColdOpen: React.FC = () => {
  return (
    <>
      <Sequence from={0} durationInFrames={55}>
        <Line1 />
      </Sequence>
      <Sequence from={55} durationInFrames={55}>
        <Line2 />
      </Sequence>
      <Sequence from={110} durationInFrames={70}>
        <NumberReveal />
      </Sequence>
      <Sequence from={180} durationInFrames={60}>
        <SubjectsContext />
      </Sequence>
    </>
  );
};
