"use client";
import Link from "next/link";
import { track } from "@/lib/analytics";

const copy = {
  title: "Noion",
  sub: "Your thoughts, linked",
  body:
    "Every note becomes a node that auto-links to your older ideas. Mood, place, and time are captured so patterns show up fast.",
  discord: "Join Discord",
};

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

export default function Hero() {
  return (
    <section className="bg-night text-ivory">
      <div className="mx-auto max-w-3xl px-6 pt-28 pb-12 text-center">
        <h1 className="text-5xl font-bold tracking-tight">{copy.title}</h1>
        <p className="mt-2 text-lg text-ivory/80">{copy.sub}</p>
        <p className="mx-auto mt-4 max-w-2xl text-base text-ivory/70">{copy.body}</p>

        <Link
          href="https://discord.gg/YPUzH4xqwS"
          target="_blank"
          rel="noreferrer"
          data-analytics="cta_discord_hero"
          onClick={() => track("cta_discord_hero")}
          className="mx-auto mt-8 inline-flex items-center justify-center gap-2 rounded-xl border border-gold/50 px-6 py-3 font-medium text-ivory transition hover:border-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/60 focus-visible:ring-offset-2 focus-visible:ring-offset-night"
          aria-label={copy.discord}
        >
          <DiscordIcon />
          {copy.discord}
        </Link>
      </div>
    </section>
  );
}
