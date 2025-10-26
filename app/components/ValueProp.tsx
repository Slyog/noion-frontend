import FadeInSection from "./FadeInSection";

const pillars = [
  {
    title: "Thought first",
    body: "Capture sentences, sketches, or voice notes. Each input becomes a node with semantic fingerprints ready for linking.",
  },
  {
    title: "Graph native",
    body: "Context engines run on every edge node so relationships stay fresh even when devices drop offline.",
  },
  {
    title: "Solar aligned",
    body: "The SolarEdgeCloud shifts workload to sunlight rich clusters, giving the network an energy budget that scales with the sun.",
  },
];

export default function ValueProp() {
  return (
    <FadeInSection className="bg-night text-ivory">
      <div className="mx-auto max-w-6xl space-y-8 px-6 py-20">
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-gold/70">
            Why noion
          </p>
          <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
            A product stack tuned for living knowledge
          </h2>
          <p className="mt-4 text-base text-ivory/75 md:text-lg">
            Every layer is built to keep thinkers in flow instead of chasing
            apps. No inbox, no feed, only the graph.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {pillars.map((pillar) => (
            <article
              key={pillar.title}
              className="rounded-2xl border border-night2/60 bg-night2/50 p-6"
            >
              <h3 className="text-xl font-semibold text-gold">
                {pillar.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ivory/70">
                {pillar.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </FadeInSection>
  );
}

