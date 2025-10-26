import FadeInSection from "./FadeInSection";

const signalList = [
  "Semantic vector linking with locality sensitive hashing on device",
  "Temporal layering that shows how an idea changes session by session",
  "Multi user overlays without forcing a shared canvas",
  "Deterministic exports to JSON, Markdown, and graph DBs",
];

export default function LivingGraph() {
  return (
    <FadeInSection className="bg-night2/40 text-ivory">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 lg:grid-cols-2">
        <div className="space-y-6">
          <p className="text-xs uppercase tracking-[0.4em] text-gold/70">
            Living graph
          </p>
          <h2 className="text-3xl font-semibold md:text-4xl">
            Watch ideas form neighborhoods in real time
          </h2>
          <p className="text-base text-ivory/75">
            The living graph is a quiet canvas. It reveals clusters only when
            meaning emerges so you can focus on the next idea, not the entire
            data lake.
          </p>
          <ul className="space-y-3 text-sm text-ivory/75">
            {signalList.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-gold" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="relative rounded-3xl border border-gold/20 bg-gradient-to-br from-night via-night2 to-night p-8">
          <div className="absolute inset-6 rounded-2xl border border-night2/60" />
          <div className="relative space-y-6">
            <div className="flex flex-wrap gap-3 text-xs uppercase tracking-[0.3em] text-ivory/60">
              <span className="rounded-full border border-ivory/30 px-4 py-1">
                cognition
              </span>
              <span className="rounded-full border border-ivory/30 px-4 py-1">
                solar
              </span>
              <span className="rounded-full border border-ivory/30 px-4 py-1">
                graph
              </span>
            </div>
            <div className="space-y-2">
              <p className="text-lg font-semibold text-gold">
                Relation heatmap
              </p>
              <p className="text-sm text-ivory/70">
                Snapshot of the latest 128 connections rendered on the edge.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-night2/70 bg-night/80 p-4">
                <p className="text-sm text-ivory/60">Signal strength</p>
                <p className="text-2xl font-semibold text-gold">92 percent</p>
              </div>
              <div className="rounded-xl border border-night2/70 bg-night/80 p-4">
                <p className="text-sm text-ivory/60">Sun coverage</p>
                <p className="text-2xl font-semibold text-gold">68 percent</p>
              </div>
            </div>
            <div className="rounded-2xl border border-night2/80 bg-night p-4 text-sm text-ivory/70">
              Relay stream balanced across Ghana, Lisbon, and Baja microgrids.
            </div>
          </div>
        </div>
      </div>
    </FadeInSection>
  );
}
