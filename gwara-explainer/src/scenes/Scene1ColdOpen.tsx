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
import { ArchivalCutout } from "../components/ArchivalCutout";
import { Hourglass } from "../components/Hourglass";

// Decorative paper pile behind the hourglass — an arbitrary handful of
// cutouts standing in for "repeated paperwork," not a claimed count.
const PILE = Array.from({ length: 10 }, (_, i) => {
  const x = (i % 5) * 46 - 90;
  const y = Math.floor(i / 5) * 30;
  return {
    x,
    y,
    rotate: ((i * 41) % 30) - 15,
    color: i % 3 === 0 ? "#ffffff" : i % 3 === 1 ? "#fdf6e3" : "#eef3f6",
    seed: i + 30,
  };
});

const clamp = (frame: number, range: [number, number]) =>
  interpolate(frame, range, [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

export const Scene1ColdOpen: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const navyBar = spring({ frame, fps, config: { damping: 200 }, durationInFrames: 18 });
  const arrow1 = clamp(frame, [16, 42]);
  const coralBar = spring({ frame: frame - 20, fps, config: { damping: 200 }, durationInFrames: 18 });

  const tags = clamp(frame, [46, 74]);
  const tagsY = interpolate(tags, [0, 1], [24, 0]);

  const cutoutIn = spring({ frame: frame - 84, fps, config: { damping: 16, mass: 0.6 }, durationInFrames: 22 });
  const arrow2 = clamp(frame, [118, 150]);

  const pileStart = 128;
  const hourglassIn = spring({ frame: frame - 168, fps, config: { damping: 16, mass: 0.6 }, durationInFrames: 22 });
  const arrow3 = clamp(frame, [150, 178]);
  const sandProgress = clamp(frame, [180, 296]);

  const contextIn = clamp(frame, [240, 270]);
  const contextY = interpolate(contextIn, [0, 1], [20, 0]);

  return (
    <AbsoluteFill
      style={{
        fontFamily: FONT_FAMILY,
        overflow: "hidden",
      }}
    >
      <SplitBackground />

      {/* Beat 1: "Every term." -> arrow -> "Every subject." */}
      <div
        style={{
          position: "absolute",
          top: 130,
          left: 70,
          opacity: navyBar,
          transform: `translateY(${interpolate(navyBar, [0, 1], [-24, 0])}px) rotate(-2deg)`,
        }}
      >
        <div style={{ position: "relative" }}>
          <PaperCard width={430} height={128} fill={COLORS.blue} rotate={-2} seed={3} />
          <TapeStrip width={90} height={28} rotate={-10} style={{ position: "absolute", top: -14, left: 30 }} />
          <div
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 56,
              fontWeight: 800,
              color: COLORS.white,
              letterSpacing: -0.5,
            }}
          >
            Every term.
          </div>
        </div>
      </div>

      <HandDrawnArrow
        width={1080}
        height={1920}
        d="M 300,290 C 420,220 560,200 650,240"
        color={COLORS.ink}
        progress={arrow1}
      />

      <div
        style={{
          position: "absolute",
          top: 230,
          left: 610,
          opacity: coralBar,
          transform: `translateY(${interpolate(coralBar, [0, 1], [-24, 0])}px) rotate(2deg)`,
        }}
      >
        <div style={{ position: "relative" }}>
          <PaperCard width={420} height={128} fill={COLORS.blueLight} rotate={2} seed={6} />
          <div
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 52,
              fontWeight: 800,
              color: COLORS.ink,
              letterSpacing: -0.5,
              padding: "0 10px",
              textAlign: "center",
            }}
          >
            Every subject.
          </div>
        </div>
      </div>

      {/* Subject tags */}
      <div
        style={{
          position: "absolute",
          top: 430,
          left: 0,
          right: 0,
          display: "flex",
          justifyContent: "center",
          gap: 16,
          opacity: tags,
          transform: `translateY(${tagsY}px)`,
        }}
      >
        {GWARA_FACTS.subjects.map((subject, i) => (
          <div key={subject} style={{ position: "relative" }}>
            <PaperCard
              width={subject.length * 14 + 46}
              height={58}
              fill="#ffffff"
              rotate={i % 2 === 0 ? -3 : 3}
              seed={40 + i}
              style={{ position: "absolute", inset: 0 }}
            />
            <div
              style={{
                position: "relative",
                fontSize: 23,
                fontWeight: 700,
                color: COLORS.blue,
                padding: "16px 23px",
                whiteSpace: "nowrap",
              }}
            >
              {subject}
            </div>
          </div>
        ))}
      </div>

      {/* Archival cutout accent + arrow down to the paper pile */}
      <div
        style={{
          position: "absolute",
          top: 560,
          left: 90,
          opacity: cutoutIn,
          transform: `scale(${interpolate(cutoutIn, [0, 1], [0.8, 1])})`,
        }}
      >
        <ArchivalCutout width={280} height={220} rotate={-4} seed={11} tone="#7c848b" />
        <TapeStrip width={70} height={22} rotate={12} style={{ position: "absolute", top: -10, right: 10 }} />
      </div>

      <HandDrawnArrow
        width={1080}
        height={1920}
        d="M 330,760 C 420,830 520,860 600,900"
        color={COLORS.ink}
        progress={arrow2}
      />

      {/* Paper pile + hourglass */}
      <div style={{ position: "absolute", top: 980, left: 600 }}>
        {PILE.map((card, i) => {
          const pileFrame = frame - (pileStart + i * 5);
          const p = spring({ frame: pileFrame, fps, config: { damping: 14, mass: 0.5 }, durationInFrames: 16 });
          if (pileFrame < -10) return null;
          return (
            <PaperCard
              key={i}
              width={150}
              height={104}
              fill={card.color}
              rotate={card.rotate}
              seed={card.seed}
              style={{
                position: "absolute",
                left: card.x,
                top: card.y,
                opacity: interpolate(p, [0, 1], [0, 1]),
                transform: `translateY(${interpolate(p, [0, 1], [26, 0])}px) scale(${interpolate(p, [0, 1], [0.6, 1])}) rotate(${card.rotate}deg)`,
              }}
            />
          );
        })}
      </div>

      <HandDrawnArrow
        width={1080}
        height={1920}
        d="M 760,1000 C 690,1040 630,1070 600,1110"
        color={COLORS.ink}
        progress={arrow3}
      />

      <div
        style={{
          position: "absolute",
          top: 1140,
          left: 400,
          opacity: hourglassIn,
          transform: `scale(${interpolate(hourglassIn, [0, 1], [0.7, 1])})`,
        }}
      >
        <Hourglass
          width={260}
          height={340}
          color={COLORS.ink}
          sandColor={COLORS.blue}
          fillProgress={sandProgress}
        />
      </div>

      {/* Context card */}
      <div
        style={{
          position: "absolute",
          top: 1560,
          left: 0,
          right: 0,
          display: "flex",
          justifyContent: "center",
          opacity: contextIn,
          transform: `translateY(${contextY}px)`,
        }}
      >
        <div style={{ position: "relative" }}>
          <PaperCard width={780} height={190} fill="#ffffff" rotate={-0.8} seed={22} style={{ position: "absolute", inset: 0 }} />
          <TapeStrip width={100} height={30} rotate={-8} style={{ position: "absolute", top: -16, left: 60 }} />
          <TapeStrip width={100} height={30} rotate={7} style={{ position: "absolute", top: -16, right: 60 }} />
          <div
            style={{
              position: "relative",
              fontSize: 40,
              fontWeight: 700,
              color: COLORS.ink,
              lineHeight: 1.35,
              textAlign: "center",
              padding: "40px 50px",
            }}
          >
            One teacher. Six forms.
            <br />
            Written by hand, every single term.
          </div>
        </div>
      </div>

      <GrainOverlay opacity={0.05} />
    </AbsoluteFill>
  );
};
