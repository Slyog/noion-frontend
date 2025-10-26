'use client';

export default function GlowBar() {
  return (
    <div aria-hidden className="relative -mt-4 h-[14px]">
      <div
        className="absolute inset-0 blur-3xl opacity-30"
        style={{ background: "linear-gradient(90deg,#FFD16633,transparent 25%,transparent 75%,#14aadc33)" }}
      />
      <div className="absolute inset-x-8 top-1/2 -translate-y-1/2 h-[2px] bg-gradient-to-r from-gold/50 via-ivory/20 to-cyan-300/30" />
    </div>
  );
}
