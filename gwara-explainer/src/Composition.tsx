import { Composition } from "remotion";
import { FPS, WIDTH, HEIGHT, SCENE_DURATIONS } from "./constants";
import { GwaraExplainer } from "./GwaraExplainer";

const TOTAL_DURATION = Object.values(SCENE_DURATIONS).reduce(
  (a, b) => a + b,
  0
);

export const MyComposition = () => {
  return (
    <Composition
      id="GwaraExplainer"
      component={GwaraExplainer}
      durationInFrames={TOTAL_DURATION}
      fps={FPS}
      width={WIDTH}
      height={HEIGHT}
    />
  );
};
