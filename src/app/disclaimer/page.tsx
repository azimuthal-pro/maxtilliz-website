import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Disclaimer",
  description: `Disclaimer for ${site.name} — the content on this website is not intended to constitute medical advice, diagnosis or treatment.`,
};

export default function DisclaimerPage() {
  return (
    <>
      <PageHero
        title="Disclaimer"
        subtitle=""
      />

      <section className="py-16">
        <div className="container-page">
          <div className="mx-auto max-w-3xl rounded-2xl border border-ink-100 bg-white p-7 sm:p-9">
            <p className="text-base leading-relaxed text-ink-700">
              The content on this website is not intended to constitute medical
              advice, diagnosis, or treatment. The prescription brands mentioned
              on this website are for informational purposes only and should be
              used under the guidance of a qualified healthcare professional.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
