import Head from "next/head";
import { motion } from "framer-motion";
import { Brain, Users, Shield } from "lucide-react";
import SectionShell from "../components/SectionShell";
import { CardGrid } from "../components/CardGrid";
import { FancyDivider } from "../components/FancyDivider";
import { GradientOrbs } from "../components/GradientOrbs";

const pageMetadata = {
  title: "Features that evolve with you",
  description: "From thought capture to solar-powered intelligence, Noion scales with every tier.",
};

export default function FeaturesPage() {
  return (
    <>
      <Head>
        <title>{pageMetadata.title}</title>
        <meta name="description" content={pageMetadata.description} />
        <meta property="og:image" content="/og/og-image.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Noion Cloud - Features" />
        <meta name="twitter:image" content="/og/og-image.png" />
      </Head>

      <main className="bg-night text-ivory min-h-screen overflow-hidden">
        <motion.section className="max-w-5xl mx-auto px-6 py-20 text-center" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <h1 className="text-4xl md:text-5xl font-bold text-ivory mb-4">Features that evolve with you</h1>
          <p className="text-ivory/80 max-w-2xl mx-auto">
            Noion grows from a personal thought tool into a collaborative network of minds. Every tier expands your capacity to think, connect, and build sustainably.
          </p>
        </motion.section>

        <div className="relative">
          <GradientOrbs />

          <SectionShell id="free" title="Free Tier - Thought Capture" variant="panel">
            <CardGrid
              cards={[
                {
                  title: "Write & Visualize",
                  body: "Capture ideas and watch them render as dynamic thought graphs in browser or PWA.",
                  icon: <Brain className="h-6 w-6 text-gold" />,
                },
                {
                  title: "Private by Design",
                  body: "Local-first storage, zero tracking, and optional offline capture for full privacy.",
                  icon: <Shield className="h-6 w-6 text-gold" />,
                },
                {
                  title: "Optional Login",
                  body: "Sign in with GitHub or Google (Cognito-ready) to sync across laptop and phone.",
                  icon: <Users className="h-6 w-6 text-gold" />,
                },
              ]}
            />
          </SectionShell>

          <FancyDivider type="wave" />

          <SectionShell
            id="noion-plus"
            title="Noion+ - Premium Individual"
            variant="splitA"
            visual={
              <div className="aspect-[16/10] rounded-xl border border-night2 bg-gradient-to-br from-night2 to-night/70 grid place-items-center">
                <span className="text-gold/80 tracking-[0.3em] text-sm uppercase">Second Brain</span>
              </div>
            }
          >
            <p>
              Step into an adaptive second brain. Noion+ adds semantic search, encrypted backups, offline sync, custom themes, and a daily journal mode that surfaces AI insights from
              your reflections.
            </p>
          </SectionShell>

          <FancyDivider type="diagonal" />

          <SectionShell
            id="teams"
            title="Noion Teams - Collaboration & Knowledge"
            variant="splitB"
            visual={
              <div className="aspect-[16/10] rounded-xl border border-night2 bg-night2/40 grid place-items-center">
                <span className="text-gold/80 tracking-[0.3em] text-sm uppercase">Live Graphs</span>
              </div>
            }
          >
            <p className="mb-4">
              Connect shared insights in real time. Noion Teams delivers knowledge graphs for classrooms, studios, and research squads with multi-level permissions.
            </p>
            <ul className="grid md:grid-cols-2 gap-2 text-ivory/80 mb-6">
              <li>Shared knowledge graphs & live collaboration</li>
              <li>Semantic tagging + insight clustering</li>
              <li>AI summaries, dashboards, and auto-updates</li>
              <li>Integrations: Slack, Notion, Google Workspace</li>
            </ul>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://github.com/Slyog"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gold text-night px-5 py-2 rounded-lg border border-gold hover:bg-night hover:text-gold transition"
              >
                GitHub
              </a>
              <a
                href="https://discord.gg/noioncloud"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-night2 px-5 py-2 rounded-lg border border-night2 hover:border-gold transition"
              >
                Discord
              </a>
            </div>
          </SectionShell>

          <FancyDivider type="wave" />

          <SectionShell
            id="enterprise"
            title="Enterprise Grid - Renewable Edge"
            variant="splitA"
            visual={
              <div className="aspect-[16/10] rounded-xl border border-night2 bg-gradient-to-br from-gold/20 to-primary/10 grid place-items-center">
                <span className="text-night font-semibold">Edge Compute</span>
              </div>
            }
          >
            <p>
              Deploy a decentralized, renewable compute layer that keeps the Thought Network resilient. Enterprises orchestrate green data sync, governance dashboards, and the upcoming
              API + SDK (Q3 2026) to plug Noion directly into their energy stack.
            </p>
          </SectionShell>

          <FancyDivider type="diagonal" />

          <SectionShell id="future" title="Future - Building an Internet of Thought" variant="panel">
            <div className="space-y-3 text-ivory/85">
              <p>AI agents assist your workflows, self-hosted nodes bloom from Ghana outward, and thought-graphs become executable knowledge.</p>
              <p>This is the vision: a luminous, solar-powered network where ideas act with you.</p>
            </div>
          </SectionShell>
        </div>

        <section className="text-center py-20 space-y-4">
          <p className="text-ivory/80">Ready to explore Noion?</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a href="/#waitlist" className="bg-gold text-night px-6 py-3 rounded-lg font-semibold border border-gold hover:bg-night hover:text-gold transition">
              Join the Waitlist
            </a>
            <a
              href="https://github.com/Slyog"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-gold text-gold px-6 py-3 rounded-lg font-semibold hover:bg-gold/10 transition"
            >
              View GitHub
            </a>
          </div>
        </section>
      </main>
    </>
  );
}


