import FadeInSection from "./FadeInSection";
import {
  Badge,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "scrollxui";
import { roadmap } from "../data/roadmap";

export default function Roadmap() {
  return (
    <FadeInSection id="roadmap" className="bg-night2/30 text-ivory">
      <div className="mx-auto max-w-6xl px-6 py-20 text-center">
        <p className="text-xs uppercase tracking-[0.4em] text-gold/70">
          Roadmap 2025
        </p>
        <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
          {roadmap.title}
        </h2>
        <p className="mt-4 text-base text-ivory/75 md:text-lg">
          {roadmap.subline}
        </p>
        <div className="mt-12 grid gap-6 md:grid-cols-3 text-left">
          {roadmap.phases.map((phase) => (
            <Card
              key={phase.quarter}
              className="border-night2/60 bg-night/80 text-ivory"
            >
              <CardHeader>
                <CardTitle className="flex items-center justify-between text-gold text-xl">
                  <span>{phase.quarter}</span>
                  <Badge className="border-none bg-gold/20 text-gold">
                    {phase.status}
                  </Badge>
                </CardTitle>
                <CardDescription className="text-ivory/70 text-base">
                  {phase.heading}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-ivory/75 leading-relaxed">
                {phase.bullets.map((bullet) => (
                  <p key={bullet}>{bullet}</p>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </FadeInSection>
  );
}
