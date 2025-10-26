"use client";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Roadmap from "@/components/Roadmap";
import FeatureCompare from "@/components/FeatureCompare";
import WaitlistForm from "@/components/WaitlistForm";
import GraphPreview from "@/components/GraphPreview";
import { Section } from "@/components/Section";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <FeatureCompare />
        <HowItWorks />
        <section className="mx-auto max-w-5xl px-6 py-16 text-center md:py-20">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-3xl font-semibold md:text-4xl"
          >
            See your thoughts connect
          </motion.h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-ivory/70 md:text-base">
            Lightweight preview of the living graph. Watch nodes pulse as they link mood, location, and intent.
          </p>
          <GraphPreview />
        </section>
        <Roadmap />
        <Section>
          <div className="text-center">
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-3xl font-semibold"
            >
              Help shape the living graph
            </motion.h2>
            <p className="mt-2 text-ivory/70">No spam. We only reach out when a new build is ready.</p>
          </div>
          <WaitlistForm />
        </Section>
      </main>
      <Footer />
    </>
  );
}
