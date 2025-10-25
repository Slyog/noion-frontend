'use client';

import { motion } from "framer-motion";
import Link from "next/link";
import { Cloud, Github, Heart, Sun } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-night border-t border-gold/10 py-10 text-center text-ivory/80">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center justify-center gap-3"
        viewport={{ once: true }}
      >
        <div className="flex items-center gap-2">
          <Cloud className="w-5 h-5 text-primary" aria-hidden="true" />
          <span className="font-semibold text-text tracking-wide">Noion Cloud</span>
        </div>

        <p className="text-sm text-muted">
          Empowering the flow of <span className="text-accent">energy</span> and{" "}
          <span className="text-primary">intelligence</span>.
        </p>

        <div className="flex flex-wrap justify-center gap-5 mt-4">
          <Link
            href="https://solaredgecloud.noion.app"
            className="text-gold hover:text-ivory transition"
            target="_blank"
          >
            SolarEdgeCloud
          </Link>
          <a
            href="https://github.com/hellmood/solaredgecloud"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 hover:text-primary transition"
          >
            <Github className="w-4 h-4" aria-hidden="true" />
            GitHub
          </a>
          <a
            href="https://buymeacoffee.com/hellmood"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 hover:text-donate transition"
          >
            <Heart className="w-4 h-4 text-donate" aria-hidden="true" />
            Donate
          </a>
        </div>

        <div className="flex justify-center gap-4 mt-6 opacity-70">
          <Sun className="w-5 h-5 text-accent hover:text-primary transition" aria-hidden="true" />
        </div>

        <p className="text-sm text-ivory/70 mt-4">
          Powered by{" "}
          <Link
            href="https://solaredgecloud.noion.app"
            target="_blank"
            className="text-gold font-semibold hover:text-ivory transition"
          >
            SolarEdgeCloud
          </Link>
        </p>

        <p className="text-xs text-muted mt-6">
          &copy; {new Date().getFullYear()} Noion x SolarEdgeCloud. All rights reserved.
        </p>
      </motion.div>
    </footer>
  );
}
