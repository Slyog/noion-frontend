"use client";
import { useState } from "react";
import Snackbar from "./Snackbar";
import { track } from "@/lib/analytics";

const emailPattern = /^\S+@\S+\.\S+$/;

export default function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "error" | "success">("idle");
  const [loading, setLoading] = useState(false);
  const [snackbar, setSnackbar] = useState(false);
  const helperId = "waitlist-helper";

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!emailPattern.test(email)) {
      setStatus("error");
      return;
    }

    setLoading(true);
    setStatus("idle");
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (!res.ok) {
        setStatus("error");
      } else {
        setEmail("");
        setStatus("success");
        setSnackbar(true);
        setTimeout(() => setSnackbar(false), 2600);
        track("waitlist_submit");
      }
    } catch {
      setStatus("error");
    } finally {
      setLoading(false);
    }
  }

  const invalid = status === "error";

  return (
    <>
      <form
        id="waitlist"
        onSubmit={submit}
        className="mx-auto mt-6 flex w-full max-w-xl flex-col gap-3"
        noValidate
      >
        <div className="flex flex-col gap-2 sm:flex-row">
          <input
            type="email"
            required
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (invalid) setStatus("idle");
            }}
            placeholder="you@example.com"
            className={`w-full rounded-xl border bg-night2/60 px-4 py-3 text-base text-ivory outline-none focus:border-gold ${
              invalid ? "border-red-500" : "border-white/10"
            }`}
            aria-label="Email address"
            aria-invalid={invalid}
            aria-describedby={helperId}
          />
          <button
            type="submit"
            disabled={loading}
            className="rounded-xl bg-gold px-5 py-3 font-semibold text-night transition hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-gold/60 focus:ring-offset-2 focus:ring-offset-night disabled:opacity-60"
            data-analytics="cta_waitlist_submit"
            onClick={() => track("cta_waitlist_submit_click")}
          >
            {loading ? "..." : "Join"}
          </button>
        </div>
        <p id={helperId} className={`text-xs ${invalid ? "text-red-400" : "text-ivory/60"}`}>
          {invalid ? "Please enter a valid email." : "Double opt-in. Unsubscribe anytime. Privacy-first."}
        </p>
        <div className="sr-only" aria-live="polite">
          {status === "success" ? "You're on the list" : invalid ? "Please enter a valid email" : ""}
        </div>
      </form>
      <Snackbar show={snackbar} text="You're on the list ✨" />
    </>
  );
}
