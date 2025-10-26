'use client';

import { motion } from "framer-motion";

type DividerType = "wave" | "diagonal";

interface FancyDividerProps {
  type?: DividerType;
}

export function FancyDivider({ type = "wave" }: FancyDividerProps) {
  const base =
    type === "wave"
      ? "h-12 bg-[radial-gradient(circle_at_top,#ffd16640,transparent_70%)]"
      : "h-12 bg-gradient-to-r from-gold/30 via-primary/20 to-gold/30 skew-y-1";

  return <motion.div className={`relative ${base}`} aria-hidden="true" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} />;
}
