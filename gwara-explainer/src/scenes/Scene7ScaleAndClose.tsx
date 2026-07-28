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
import { Hourglass } from "../components/Hourglass";

const clamp = (frame: number, range: [number, number]) =>
  interpolate(frame, range, [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

export const Scene7ScaleAndClose: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const teachersIn = spring({ frame, fps, config: { damping: 15, mass: 0.6 }, durationInFrames: 20 });
  const schoolsIn = spring({ frame: frame - 30, fps, config: { damping: 15, mass: 0.6 }, durationInFrames: 20 });

  const scaleTextIn = clamp(frame, [90, 118]);
  const scaleTextY = interpolate(scaleTextIn, [0, 1], [20, 0]);

  const hourglassIn = spring({ frame: frame - 170, fps, config: { damping: 15, mass: 0.6 }, durationInFrames: 20 });

  const wordmarkIn = spring({ frame: frame - 250, fps, config: { damping: 15, mass: 0.6 }, durationInFrames: 22 });

  const taglineIn = clamp(frame, [292, 320]);
  const taglineY = interpolate(taglineIn, [0, 1], [20, 0]);

  return (
    <AbsoluteFill style={{ fontFamily: FONT_FAMILY, overflow: "hidden" }}>
      <SplitBackground />

      <div
        style={{
          position: "absolute",
          top: 110,
          left: 0,
          right: 0,
          display: "flex",
          justifyContent: "center",
          opacity: teachersIn,
          transform: `scale(${interpolate(teachersIn, [0, 1], [0.75, 1])})`,
        }}
      >
        <div style={{ position: "relative" }}>
          <PaperCard width={860} height={210} fill={COLORS.blue} rotate={-1} seed={110} style={{ position: "absolute", inset: 0 }} />
          <TapeStrip width={100} height={30} rotate={-9} style={{ position: "absolute", top: -16, left: 60 }} />
          <div
            style={{
              position: "relative",
              textAlign: "center",
              padding: "36px 40px",
              color: COLORS.white,
            }}
          >
            <div style={{ fontSize: 68, fontWeight: 900, letterSpacing: -1 }}>
              {GWARA_FACTS.teachersNational.toLocaleString("en-US")}
            </div>
            <div style={{ fontSize: 28, fontWeight: 600, marginTop: 4 }}>
              teachers nationwide
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          top: 360,
          left: 0,
          right: 0,
          display: "flex",
          justifyContent: "center",
          opacity: schoolsIn,
          transform: `scale(${interpolate(schoolsIn, [0, 1], [0.75, 1])})`,
        }}
      >
        <div style={{ position: "relative" }}>
          <PaperCard width={860} height={210} fill="#ffffff" rotate={1} seed={115} style={{ position: "absolute", inset: 0 }} />
          <TapeStrip width={100} height={30} rotate={8} style={{ position: "absolute", top: -16, right: 60 }} />
          <div
            style={{
              position: "relative",
              textAlign: "center",
              padding: "36px 40px",
              color: COLORS.blue,
            }}
          >
            <div style={{ fontSize: 68, fontWeight: 900, letterSpacing: -1 }}>
              {GWARA_FACTS.schoolsNational.toLocaleString("en-US")}
            </div>
            <div style={{ fontSize: 28, fontWeight: 600, marginTop: 4 }}>
              schools nationwide
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          top: 620,
          left: 0,
          right: 0,
          display: "flex",
          justifyContent: "center",
          opacity: scaleTextIn,
          transform: `translateY(${scaleTextY}px)`,
          padding: "0 100px",
        }}
      >
        <div
          style={{
            fontSize: 38,
            fontWeight: 600,
            color: COLORS.ink,
            textAlign: "center",
            lineHeight: 1.5,
          }}
        >
          That's the time Zimbabwe could reclaim.
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          top: 760,
          left: 0,
          right: 0,
          display: "flex",
          justifyContent: "center",
          opacity: hourglassIn,
          transform: `scale(${interpolate(hourglassIn, [0, 1], [0.75, 1])})`,
        }}
      >
        <Hourglass
          width={260}
          height={340}
          color={COLORS.ink}
          sandColor={COLORS.blue}
          fillProgress={1}
        />
      </div>

      <div
        style={{
          position: "absolute",
          top: 1160,
          left: 0,
          right: 0,
          display: "flex",
          justifyContent: "center",
          opacity: wordmarkIn,
          transform: `scale(${interpolate(wordmarkIn, [0, 1], [0.7, 1])})`,
        }}
      >
        <div style={{ position: "relative" }}>
          <PaperCard width={480} height={180} fill={COLORS.blue} rotate={-1} seed={120} style={{ position: "absolute", inset: 0 }} />
          <div
            style={{
              position: "relative",
              fontSize: 72,
              fontWeight: 900,
              color: COLORS.white,
              textAlign: "center",
              padding: "46px 30px",
              letterSpacing: -1,
            }}
          >
            Gwara
          </div>
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          top: 1420,
          left: 0,
          right: 0,
          display: "flex",
          justifyContent: "center",
          opacity: taglineIn,
          transform: `translateY(${taglineY}px)`,
        }}
      >
        <div
          style={{
            fontSize: 42,
            fontWeight: 700,
            color: COLORS.ink,
            textAlign: "center",
            width: 800,
            lineHeight: 1.4,
          }}
        >
          {GWARA_FACTS.tagline}
        </div>
      </div>

      <GrainOverlay opacity={0.05} />
    </AbsoluteFill>
  );
};
