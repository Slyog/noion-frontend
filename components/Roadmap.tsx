import React from "react";

type Phase = { quarter: string; status: string; heading: string; bullets: string[] };
type Props = { title: string; subline: string; phases: Phase[] };

export default function Roadmap({ title, subline, phases }: Props) {
  return (
    <section id="roadmap" className="scroll-mt-24 py-16">
      <div className="mx-auto max-w-5xl px-4 text-center">
        <p className="text-xs tracking-[0.25em] text-white/60">ROADMAP 2025</p>
        <h2 className="mt-2 text-3xl font-semibold tracking-tight">{title}</h2>
        <p className="mt-2 text-base text-white/70">{subline}</p>
      </div>

      <div className="mx-auto mt-10 grid max-w-5xl gap-6 px-4 md:grid-cols-3">
        {phases.map((phase) => (
          <div key={phase.heading} className="rounded-2xl border border-white/10 p-6">
            <div className="flex items-center justify-between text-sm text-white/70">
              <span className="font-medium">{phase.quarter}</span>
              <span className="rounded-full border border-white/15 px-2 py-0.5">
                {phase.status}
              </span>
            </div>
            <h3 className="mt-2 text-lg font-semibold">{phase.heading}</h3>
            <ul className="mt-3 space-y-2 text-sm text-white/80">
              {phase.bullets.map((bullet) => (
                <li key={bullet} className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-white/60" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
