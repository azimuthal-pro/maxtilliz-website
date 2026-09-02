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

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink-900 text-[15px] text-slate-300">
      <div className="container-page grid grid-cols-1 gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        {/* Brand */}
        <div>
          <div className="mb-3 flex items-center gap-2.5 font-semibold text-white">
            <Image
              src="/images/maxtilliz-logo.png"
              alt={`${site.name} logo`}
              width={40}
              height={40}
              className="h-10 w-10 object-contain"
            />
            <span className="text-lg font-bold tracking-tight">{site.name}</span>
          </div>
          <p className="leading-relaxed text-slate-400">
            Caring for our community through honest advice, quality medicines
            and genuine personal service.
          </p>
        </div>

        {/* Quick links */}
        <div>
          <h4 className="mb-4 text-base font-semibold text-white">Quick Links</h4>
          <ul className="space-y-2.5">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="transition-colors hover:text-accent-400">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="mb-4 text-base font-semibold text-white">Services</h4>
          <ul className="space-y-2.5">
            {serviceLinks.map((link) => (
              <li key={link.label}>
                <Link href={link.href} className="transition-colors hover:text-accent-400">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="mb-4 text-base font-semibold text-white">Contact</h4>
          <ul className="space-y-2.5 text-slate-400">
            {site.locations.map((loc) => (
              <li key={loc.name}>📍 {loc.full}</li>
            ))}
            <li>📞 {site.phone}</li>
            <li>📱 {site.whatsapp}</li>
            <li>✉️ {site.email}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-5 text-center text-sm text-slate-500">
        &copy; {year} {site.name}. All rights reserved.
      </div>
    </footer>
  );
}
