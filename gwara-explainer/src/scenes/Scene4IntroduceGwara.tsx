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

const clamp = (frame: number, range: [number, number]) =>
  interpolate(frame, range, [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

const GENERATED_CARDS = Array.from({ length: 8 }, (_, i) => ({
  x: (i % 4) * 150 - 225,
  y: Math.floor(i / 4) * 130,
  rotate: ((i * 47) % 24) - 12,
  seed: 70 + i,
}));

export const Scene4IntroduceGwara: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const wordmarkIn = spring({
    frame,
    fps,
    config: { damping: 15, mass: 0.6 },
    durationInFrames: 22,
  });

  const countdownWindow: [number, number] = [40, 260];
  const countdownT = clamp(frame, countdownWindow);
  const countdownValue = Math.max(
    0,
    Math.ceil(GWARA_FACTS.generationSeconds * (1 - countdownT)),
  );
  const countdownOpacity = clamp(frame, [36, 56]);

  const syllabusIn = spring({
    frame: frame - 268,
    fps,
    config: { damping: 200 },
    durationInFrames: 18,
  });

  return (
    <AbsoluteFill style={{ fontFamily: FONT_FAMILY, overflow: "hidden" }}>
      <SplitBackground flip />

      <div
        style={{
          position: "absolute",
          top: 130,
          left: 0,
          right: 0,
          display: "flex",
          justifyContent: "center",
          opacity: wordmarkIn,
          transform: `scale(${interpolate(wordmarkIn, [0, 1], [0.7, 1])})`,
        }}
      >
        <div style={{ position: "relative" }}>
          <PaperCard
            width={520}
            height={190}
            fill={COLORS.blue}
            rotate={-1.5}
            seed={71}
            style={{ position: "absolute", inset: 0 }}
          />
          <TapeStrip
            width={100}
            height={30}
            rotate={-10}
            style={{ position: "absolute", top: -16, left: 50 }}
          />
          <div
            style={{
              position: "relative",
              fontSize: 74,
              fontWeight: 900,
              color: COLORS.white,
              textAlign: "center",
              padding: "48px 40px",
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
          top: 400,
          left: 0,
          right: 0,
          textAlign: "center",
          fontSize: 34,
          fontWeight: 600,
          color: COLORS.ink,
          opacity: countdownOpacity,
          padding: "0 100px",
        }}
      >
        The same schemes of work, generated in seconds each.
      </div>

      {/* countdown clock number + cards generating in sync */}
      <div
        style={{
          position: "absolute",
          top: 560,
          left: "50%",
          marginLeft: -70,
          opacity: countdownOpacity,
        }}
      >
        <div style={{ position: "relative", width: 140, height: 140 }}>
          <div
            style={{
              position: "absolute",
              inset: 0,
              borderRadius: "50%",
              backgroundColor: "#ffffff",
              border: `6px solid ${COLORS.blue}`,
              boxShadow: "0 10px 18px rgba(31,41,55,0.22)",
            }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 64,
              fontWeight: 900,
              color: COLORS.blue,
            }}
          >
            {countdownValue}
          </div>
        </div>
      </div>

      <div style={{ position: "absolute", top: 780, left: 540 }}>
        {GENERATED_CARDS.map((card, i) => {
          const cardFrame = frame - (80 + i * 22);
          const p = spring({
            frame: cardFrame,
            fps,
            config: { damping: 14, mass: 0.5 },
            durationInFrames: 14,
          });
          if (cardFrame < -8) return null;
          return (
            <PaperCard
              key={i}
              width={130}
              height={90}
              fill={i % 2 === 0 ? "#ffffff" : COLORS.blueSoft}
              rotate={card.rotate}
              seed={card.seed}
              style={{
                position: "absolute",
                left: card.x,
                top: card.y,
                opacity: interpolate(p, [0, 1], [0, 1]),
                transform: `translateY(${interpolate(p, [0, 1], [20, 0])}px) scale(${interpolate(p, [0, 1], [0.6, 1])}) rotate(${card.rotate}deg)`,
              }}
            />
          );
        })}
      </div>

      <div
        style={{
          position: "absolute",
          bottom: 200,
          left: 0,
          right: 0,
          display: "flex",
          justifyContent: "center",
          opacity: syllabusIn,
          transform: `translateY(${interpolate(syllabusIn, [0, 1], [24, 0])}px)`,
        }}
      >
        <div style={{ position: "relative" }}>
          <PaperCard
            width={840}
            height={150}
            fill="#ffffff"
            rotate={-0.6}
            seed={80}
            style={{ position: "absolute", inset: 0 }}
          />
          <TapeStrip
            width={100}
            height={30}
            rotate={7}
            style={{ position: "absolute", top: -16, right: 70 }}
          />
          <div
            style={{
              position: "relative",
              fontSize: 34,
              fontWeight: 700,
              color: COLORS.blue,
              textAlign: "center",
              padding: "44px 40px",
              lineHeight: 1.3,
            }}
          >
            Grounded strictly in the real, official ZIMSEC syllabus.
          </div>
        </div>
      </div>

      <GrainOverlay opacity={0.05} />
    </AbsoluteFill>
  );
};
