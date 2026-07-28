export const FPS = 30;
export const WIDTH = 1080;
export const HEIGHT = 1920;

export const COLORS = {
  navy: "#1a5276",
  navyDark: "#12384f",
  white: "#ffffff",
  accent: "#e67e22",
  ink: "#0b2333",
};

export const FONT_FAMILY =
  "'Helvetica Neue', Helvetica, Arial, sans-serif";

// Scene durations, in seconds. Sums to 70s (within the 60-75s brief).
export const SCENE_SECONDS = {
  coldOpen: 10,
  stakes: 10,
  turn: 8,
  introduceGwara: 10,
  trust: 8,
  chainOfTrust: 10,
  scaleAndClose: 14,
} as const;

export const SCENE_FRAMES = Object.fromEntries(
  Object.entries(SCENE_SECONDS).map(([key, seconds]) => [
    key,
    Math.round(seconds * FPS),
  ]),
) as Record<keyof typeof SCENE_SECONDS, number>;

export const TOTAL_DURATION_IN_FRAMES = Object.values(SCENE_FRAMES).reduce(
  (sum, frames) => sum + frames,
  0,
);

// Real figures — used exactly as supplied, never rounded or invented.
export const GWARA_FACTS = {
  subjects: ["Mathematics", "Physics", "Computer Science"],
  forms: 6,
  schemesPerTerm: 16,
  hoursPerScheme: 3,
  totalHoursPerTerm: "almost fifty",
  oldFrameworkRange: "2015–2022",
  newFrameworkRange: "2024–2030",
  newFrameworkName: "Heritage-Based Curriculum Framework",
  generationSeconds: 20,
  teachersNational: 145610,
  schoolsNational: 11793,
  statsYear: 2025,
  approvalChain: [
    "Teacher submits",
    "Head reviews\n(AI coverage check)",
    "District oversight",
    "Provincial visibility",
  ],
  tagline: "Time back. Curriculum covered. Every term.",
} as const;
