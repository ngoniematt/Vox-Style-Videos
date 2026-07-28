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
import { HandDrawnArrow } from "../components/HandDrawnArrow";

const clamp = (frame: number, range: [number, number]) =>
  interpolate(frame, range, [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

const NODES = [
  { top: 160, left: 90, align: "left" as const, fill: COLORS.blue, text: COLORS.white },
  { top: 420, left: 560, align: "right" as const, fill: "#ffffff", text: COLORS.ink },
  { top: 680, left: 90, align: "left" as const, fill: "#ffffff", text: COLORS.ink },
  { top: 940, left: 560, align: "right" as const, fill: COLORS.blue, text: COLORS.white },
];

const ARROWS = [
  "M 470,290 C 560,340 560,380 560,420",
  "M 610,600 C 500,650 470,660 470,680",
  "M 470,860 C 560,900 560,920 560,940",
];

export const Scene6ChainOfTrust: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const nodeSprings = NODES.map((_, i) =>
    spring({
      frame: frame - i * 45,
      fps,
      config: { damping: 15, mass: 0.6 },
      durationInFrames: 20,
    }),
  );
  const arrowProgress = ARROWS.map((_, i) => clamp(frame, [i * 45 + 22, i * 45 + 46]));

  const captionIn = clamp(frame, [210, 240]);
  const captionY = interpolate(captionIn, [0, 1], [20, 0]);

  return (
    <AbsoluteFill style={{ fontFamily: FONT_FAMILY, overflow: "hidden" }}>
      <SplitBackground flip />

      {ARROWS.map((d, i) => (
        <HandDrawnArrow
          key={i}
          width={1080}
          height={1920}
          d={d}
          color={COLORS.ink}
          progress={arrowProgress[i]}
        />
      ))}

      {NODES.map((node, i) => {
        const label = GWARA_FACTS.approvalChain[i];
        const p = nodeSprings[i];
        return (
          <div
            key={i}
            style={{
              position: "absolute",
              top: node.top,
              left: node.left,
              opacity: p,
              transform: `translateY(${interpolate(p, [0, 1], [24, 0])}px) scale(${interpolate(p, [0, 1], [0.8, 1])})`,
            }}
          >
            <div style={{ position: "relative" }}>
              <PaperCard
                width={410}
                height={170}
                fill={node.fill}
                rotate={i % 2 === 0 ? -1.5 : 1.5}
                seed={100 + i}
                style={{ position: "absolute", inset: 0 }}
              />
              <div
                style={{
                  position: "relative",
                  fontSize: 32,
                  fontWeight: 700,
                  color: node.text,
                  textAlign: "center",
                  padding: "40px 30px",
                  lineHeight: 1.3,
                  whiteSpace: "pre-line",
                }}
              >
                {label}
              </div>
            </div>
          </div>
        );
      })}

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
            fontSize: 38,
            fontWeight: 600,
            color: COLORS.ink,
            textAlign: "center",
            width: 800,
            lineHeight: 1.5,
          }}
        >
          Visibility across every school. Not just one.
        </div>
      </div>

      <GrainOverlay opacity={0.05} />
    </AbsoluteFill>
  );
};
