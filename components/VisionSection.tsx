"use client";

import { motion } from "framer-motion";

export default function VisionSection() {
  return (
    <section className="max-w-6xl mx-auto px-6 md:px-12 py-32 text-center text-ivory">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl md:text-5xl font-bold mb-8"
      >
        The Vision of Noion
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.5 }}
        className="text-ivory/85 max-w-3xl mx-auto text-lg leading-relaxed"
      >
        Noion is a product-first approach to collective intelligence - an
        interface where human ideas become living knowledge. Instead of another
        feed, Noion builds a navigable graph that learns from context and
        reveals connections. The platform centers human meaning, clarity, and
        long-term usefulness.
      </motion.p>
      <motion.div
        className="grid gap-6 md:grid-cols-3 mt-16 text-left"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        {[
          {
            title: "Phase 1 - 2025",
            body: "Launch of the Noion Platform - establishing the brand, waitlist, and community foundation.",
          },
          {
            title: "Phase 2 - 2026",
            body: "Graph Beta - real-time thought visualization, semantic search, and collaborative testing.",
          },
          {
            title: "Phase 3 - 2027+",
            body: "Expansion into decentralized, renewable compute grids - a global Noion network of thought.",
          },
        ].map((item) => (
          <div
            key={item.title}
            className="rounded-2xl border border-night2 bg-night2/30 p-6 hover:bg-night2/40 transition"
          >
            <h3 className="text-gold font-semibold mb-2">{item.title}</h3>
            <p className="text-ivory/80 text-sm">{item.body}</p>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
