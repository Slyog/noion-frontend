"use client";

import { motion } from "framer-motion";

type Node = {
  id: string;
  x: number;
  y: number;
  r: number;
  delay: number;
};

const nodes: Node[] = [
  { id: "a", x: 60, y: 140, r: 8, delay: 0 },
  { id: "b", x: 150, y: 80, r: 6, delay: 0.3 },
  { id: "c", x: 220, y: 170, r: 10, delay: 0.6 },
  { id: "d", x: 320, y: 100, r: 7, delay: 0.9 },
  { id: "e", x: 380, y: 190, r: 6, delay: 1.2 },
  { id: "f", x: 260, y: 40, r: 5, delay: 1.4 },
  { id: "g", x: 110, y: 230, r: 7, delay: 1 },
];

const links = [
  ["a", "b"],
  ["b", "c"],
  ["c", "d"],
  ["d", "e"],
  ["b", "f"],
  ["a", "g"],
  ["g", "c"],
];

const nodeMap = Object.fromEntries(nodes.map((node) => [node.id, node]));

export default function GraphPreview() {
  return (
    <div className="relative mx-auto mt-8 w-full max-w-3xl overflow-hidden rounded-[32px] border border-white/10 bg-night/70 p-8">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,#1a1a1c,transparent_70%)]" />
      <svg viewBox="0 0 420 260" className="relative z-10 h-[260px] w-full">
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#f2c94c" stopOpacity="0.05" />
            <stop offset="100%" stopColor="#f2c94c" stopOpacity="0.4" />
          </linearGradient>
        </defs>
        {links.map(([from, to], index) => {
          const start = nodeMap[from];
          const end = nodeMap[to];
          return (
            <motion.line
              key={`${from}-${to}`}
              x1={start.x}
              y1={start.y}
              x2={end.x}
              y2={end.y}
              stroke="url(#lineGradient)"
              strokeWidth="1.5"
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1.6, delay: 0.2 * index, ease: "easeInOut", repeat: Infinity, repeatType: "mirror", repeatDelay: 2 }}
            />
          );
        })}
        {nodes.map((node) => (
          <motion.circle
            key={node.id}
            cx={node.x}
            cy={node.y}
            r={node.r}
            fill="#f2c94c"
            className="drop-shadow-[0_0_20px_rgba(242,201,76,0.35)]"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: [0.2, 1, 0.5], scale: [1, 1.15, 1] }}
            transition={{ duration: 2.4, delay: node.delay, repeat: Infinity, ease: "easeInOut" }}
          />
        ))}
      </svg>
    </div>
  );
}
