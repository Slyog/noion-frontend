"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const motionProps = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 1, ease: "easeOut" },
};

const visionBtn =
  "inline-flex items-center justify-center rounded-lg border border-gold/60 px-8 py-3 text-base font-medium text-gold transition hover:bg-gold/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/40 focus-visible:ring-offset-2 focus-visible:ring-offset-night";

export default function Hero() {
  return (
    <div className="relative w-full max-w-4xl mx-auto flex flex-col items-center gap-6 px-6 text-center text-ivory">
      <motion.h1
        {...motionProps}
        className="text-5xl md:text-6xl font-extrabold tracking-tight text-ivory shadow-[0_2px_8px_rgba(0,0,0,0.5)]"
      >
        The Relation Network
      </motion.h1>

      <motion.p
        {...motionProps}
        className="max-w-2xl text-lg md:text-xl leading-relaxed text-ivory/80"
      >
        An AI layer where thoughts interlink, evolve, and form meaning. Noion
        transforms raw cognition into living connections - a living graph that
        grows alongside you.
      </motion.p>

      <motion.p
        {...motionProps}
        className="italic text-sm uppercase tracking-[0.4em] text-gold/70 mt-2"
      >
        Where cognition meets connection. A digital space for evolving thought.
      </motion.p>

      <motion.div {...motionProps} className="mt-8">
        <Link href="/content" className={visionBtn}>
          Vision
        </Link>
      </motion.div>
    </div>
  );
}
