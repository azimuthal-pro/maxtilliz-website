import Link from "next/link";
import type { Metadata } from "next";
import type { LucideIcon } from "lucide-react";
import { LogOut, MailCheck, UserPlus } from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import DailyTipsSignup from "@/components/DailyTipsSignup";
import { getTipForDate } from "@/lib/dailyTips";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Daily Health Tips",
  description: `Sign up for a free daily health tip by email from ${site.name} — short, practical advice for you and your family.`,
};

const steps: { icon: LucideIcon; title: string; text: string }[] = [
  {
    icon: UserPlus,
    title: "Sign up",
    text: "Enter your name and email address — it takes a few seconds.",
  },
  {
    icon: MailCheck,
    title: "Get one tip a day",
    text: "Every morning we email you a short, practical health tip.",
  },
  {
    icon: LogOut,
    title: "Leave any time",
    text: "Not for you? Unsubscribe with one click, no questions asked.",
  },
];

export default function DailyTipsPage() {
  const todayTip = getTipForDate();

  return (
    <>
      <PageHero
        title="Daily Health Tips"
        subtitle="A short, practical health tip in your inbox every morning — completely free."
      />

      {/* HOW IT WORKS */}
      <section className="py-20">
        <div className="container-page">
          <SectionHeading
            center
            eyebrow="How it works"
            title="Simple, free, and easy to stop"
            description="We'll send you everyday health advice you can actually use — no jargon, no spam."
          />
          <div className="grid gap-6 sm:grid-cols-3">
            {steps.map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="rounded-2xl border border-ink-100 bg-white p-7 text-center"
              >
                <div className="mx-auto grid h-11 w-11 place-items-center rounded-full bg-brand-50 text-brand-600">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <h3 className="mt-4 text-base font-bold text-ink-900">
                  {title}
                </h3>
                <p className="mt-2 text-base text-ink-700">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SIGN UP */}
      <section className="bg-brand-50/60 py-20">
        <div className="container-page grid items-start gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Join the list"
              title="Get your first tip tomorrow morning"
            />
            <p className="text-base text-ink-700">
              Our daily tips come from the same articles you'll find on our{" "}
              <Link
                href="/health-tips"
                className="font-semibold text-brand-600 hover:text-brand-700"
              >
                Health Tips
              </Link>{" "}
              page — covering general health, nutrition, medication safety,
              wellness and more.
            </p>

            <div className="mt-8 rounded-2xl border border-ink-100 bg-white p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-600">
                Today's tip
              </p>
              <h3 className="mt-2 text-lg font-bold text-ink-900">
                {todayTip.title}
              </h3>
              <p className="mt-2 text-base text-ink-700">
                {todayTip.summary}
              </p>
            </div>
          </div>

          <DailyTipsSignup />
        </div>
      </section>

      {/* PRIVACY */}
      <section className="py-16">
        <div className="container-page">
          <div className="mx-auto max-w-3xl rounded-2xl border border-ink-100 bg-white p-7">
            <h2 className="text-lg font-bold text-ink-900">
              How we handle your details
            </h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-base text-ink-700">
              <li>We use your name and email only to send these tips.</li>
              <li>We never sell or share your details with anyone else.</li>
              <li>Every email includes a one-click unsubscribe link.</li>
              <li>
                Questions about your data? Reach us any time on our{" "}
                <Link
                  href="/contact"
                  className="font-semibold text-brand-600 hover:text-brand-700"
                >
                  contact page
                </Link>
                .
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
