'use client';

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";

type Status = "idle" | "loading" | "success" | "error";

export default function WaitlistSection() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!email) {
      return;
    }

    setStatus("loading");

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        throw new Error("Failed to submit");
      }

      setStatus("success");
      setEmail("");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section
      id="waitlist"
      className="relative bg-surface/70 backdrop-blur-lg py-24 px-6 text-center border-t border-primary/10"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-semibold text-primary mb-4"
      >
        Join the Waitlist
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-muted max-w-xl mx-auto mb-8 text-lg"
      >
        Be part of the Noion movement - get early access to SolarEdgeCloud and future updates.
      </motion.p>

      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto"
      >
        <label className="sr-only" htmlFor="waitlist-email">
          Email address
        </label>
        <input
          id="waitlist-email"
          type="email"
          required
          placeholder="you@example.com"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          className="w-full sm:w-72 px-4 py-3 rounded-xl bg-base border border-primary/20 text-text placeholder-muted focus:outline-none focus:border-primary transition"
        />

        <button
          type="submit"
          disabled={status === "loading"}
          className="bg-primary text-black font-semibold px-6 py-3 rounded-xl hover:bg-accent transition disabled:opacity-50"
        >
          {status === "loading" ? "Sending..." : "Join"}
        </button>
      </motion.form>

      {status === "success" && (
        <p className="text-donate mt-6 font-medium">✅ You’re on the list! Thank you for joining.</p>
      )}
      {status === "error" && (
        <p className="text-red-500 mt-6 font-medium">⚠️ Something went wrong. Please try again.</p>
      )}
    </section>
  );
}
