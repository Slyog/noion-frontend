"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { track } from "@/lib/analytics";
import { hero } from "@/content/hero";

function DiscordIcon() {
  return (
    <svg
      className="h-5 w-5"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20 4.5a17.24 17.24 0 0 0-4.2-1.3.08.08 0 0 0-.08.04c-.2.36-.42.83-.58 1.2a15.23 15.23 0 0 0-6.28 0c-.16-.39-.38-.87-.59-1.23a.08.08 0 0 0-.08-.04A17.17 17.17 0 0 0 4 4.5a.07.07 0 0 0-.03.03C1.72 8 1.21 11.4 1.5 14.75a.08.08 0 0 0 .03.06 17.66 17.66 0 0 0 5.32 2.7.08.08 0 0 0 .09-.03c.41-.57.78-1.17 1.1-1.8a.08.08 0 0 0-.04-.1 11.6 11.6 0 0 1-1.66-.8.08.08 0 0 1 0-.15c.11-.08.23-.17.34-.26a.08.08 0 0 1 .08-.01c3.48 1.58 7.25 1.58 10.69 0a.08.08 0 0 1 .09.01c.11.09.23.18.34.26a.08.08 0 0 1 0 .15 11.27 11.27 0 0 1-1.66.8.08.08 0 0 0-.04.1c.32.63.69 1.23 1.1 1.8a.08.08 0 0 0 .09.03 17.42 17.42 0 0 0 5.32-2.7.08.08 0 0 0 .03-.05c.44-4.64-.74-8-2.5-10.26a.08.08 0 0 0-.03-.03ZM8.61 13.64c-1.04 0-1.9-.95-1.9-2.12s.84-2.12 1.9-2.12 1.92.96 1.9 2.12-.85 2.12-1.9 2.12Zm6.78 0c-1.04 0-1.9-.95-1.9-2.12s.84-2.12 1.9-2.12 1.93.96 1.9 2.12-.85 2.12-1.9 2.12Z" />
    </svg>
  );
}

const nodes = [
  { top: "15%", left: "38%", size: 12, delay: 0 },
  { top: "35%", left: "60%", size: 10, delay: 0.5 },
  { top: "55%", left: "30%", size: 8, delay: 0.8 },
  { top: "65%", left: "65%", size: 14, delay: 0.2 },
  { top: "25%", left: "20%", size: 9, delay: 1 },
  { top: "75%", left: "50%", size: 11, delay: 1.2 },
];

function GraphPulseBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#1a1a1c,transparent_65%)] opacity-70" />
      <svg className="absolute inset-x-0 top-10 mx-auto hidden h-[420px] w-[520px] text-gold/10 md:block" viewBox="0 0 520 420">
        <motion.path
          d="M20 360 L140 220 L220 260 L320 140 L420 200 L500 80"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 3, ease: "easeInOut", repeat: Infinity, repeatType: "mirror", repeatDelay: 2 }}
        />
      </svg>
      {nodes.map((node, index) => (
        <motion.span
          key={index}
          className="absolute rounded-full bg-gold/40 shadow-gold-glow"
          style={{ width: node.size, height: node.size, top: node.top, left: node.left }}
          animate={{ opacity: [0, 0.6, 0], scale: [1, 1.5, 1] }}
          transition={{ duration: 4.5, delay: node.delay, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
}

export default function Hero() {
  const [primaryCta, secondaryCta] = hero.ctas;

  return (
    <section className="relative isolate overflow-hidden bg-night text-ivory">
      <GraphPulseBackground />
      <div className="mx-auto flex min-h-[65vh] max-w-3xl flex-col items-center justify-start px-6 pt-28 pb-16 text-center md:min-h-[90vh] md:justify-center md:pb-24">
        <motion.h1
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl font-semibold tracking-tight md:text-6xl"
        >
          {hero.title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-3 text-lg text-ivory/85 md:text-xl"
        >
          {hero.tagline}
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-2 text-base text-ivory/70"
        >
          {hero.subtitle}
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-ivory/70"
        >
          {hero.body}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 flex w-full flex-col items-center gap-3 sm:flex-row sm:justify-center"
        >
          <Link
            href={primaryCta?.href ?? "https://discord.gg/YPUzH4xqwS"}
            target={primaryCta?.href.startsWith("http") ? "_blank" : undefined}
            rel={primaryCta?.href.startsWith("http") ? "noreferrer" : undefined}
            data-analytics="cta_discord_hero"
            onClick={() => track("cta_discord_hero")}
            className="inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-gold/40 bg-gold/10 px-6 py-3 font-medium text-ivory transition hover:border-gold hover:bg-gold/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/60 focus-visible:ring-offset-2 focus-visible:ring-offset-night sm:w-auto"
            aria-label={primaryCta?.label}
          >
            <DiscordIcon />
            {primaryCta?.label ?? "Join Discord"}
          </Link>
          {secondaryCta && (
            <Link
              href={secondaryCta.href}
              className="inline-flex w-full items-center justify-center rounded-2xl border border-white/15 px-6 py-3 text-ivory/85 transition hover:border-gold/40 hover:text-ivory focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/40 focus-visible:ring-offset-2 focus-visible:ring-offset-night sm:w-auto"
            >
              {secondaryCta.label}
            </Link>
          )}
        </motion.div>
      </div>
    </section>
  );
}
