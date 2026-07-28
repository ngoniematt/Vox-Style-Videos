import { AbsoluteFill, Sequence } from "remotion";
import { SCENE_FRAMES } from "./constants";
import { Scene1ColdOpen } from "./scenes/Scene1ColdOpen";
import { PlaceholderScene } from "./scenes/PlaceholderScene";

export const GwaraExplainer: React.FC = () => {
  let cursor = 0;
  const scene1From = cursor;
  cursor += SCENE_FRAMES.coldOpen;
  const scene2From = cursor;
  cursor += SCENE_FRAMES.stakes;
  const scene3From = cursor;
  cursor += SCENE_FRAMES.turn;
  const scene4From = cursor;
  cursor += SCENE_FRAMES.introduceGwara;
  const scene5From = cursor;
  cursor += SCENE_FRAMES.trust;
  const scene6From = cursor;
  cursor += SCENE_FRAMES.chainOfTrust;
  const scene7From = cursor;
  cursor += SCENE_FRAMES.scaleAndClose;

  return (
    <AbsoluteFill>
      <Sequence from={scene1From} durationInFrames={SCENE_FRAMES.coldOpen}>
        <Scene1ColdOpen />
      </Sequence>

      {/* Scenes 2-7 below are placeholders, built one at a time. */}
      <Sequence from={scene2From} durationInFrames={SCENE_FRAMES.stakes}>
        <PlaceholderScene label="Scene 2 — Stakes (TODO)" />
      </Sequence>
      <Sequence from={scene3From} durationInFrames={SCENE_FRAMES.turn}>
        <PlaceholderScene label="Scene 3 — The turn (TODO)" />
      </Sequence>
      <Sequence
        from={scene4From}
        durationInFrames={SCENE_FRAMES.introduceGwara}
      >
        <PlaceholderScene label="Scene 4 — Introduce Gwara (TODO)" />
      </Sequence>
      <Sequence from={scene5From} durationInFrames={SCENE_FRAMES.trust}>
        <PlaceholderScene label="Scene 5 — Trust mechanism (TODO)" />
      </Sequence>
      <Sequence
        from={scene6From}
        durationInFrames={SCENE_FRAMES.chainOfTrust}
      >
        <PlaceholderScene label="Scene 6 — Chain of trust (TODO)" />
      </Sequence>
      <Sequence
        from={scene7From}
        durationInFrames={SCENE_FRAMES.scaleAndClose}
      >
        <PlaceholderScene label="Scene 7 — Scale and close (TODO)" />
      </Sequence>
    </AbsoluteFill>
  );
};
