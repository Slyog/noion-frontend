"use client";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Roadmap from "@/components/Roadmap";
import FeatureCompare from "@/components/FeatureCompare";
import WaitlistForm from "@/components/WaitlistForm";
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
        <Roadmap />
        <Section>
          <div className="text-center">
            <h2 className="text-3xl font-semibold">Help shape the living graph</h2>
            <p className="mt-2 text-ivory/70">No spam. We only reach out when a new build is ready.</p>
          </div>
          <WaitlistForm />
          <p className="mt-2 text-center text-xs text-ivory/50">
            Double opt-in. Unsubscribe anytime. Privacy-first.
          </p>
        </Section>
      </main>
      <Footer />
    </>
  );
}
