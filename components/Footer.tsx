"use client";

import Link from "next/link";
import { Github, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-12 text-center">
      <div className="flex flex-col items-center gap-4">
        <p className="text-sm footer-muted">Powered by human curiosity.</p>
        <div className="flex gap-5 text-sm">
          <Link
            href="/vision"
            className="text-ivory/70 hover:text-ivory transition"
          >
            Vision
          </Link>
          <Link
            href="/features"
            className="text-ivory/70 hover:text-ivory transition"
          >
            Features
          </Link>
          <a
            href="#waitlist"
            className="text-ivory/70 hover:text-ivory transition"
          >
            Waitlist
          </a>
        </div>
        <div className="flex gap-4">
          <a
            href="https://github.com/Slyog"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-ivory/70 hover:text-ivory transition"
          >
            <Github className="w-4 h-4" aria-hidden="true" />
            <span className="sr-only">GitHub</span>
          </a>
          <a
            href="https://buymeacoffee.com/noion"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-ivory/70 hover:text-ivory transition"
          >
            <Heart className="w-4 h-4" aria-hidden="true" />
            <span className="sr-only">Donate</span>
          </a>
        </div>
        <p className="text-xs footer-muted">
          &copy; 2025 Noion. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
