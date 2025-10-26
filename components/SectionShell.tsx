'use client';

import { ReactNode } from "react";
import { motion } from "framer-motion";

type Variant = "panel" | "splitA" | "splitB";

interface SectionShellProps {
  id?: string;
  title: string;
  children: ReactNode;
  visual?: ReactNode;
  variant?: Variant;
  className?: string;
}

const fadeRise = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
  viewport: { once: true },
};

export default function SectionShell({ id, title, children, visual, variant = "panel", className }: SectionShellProps) {
  const baseClasses = ["py-16 md:py-20 max-w-6xl mx-auto px-6", className].filter(Boolean).join(" ");

  const renderPanel = () => (
    <motion.article
      className="bg-night2/40 border border-night2 rounded-2xl p-6 hover:-translate-y-1 transition hover:border-gold/40"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <h2 className="text-3xl md:text-4xl font-bold text-ivory mb-6">{title}</h2>
      <div className="space-y-4 text-ivory/85">{children}</div>
    </motion.article>
  );

  const renderSplit = () => {
    const textBlock = (
      <motion.div
        className="space-y-4"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55, ease: "easeOut" }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-ivory">{title}</h2>
        <div className="text-ivory/85 space-y-4">{children}</div>
      </motion.div>
    );

    const visualBlock = visual ? (
      <motion.div
        className="rounded-2xl border border-night2 bg-night2/30 p-4 min-h-[260px] flex items-center justify-center"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55, ease: "easeOut", delay: 0.08 }}
      >
        {visual}
      </motion.div>
    ) : null;

    return (
      <div className="grid gap-8 md:grid-cols-2 items-center">
        {variant === "splitA" ? (
          <>
            {textBlock}
            {visualBlock}
          </>
        ) : (
          <>
            {visualBlock}
            {textBlock}
          </>
        )}
      </div>
    );
  };

  return (
    <motion.section id={id} className={baseClasses} {...fadeRise} aria-labelledby={id ? `${id}-title` : undefined}>
      {variant === "panel" ? (
        renderPanel()
      ) : (
        <div className="space-y-6">
          <h2 id={id ? `${id}-title` : undefined} className="sr-only">
            {title}
          </h2>
          {renderSplit()}
        </div>
      )}
    </motion.section>
  );
}
