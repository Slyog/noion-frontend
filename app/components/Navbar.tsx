"use client";
import { Button } from "scrollxui";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="fixed top-0 left-0 w-full backdrop-blur-sm bg-background/70 border-b border-border z-50"
    >
      <div className="mx-auto max-w-7xl flex items-center justify-between px-6 py-3">
        <a
          href="/"
          className="text-xl font-bold text-primary hover:text-accent transition-colors"
        >
          Noion
        </a>
        <div className="flex items-center gap-4">
          <a
            href="#features"
            className="text-text-subtle hover:text-text transition-all"
          >
            Features
          </a>
          <a
            href="#roadmap"
            className="text-text-subtle hover:text-text transition-all"
          >
            Roadmap
          </a>
          <a
            href="#waitlist"
            className="text-text-subtle hover:text-text transition-all"
          >
            Waitlist
          </a>
          <Button variant="outline" asChild>
            <a href="https://github.com/yourorg/noion">GitHub</a>
          </Button>
        </div>
      </div>
    </motion.nav>
  );
}
