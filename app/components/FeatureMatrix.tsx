type Row = {
  feature: string;
  free: string;
  premium: string;
};

type FeatureMatrixProps = {
  title: string;
  subline: string;
  rows: Row[];
};

export default function FeatureMatrix({
  title,
  subline,
  rows,
}: FeatureMatrixProps) {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-5xl px-4 text-center">
        <h2 className="text-3xl font-semibold tracking-tight">{title}</h2>
        <p className="mt-2 text-base text-white/70">{subline}</p>
      </div>

      <div className="mx-auto mt-10 max-w-5xl overflow-hidden rounded-2xl border border-white/10">
        <table className="w-full text-left text-sm">
          <thead className="bg-white/5">
            <tr className="text-white/80">
              <th className="px-6 py-4 font-medium">Feature</th>
              <th className="px-6 py-4 text-center font-medium">Free</th>
              <th className="px-6 py-4 text-center font-medium">Premium</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/10">
            {rows.map((row) => (
              <tr key={row.feature}>
                <td className="px-6 py-4">{row.feature}</td>
                <td className="px-6 py-4 text-center">{row.free}</td>
                <td className="px-6 py-4 text-center">{row.premium}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
