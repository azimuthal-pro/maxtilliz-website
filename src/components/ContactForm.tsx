"use client";

import { useState } from "react";
import type { FormEvent } from "react";

type Status = { type: "success" | "error"; message: string } | null;

export default function ContactForm() {
  const [status, setStatus] = useState<Status>(null);
  const [sending, setSending] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const phone = String(data.get("phone") || "").trim();
    const message = String(data.get("message") || "").trim();

    if (!name || !email || !message) {
      setStatus({
        type: "error",
        message: "Please fill in your name, email and message.",
      });
      return;
    }

    setSending(true);
    setStatus(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone, message }),
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
        message: `Thank you, ${name}! Your message has been sent — we'll get back to you soon.`,
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
      id="contact-form"
      onSubmit={handleSubmit}
      className="rounded-2xl border border-ink-100 bg-white p-7 shadow-sm"
    >
      <h2 className="text-xl font-bold text-ink-900">Send us a message</h2>
      <p className="mt-1 text-base text-ink-500">
        We usually reply within one business day.
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-ink-700">
            Full name *
          </label>
          <input id="name" name="name" type="text" required placeholder="Your name" className={inputClass} />
        </div>
        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-ink-700">
            Email *
          </label>
          <input id="email" name="email" type="email" required placeholder="you@example.com" className={inputClass} />
        </div>
      </div>

      <div className="mt-4">
        <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-ink-700">
          Phone (optional)
        </label>
        <input id="phone" name="phone" type="tel" placeholder="+233 ..." className={inputClass} />
      </div>

      <div className="mt-4">
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-ink-700">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          placeholder="How can we help you?"
          className={inputClass}
        />
      </div>

      <button
        type="submit"
        disabled={sending}
        className="mt-6 w-full rounded-lg bg-brand-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-700 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        {sending ? "Sending…" : "Send Message"}
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
    </form>
  );
}
