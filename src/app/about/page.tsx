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
  {
    image:
      "https://images.unsplash.com/photo-1632961974688-fae53de3cabc?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Wooden block spelling trust among flowers",
    title: "Integrity",
    text: "We do the right thing, even when no one is watching.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1461532257246-777de18cd58b?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Two hands meeting palm to palm",
    title: "Compassion",
    text: "We treat every customer with warmth and genuine care.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1580281658223-9b93f18ae9ae?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Pharmacist carefully reviewing a prescription document",
    title: "Accuracy",
    text: "We double-check everything to keep you safe.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1673515334386-2b24073bb22f?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Scrabble tiles spelling the word learn",
    title: "Knowledge",
    text: "We keep learning so we can advise you with confidence.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&w=800&q=80",
    imageAlt: "A community group stacking their hands together",
    title: "Community",
    text: "We are proud to serve and support our local community.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1586726370832-3440a511e479?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Two hands reaching toward each other",
    title: "Accessibility",
    text: "Quality healthcare should be simple and within reach for all.",
  },
];

const mission = {
  image:
    "https://images.unsplash.com/photo-1576091358783-a212ec293ff3?auto=format&fit=crop&w=800&q=80",
  imageAlt: "A pharmacist in a white coat showing a medicine bottle to a customer",
  title: "Our Mission",
  text: "Our mission is to provide safe, affordable, and quality healthcare products and services to our community. We are committed to serving our customers with professionalism, care, and reliability while helping improve their health and wellbeing.",
};

const vision = {
  image:
    "https://images.unsplash.com/photo-1580281657529-557a6abb6387?auto=format&fit=crop&w=800&q=80",
  imageAlt: "A pharmacist standing in a tidy pharmacy",
  title: "Our Vision",
  text: "To be a trusted and preferred healthcare provider, known for quality products, excellent service, and genuine care for the wellbeing of our customers and community.",
};

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
        subtitle="Learn about our story, mission, vision, values, and why customers trust us."
      />

      {/* WHO WE ARE + OUR STORY */}
      <section className="py-20">
        <div className="container-page space-y-20">
          {/* Who we are */}
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <SectionHeading eyebrow="Who we are" title="An OTC that puts people first" />
              <p className="mb-4 text-ink-700">
                {site.name} is a community OTC medication provider built on a simple belief:
                healthcare should be personal, honest and accessible. We are
                more than a place to pick up medicines — we are a partner in
                your family's health.
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
              <SectionHeading eyebrow="Our story" title="" />
              <p className="mb-4 text-ink-700">
Maxtillixz Chem was founded in 2017 with the aim of providing quality and affordable healthcare products to the community. What started as a small shop has grown into a trusted healthcare facility, built on professionalism, customer care, and reliability.

                Over the years, we have continued to serve individuals and families with quality pharmaceutical products and dependable service. Today, we remain committed to improving access to healthcare and meeting the changing needs of our customers.

              </p>
              <p className="text-ink-700">
                Every OTC medication provider has a story, and ours is about service. From the
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
            <div className="overflow-hidden rounded-2xl border border-ink-100 bg-white shadow-sm transition-all duration-500 ease-out hover:-translate-y-1.5 hover:shadow-xl">
              <div className="relative aspect-[16/9] w-full">
                <Image
                  src={mission.image}
                  alt={mission.imageAlt}
                  fill
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="p-8 text-center">
                <h3 className="text-lg font-bold text-ink-900">{mission.title}</h3>
                <p className="mt-3 text-base text-ink-700">{mission.text}</p>
              </div>
            </div>
            <div className="overflow-hidden rounded-2xl border border-ink-100 bg-white shadow-sm transition-all duration-500 ease-out hover:-translate-y-1.5 hover:shadow-xl">
              <div className="relative aspect-[16/9] w-full">
                <Image
                  src={vision.image}
                  alt={vision.imageAlt}
                  fill
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="p-8 text-center">
                <h3 className="text-lg font-bold text-ink-900">{vision.title}</h3>
                <p className="mt-3 text-base text-ink-700">{vision.text}</p>
              </div>
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
                className="group overflow-hidden rounded-2xl border border-ink-100 bg-white text-center transition-all duration-500 ease-out hover:-translate-y-1.5 hover:shadow-xl"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden">
                  <Image
                    src={value.image}
                    alt={value.imageAlt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>
                <div className="p-7">
                  <h3 className="mt-3 text-base font-bold text-ink-900">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-base text-ink-700">{value.text}</p>
                </div>
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
