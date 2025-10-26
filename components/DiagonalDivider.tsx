'use client';

import { motion } from "framer-motion";

interface Props {
  type?: "wave" | "diagonal";
}

export function DiagonalDivider({ type = "diagonal" }: Props) {
  const className =
    type === "wave"
      ? "h-12 bg-[radial-gradient(circle_at_center,#ffd16622,transparent_70%)]"
      : "h-12 bg-gradient-to-r from-transparent via-gold/20 to-transparent skew-y-2";

  return <motion.div aria-hidden className={className} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} />;
}
