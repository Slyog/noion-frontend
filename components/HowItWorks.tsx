import React from "react";

type Step = { heading: string; lines: string[] };
type Props = { title: string; subline: string; steps: Step[] };

export default function HowItWorks({ title, subline, steps }: Props) {
  return (
    <section id="how-it-works" className="scroll-mt-24 py-16">
      <div className="mx-auto max-w-5xl px-4 text-center">
        <p className="text-xs tracking-[0.25em] text-white/60">HOW IT WORKS</p>
        <h2 className="mt-2 text-3xl font-semibold tracking-tight">{title}</h2>
        <p className="mt-2 text-base text-white/70">{subline}</p>
      </div>

      <div className="mx-auto mt-10 grid max-w-5xl gap-6 px-4 md:grid-cols-3">
        {steps.map((step) => (
          <div key={step.heading} className="rounded-2xl border border-white/10 p-6">
            <h3 className="text-lg font-semibold">{step.heading}</h3>
            <div className="mt-2 space-y-2 text-sm text-white/80">
              {step.lines.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
