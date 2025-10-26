"use client";

import { motion } from "framer-motion";
import { Section } from "./Section";

const rows = [
  { feature: "Auto-linking thoughts", free: "Basic keyword linking", pro: "Semantic + emotional context" },
  { feature: "Voice Capture", free: "Yes", pro: "Yes + transcript tagging" },
  { feature: "Private Sync", free: "Device only", pro: "Encrypted Cloud" },
  { feature: "Pattern View", free: "Timeline only", pro: "Timeline + Mood + Location" },
  { feature: "Integrations", free: "\u2014", pro: "API Keys & Webhooks" },
];

const rowVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, delay: index * 0.08, ease: "easeOut" },
  }),
};

export default function FeatureCompare() {
  return (
    <Section>
      <div className="text-center">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-2xl font-semibold md:text-3xl"
        >
          Compare how each layer grows
        </motion.h2>
        <p className="mt-2 text-ivory/70">Start light, grow deep.</p>
      </div>

      <div className="mt-8 overflow-hidden rounded-2xl border border-white/10 bg-night2/50">
        <div className="overflow-x-auto">
          <table className="min-w-[640px] w-full text-left">
            <thead className="text-ivory/70">
              <tr>
                <th className="px-4 py-3 text-sm font-semibold uppercase tracking-wide">Feature</th>
                <th className="px-4 py-3 text-sm font-semibold uppercase tracking-wide">Free</th>
                <th className="px-4 py-3 text-sm font-semibold uppercase tracking-wide">Premium</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r, index) => (
                <motion.tr
                  key={r.feature}
                  className={`border-t border-white/5 ${index % 2 === 1 ? "bg-night2/30" : "bg-transparent"}`}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  custom={index}
                  variants={rowVariants}
                >
                  <td className="px-4 py-4 text-ivory">{r.feature}</td>
                  <td className="px-4 py-4 text-ivory/80">{r.free}</td>
                  <td className="px-4 py-4 text-ivory/80">{r.pro}</td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <p className="mt-2 text-center text-xs text-gold/60 md:hidden">
        {"\u2194 Swipe to view"}
      </p>
    </Section>
  );
}
