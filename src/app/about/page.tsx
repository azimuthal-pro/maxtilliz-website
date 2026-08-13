import Image from "next/image";
import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "About Us",
  description: `Learn about ${site.name} — who we are, our story, mission, vision, values, and why customers trust us.`,
};

const values = [
  { icon: "🤝", title: "Integrity", text: "We do the right thing, even when no one is watching." },
  { icon: "❤️", title: "Compassion", text: "We treat every customer with warmth and genuine care." },
  { icon: "🎯", title: "Accuracy", text: "We double-check everything to keep you safe." },
  { icon: "💡", title: "Knowledge", text: "We keep learning so we can advise you with confidence." },
  { icon: "🏘️", title: "Community", text: "We are proud to serve and support our local community." },
  { icon: "♻️", title: "Accessibility", text: "Quality healthcare should be simple and within reach for all." },
];

const trustPoints = [
  "Licensed, qualified pharmacists on hand",
  "Rigorous checks on every prescription",
  "Genuine, quality-assured products",
  "Advice you can understand and trust",
  "A welcoming space for every customer",
  "Fair, transparent pricing",
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About Us"
        subtitle="Get to know the pharmacy behind the counter."
        breadcrumb="Home / About Us"
      />

      {/* WHO WE ARE + OUR STORY */}
      <section className="py-20">
        <div className="container-page space-y-20">
          {/* Who we are */}
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <SectionHeading eyebrow="Who we are" title="A pharmacy that puts people first" />
              <p className="mb-4 text-ink-700">
                {site.name} is a community pharmacy built on a simple belief:
                healthcare should be personal, honest and accessible. We are
                more than a place to pick up medicines — we are a partner in
                your family's health.
              </p>
              <p className="text-ink-500">
                [Placeholder: describe who you are — your team, your approach,
                and the role you play in the community. Add a sentence or two
                about your pharmacists and staff.]
              </p>
            </div>
            <div className="overflow-hidden rounded-2xl shadow-lg">
              <Image
                src="/images/placeholders/team.svg"
                alt="Our pharmacy team at work"
                width={1200}
                height={900}
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
          </div>

          {/* Our story */}
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="order-2 overflow-hidden rounded-2xl shadow-lg lg:order-1">
              <Image
                src="/images/placeholders/pharmacy.svg"
                alt="Inside our pharmacy"
                width={1200}
                height={900}
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <SectionHeading eyebrow="Our story" title="How it all began" />
              <p className="mb-4 text-ink-700">
                [Placeholder: tell your story here — when and why the pharmacy
                was founded, what inspired you, and the journey so far.]
              </p>
              <p className="text-ink-500">
                Every pharmacy has a story, and ours is about service. From the
                very first day, our goal has been the same: to give every
                customer the care and attention they deserve.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION / VISION */}
      <section className="bg-brand-50/60 py-20">
        <div className="container-page">
          <SectionHeading
            center
            eyebrow="What drives us"
            title="Mission & Vision"
          />
          <div className="mx-auto grid max-w-4xl gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-ink-100 bg-white p-8 text-center">
              <div className="text-3xl">🎯</div>
              <h3 className="mt-4 text-lg font-bold text-ink-900">Our Mission</h3>
              <p className="mt-3 text-sm text-ink-500">
                [Placeholder: your mission — e.g. "To improve the health and
                wellbeing of our community through safe, accessible and
                compassionate pharmacy care."]
              </p>
            </div>
            <div className="rounded-2xl border border-ink-100 bg-white p-8 text-center">
              <div className="text-3xl">🔭</div>
              <h3 className="mt-4 text-lg font-bold text-ink-900">Our Vision</h3>
              <p className="mt-3 text-sm text-ink-500">
                [Placeholder: your vision — e.g. "To be the most trusted and
                preferred pharmacy in our community, known for care that goes
                beyond the counter."]
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="py-20">
        <div className="container-page">
          <SectionHeading
            center
            eyebrow="Our values"
            title="The principles we work by"
            description="These values guide every interaction, every prescription and every piece of advice."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((value) => (
              <div
                key={value.title}
                className="rounded-2xl border border-ink-100 bg-white p-7 text-center"
              >
                <div className="text-3xl">{value.icon}</div>
                <h3 className="mt-3 text-base font-bold text-ink-900">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm text-ink-500">{value.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CUSTOMERS TRUST US */}
      <section className="bg-ink-900 py-20 text-white">
        <div className="container-page grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Why trust us"
              title="Why customers trust us"
              description="Trust is earned — one prescription, one conversation at a time."
            />
            <ul className="mt-6 space-y-3">
              {trustPoints.map((point) => (
                <li key={point} className="flex items-start gap-3 text-white/90">
                  <span className="font-bold text-accent-400">✓</span>
                  {point}
                </li>
              ))}
            </ul>
          </div>
          <div className="overflow-hidden rounded-2xl shadow-lg">
            <Image
              src="/images/placeholders/team.svg"
              alt="Pharmacist counselling a customer"
              width={1200}
              height={900}
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
        </div>
      </section>
    </>
  );
}
