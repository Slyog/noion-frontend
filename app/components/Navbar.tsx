"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { Github } from "lucide-react";
import { track } from "@/lib/analytics";

const navLinks: { label: string; href: string; analytics?: string }[] = [
  { label: "Features", href: "#features" },
  { label: "Roadmap", href: "#roadmap" },
  { label: "Waitlist", href: "#waitlist", analytics: "cta_nav_waitlist" },
];

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="fixed top-0 left-0 z-50 w-full border-b border-border bg-night/80 backdrop-blur-md"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3 text-sm text-ivory/80">
        <Link href="/" className="text-xl font-semibold text-ivory hover:text-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/60 focus-visible:ring-offset-2 focus-visible:ring-offset-night">
          Noion
        </Link>
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              data-analytics={link.analytics}
              onClick={
                link.analytics
                  ? () => {
                      track(link.analytics as string);
                    }
                  : undefined
              }
              className="text-sm font-normal text-gold transition-colors hover:text-gold/80"
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://github.com/Slyog/noion.git"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-transparent px-4 py-1.5 text-sm font-semibold text-ivory transition hover:bg-gold/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/60 focus-visible:ring-offset-2 focus-visible:ring-offset-night"
            aria-label="GitHub Repository"
            data-analytics="cta_nav_github"
            onClick={() => track("cta_nav_github")}
          >
            <Github size={16} />
            GitHub
          </a>
        </div>
        <div className="flex flex-col items-end gap-2 md:hidden">
          <div className="flex gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                data-analytics={link.analytics}
                onClick={
                  link.analytics
                    ? () => {
                        track(link.analytics as string);
                      }
                    : undefined
                }
                className="text-sm font-normal text-gold transition-colors hover:text-gold/80"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <a
            href="https://github.com/Slyog/noion.git"
            target="_blank"
            rel="noreferrer"
            onClick={() => track("cta_nav_github_mobile")}
            className="mt-2 inline-flex w-fit items-center gap-2 rounded-full border border-gold/40 px-4 py-2 text-sm text-ivory transition hover:bg-gold/15"
          >
            <Github size={16} />
            GitHub
          </a>
        </div>
      </div>
    </motion.nav>
  );
}

