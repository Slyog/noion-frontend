import { Section } from "./Section";

const rows = [
  { feature: "Auto-linking thoughts", free: "Basic keyword linking", pro: "Semantic + emotional context" },
  { feature: "Voice Capture", free: "Yes", pro: "Yes + transcript tagging" },
  { feature: "Private Sync", free: "Device only", pro: "Encrypted Cloud" },
  { feature: "Pattern View", free: "Timeline only", pro: "Timeline + Mood + Location" },
  { feature: "Integrations", free: "\u2014", pro: "API Keys & Webhooks" },
];

export default function FeatureCompare() {
  return (
    <Section>
      <div className="text-center">
        <h2 className="text-2xl font-semibold md:text-3xl">Compare how each layer grows</h2>
        <p className="mt-2 text-ivory/70">Start light, grow deep.</p>
      </div>

      <div className="mt-8 hidden rounded-2xl border border-white/10 bg-night2/50 p-2 md:block">
        <table className="w-full text-left">
          <thead className="text-ivory/70">
            <tr>
              <th className="px-4 py-3">Feature</th>
              <th className="px-4 py-3">Free</th>
              <th className="px-4 py-3">Premium</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.feature} className="border-t border-white/5">
                <td className="px-4 py-3">{r.feature}</td>
                <td className="px-4 py-3 text-ivory/80">{r.free}</td>
                <td className="px-4 py-3 text-ivory/80">{r.pro}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-6 grid gap-4 md:hidden">
        {rows.map((r) => (
          <div key={r.feature} className="rounded-2xl border border-white/10 bg-night2/60 p-4 shadow-soft">
            <div className="text-sm uppercase tracking-wide text-gold/80">{r.feature}</div>
            <div className="mt-2 grid grid-cols-2 gap-3">
              <div>
                <div className="text-xs text-ivory/60">Free</div>
                <div className="text-ivory">{r.free}</div>
              </div>
              <div>
                <div className="text-xs text-ivory/60">Premium</div>
                <div className="text-ivory">{r.pro}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
