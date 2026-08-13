import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import { site } from "@/data/site";
import { services } from "@/data/services";
import { healthTips } from "@/data/healthTips";

export const metadata: Metadata = {
  title: `${site.name} — ${site.tagline}`,
  description: site.description,
};

const whyChooseUs = [
  {
    
    title: "Professional & Qualified",
    text: "Licensed Medicine Over the Counter Assistants who know their medicines inside out.",
  },
  {
  
    title: "Personal Care",
    text: "We take time to listen, understand your needs and treat you like family.",
  },
  {
  
    title: "Honest Advice",
    text: "Clear, trustworthy guidance — including when a medicine isn't the answer.",
  },
  {
  
    title: "Quality Products",
    text: "Genuine, quality-assured medicines and products from reliable suppliers.",
  },
  {
  
    title: "Convenient & Accessible",
    text: "An easy-to-reach location with opening hours that suit your schedule.",
  },
  {

    title: "Affordable",
    text: "Fair prices on everyday medicines and health essentials.",
  },
];

const homeServices = services.slice(0, 6);
const featuredTip = healthTips[0];

export default function HomePage() {
  return (
    <>
      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-800 via-brand-700 to-brand-400 py-20 text-white">
        <div className="container-page grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
              Your Trusted Community OTC Medication Provider
            </h1>
            <p className="mt-5 max-w-xl text-lg text-white/90">
              At {site.name}, we combine professional care with genuine
              attention — offering OTC medicine dispensing, health
              consultations, wellness products and personal guidance, all in
              one friendly place.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-block rounded-lg bg-brand-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-550"
              >
                Visit Us Today
              </Link>
              <Link
                href="/services"
                className="inline-block rounded-lg bg-brand-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-550"
              >
                Our Services
              </Link>
            </div>
          </div>

          {/* Hero card */}
          <div className="rounded-2xl bg-white p-7 text-ink-900 shadow-2xl">
            <h3 className="text-lg font-bold">Why people visit us</h3>
            <ul className="mt-3 divide-y divide-dashed divide-ink-100 text-sm">
              {[
                "Quick, accurate prescription dispensing",
                "Free medication guidance & counselling",
                "Health screening services",
                "Wide range of wellness & personal care products",
                "Caring service you can rely on",
              ].map((item) => (
                <li
                  key={item}
                  className="group flex items-start gap-3 rounded-lg py-3 transition-all duration-500 ease-out hover:-translate-y-1 hover:bg-brand-50/70 hover:shadow-sm"
                >
                  <span className="mt-0.5 font-bold text-brand-600 transition-transform duration-500 ease-out group-hover:scale-110">
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ================= SHORT INTRODUCTION ================= */}
      <section className="py-20">
        <div className="container-page grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <SectionHeading
              eyebrow="Welcome to Maxtilliz"
              title="Caring for our community, one prescription at a time"
            />
            <p className="mb-4 text-ink-700">
              We are a community OTCM  provider dedicated to making healthcare simple,
              accessible and personal. Whether you need advice on over-the-counter medicines, or support managing your
              health, we are here to help with honest, professional
              guidance.
            </p>
            
            <Link
              href="/about"
              className="inline-block rounded-lg bg-brand-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-550"
            >
              More About Us
            </Link>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div className="rounded-xl bg-brand-50 p-4 text-center">
              <div className="text-2xl font-bold text-brand-600">
                {site.stats.years}
              </div>
              <div className="mt-1 text-xs text-ink-500">Years of service</div>
            </div>
            <div className="rounded-xl bg-brand-50 p-4 text-center">
              <div className="text-2xl font-bold text-brand-600">
                {site.stats.customers}
              </div>
              <div className="mt-1 text-xs text-ink-500">Happy customers</div>
            </div>
            <div className="rounded-xl bg-brand-50 p-4 text-center">
              <div className="text-2xl font-bold text-brand-600">
                {site.stats.branches}
              </div>
              <div className="mt-1 text-xs text-ink-500">Branches</div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= OUR SERVICES ================= */}
      <section className="bg-brand-50/60 py-20">
        <div className="container-page">
          <SectionHeading
            center
            eyebrow="What we offer"
            title="Our Services"
            description="We have a wide range of services to keep you and your family healthy."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {homeServices.map((service) => (
              <div
                key={service.title}
                className="group overflow-hidden rounded-2xl border border-ink-100 bg-white transition-all duration-500 ease-out hover:-translate-y-1.5 hover:shadow-xl"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.imageAlt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-110 group-hover:brightness-105"
                  />
                </div>
                <div className="p-7">
                  <h3 className="text-lg font-bold text-ink-900">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm text-ink-500">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-10 text-center">
            <Link
              href="/services"
              className="inline-block rounded-lg bg-brand-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-550"
            >
              View All Services
            </Link>
          </p>
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="py-20">
        <div className="container-page">
          <SectionHeading
            center
            eyebrow="The Maxtilliz difference"
            title="Why Choose Us"
            description="The things our customers tell us they value most."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {whyChooseUs.map((item) => (
              <div
                key={item.title}
                className="group relative overflow-hidden rounded-2xl border border-ink-100 bg-white p-7 transition-all duration-500 ease-out hover:-translate-y-1.5 hover:shadow-xl"
              >
                <span className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-brand-600 to-brand-400 transition-transform duration-500 ease-out group-hover:scale-x-100" />
                <div className="mb-2 text-xs font-bold tracking-[0.14em] text-accent-500">
                </div>
                <h3 className="text-base font-bold text-ink-900 transition-colors duration-300 group-hover:text-brand-700">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-ink-500">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FEATURED HEALTH TIP ================= */}
      <section className="bg-brand-50/60 py-20">
        <div className="container-page grid items-center gap-10 lg:grid-cols-2">
          <div>
            <span className="mb-3 inline-block rounded-full bg-accent-100 px-4 py-1.5 text-xs font-semibold text-brand-50/">
              Featured Health Tip · {featuredTip.category}
            </span>
            <h2 className="text-2xl font-bold tracking-tight text-ink-900 sm:text-3xl">
              {featuredTip.title}
            </h2>
            <p className="mt-4 text-ink-500">{featuredTip.summary}</p>
            <Link
              href={`/health-tips/${featuredTip.slug}`}
              className="mt-6 inline-block rounded-lg bg-brand-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-550"
            >
              Read the Article
            </Link>
          </div>
          <div className="overflow-hidden rounded-2xl shadow-lg">
            <Image
              src={featuredTip.image}
              alt={featuredTip.imageAlt}
              width={1200}
              height={800}
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* ================= BRANCH / CONTACT SUMMARY ================= */}
      <section className="bg-ink-900 py-16 text-white">
        <div className="container-page flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
          <div>
            <h2 className="text-2xl font-bold">Visit us or get in touch</h2>
            <ul className="mt-4 space-y-2 text-sm text-white/85">
              {site.locations.map((loc) => (
                <li key={loc.name}>📍 {loc.full}</li>
              ))}
              <li>
                📞 {site.phone} &nbsp;·&nbsp; 📱 {site.whatsapp}
              </li>
              <li>✉️ {site.email}</li>
              <li>
                🕘 Mon – Sat: 7:30 AM – 9:00 PM · Sun: 1:30 PM – 9:00 PM
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
