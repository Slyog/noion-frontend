"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

type FadeInSectionProps = HTMLMotionProps<"section">;

export default function FadeInSection({
  children,
  className,
  ...props
}: FadeInSectionProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={cn("will-change-transform", className)}
      {...props}
    >
      {children}
    </motion.section>
  );
}
