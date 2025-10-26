"use client";

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";

type Status = "idle" | "loading" | "success" | "error";

export default function WaitlistSection() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!email) return;

    setStatus("loading");
    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (!response.ok) throw new Error("Failed to submit");
      setEmail("");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  return (
    <motion.section
      id="waitlist"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-5xl mx-auto px-6 md:px-10 pt-6 pb-16 text-center space-y-6"
    >
      <h2 className="text-4xl font-bold">Join the Waitlist</h2>
      <p className="text-ivory/80 max-w-2xl mx-auto">
        Be among the first to explore the Relation Network. Early supporters
        will receive access to the noion beta.
      </p>

      <div className="max-w-md mx-auto">
        <div className="card-translucent rounded-xl p-6 shadow-obsidian">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-4"
          >
            <label htmlFor="waitlist-email" className="sr-only">
              Email address
            </label>
            <input
              id="waitlist-email"
              type="email"
              required
              placeholder="you@example.com"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="flex-1 rounded-md border border-night2 bg-transparent px-4 py-3 text-ivory placeholder:opacity-60 focus:outline-none focus:ring-2 focus:ring-[rgba(255,209,102,0.18)]"
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="rounded-md btn-gold px-6 py-3 font-semibold transition disabled:opacity-60"
            >
              {status === "loading" ? "Sending..." : "Join"}
            </button>
          </form>
        </div>
      </div>

      {status === "success" && (
        <p className="text-gold">âœ… Youâ€™re on the list - thank you.</p>
      )}
      {status === "error" && (
        <p className="text-red-400">
          âš ï¸ Something went wrong. Please try again.
        </p>
      )}
    </motion.section>
  );
}

