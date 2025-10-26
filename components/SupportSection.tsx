"use client";

import { Github, Heart } from "lucide-react";
import { Button } from "./ui/button";
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogCancel,
} from "./ui/alert-dialog";

export default function SupportSection() {
  return (
    <section className="max-w-5xl mx-auto px-6 md:px-12 py-24 text-center space-y-6">
      <h2 className="text-3xl md:text-4xl font-bold">Support Noion</h2>
      <p className="text-ivory/80 max-w-2xl mx-auto">
        Help us grow an open, humane approach to AI and knowledge. Your support
        keeps the Relation Network independent and intentional.
      </p>
      <div className="card-box mx-auto max-w-3xl p-6 space-y-4">
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button
            asChild
            variant="noion"
            className="w-full sm:w-auto gap-2 text-base font-semibold"
          >
            <a
              href="https://github.com/Slyog"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-4 h-4" aria-hidden="true" />
              View on GitHub
            </a>
          </Button>
          <Button
            asChild
            variant="noionSolid"
            className="w-full sm:w-auto gap-2 text-base font-semibold"
          >
            <a
              href="https://buymeacoffee.com/noion"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Heart className="w-4 h-4" aria-hidden="true" />
              Donate / Support
            </a>
          </Button>
        </div>
        <AlertDialog>
          <AlertDialogTrigger className="text-xs uppercase tracking-[0.4em] text-ivory/70 hover:text-gold transition">
            Funding Notes
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Independent by design</AlertDialogTitle>
              <AlertDialogDescription>
                Noion separates identity from content and routes every pledge to
                infrastructure and research. Open conversations live on Discord,
                and source is mirrored to make community review simple.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Close</AlertDialogCancel>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </section>
  );
}
