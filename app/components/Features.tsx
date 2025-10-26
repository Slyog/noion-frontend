"use client";

import FadeInSection from "./FadeInSection";
import { tiers } from "@/content/tiers";
import { Section } from "@/components/Section";

export default function Features() {
  return (
    <FadeInSection id="features" className="bg-night text-ivory">
      <Section>
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-gold/70">
            Core Features
          </p>
          <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
            Choose how you grow the graph
          </h2>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className="rounded-2xl border border-white/10 bg-night2/50 p-6 text-left transition hover:translate-y-1 hover:border-gold/40"
            >
              <div className="text-2xl text-gold">{tier.name}</div>
              <p className="mt-2 text-sm text-ivory/70">{tier.tagline}</p>
              <ul className="mt-4 space-y-2 text-sm text-ivory/80">
                {tier.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-gold" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>
    </FadeInSection>
  );
}
