import React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { COLORS, FONT_FAMILY } from "../constants";

export const PlaceholderScene: React.FC<{
  label: string;
  background?: string;
}> = ({ label, background = COLORS.navy }) => {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [0, 15], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: background,
        justifyContent: "center",
        alignItems: "center",
        padding: 80,
      }}
    >
      <div
        style={{
          opacity,
          color: COLORS.white,
          fontFamily: FONT_FAMILY,
          fontSize: 44,
          fontWeight: 600,
          textAlign: "center",
        }}
      >
        {label}
      </div>
    </AbsoluteFill>
  );
};
