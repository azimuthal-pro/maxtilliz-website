"use client";

import { useState } from "react";
import type { FormEvent } from "react";

type Status = { type: "success" | "error"; message: string } | null;

export default function DailyTipsSignup() {
  const [status, setStatus] = useState<Status>(null);
  const [sending, setSending] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();

    if (!name || !email) {
      setStatus({
        type: "error",
        message: "Please enter your name and email address.",
      });
      return;
    }

    if (!data.get("consent")) {
      setStatus({
        type: "error",
        message: "Please tick the box to agree to receive the daily tips.",
      });
      return;
    }

    setSending(true);
    setStatus(null);

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email }),
      });

      const result = (await res.json().catch(() => ({}))) as {
        error?: string;
      };

      if (!res.ok) {
        setStatus({
          type: "error",
          message: result.error || "Something went wrong. Please try again.",
        });
        return;
      }

      setStatus({
        type: "success",
        message: `Thank you, ${name}! You're signed up — your first tip arrives tomorrow morning.`,
      });
      form.reset();
    } catch {
      setStatus({
        type: "error",
        message: "Network error. Please check your connection and try again.",
      });
    } finally {
      setSending(false);
    }
  }

  const inputClass =
    "w-full rounded-lg border border-ink-100 bg-white px-4 py-3 text-base text-ink-900 placeholder:text-ink-300 focus:border-brand-600 focus:outline-none focus:ring-2 focus:ring-brand-600/20";

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-ink-100 bg-white p-7 shadow-sm"
    >
      <h2 className="text-xl font-bold text-ink-900">
        Get a daily health tip
      </h2>
      <p className="mt-1 text-base text-ink-500">
        One short, practical tip in your inbox each morning — free, and you can
        unsubscribe at any time.
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <div>
          <label
            htmlFor="subscriber-name"
            className="mb-1.5 block text-sm font-medium text-ink-700"
          >
            Full name *
          </label>
          <input
            id="subscriber-name"
            name="name"
            type="text"
            required
            placeholder="Your name"
            className={inputClass}
          />
        </div>
        <div>
          <label
            htmlFor="subscriber-email"
            className="mb-1.5 block text-sm font-medium text-ink-700"
          >
            Email *
          </label>
          <input
            id="subscriber-email"
            name="email"
            type="email"
            required
            placeholder="you@example.com"
            className={inputClass}
          />
        </div>
      </div>

      <label className="mt-5 flex items-start gap-3 text-sm text-ink-700">
        <input
          type="checkbox"
          name="consent"
          className="mt-1 h-4 w-4 flex-shrink-0 rounded border-ink-300 text-brand-600 focus:ring-brand-600"
        />
        <span>
          Yes, I agree to receive a daily health tip by email. I understand I
          can unsubscribe at any time.
        </span>
      </label>

      <button
        type="submit"
        disabled={sending}
        className="mt-6 w-full rounded-lg bg-brand-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-700 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        {sending ? "Signing up…" : "Sign me up"}
      </button>

      {status && (
        <p
          role="status"
          className={`mt-4 rounded-lg border px-4 py-3 text-sm ${
            status.type === "success"
              ? "border-brand-600/30 bg-brand-50 text-brand-700"
              : "border-red-300 bg-red-50 text-red-700"
          }`}
        >
          {status.message}
        </p>
      )}

      <p className="mt-4 text-xs text-ink-500">
        We only use your details to send these tips. We never sell or share
        them with anyone.
      </p>
    </form>
  );
}
