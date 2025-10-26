'use client';

import { ReactNode } from "react";
import BackgroundBeams from "./BackgroundBeams";

interface HeroFXProps {
  children: ReactNode;
}

export default function HeroFX({ children }: HeroFXProps) {
  return (
    <div className="relative overflow-hidden">
      <BackgroundBeams />
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/3 h-96 w-96 rounded-full bg-gold/20 blur-3xl opacity-20" />
        <div className="absolute bottom-0 right-1/4 h-[28rem] w-[28rem] rounded-full bg-primary/20 blur-3xl opacity-20" />
      </div>
      {children}
    </div>
  );
}
