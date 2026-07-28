// Deterministic torn-paper-edge polygon generator, for clip-path. Same seed
// always produces the same jagged silhouette, so a card looks consistent
// across every frame it's on screen.
const mulberry32 = (seed: number) => {
  let a = seed;
  return () => {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
};

// Returns a CSS clip-path polygon() string for a rectangle with a torn
// (jagged) top and bottom edge — the left/right stay straight.
export const tornEdgeClipPath = (seed: number, jitter = 3): string => {
  const rand = mulberry32(seed);
  const steps = 10;
  const points: string[] = [];

  points.push("0% 0%");
  for (let i = 1; i < steps; i++) {
    const x = (i / steps) * 100;
    const y = rand() * jitter;
    points.push(`${x.toFixed(2)}% ${y.toFixed(2)}%`);
  }
  points.push("100% 0%");
  points.push("100% 100%");
  for (let i = steps - 1; i > 0; i--) {
    const x = (i / steps) * 100;
    const y = 100 - rand() * jitter;
    points.push(`${x.toFixed(2)}% ${y.toFixed(2)}%`);
  }
  points.push("0% 100%");

  return `polygon(${points.join(", ")})`;
};
