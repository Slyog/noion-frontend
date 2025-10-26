// components/Features.tsx  (oder wo deine Datei liegt)
import FadeInSection from "./FadeInSection";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "scrollxui";
import { tiers } from "@/content/tiers"; // <— NEU: richtiger Pfad

export default function Features() {
  return (
    <FadeInSection id="features" className="bg-night text-ivory">
      <div className="mx-auto max-w-6xl px-6 py-20 text-center">
        <p className="text-xs uppercase tracking-[0.4em] text-gold/70">
          Core features
        </p>
        <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
          Choose how you grow the graph
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {tiers.map((tier) => (
            <Card
              key={tier.name}
              className="border-night2/60 bg-night2/40 text-left text-ivory transition hover:bg-night2/60 hover:scale-[1.02] hover:border-gold/40"
            >
              <CardHeader>
                <CardTitle className="text-2xl text-gold">
                  {tier.name}
                </CardTitle>
                <CardDescription className="text-sm text-ivory/70">
                  {tier.tagline}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <ul className="list-disc space-y-2 pl-5 text-sm text-ivory/80">
                  {tier.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </FadeInSection>
  );
}
