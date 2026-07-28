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
import { HandDrawnArrow } from "../components/HandDrawnArrow";
import { Checkmark } from "../components/Checkmark";

const clamp = (frame: number, range: [number, number]) =>
  interpolate(frame, range, [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

export const Scene5Trust: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const syllabusIn = spring({ frame, fps, config: { damping: 200 }, durationInFrames: 16 });
  const arrow1 = clamp(frame, [20, 44]);

  const badgeIn = spring({ frame: frame - 40, fps, config: { damping: 14, mass: 0.5 }, durationInFrames: 20 });
  const checkProgress = clamp(frame, [62, 108]);

  const arrow2 = clamp(frame, [72, 96]);
  const weekIn = spring({ frame: frame - 92, fps, config: { damping: 200 }, durationInFrames: 16 });

  const captionIn = clamp(frame, [150, 180]);
  const captionY = interpolate(captionIn, [0, 1], [20, 0]);

  return (
    <AbsoluteFill style={{ fontFamily: FONT_FAMILY, overflow: "hidden" }}>
      <SplitBackground />

      <div
        style={{
          position: "absolute",
          top: 220,
          left: 70,
          opacity: syllabusIn,
          transform: `rotate(-2deg) translateY(${interpolate(syllabusIn, [0, 1], [-20, 0])}px)`,
        }}
      >
        <div style={{ position: "relative" }}>
          <PaperCard width={330} height={200} fill="#ffffff" rotate={-2} seed={90} style={{ position: "absolute", inset: 0 }} />
          <div
            style={{
              position: "relative",
              fontSize: 30,
              fontWeight: 700,
              color: COLORS.ink,
              textAlign: "center",
              padding: "56px 24px",
              lineHeight: 1.3,
            }}
          >
            ZIMSEC Syllabus
          </div>
        </div>
      </div>

      <HandDrawnArrow
        width={1080}
        height={1920}
        d="M 400,340 C 470,380 500,420 520,460"
        color={COLORS.ink}
        progress={arrow1}
      />

      <div
        style={{
          position: "absolute",
          top: 500,
          left: 0,
          right: 0,
          display: "flex",
          justifyContent: "center",
          opacity: badgeIn,
          transform: `scale(${interpolate(badgeIn, [0, 1], [0.7, 1])})`,
        }}
      >
        <div
          style={{
            width: 300,
            height: 300,
            borderRadius: "50%",
            backgroundColor: COLORS.blue,
            boxShadow: "0 16px 30px rgba(31,41,55,0.28)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Checkmark width={160} height={160} color="#ffffff" progress={checkProgress} />
        </div>
      </div>

      <HandDrawnArrow
        width={1080}
        height={1920}
        d="M 620,720 C 700,780 730,820 760,860"
        color={COLORS.ink}
        progress={arrow2}
      />

      <div
        style={{
          position: "absolute",
          top: 900,
          right: 70,
          opacity: weekIn,
          transform: `rotate(2deg) translateY(${interpolate(weekIn, [0, 1], [-20, 0])}px)`,
        }}
      >
        <div style={{ position: "relative" }}>
          <PaperCard width={340} height={200} fill={COLORS.blueSoft} rotate={2} seed={95} style={{ position: "absolute", inset: 0 }} />
          <div
            style={{
              position: "relative",
              fontSize: 30,
              fontWeight: 700,
              color: COLORS.blue,
              textAlign: "center",
              padding: "56px 24px",
              lineHeight: 1.3,
            }}
          >
            Generated Week
          </div>
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
        <div
          style={{
            fontSize: 42,
            fontWeight: 700,
            color: COLORS.ink,
            textAlign: "center",
            width: 780,
            lineHeight: 1.4,
          }}
        >
          Checked automatically against the syllabus.
          <br />
          No invented topics.
        </div>
      </div>

      <GrainOverlay opacity={0.05} />
    </AbsoluteFill>
  );
};
