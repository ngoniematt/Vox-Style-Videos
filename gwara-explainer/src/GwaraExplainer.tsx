import { AbsoluteFill, Sequence } from "remotion";
import { SCENE_FRAMES } from "./constants";
import { Scene1ColdOpen } from "./scenes/Scene1ColdOpen";
import { Scene2Stakes } from "./scenes/Scene2Stakes";
import { Scene3Turn } from "./scenes/Scene3Turn";
import { Scene4IntroduceGwara } from "./scenes/Scene4IntroduceGwara";
import { Scene5Trust } from "./scenes/Scene5Trust";
import { Scene6ChainOfTrust } from "./scenes/Scene6ChainOfTrust";
import { Scene7ScaleAndClose } from "./scenes/Scene7ScaleAndClose";

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
      <Sequence from={scene2From} durationInFrames={SCENE_FRAMES.stakes}>
        <Scene2Stakes />
      </Sequence>
      <Sequence from={scene3From} durationInFrames={SCENE_FRAMES.turn}>
        <Scene3Turn />
      </Sequence>
      <Sequence
        from={scene4From}
        durationInFrames={SCENE_FRAMES.introduceGwara}
      >
        <Scene4IntroduceGwara />
      </Sequence>
      <Sequence from={scene5From} durationInFrames={SCENE_FRAMES.trust}>
        <Scene5Trust />
      </Sequence>
      <Sequence
        from={scene6From}
        durationInFrames={SCENE_FRAMES.chainOfTrust}
      >
        <Scene6ChainOfTrust />
      </Sequence>
      <Sequence
        from={scene7From}
        durationInFrames={SCENE_FRAMES.scaleAndClose}
      >
        <Scene7ScaleAndClose />
      </Sequence>
    </AbsoluteFill>
  );
};
