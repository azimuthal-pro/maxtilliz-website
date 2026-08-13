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
    const message = String(data.get("message") || "").trim();

    if (!name || !email || !message) {
      setStatus({
        type: "error",
        message: "Please fill in your name, email and message.",
      });
      return;
    }

    setSending(true);

    /* ============================================================
       REAL INTEGRATION OPTIONS (choose one):

       Option A — Next.js API route (recommended for this project):
         1. Create src/app/api/contact/route.ts
         2. Send the form data to "/api/contact" with fetch().
         3. In the route, forward the message via a mail service
            (e.g. Nodemailer, Resend, SendGrid) or save to a DB.

       Option B — Formspree (no backend needed):
         1. Create a free form at https://formspree.io
         2. POST to "https://formspree.io/f/yourFormId".

       Below is a DEMO handler — it just simulates success so the
       form works visually. Replace it when you add a real backend.
       ============================================================ */
    await new Promise((resolve) => setTimeout(resolve, 800)); // simulate network

    setSending(false);
    setStatus({
      type: "success",
      message: `Thank you, ${name}! This is a demo — your message wasn't sent yet. Connect an API route or form service to receive real messages.`,
    });
    form.reset();
  }

  const inputClass =
    "w-full rounded-lg border border-ink-100 bg-white px-4 py-3 text-sm text-ink-900 placeholder:text-ink-300 focus:border-brand-600 focus:outline-none focus:ring-2 focus:ring-brand-600/20";

  return (
    <form
      id="contact-form"
      onSubmit={handleSubmit}
      className="rounded-2xl border border-ink-100 bg-white p-7 shadow-sm"
    >
      <h2 className="text-xl font-bold text-ink-900">Send us a message</h2>
      <p className="mt-1 text-sm text-ink-500">
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
        <input id="phone" name="phone" type="tel" placeholder="+234 ..." className={inputClass} />
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
