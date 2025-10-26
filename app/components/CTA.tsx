import FadeInSection from "./FadeInSection";
import { Input, Button } from "scrollxui";

export default function CTA() {
  return (
    <FadeInSection id="waitlist" className="bg-night text-ivory">
      <div className="mx-auto max-w-3xl px-6 py-24 text-center">
        <p className="text-xs uppercase tracking-[0.4em] text-gold/70">
          Beta waitlist
        </p>
        <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
          Help shape the living graph
        </h2>
        <p className="mt-4 text-base text-ivory/75 md:text-lg">
          Get early access to new graph drops and share feedback with the core team while we fine tune noion.
        </p>
        <form
          action="/api/waitlist"
          method="POST"
          className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-center"
        >
          <Input
            type="email"
            name="email"
            placeholder="you@example.com"
            required
            className="sm:max-w-xs"
          />
          <Button type="submit" variant="primary" className="sm:w-auto">
            Join
          </Button>
        </form>
        <p className="mt-4 text-xs text-ivory/60">
          No spam. Weâ€™ll reach out only when a new build is ready.
        </p>
      </div>
    </FadeInSection>
  );
}

