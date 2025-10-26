"use client";

import FadeInSection from "./FadeInSection";
import { motion } from "framer-motion";
import { roadmap } from "@/content/roadmap";
import { Section } from "@/components/Section";

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: index * 0.12, ease: "easeOut" },
  }),
};

export default function Roadmap() {
  return (
    <FadeInSection id="roadmap" className="bg-night2/30 text-ivory">
      <Section>
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-gold/70">Roadmap 2025 - 2026</p>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mt-4 text-3xl font-semibold md:text-4xl"
          >
            {roadmap.title}
          </motion.h2>
          <p className="mt-4 text-base text-ivory/75 md:text-lg">{roadmap.subline}</p>
        </div>
        <div className="mt-12 grid gap-6 text-left md:grid-cols-3 md:gap-8">
          {roadmap.phases.map((phase, index) => (
            <motion.div
              key={phase.quarter}
              className="rounded-2xl border border-white/10 bg-night/80 p-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              custom={index}
              variants={cardVariants}
            >
              <div className="flex items-center justify-between text-xl text-gold">
                <span>{phase.quarter}</span>
                <span className="rounded-full border border-gold/30 bg-night2/70 px-3 py-0.5 text-xs uppercase tracking-wide text-gold shadow-gold-glow">
                  {phase.status}
                </span>
              </div>
              <p className="mt-3 text-base text-ivory/80">{phase.heading}</p>
              <div className="mt-4 space-y-2 text-sm leading-relaxed text-ivory/70">
                {phase.bullets.map((bullet) => (
                  <p key={bullet}>{bullet}</p>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </Section>
    </FadeInSection>
  );
}
