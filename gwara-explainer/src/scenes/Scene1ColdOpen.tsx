import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { COLORS, FONT_FAMILY, GWARA_FACTS } from "../constants";
import { GrainOverlay } from "../components/GrainOverlay";
import { Halftone } from "../components/Halftone";
import { PaperCard } from "../components/PaperCard";
import { TapeStrip } from "../components/TapeStrip";
import { MarkerCircle } from "../components/MarkerCircle";

const PAPER_BG = "#f7f1e1";
const CARD_COLORS = ["#ffffff", "#fdf6e3", "#eef3f6"];

// Deterministic loose "pile" offsets for the 16 mini scheme cutouts.
const PILE = Array.from({ length: 16 }, (_, i) => {
  const angle = (i / 16) * Math.PI * 2.4 + i * 0.7;
  const radius = 40 + ((i * 37) % 90);
  return {
    x: Math.cos(angle) * radius,
    y: Math.sin(angle) * radius * 0.6 - 60,
    rotate: ((i * 53) % 40) - 20,
    color: CARD_COLORS[i % CARD_COLORS.length],
    seed: i + 1,
  };
});

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

  const linesExitOpacity = interpolate(frame, [92, 112], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const linesExitY = interpolate(frame, [92, 112], [0, -80], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const numberEnter = spring({
    frame: frame - 118,
    fps,
    config: { damping: 12, mass: 0.6 },
    durationInFrames: 25,
  });
  const numberOpacity = interpolate(numberEnter, [0, 1], [0, 1]);
  const numberScale = interpolate(numberEnter, [0, 1], [0.6, 1]);

  const circleProgress = interpolate(frame, [160, 190], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const labelOpacity = interpolate(frame, [150, 172], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const labelY = interpolate(frame, [150, 172], [20, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const subjectsOpacity = interpolate(frame, [196, 218], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const subjectsY = interpolate(frame, [196, 218], [24, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const contextOpacity = interpolate(frame, [234, 258], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const contextY = interpolate(frame, [234, 258], [16, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: PAPER_BG,
        fontFamily: FONT_FAMILY,
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      <Halftone color={COLORS.navy} size={26} opacity={0.07} />

      {/* Beat 1: "Every term. Every subject." on torn paper cards */}
      <AbsoluteFill
        style={{
          justifyContent: "center",
          alignItems: "center",
          opacity: linesExitOpacity,
          transform: `translateY(${linesExitY}px)`,
        }}
      >
        <div style={{ position: "relative", textAlign: "center" }}>
          <div
            style={{
              position: "relative",
              opacity: line1Progress,
              transform: `translateY(${interpolate(line1Progress, [0, 1], [30, 0])}px) rotate(-1.5deg)`,
            }}
          >
            <PaperCard
              width={760}
              height={150}
              fill="#ffffff"
              rotate={-1.5}
              seed={2}
              style={{ position: "absolute", top: 0, left: -20 }}
            />
            <TapeStrip
              width={110}
              height={34}
              rotate={-8}
              style={{ position: "absolute", top: -16, left: 20 }}
            />
            <div
              style={{
                position: "relative",
                fontSize: 84,
                fontWeight: 800,
                color: COLORS.ink,
                letterSpacing: -1,
                padding: "36px 40px",
              }}
            >
              Every term.
            </div>
          </div>

          <div
            style={{
              position: "relative",
              marginTop: 26,
              opacity: line2Progress,
              transform: `translateY(${interpolate(line2Progress, [0, 1], [30, 0])}px) rotate(1deg)`,
            }}
          >
            <PaperCard
              width={780}
              height={150}
              fill="#fdf6e3"
              rotate={1}
              seed={5}
              style={{ position: "absolute", top: 0, left: -10 }}
            />
            <div
              style={{
                position: "relative",
                fontSize: 84,
                fontWeight: 800,
                color: COLORS.navy,
                letterSpacing: -1,
                padding: "36px 40px",
              }}
            >
              Every subject.
            </div>
          </div>
        </div>
      </AbsoluteFill>

      {/* Beat 2: the pile of 16 schemes, the big number, and context */}
      <AbsoluteFill
        style={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div style={{ textAlign: "center", padding: "0 80px" }}>
          {/* the physical pile — 16 mini torn-edge cutouts, one per scheme */}
          <div
            style={{
              position: "relative",
              width: 1,
              height: 1,
              marginLeft: "50%",
              marginTop: 40,
            }}
          >
            {PILE.map((card, i) => {
              const pileFrame = frame - (100 + i * 4);
              const pileProgress = spring({
                frame: pileFrame,
                fps,
                config: { damping: 14, mass: 0.5 },
                durationInFrames: 16,
              });
              if (pileFrame < -10) return null;
              return (
                <PaperCard
                  key={i}
                  width={140}
                  height={96}
                  fill={card.color}
                  rotate={card.rotate}
                  seed={card.seed}
                  style={{
                    position: "absolute",
                    left: card.x - 70,
                    top: card.y - 48,
                    opacity: interpolate(pileProgress, [0, 1], [0, 1]),
                    transform: `translateY(${interpolate(pileProgress, [0, 1], [30, 0])}px) scale(${interpolate(pileProgress, [0, 1], [0.5, 1])}) rotate(${card.rotate}deg)`,
                  }}
                />
              );
            })}
          </div>

          <div style={{ position: "relative", display: "inline-block" }}>
            <div
              style={{
                fontSize: 460,
                fontWeight: 900,
                color: COLORS.navy,
                lineHeight: 1,
                opacity: numberOpacity,
                transform: `scale(${numberScale})`,
                textShadow: "0 12px 0 rgba(11,35,51,0.08)",
              }}
            >
              {GWARA_FACTS.schemesPerTerm}
            </div>
            <MarkerCircle
              width={520}
              height={380}
              color={COLORS.accent}
              progress={circleProgress}
            />
          </div>

          <div
            style={{
              fontSize: 52,
              fontWeight: 700,
              color: COLORS.ink,
              opacity: labelOpacity,
              transform: `translateY(${labelY}px)`,
              marginTop: 4,
            }}
          >
            schemes of work
          </div>

          {/* subject chips — small taped paper tags, one per subject */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: 18,
              marginTop: 34,
              opacity: subjectsOpacity,
              transform: `translateY(${subjectsY}px)`,
            }}
          >
            {GWARA_FACTS.subjects.map((subject, i) => (
              <div key={subject} style={{ position: "relative" }}>
                <PaperCard
                  width={subject.length * 15 + 50}
                  height={64}
                  fill={i === 1 ? COLORS.accent : "#ffffff"}
                  rotate={i % 2 === 0 ? -3 : 3}
                  seed={10 + i}
                  style={{ position: "absolute", inset: 0 }}
                />
                <TapeStrip
                  width={44}
                  height={20}
                  rotate={i % 2 === 0 ? 10 : -10}
                  style={{
                    position: "absolute",
                    top: -10,
                    left: "50%",
                    marginLeft: -22,
                  }}
                />
                <div
                  style={{
                    position: "relative",
                    fontSize: 26,
                    fontWeight: 700,
                    color: i === 1 ? "#ffffff" : COLORS.navy,
                    padding: "18px 26px",
                    whiteSpace: "nowrap",
                  }}
                >
                  {subject}
                </div>
              </div>
            ))}
          </div>

          <div
            style={{
              position: "relative",
              marginTop: 40,
              opacity: contextOpacity,
              transform: `translateY(${contextY}px)`,
            }}
          >
            <PaperCard
              width={640}
              height={110}
              fill="#eef3f6"
              rotate={-0.6}
              seed={20}
              style={{
                position: "absolute",
                top: -14,
                left: "50%",
                marginLeft: -320,
              }}
            />
            <div
              style={{
                position: "relative",
                fontSize: 29,
                fontWeight: 500,
                color: COLORS.navyDark,
                lineHeight: 1.4,
                padding: "14px 24px",
              }}
            >
              One teacher. Six forms.
              <br />
              Written by hand, every single term.
            </div>
          </div>
        </div>
      </AbsoluteFill>

      <GrainOverlay opacity={0.05} />
    </AbsoluteFill>
  );
};
