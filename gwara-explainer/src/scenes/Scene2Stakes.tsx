import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { COLORS, FONT_FAMILY } from "../constants";
import { GrainOverlay } from "../components/GrainOverlay";
import { SplitBackground } from "../components/SplitBackground";
import { PaperCard } from "../components/PaperCard";
import { TapeStrip } from "../components/TapeStrip";
import { Clock } from "../components/Clock";

const clamp = (frame: number, range: [number, number]) =>
  interpolate(frame, range, [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

const BAR_INNER_HEIGHT = 592;

export const Scene2Stakes: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const clockIn = spring({
    frame,
    fps,
    config: { damping: 16, mass: 0.6 },
    durationInFrames: 22,
  });
  const clockProgress = clamp(frame, [10, 230]);

  const barIn = spring({
    frame: frame - 24,
    fps,
    config: { damping: 200 },
    durationInFrames: 20,
  });
  const barFill = clamp(frame, [40, 240]);
  const barHeightPx = barFill * BAR_INNER_HEIGHT * 0.85;

  const captionIn = clamp(frame, [250, 278]);
  const captionY = interpolate(captionIn, [0, 1], [24, 0]);

  return (
    <AbsoluteFill style={{ fontFamily: FONT_FAMILY, overflow: "hidden" }}>
      <SplitBackground flip />

      <div
        style={{
          position: "absolute",
          top: 140,
          left: 0,
          right: 0,
          display: "flex",
          justifyContent: "center",
          opacity: clockIn,
          transform: `scale(${interpolate(clockIn, [0, 1], [0.75, 1])})`,
        }}
      >
        <Clock size={420} color={COLORS.ink} progress={clockProgress} rotations={4.5} />
      </div>

      <div
        style={{
          position: "absolute",
          top: 660,
          left: 90,
          opacity: barIn,
          transform: `translateX(${interpolate(barIn, [0, 1], [-30, 0])}px)`,
        }}
      >
        <div style={{ position: "relative", width: 200, height: 640 }}>
          <PaperCard
            width={200}
            height={640}
            fill="#ffffff"
            rotate={-1.2}
            seed={51}
            style={{ position: "absolute", inset: 0 }}
          />
          <div
            style={{
              position: "absolute",
              left: 24,
              right: 24,
              bottom: 24,
              height: BAR_INNER_HEIGHT,
              overflow: "hidden",
              borderRadius: 16,
              backgroundColor: COLORS.blueSoft,
            }}
          >
            <div
              style={{
                position: "absolute",
                left: 0,
                right: 0,
                bottom: 0,
                height: barHeightPx,
                backgroundColor: COLORS.blue,
                borderRadius: 16,
              }}
            />
          </div>
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          top: 700,
          left: 330,
          width: 640,
          opacity: barIn,
        }}
      >
        <div
          style={{
            fontSize: 34,
            fontWeight: 600,
            color: COLORS.ink,
            lineHeight: 1.5,
          }}
        >
          Each scheme takes roughly three hours to write. That time keeps
          stacking up, scheme after scheme, all term long.
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          bottom: 220,
          left: 0,
          right: 0,
          display: "flex",
          justifyContent: "center",
          opacity: captionIn,
          transform: `translateY(${captionY}px)`,
        }}
      >
        <div style={{ position: "relative" }}>
          <PaperCard
            width={860}
            height={220}
            fill={COLORS.blue}
            rotate={0.8}
            seed={55}
            style={{ position: "absolute", inset: 0 }}
          />
          <TapeStrip
            width={110}
            height={32}
            rotate={-9}
            style={{ position: "absolute", top: -18, left: 70 }}
          />
          <TapeStrip
            width={110}
            height={32}
            rotate={9}
            style={{ position: "absolute", top: -18, right: 70 }}
          />
          <div
            style={{
              position: "relative",
              fontSize: 54,
              fontWeight: 800,
              color: COLORS.white,
              textAlign: "center",
              lineHeight: 1.25,
              padding: "44px 60px",
            }}
          >
            Almost fifty hours.
            <br />
            In one term. For one teacher.
          </div>
        </div>
      </div>

      <GrainOverlay opacity={0.05} />
    </AbsoluteFill>
  );
};
