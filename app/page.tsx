"use client";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Roadmap from "@/components/Roadmap";
import CTA from "@/components/CTA";
import FeatureMatrix from "@/components/FeatureMatrix";
import { featureMatrix } from "@/content/featureMatrix";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-7xl">
        <Hero />
        <Features />
        <FeatureMatrix
          title={featureMatrix.title}
          subline={featureMatrix.subline}
          rows={featureMatrix.rows}
        />
        <HowItWorks />
        <Roadmap />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
