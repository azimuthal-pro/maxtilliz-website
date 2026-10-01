import Link from "next/link";
import Image from "next/image";
import { navLinks, site } from "@/data/site";

const serviceLinks = [
  { label: "OTC Medicines", href: "/services" },
  { label: "Prescriptions", href: "/services" },
  { label: "Consultations", href: "/services" },
  { label: "Health Screening", href: "/services" },
  { label: "Wellness Products", href: "/services" },
];

// Social links are still placeholders in src/data/site.ts, so only
// render the ones that have a real URL.
const socials = [
  { label: "Facebook", href: site.social.facebook, glyph: "f" },
  { label: "Instagram", href: site.social.instagram, glyph: "◎" },
  { label: "X / Twitter", href: site.social.x, glyph: "𝕏" },
  { label: "TikTok", href: site.social.tiktok, glyph: "♪" },
].filter((social) => !social.href.startsWith("["));

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink-900 text-[15px] text-slate-300">
      <div className="container-page grid grid-cols-1 gap-10 py-16 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12">
        {/* Brand */}
        <div>
          <div className="mb-5 flex items-center gap-3">
            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white p-2">
              <Image
                src="/images/maxtilliz-logo.png"
                alt={`${site.name} logo`}
                width={40}
                height={40}
                className="h-full w-full object-contain"
              />
            </span>
            <span className="text-lg font-bold tracking-tight text-white">
              {site.name}
            </span>
          </div>
          <p className="max-w-sm leading-relaxed text-slate-400">
            {site.name} is a community pharmacy making quality healthcare
            products and honest advice affordable and easy to reach — from
            over-the-counter medicines to health screening, we are here for you
            and your family.
          </p>
        </div>

        {/* Useful links */}
        <div>
          <h4 className="text-base font-semibold text-white">Useful links</h4>
          <hr className="my-4 border-white/15" />
          <ul className="grid grid-cols-2 gap-x-6 gap-y-2.5">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="transition-colors hover:text-brand-550"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/disclaimer"
                className="transition-colors hover:text-brand-550"
              >
                Disclaimer
              </Link>
            </li>
          </ul>
        </div>

        {/* Services */}
        {/* <div>
          <h4 className="mb-4 text-base font-semibold text-white">Services</h4>
          <ul className="space-y-2.5">
            {serviceLinks.map((link) => (
              <li key={link.label}>
                <Link href={link.href} className="transition-colors hover:text-brand-550">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div> */}

        {/* Get in touch */}
        <div>
          <h4 className="text-base font-semibold text-white">Get in touch</h4>
          <hr className="my-4 border-white/15" />
          <address className="not-italic">
            <ul className="space-y-3 leading-relaxed text-slate-400">
              {site.locations.map((loc) => (
                <li key={loc.name}>
                  <span className="block text-slate-300">{loc.name}</span>
                  {loc.full}
                </li>
              ))}
              <li>
                Tel:{" "}
                <a
                  href={`tel:${site.phone.replace(/[^\d+]/g, "")}`}
                  className="transition-colors hover:text-brand-550"
                >
                  {site.phone}
                </a>
              </li>
              <li>
                WhatsApp:{" "}
                <a
                  href={`https://wa.me/${site.whatsapp.replace(/[^\d]/g, "")}`}
                  className="transition-colors hover:text-brand-550"
                >
                  {site.whatsapp}
                </a>
              </li>
              <li>
                Email:{" "}
                <a
                  href={`mailto:${site.email}`}
                  className="break-words transition-colors hover:text-brand-550"
                >
                  {site.email}
                </a>
              </li>
            </ul>
          </address>

          {socials.length > 0 && (
            <div className="mt-6 flex gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-sm text-slate-300 transition-colors hover:border-brand-550 hover:text-brand-550"
                >
                  {social.glyph}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="border-t border-white/10 py-5 text-center text-sm text-slate-500">
        &copy; {year} {site.name}. All rights reserved.
      </div>
    </footer>
  );
}
