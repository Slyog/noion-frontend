import Head from "next/head";
import Link from "next/link";
import SupportSection from "../components/SupportSection";
import Footer from "../components/Footer";

const metadata = {
  title: "Noion - Vision & Story",
  description: "Dive into the long-form narrative that guides the Noion Thought Network.",
  image: "/og/noion-main.png",
};

export default function VisionPage() {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta property="og:image" content={metadata.image} />
        <meta name="twitter:image" content={metadata.image} />
      </Head>
      <article className="bg-night text-ivory min-h-screen">
        <div className="mx-auto max-w-4xl px-6 py-20 space-y-10">
          <Link href="/" className="text-sm text-ivory/70 hover:text-gold transition">
            ← Back to landing
          </Link>
          <header className="space-y-4">
            <p className="text-xs uppercase tracking-[0.4em] text-ivory/60">Noion Vision</p>
            <h1 className="text-4xl font-semibold text-gold">Clean energy, luminous software.</h1>
            <p className="text-lg text-ivory/80">
              Noion is a product-first approach to collective intelligence - an interface where human ideas become living knowledge. Instead of another feed, Noion builds a navigable
              graph that learns from context and reveals connections. Behind the scenes, a renewable compute engine keeps intelligence efficient and responsible.
            </p>
          </header>

          <section className="space-y-6 leading-relaxed text-ivory/80">
            <p>
              We design for tech minimalism with a luminous edge, focusing on high-availability architecture and resilient, grid-aware orchestration. Each release tightens the
              integration between renewable infrastructure and cloud autonomy.
            </p>
            <p>
              The roadmap spans from waitlist launch to a fully decentralized platform that blends AI-driven planning, live telemetry, and community governance. We prioritize
              transparency, accessibility, and sustainable operations at every layer.
            </p>
          </section>

          <section aria-labelledby="support">
            <h2 id="support" className="text-2xl font-semibold text-ivory">
              Support Noion
            </h2>
            <p className="text-ivory/80">
              This project runs on passion, caffeine, and solar data. Every contribution helps expand an open, humane approach to intelligence.
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-6 text-ivory/80">
              <li>Share the project on social media</li>
              <li>
                Contribute code on{" "}
                <a href="https://github.com/Slyog" target="_blank" rel="noopener noreferrer" className="text-gold underline">
                  GitHub
                </a>
              </li>
              <li>
                Donate via{" "}
                <a href="https://buymeacoffee.com/noion" target="_blank" rel="noopener noreferrer" className="text-gold underline">
                  Buy Me a Coffee
                </a>
              </li>
            </ul>
            <p className="mt-4 text-ivory/70">Your energy keeps Noion alive.</p>
          </section>
        </div>
        <SupportSection />
      </article>
      <Footer />
    </>
  );
}


