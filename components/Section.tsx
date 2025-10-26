import { ReactNode } from "react";

export function Section({ children, id }: { children: ReactNode; id?: string }) {
  return (
    <section id={id} className="mx-auto max-w-6xl px-6 py-16 md:py-20">
      {children}
    </section>
  );
}
