'use client';

export default function BackgroundBeams({ className = "" }: { className?: string }) {
  return (
    <div className={`pointer-events-none absolute inset-0 -z-10 opacity-20 ${className}`}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#ffd16633,transparent_65%)] blur-3xl" />
      <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(20,170,220,0.2),transparent,rgba(255,209,102,0.15))]" />
    </div>
  );
}
