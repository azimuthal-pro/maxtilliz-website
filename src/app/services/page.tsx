import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import { services } from "@/data/services";
import { site } from "@/data/site";
import type { LucideIcon } from "lucide-react";
import {
  Activity,
  Check,
  ClipboardCheck,
  Leaf,
  Pill,
  Sparkles,
  Stethoscope,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Our Services",
  description: `Explore the services offered by ${site.name} — OTC medicines, prescriptions, health consultations, medication guidance, health screening, wellness and personal care products.`,
};

const serviceIcons: Record<string, LucideIcon> = {
  "OTC Medicines": Pill,
  "Health Consultations": Stethoscope,
  "Medication Guidance": ClipboardCheck,
  "Health Screening": Activity,
  "Wellness Products": Leaf,
  "Personal Care Products": Sparkles,
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Our Services"
        subtitle="Everything we offer to keep you and your family healthy — all under one roof."
      />

      {/* SERVICES LIST */}
      <section className="py-20">
        <div className="container-page">
          <SectionHeading
            eyebrow="What we offer"
            title=""
            description="From everyday essentials to professional care, here's how we can help."
          />
          <div className="grid gap-6 md:grid-cols-2">
            {services.map((service) => {
              const Icon = serviceIcons[service.title] ?? Pill;

              return (
                <article
                  key={service.title}
                  className="group overflow-hidden rounded-2xl border border-ink-100 bg-white shadow-sm transition-all duration-500 ease-out md:hover:-translate-y-1.5 md:hover:shadow-2xl"
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-ink-900">
                    <Image
                      src={service.image}
                      alt={service.imageAlt}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-700 ease-out md:group-hover:scale-110"
                    />

                    {/* Resting state: title over the photo */}
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 bg-gradient-to-t from-ink-900/95 via-ink-900/45 to-transparent transition-opacity duration-500 ease-out md:group-hover:opacity-0"
                    />
                    <span className="absolute left-5 top-5 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white/90 text-brand-600 shadow-sm backdrop-blur transition-opacity duration-500 ease-out md:group-hover:opacity-0">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <div className="absolute inset-x-0 bottom-0 p-6 transition-all duration-500 ease-out md:group-hover:-translate-y-2 md:group-hover:opacity-0">
                      <h3 className="text-xl font-bold text-white">
                        {service.title}
                      </h3>
                      <div className="mt-1.5 hidden md:block">
                        <p
                          aria-hidden="true"
                          className="line-clamp-2 text-sm text-white/75"
                        >
                          {service.description}
                        </p>
                      </div>
                    </div>

                    {/* Hover state: the full details fade in over the card */}
                    <div className="absolute inset-0 hidden translate-y-3 flex-col justify-center gap-3 bg-ink-900/95 p-7 opacity-0 transition-all duration-500 ease-out md:flex md:group-hover:translate-y-0 md:group-hover:opacity-100">
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand-600/20 text-brand-550">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </span>
                      <span
                        aria-hidden="true"
                        className="text-xl font-bold text-white"
                      >
                        {service.title}
                      </span>
                      <p className="text-sm leading-relaxed text-white/85">
                        {service.description}
                      </p>
                      <ul className="mt-1 space-y-2">
                        {service.highlights.map((highlight) => (
                          <li
                            key={highlight}
                            className="flex items-start gap-2 text-sm text-white/90"
                          >
                            <Check
                              className="mt-0.5 h-4 w-4 shrink-0 text-brand-550"
                              aria-hidden="true"
                            />
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Small screens: details sit below the photo, since there is no hover */}
                  <div className="p-6 md:hidden">
                    <p className="text-base text-ink-700">
                      {service.description}
                    </p>
                    <ul className="mt-4 space-y-2">
                      {service.highlights.map((highlight) => (
                        <li
                          key={highlight}
                          className="flex items-start gap-2 text-sm text-ink-700"
                        >
                          <Check
                            className="mt-0.5 h-4 w-4 shrink-0 text-brand-600"
                            aria-hidden="true"
                          />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="pb-20">
        <div className="container-page">
          <div className="rounded-3xl bg-gradient-to-br from-brand-600 to-brand-400 px-8 py-14 text-center text-white">
            <h2 className="text-2xl font-bold sm:text-3xl">
              Not sure which service you need?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-white/85">
              Our MCAs are happy to point you in the right direction.
              Call, WhatsApp, or visit us — no appointment needed.
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="rounded-lg bg-white px-6 py-3 text-sm font-semibold text-brand-700 transition-colors hover:bg-brand-50"
              >
                Contact Us
              </Link>
              <Link
                href="/health-tips"
                className="rounded-lg border-2 border-white/80 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                Read Health Tips
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
