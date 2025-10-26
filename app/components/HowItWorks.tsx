import FadeInSection from "./FadeInSection";
import { howItWorks } from "@/content/howItWorks";
import { Section } from "@/components/Section";

export default function HowItWorks() {
  return (
    <FadeInSection className="bg-night text-ivory">
      <Section>
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-gold/70">
            How it works
          </p>
          <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
            {howItWorks.title}
          </h2>
          <p className="mt-4 text-base text-ivory/75 md:text-lg">
            {howItWorks.subline}
          </p>
        </div>
        <div className="mt-12 grid gap-6 text-left md:grid-cols-3 md:gap-8">
          {howItWorks.steps.map((step) => (
            <div
              key={step.heading}
              className="rounded-2xl border border-white/10 bg-night2/40 p-6"
            >
              <div className="text-gold text-xl">{step.heading}</div>
              <p className="mt-2 text-sm text-ivory/70">{step.lines[0]}</p>
              <div className="mt-4 space-y-3 text-sm text-ivory/80 leading-relaxed">
                {step.lines.slice(1).map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>
    </FadeInSection>
  );
}
