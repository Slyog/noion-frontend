'use client';

import { ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SplitProps {
  id?: string;
  title: string;
  children: ReactNode;
  visual?: ReactNode;
  className?: string;
}

const fadeRise = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
  viewport: { once: true },
};

export default function SplitA({ id, title, children, visual, className }: SplitProps) {
  return (
    <motion.section id={id} className={cn("py-16 md:py-20 max-w-6xl mx-auto px-6", className)} {...fadeRise}>
      <div className="grid gap-8 md:grid-cols-2 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-ivory mb-4">{title}</h2>
          <div className="text-ivory/85 space-y-4">{children}</div>
        </div>
        {visual && (
          <div className="rounded-2xl border border-night2 bg-night2/30 p-6 min-h-[260px] flex items-center justify-center">
            {visual}
          </div>
        )}
      </div>
    </motion.section>
  );
}
