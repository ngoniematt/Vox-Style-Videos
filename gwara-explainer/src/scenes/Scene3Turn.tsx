import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { COLORS, FONT_FAMILY, GWARA_FACTS } from "../constants";
import { GrainOverlay } from "../components/GrainOverlay";
import { SplitBackground } from "../components/SplitBackground";
import { PaperCard } from "../components/PaperCard";
import { TapeStrip } from "../components/TapeStrip";
import { HandDrawnArrow } from "../components/HandDrawnArrow";
import { CrossOut } from "../components/CrossOut";

const clamp = (frame: number, range: [number, number]) =>
  interpolate(frame, range, [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

export const Scene3Turn: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const oldCardIn = spring({
    frame,
    fps,
    config: { damping: 200 },
    durationInFrames: 16,
  });
  const crossProgress = clamp(frame, [36, 86]);
  const arrowProgress = clamp(frame, [92, 118]);

  const newCardIn = spring({
    frame: frame - 100,
    fps,
    config: { damping: 15, mass: 0.6 },
    durationInFrames: 22,
  });

  const captionIn = clamp(frame, [150, 178]);
  const captionY = interpolate(captionIn, [0, 1], [20, 0]);

  return (
    <AbsoluteFill style={{ fontFamily: FONT_FAMILY, overflow: "hidden" }}>
      <SplitBackground />

      <div
        style={{
          position: "absolute",
          top: 160,
          left: 0,
          right: 0,
          display: "flex",
          justifyContent: "center",
          opacity: oldCardIn,
          transform: `translateY(${interpolate(oldCardIn, [0, 1], [-20, 0])}px) rotate(-1.5deg)`,
        }}
      >
        <div style={{ position: "relative" }}>
          <PaperCard
            width={720}
            height={200}
            fill="#ffffff"
            rotate={-1.5}
            seed={60}
            style={{ position: "absolute", inset: 0 }}
          />
          <div
            style={{
              position: "relative",
              fontSize: 40,
              fontWeight: 700,
              color: COLORS.ink,
              textAlign: "center",
              padding: "56px 40px",
            }}
          >
            {GWARA_FACTS.oldFrameworkRange} Framework
          </div>
          <CrossOut
            width={720}
            height={200}
            color={COLORS.blue}
            progress={crossProgress}
          />
        </div>
      </div>

      <HandDrawnArrow
        width={1080}
        height={1920}
        d="M 460,470 C 420,600 420,720 460,830"
        color={COLORS.ink}
        progress={arrowProgress}
      />

      <div
        style={{
          position: "absolute",
          top: 860,
          left: 0,
          right: 0,
          display: "flex",
          justifyContent: "center",
          opacity: newCardIn,
          transform: `scale(${interpolate(newCardIn, [0, 1], [0.75, 1])}) rotate(1deg)`,
        }}
      >
        <div style={{ position: "relative" }}>
          <PaperCard
            width={900}
            height={320}
            fill={COLORS.blue}
            rotate={1}
            seed={64}
            style={{ position: "absolute", inset: 0 }}
          />
          <TapeStrip
            width={110}
            height={32}
            rotate={-8}
            style={{ position: "absolute", top: -18, left: 60 }}
          />
          <TapeStrip
            width={110}
            height={32}
            rotate={8}
            style={{ position: "absolute", top: -18, right: 60 }}
          />
          <div
            style={{
              position: "relative",
              fontSize: 36,
              fontWeight: 800,
              color: COLORS.white,
              textAlign: "center",
              lineHeight: 1.35,
              padding: "56px 50px",
            }}
          >
            {GWARA_FACTS.newFrameworkRange}
            <br />
            {GWARA_FACTS.newFrameworkName}
          </div>
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          bottom: 200,
          left: 0,
          right: 0,
          display: "flex",
          justifyContent: "center",
          opacity: captionIn,
          transform: `translateY(${captionY}px)`,
        }}
      >
        <div
          style={{
            fontSize: 36,
            fontWeight: 600,
            color: COLORS.ink,
            textAlign: "center",
            width: 780,
            lineHeight: 1.5,
          }}
        >
          Zimbabwe's curriculum changed overnight.
          <br />
          Every old template became obsolete.
        </div>
      </div>

      <GrainOverlay opacity={0.05} />
    </AbsoluteFill>
  );
};
