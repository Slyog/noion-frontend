'use client';

export function GradientOrbs() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 opacity-20">
      <div className="absolute -top-20 left-1/4 h-72 w-72 rounded-full bg-gold/40 blur-3xl opacity-20" />
      <div className="absolute bottom-0 right-1/5 h-80 w-80 rounded-full bg-primary/40 blur-3xl opacity-20" />
    </div>
  );
}
