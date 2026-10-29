import React from "react";

// Glifi Lucide (lucide.dev, ISC) — il sito usa lucide-react: Moon, Sun, ArrowUpRight, Play.
const glifi = {
  moon: [["path", { d: "M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" }]],
  sun: [
    ["circle", { cx: 12, cy: 12, r: 4 }],
    ["path", { d: "M12 2v2" }], ["path", { d: "M12 20v2" }],
    ["path", { d: "m4.93 4.93 1.41 1.41" }], ["path", { d: "m17.66 17.66 1.41 1.41" }],
    ["path", { d: "M2 12h2" }], ["path", { d: "M20 12h2" }],
    ["path", { d: "m6.34 17.66-1.41 1.41" }], ["path", { d: "m19.07 4.93-1.41 1.41" }],
  ],
  "arrow-up-right": [["path", { d: "M7 7h10v10" }], ["path", { d: "M7 17 17 7" }]],
  play: [["polygon", { points: "6 3 20 12 6 21 6 3" }]],
  lock: [["rect", { x: 3, y: 11, width: 18, height: 11, rx: 2, ry: 2 }], ["path", { d: "M7 11V7a5 5 0 0 1 10 0v4" }]],
};

export function Icon({ name, size = 16, fill = "none", strokeWidth = 2, style }) {
  const parti = glifi[name] || [];
  return React.createElement(
    "svg",
    { width: size, height: size, viewBox: "0 0 24 24", fill, stroke: "currentColor", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": true, style: { flexShrink: 0, ...style } },
    parti.map(([tag, attrs], i) => React.createElement(tag, { key: i, ...attrs }))
  );
}
