'use client';

import { motion } from "framer-motion";

export default function SupportSection() {
  return (
    <section className="relative bg-gradient-to-b from-surface via-base to-base py-24 px-6 text-center overflow-hidden">
      <div className="absolute inset-0 -z-10 opacity-70">
        <div className="absolute inset-y-0 right-1/4 w-64 blur-[120px] bg-primary/30" />
        <div className="absolute inset-y-0 left-1/4 w-64 blur-[120px] bg-accent/20" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative mx-auto max-w-4xl rounded-3xl border border-primary/10 bg-surface/70 px-8 py-12 backdrop-blur-lg shadow-2xl"
      >
        <h2 className="text-3xl font-semibold text-primary mb-4">Support the Project</h2>
        <p className="text-muted max-w-2xl mx-auto mb-8">
          Noion x SolarEdgeCloud is an open initiative - combining cloud, energy, and intelligence. Your
          support helps us keep the vision alive.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="https://github.com/hellmood/solaredgecloud"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-black font-medium px-6 py-3 rounded-xl hover:bg-accent transition"
          >
            View on GitHub
          </a>
          <a
            href="https://buymeacoffee.com/hellmood"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-donate text-white font-medium px-6 py-3 rounded-xl hover:opacity-90 transition"
          >
            Donate / Support
          </a>
        </div>
      </motion.div>
    </section>
  );
}
