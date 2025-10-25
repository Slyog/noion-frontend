import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";
import Footer from "../components/Footer";
import SupportSection from "../components/SupportSection";
import VisionSection from "../components/VisionSection";
import WaitlistSection from "../components/WaitlistSection";

export const metadata = {
  title: "Noion - The Thought Network",
  description:
    "Powering Thought with Sunlight - sustainable AI powered by SolarEdgeCloud.",
  keywords: [
    "Noion",
    "SolarEdgeCloud",
    "AI",
    "Thought Network",
    "Sustainable Compute",
    "Solar Energy",
    "Green AI",
  ],
  openGraph: {
    title: "Noion - The Thought Network",
    description:
      "AI meets solar energy. A thought network running on sunlight.",
    url: "https://noion.cloud",
    siteName: "Noion.cloud",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Noion - The Thought Network",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Noion - The Thought Network",
    description: "Powering Thought with Sunlight - a solar-powered AI ecosystem.",
    images: ["/og-image.png"],
    creator: "@noion_cloud",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function Home() {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords.join(", ")} />
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta
          property="og:description"
          content={metadata.openGraph.description}
        />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:site_name" content={metadata.openGraph.siteName} />
        <meta property="og:image" content={metadata.openGraph.images[0].url} />
        <meta
          property="og:image:width"
          content={metadata.openGraph.images[0].width.toString()}
        />
        <meta
          property="og:image:height"
          content={metadata.openGraph.images[0].height.toString()}
        />
        <meta
          property="og:image:alt"
          content={metadata.openGraph.images[0].alt}
        />
        <meta property="og:locale" content={metadata.openGraph.locale} />
        <meta property="og:type" content={metadata.openGraph.type} />
        <meta name="twitter:card" content={metadata.twitter.card} />
        <meta name="twitter:title" content={metadata.twitter.title} />
        <meta
          name="twitter:description"
          content={metadata.twitter.description}
        />
        <meta name="twitter:image" content={metadata.twitter.images[0]} />
        <meta name="twitter:creator" content={metadata.twitter.creator} />
        <link rel="icon" href={metadata.icons.icon} />
        <link rel="shortcut icon" href={metadata.icons.shortcut} />
        <link rel="apple-touch-icon" href={metadata.icons.apple} />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#FFD166" />
      </Head>
      <main className="bg-night text-ivory min-h-screen">
        <header className="relative bg-gradient-to-b from-night via-night2 to-night">
          <div className="max-w-6xl mx-auto flex flex-col gap-16 px-6 pb-24 pt-10">
            <nav className="flex items-center justify-between">
              <Link
                href="/"
                className="text-xl font-semibold tracking-wide text-primary"
              >
                Noion.cloud
              </Link>
              <div className="flex gap-6 text-sm">
                <Link
                  className="text-muted hover:text-primary transition"
                  href="/content"
                >
                  Vision
                </Link>
                <a
                  className="text-muted hover:text-primary transition"
                  href="#features"
                >
                  Features
                </a>
                <a
                  className="text-muted hover:text-primary transition"
                  href="#waitlist"
                >
                  Waitlist
                </a>
              </div>
            </nav>

            <motion.section
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <p className="text-xs uppercase tracking-[0.4em] text-ivory/70">
                Noion - The Thought Network (Preview)
              </p>
              <h1 className="mt-4 text-4xl md:text-6xl font-semibold text-ivory">
                Noion Cloud - Empowering the flow of{" "}
                <span className="text-gold">energy</span> and{" "}
                <span className="text-primary">intelligence</span>.
              </h1>
              <p className="mt-6 text-lg max-w-2xl mx-auto text-ivory/80">
                A cloud-native layer that fuses renewable systems, AI, and human
                insight. Built for decentralized monitoring, predictive
                orchestration, and luminous experiences.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#waitlist"
                  className="rounded-xl bg-gold px-8 py-3 text-base font-semibold text-night shadow-lg transition hover:text-night hover:shadow-[0_0_35px_rgba(255,215,0,0.45)]"
                >
                  Join Waitlist
                </a>
                <a
                  href="https://solaredgecloud.noion.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl border border-gold/40 px-8 py-3 text-base font-semibold text-ivory transition hover:text-gold hover:border-gold hover:shadow-[0_0_25px_rgba(255,215,0,0.35)]"
                >
                  View SolarEdgeCloud
                </a>
              </div>
            </motion.section>

            <section
              id="features"
              className="grid gap-6 text-left md:grid-cols-3"
            >
              {[
                {
                  title: "Solar-native Intelligence",
                  body: "Tight telemetry sync with SolarEdgeCloud delivers actionable insights for every rooftop fleet.",
                },
                {
                  title: "Autonomous Cloud Edge",
                  body: "Framer Motion micro-interactions keep the UI responsive while decisions run close to the data.",
                },
                {
                  title: "Human-Centered Trust",
                  body: "Secure storage, transparent waitlist onboarding, and a transparent community roadmap.",
                },
              ].map((card) => (
                <div
                  key={card.title}
                  className="rounded-2xl border border-primary/10 bg-surface/70 p-6 backdrop-blur-lg shadow-lg"
                >
                  <h3 className="text-lg font-semibold text-text">
                    {card.title}
                  </h3>
                  <p className="mt-3 text-sm text-muted">{card.body}</p>
                </div>
              ))}
            </section>
          </div>
        </header>

        <VisionSection />
        <WaitlistSection />
        <SupportSection />
      </main>
      <Footer />
    </>
  );
}
