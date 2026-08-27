import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import HealthTipsList from "@/components/HealthTipsList";
import { healthTips, tipCategories } from "@/data/healthTips";

export const metadata: Metadata = {
  title: "Health Tips",
  description:
    "Practical health advice from the Maxtilliz Pharmacy team — general health, nutrition, medication safety, wellness, and more.",
};

export default function HealthTipsPage() {
  return (
    <>
      <PageHero
        title="Health Tips"
        subtitle="Practical, trustworthy advice to help you and your family live healthier."
      />

      <section className="py-16">
        <div className="container-page">
          <HealthTipsList tips={healthTips} categories={tipCategories} />
        </div>
      </section>
    </>
  );
}
