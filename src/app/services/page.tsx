import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import { services } from "@/data/services";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Our Services",
  description: `Explore the services offered by ${site.name} — OTC medicines, prescriptions, health consultations, medication guidance, health screening, wellness and personal care products.`,
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
          <div className="grid gap-5 md:grid-cols-2">
            {services.map((service) => (
              <div
                key={service.title}
                className="group flex gap-5 rounded-2xl border border-ink-100 bg-white p-6 transition-all duration-500 ease-out hover:-translate-y-1.5 hover:shadow-xl"
              >
                <div className="relative h-28 w-28 flex-shrink-0 overflow-hidden rounded-xl sm:h-32 sm:w-32">
                  <Image
                    src={service.image}
                    alt={service.imageAlt}
                    fill
                    sizes="(max-width: 768px) 112px, 128px"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-110 group-hover:brightness-105"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-ink-900">
                    {service.title}
                  </h3>
                  <p className="mt-1.5 text-sm text-ink-500">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
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
