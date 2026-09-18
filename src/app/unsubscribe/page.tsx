import Link from "next/link";
import type { Metadata } from "next";
import { getSupabaseAdmin, SUBSCRIBERS_TABLE } from "@/lib/supabase";

export const metadata: Metadata = {
  title: "Unsubscribe",
  description: "Unsubscribe from the daily health tips email.",
};

export const dynamic = "force-dynamic";

type State = "done" | "invalid" | "missing" | "error";

export default async function UnsubscribePage({
  searchParams,
}: {
  searchParams: Promise<{ token?: string }>;
}) {
  const { token } = await searchParams;
  let state: State = "missing";

  if (token) {
    try {
      const supabase = getSupabaseAdmin();
      const { data, error } = await supabase
        .from(SUBSCRIBERS_TABLE)
        .update({
          status: "unsubscribed",
          unsubscribed_at: new Date().toISOString(),
        })
        .eq("unsubscribe_token", token)
        .select("id");

      if (error) {
        console.error("Unsubscribe error:", error);
        state = "error";
      } else {
        state = data && data.length > 0 ? "done" : "invalid";
      }
    } catch (error) {
      console.error("Unsubscribe error:", error);
      state = "error";
    }
  }

  const messages: Record<State, { title: string; body: string }> = {
    done: {
      title: "You've been unsubscribed",
      body: "You will no longer receive the daily health tips email. You're welcome back any time.",
    },
    invalid: {
      title: "Link not recognised",
      body: "This unsubscribe link is invalid or has expired. If you keep receiving emails, please contact us directly.",
    },
    missing: {
      title: "No unsubscribe link provided",
      body: "This page needs the unsubscribe link from your email. Please use the link at the bottom of a daily tips email.",
    },
    error: {
      title: "Something went wrong",
      body: "We couldn't process your request just now. Please try the link again in a moment.",
    },
  };

  const { title, body } = messages[state];

  return (
    <section className="py-20">
      <div className="container-page">
        <div className="mx-auto max-w-xl rounded-2xl border border-ink-100 bg-white p-8 text-center shadow-sm">
          <div className="text-4xl">
            {state === "done" ? "✅" : state === "error" ? "⚠️" : "ℹ️"}
          </div>
          <h1 className="mt-4 text-2xl font-bold text-ink-900">{title}</h1>
          <p className="mt-3 text-base text-ink-700">{body}</p>
          <Link
            href="/"
            className="mt-7 inline-block rounded-lg bg-brand-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-700"
          >
            Back to home
          </Link>
        </div>
      </div>
    </section>
  );
}
