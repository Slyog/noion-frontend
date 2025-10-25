'use client';

import { motion } from "framer-motion";

export default function VisionSection() {
  return (
    <section className="relative bg-night py-24 px-6 overflow-hidden text-center text-ivory">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-primary/10 blur-[120px]" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full bg-accent/10 blur-[100px]" />
      </div>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-semibold text-gold mb-6"
      >
        The Vision of Noion
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-ivory/85 max-w-2xl mx-auto mb-10 text-lg leading-relaxed"
      >
        Noion stands for a new kind of digital infrastructure - merging clean energy, data, and human
        creativity into a self-evolving cloud ecosystem. We're building technology that connects
        renewable energy systems with intelligent cloud networks, empowering local autonomy and global
        collaboration.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="max-w-3xl mx-auto grid md:grid-cols-3 gap-6 mt-12 text-left"
      >
        <div className="p-6 rounded-2xl bg-night2/70 border border-gold/15 hover:border-gold/40 transition">
          <h3 className="text-gold font-semibold mb-2">Phase 1 - 2025</h3>
          <p className="text-ivory/80 text-sm">
            Launch of the Noion Platform - establishing the brand, waitlist, and community foundation.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-night2/70 border border-gold/15 hover:border-gold/40 transition">
          <h3 className="text-gold font-semibold mb-2">Phase 2 - 2026</h3>
          <p className="text-ivory/80 text-sm">
            SolarEdgeCloud Beta - real-time solar monitoring prototype and API integrations.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-night2/70 border border-gold/15 hover:border-gold/40 transition">
          <h3 className="text-gold font-semibold mb-2">Phase 3 - 2027+</h3>
          <p className="text-ivory/80 text-sm">
            Expansion into decentralized energy data networks - a global Noion Cloud grid.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
