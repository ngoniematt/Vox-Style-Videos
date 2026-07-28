import React from "react";
import { Series } from "remotion";
import { SCENE_DURATIONS } from "./constants";
import { Scene1ColdOpen } from "./scenes/Scene1ColdOpen";
import { PlaceholderScene } from "./scenes/PlaceholderScene";

export const GwaraExplainer: React.FC = () => {
  return (
    <Series>
      <Series.Sequence durationInFrames={SCENE_DURATIONS.coldOpen}>
        <Scene1ColdOpen />
      </Series.Sequence>
      <Series.Sequence durationInFrames={SCENE_DURATIONS.stakes}>
        <PlaceholderScene label="Scene 2: Stakes — three hours a scheme, fifty hours a term (placeholder)" />
      </Series.Sequence>
      <Series.Sequence durationInFrames={SCENE_DURATIONS.curriculumTurn}>
        <PlaceholderScene label="Scene 3: Curriculum turn — the old framework retired overnight (placeholder)" />
      </Series.Sequence>
      <Series.Sequence durationInFrames={SCENE_DURATIONS.introduceGwara}>
        <PlaceholderScene label="Scene 4: Introduce Gwara (placeholder)" />
      </Series.Sequence>
      <Series.Sequence durationInFrames={SCENE_DURATIONS.trustMechanism}>
        <PlaceholderScene label="Scene 5: Trust mechanism — checked against the syllabus (placeholder)" />
      </Series.Sequence>
      <Series.Sequence durationInFrames={SCENE_DURATIONS.chainOfTrust}>
        <PlaceholderScene label="Scene 6: Chain of trust — teacher, head, district, province (placeholder)" />
      </Series.Sequence>
      <Series.Sequence durationInFrames={SCENE_DURATIONS.scaleClose}>
        <PlaceholderScene label="Scene 7: Scale and close (placeholder)" />
      </Series.Sequence>
    </Series>
  );
};
