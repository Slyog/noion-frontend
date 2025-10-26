"use client";

import FadeInSection from "./FadeInSection";
import { motion } from "framer-motion";
import { howItWorks } from "@/content/howItWorks";
import { Section } from "@/components/Section";

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: index * 0.15, ease: "easeOut" },
  }),
};

export default function HowItWorks() {
  return (
    <FadeInSection className="bg-night text-ivory">
      <Section>
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-gold/70">How it works</p>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mt-4 text-3xl font-semibold md:text-4xl"
          >
            {howItWorks.title}
          </motion.h2>
          <p className="mt-4 text-base text-ivory/75 md:text-lg">{howItWorks.subline}</p>
        </div>
        <div className="relative mt-12">
          <div className="grid gap-6 text-left md:grid-cols-3 md:gap-8">
            {howItWorks.steps.map((step, index) => (
              <motion.div
                key={step.heading}
                className="group relative rounded-2xl border border-white/10 bg-night2/40 p-6 transition transform hover:scale-[1.03] hover:border-gold/30 hover:shadow-gold-glow"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                custom={index}
                variants={cardVariants}
              >
                <div className="text-gold text-xl">{step.heading}</div>
                <p className="mt-2 text-sm text-ivory/70">{step.lines[0]}</p>
                <div className="mt-4 space-y-3 text-sm leading-relaxed text-ivory/80">
                  {step.lines.slice(1).map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>
    </FadeInSection>
  );
}
