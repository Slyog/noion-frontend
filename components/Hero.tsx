"use client";

import React from "react";

type CTA = { label: string; href: string; variant?: "primary" | "ghost" };
type Props = {
  title: string;
  tagline: string;
  body: string;
  ctas: CTA[];
  teaser?: boolean;
};

export default function Hero({ title, tagline, body, ctas, teaser = false }: Props) {
  return (
    <section
      id="hero"
      className={[
        "relative flex items-center justify-center px-6 text-center",
        teaser ? "min-h-[62svh] -mb-8 pb-24" : "min-h-[68svh]",
      ].join(" ")}
    >
      <div className="mx-auto max-w-[70ch]">
        <h1 className="text-[clamp(2.75rem,6vw,4rem)] font-semibold tracking-tight">
          {title}
        </h1>
        <p className="mt-2 text-lg text-white/80">{tagline}</p>
        <p className="mt-4 text-base text-white/70 md:text-lg">{body}</p>

        <div className="mt-6 flex flex-wrap justify-center gap-3">
          {ctas.map((cta) => (
            <a
              key={cta.label}
              href={cta.href}
              className={[
                "rounded-full px-5 py-3 text-sm font-medium transition",
                cta.variant === "ghost"
                  ? "border border-white/20 hover:border-white/40"
                  : "bg-white/10 hover:bg-white/20",
              ].join(" ")}
            >
              {cta.label}
            </a>
          ))}
        </div>
      </div>

      {teaser && (
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-black/60" />
      )}

      {!teaser && (
        <a
          href="#features"
          aria-label="Scroll to features"
          className="absolute bottom-6 text-sm text-white/60 hover:text-white/90"
        >
          ▼
        </a>
      )}
    </section>
  );
}
