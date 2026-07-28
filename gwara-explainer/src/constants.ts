export const FPS = 30;
export const WIDTH = 1080;
export const HEIGHT = 1920;

export const COLORS = {
  navy: "#1a5276",
  navyDark: "#123a54",
  white: "#ffffff",
  accent: "#e67e22",
} as const;

export const FONT_FAMILY =
  "'Helvetica Neue', Helvetica, Arial, sans-serif";

// Scene durations in frames (30fps). Sums to 65s.
export const SCENE_DURATIONS = {
  coldOpen: 8 * FPS, // 240
  stakes: 8 * FPS, // 240
  curriculumTurn: 9 * FPS, // 270
  introduceGwara: 9 * FPS, // 270
  trustMechanism: 9 * FPS, // 270
  chainOfTrust: 10 * FPS, // 300
  scaleClose: 12 * FPS, // 360
} as const;

export const FACTS = {
  subjects: ["Mathematics", "Physics", "Computer Science"],
  schemesPerTerm: 16,
  forms: 6,
  hoursPerScheme: 3,
  hoursPerTerm: 50,
  oldFramework: "2015–2022",
  newFramework: "2024–2030 Heritage-Based Curriculum Framework",
  teachersNational: 145610,
  schoolsNational: 11793,
  approvalChain: ["Teacher", "Head", "District", "Province"],
  tagline: "Time back. Curriculum covered. Every term.",
} as const;
