import FadeInSection from "./FadeInSection";
import { roadmap } from "@/content/roadmap";
import { Section } from "@/components/Section";

export default function Roadmap() {
  return (
    <FadeInSection id="roadmap" className="bg-night2/30 text-ivory">
      <Section>
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-gold/70">
            Roadmap 2025 - 2026
          </p>
          <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
            {roadmap.title}
          </h2>
          <p className="mt-4 text-base text-ivory/75 md:text-lg">
            {roadmap.subline}
          </p>
        </div>
        <div className="mt-12 grid gap-6 text-left md:grid-cols-3 md:gap-8">
          {roadmap.phases.map((phase) => (
            <div
              key={phase.quarter}
              className="rounded-2xl border border-white/10 bg-night/80 p-6"
            >
              <div className="flex items-center justify-between text-gold text-xl">
                <span>{phase.quarter}</span>
                <span className="rounded-full bg-gold/15 px-3 py-0.5 text-xs uppercase tracking-wide text-gold">
                  {phase.status}
                </span>
              </div>
              <p className="mt-3 text-base text-ivory/80">{phase.heading}</p>
              <div className="mt-4 space-y-2 text-sm text-ivory/70 leading-relaxed">
                {phase.bullets.map((bullet) => (
                  <p key={bullet}>{bullet}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>
    </FadeInSection>
  );
}
