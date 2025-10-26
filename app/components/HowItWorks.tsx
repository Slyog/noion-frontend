import FadeInSection from "./FadeInSection";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "scrollxui";
import { howItWorks } from "@/content/howItWorks";

export default function HowItWorks() {
  return (
    <FadeInSection className="bg-night text-ivory">
      <div className="mx-auto max-w-6xl px-6 py-20 text-center">
        <p className="text-xs uppercase tracking-[0.4em] text-gold/70">
          How it works
        </p>
        <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
          {howItWorks.title}
        </h2>
        <p className="mt-4 text-base text-ivory/75 md:text-lg">
          {howItWorks.subline}
        </p>
        <div className="mt-12 grid gap-6 text-left md:grid-cols-3">
          {howItWorks.steps.map((step) => (
            <Card
              key={step.heading}
              className="border-night2/60 bg-night2/40 text-ivory"
            >
              <CardHeader>
                <CardTitle className="text-gold text-xl">
                  {step.heading}
                </CardTitle>
                <CardDescription className="text-ivory/70 text-sm">
                  {step.lines[0]}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-ivory/75 leading-relaxed">
                {step.lines.slice(1).map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </FadeInSection>
  );
}
