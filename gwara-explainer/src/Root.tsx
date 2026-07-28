import "./index.css";
import { Composition, Still } from "remotion";
import { FPS, HEIGHT, TOTAL_DURATION_IN_FRAMES, WIDTH } from "./constants";
import { GwaraExplainer } from "./GwaraExplainer";
import { Scene1ColdOpen } from "./scenes/Scene1ColdOpen";
import { SCENE_FRAMES } from "./constants";

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
      {/* Isolated scene, for reviewing one scene at a time while building. */}
      <Composition
        id="Scene1ColdOpen"
        component={Scene1ColdOpen}
        durationInFrames={SCENE_FRAMES.coldOpen}
        fps={FPS}
        width={WIDTH}
        height={HEIGHT}
      />
      <Still
        id="Scene1ColdOpen-Still"
        component={Scene1ColdOpen}
        width={WIDTH}
        height={HEIGHT}
      />
    </>
  );
};
