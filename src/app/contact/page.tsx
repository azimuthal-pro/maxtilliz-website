import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import ContactForm from "@/components/ContactForm";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description: `Reach ${site.name} — phone, WhatsApp, email, address, opening hours, and a contact form. We're here to help.`,
};

const socialLinks = [
  { label: "Facebook", href: site.social.facebook, icon: "f" },
  { label: "Instagram", href: site.social.instagram, icon: "◎" },
  { label: "X / Twitter", href: site.social.x, icon: "𝕏" },
  { label: "TikTok", href: site.social.tiktok, icon: "♪" },
];

const isPlaceholder = (value: string) => value.startsWith("[");

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact Us"
        subtitle="We'd love to hear from you. Reach us any way that's easiest for you."
        breadcrumb="Home / Contact"
      />

      <section className="py-16">
        <div className="container-page grid items-start gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Contact info */}
          <div>
            <SectionHeading
              eyebrow="Get in touch"
              title="Contact information"
              description="Phone, WhatsApp, email, or visit us in person — your choice."
            />

            <ul className="divide-y divide-dashed divide-ink-100">
              <li className="flex gap-4 py-4">
                <span className="grid h-11 w-11 flex-shrink-0 place-items-center rounded-xl bg-brand-50 text-lg">
                  📞
                </span>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-ink-500">
                    Phone
                  </div>
                  <div className="mt-0.5 font-medium text-ink-900">{site.phone}</div>
                </div>
              </li>
              <li className="flex gap-4 py-4">
                <span className="grid h-11 w-11 flex-shrink-0 place-items-center rounded-xl bg-brand-50 text-lg">
                  📱
                </span>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-ink-500">
                    WhatsApp
                  </div>
                  <div className="mt-0.5 font-medium text-ink-900">{site.whatsapp}</div>
                </div>
              </li>
              <li className="flex gap-4 py-4">
                <span className="grid h-11 w-11 flex-shrink-0 place-items-center rounded-xl bg-brand-50 text-lg">
                  ✉️
                </span>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-ink-500">
                    Email
                  </div>
                  <div className="mt-0.5 font-medium text-ink-900">{site.email}</div>
                </div>
              </li>
              <li className="flex gap-4 py-4">
                <span className="grid h-11 w-11 flex-shrink-0 place-items-center rounded-xl bg-brand-50 text-lg">
                  📍
                </span>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-ink-500">
                    Locations
                  </div>
                  <ul className="mt-1 space-y-1">
                    {site.locations.map((loc) => (
                      <li key={loc.name} className="text-sm text-ink-700">
                        <span className="font-medium">{loc.name}:</span>{" "}
                        {loc.full}
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
              <li className="flex gap-4 py-4">
                <span className="grid h-11 w-11 flex-shrink-0 place-items-center rounded-xl bg-brand-50 text-lg">
                  🕘
                </span>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-ink-500">
                    Opening Hours
                  </div>
                  <ul className="mt-1 space-y-0.5">
                    {site.hours.map((row) => (
                      <li key={row.days} className="text-sm text-ink-700">
                        <span className="font-medium">{row.days}:</span> {row.time}
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            </ul>

            {/* Social */}
            <div className="mt-6">
              <div className="mb-3 text-xs font-semibold uppercase tracking-wider text-ink-500">
                Follow us
              </div>
              <div className="flex gap-3">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={isPlaceholder(link.href) ? "#" : link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                    className="grid h-11 w-11 place-items-center rounded-xl bg-brand-50 text-base font-semibold text-brand-600 transition-colors hover:bg-brand-600 hover:text-white"
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact form */}
          <ContactForm />
        </div>
      </section>

      {/* Google Maps */}
      <section className="pb-16">
        <div className="container-page">
          <div className="overflow-hidden rounded-2xl border border-ink-100 shadow-sm">
            {isPlaceholder(site.mapsEmbedUrl) ? (
              <div className="flex aspect-[16/7] w-full items-center justify-center bg-brand-50 p-10 text-center">
                <div>
                  <div className="text-3xl">🗺️</div>
                  <p className="mt-3 text-sm text-ink-500">
                    Add your Google Maps embed link in{" "}
                    <code className="rounded bg-white px-1.5 py-0.5 text-brand-600">
                      src/data/site.ts
                    </code>{" "}
                    (the <code>mapsEmbedUrl</code> field) to show your location
                    here.
                  </p>
                </div>
              </div>
            ) : (
              <iframe
                src={site.mapsEmbedUrl}
                title="Maxtilliz Pharmacy location"
                className="aspect-[16/7] w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            )}
          </div>
        </div>
      </section>
    </>
  );
}
