"use client";
import { motion } from "framer-motion";

function DiscordIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`h-6 w-6 ${className}`}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20 4.5a17.24 17.24 0 0 0-4.2-1.3.08.08 0 0 0-.08.04c-.2.36-.42.83-.58 1.2a15.23 15.23 0 0 0-6.28 0c-.16-.39-.38-.87-.59-1.23a.08.08 0 0 0-.08-.04A17.17 17.17 0 0 0 4 4.5a.07.07 0 0 0-.03.03C1.72 8 1.21 11.4 1.5 14.75a.08.08 0 0 0 .03.06 17.66 17.66 0 0 0 5.32 2.7.08.08 0 0 0 .09-.03c.41-.57.78-1.17 1.1-1.8a.08.08 0 0 0-.04-.1 11.6 11.6 0 0 1-1.66-.8.08.08 0 0 1 0-.15c.11-.08.23-.17.34-.26a.08.08 0 0 1 .08-.01c3.48 1.58 7.25 1.58 10.69 0a.08.08 0 0 1 .09.01c.11.09.23.18.34.26a.08.08 0 0 1 0 .15 11.27 11.27 0 0 1-1.66.8.08.08 0 0 0-.04.1c.32.63.69 1.23 1.1 1.8a.08.08 0 0 0 .09.03 17.42 17.42 0 0 0 5.32-2.7.08.08 0 0 0 .03-.05c.44-4.64-.74-8-2.5-10.26a.08.08 0 0 0-.03-.03ZM8.61 13.64c-1.04 0-1.9-.95-1.9-2.12s.84-2.12 1.9-2.12 1.92.96 1.9 2.12-.85 2.12-1.9 2.12Zm6.78 0c-1.04 0-1.9-.95-1.9-2.12s.84-2.12 1.9-2.12 1.93.96 1.9 2.12-.85 2.12-1.9 2.12Z" />
    </svg>
  );
}

export default function Hero() {
  return (
    <section id="hero" className="relative isolate px-6 py-44 text-center">
      <motion.h1
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-6xl font-bold tracking-tight"
      >
        Noion
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="mt-6 text-xl opacity-80"
      >
        Your thoughts, linked
      </motion.p>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.8 }}
        className="mt-4 mx-auto max-w-2xl text-lg opacity-80"
      >
        Noion keeps a living map of your thoughts. Each new note becomes a node
        that links to older notes and related ideas, so mood, place, and time
        patterns show up fast. Start from one spark and hop straight to the next
        connection.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="mt-10 flex items-center justify-center gap-4"
      >
        <a
          href="https://discord.gg/noioncloud"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 rounded-full border border-white/40 px-6 py-3 text-white transition hover:scale-105"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
            <DiscordIcon className="h-5 w-5 text-white" />
          </span>
          <span className="text-base font-semibold tracking-wide">Join Discord</span>
        </a>
      </motion.div>
    </section>
  );
}
