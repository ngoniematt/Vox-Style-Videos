import "./index.css";
import { Composition } from "remotion";
import { FPS, HEIGHT, SCENE_FRAMES, TOTAL_DURATION_IN_FRAMES, WIDTH } from "./constants";
import { GwaraExplainer } from "./GwaraExplainer";
import { Scene1ColdOpen } from "./scenes/Scene1ColdOpen";
import { Scene2Stakes } from "./scenes/Scene2Stakes";
import { Scene3Turn } from "./scenes/Scene3Turn";
import { Scene4IntroduceGwara } from "./scenes/Scene4IntroduceGwara";
import { Scene5Trust } from "./scenes/Scene5Trust";
import { Scene6ChainOfTrust } from "./scenes/Scene6ChainOfTrust";
import { Scene7ScaleAndClose } from "./scenes/Scene7ScaleAndClose";

const SCENES = [
  { id: "Scene1ColdOpen", component: Scene1ColdOpen, frames: SCENE_FRAMES.coldOpen },
  { id: "Scene2Stakes", component: Scene2Stakes, frames: SCENE_FRAMES.stakes },
  { id: "Scene3Turn", component: Scene3Turn, frames: SCENE_FRAMES.turn },
  { id: "Scene4IntroduceGwara", component: Scene4IntroduceGwara, frames: SCENE_FRAMES.introduceGwara },
  { id: "Scene5Trust", component: Scene5Trust, frames: SCENE_FRAMES.trust },
  { id: "Scene6ChainOfTrust", component: Scene6ChainOfTrust, frames: SCENE_FRAMES.chainOfTrust },
  { id: "Scene7ScaleAndClose", component: Scene7ScaleAndClose, frames: SCENE_FRAMES.scaleAndClose },
];

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="GwaraExplainer"
        component={GwaraExplainer}
        durationInFrames={TOTAL_DURATION_IN_FRAMES}
        fps={FPS}
        width={WIDTH}
        height={HEIGHT}
      />
      {/* Isolated per-scene compositions, for reviewing one scene at a time. */}
      {SCENES.map((scene) => (
        <Composition
          key={scene.id}
          id={scene.id}
          component={scene.component}
          durationInFrames={scene.frames}
          fps={FPS}
          width={WIDTH}
          height={HEIGHT}
        />
      ))}
    </>
  );
};
