import Head from "next/head";
import Link from "next/link";
import SupportSection from "../components/SupportSection";
import Footer from "../components/Footer";

export default function Content() {
  return (
    <>
      <Head>
        <title>Noion Cloud – Vision & Story</title>
        <meta name="description" content="Discover the vision of Noion x SolarEdgeCloud." />
      </Head>

      <article className="bg-base text-text min-h-screen">
        <div className="mx-auto max-w-4xl px-6 py-20 space-y-10">
          <Link href="/" className="text-sm text-muted hover:text-primary transition">
            ← Back to landing
          </Link>
          <header className="space-y-4">
            <p className="text-xs uppercase tracking-[0.4em] text-muted">Noion Vision</p>
            <h1 className="text-4xl font-semibold text-primary">Clean energy, luminous software.</h1>
            <p className="text-lg text-muted">
              Noion is a future-facing ecosystem of apps and services that connect solar intelligence, distributed
              data, and human creativity. SolarEdgeCloud is the first chapter: a monitoring plane for decentralized
              solar networks.
            </p>
          </header>

          <section className="space-y-6 leading-relaxed text-muted">
            <p>
              We design for tech minimalism with a luminous edge, focusing on high-availability architecture and
              resilient, grid-aware orchestration. Each release tightens the integration between renewable
              infrastructure and cloud autonomy.
            </p>
            <p>
              The roadmap spans from waitlist launch to a fully decentralized platform that blends AI-driven planning,
              live telemetry, and community governance. We prioritize transparency, accessibility, and sustainable
              operations at every layer.
            </p>
          </section>

          <section aria-labelledby="support">
            <h2 id="support" className="text-2xl font-semibold text-text">
              💚 Support Noion
            </h2>
            <p className="text-muted">
              This project runs on passion, caffeine, and solar data. Every contribution helps expand open-source
              tools for cloud energy systems.
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-6 text-muted">
              <li>Share the project on social media</li>
              <li>
                Contribute code on{" "}
                <a
                  href="https://github.com/hellmood/solaredgecloud"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-accent"
                >
                  GitHub
                </a>
              </li>
              <li>
                Donate via{" "}
                <a
                  href="https://buymeacoffee.com/hellmood"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-accent"
                >
                  Buy Me a Coffee
                </a>
              </li>
            </ul>
            <p className="mt-4 text-muted">Your energy keeps Noion alive. 🔋</p>
          </section>
        </div>
        <SupportSection />
      </article>
      <Footer />
    </>
  );
}
