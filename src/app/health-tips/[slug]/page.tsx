import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { healthTips } from "@/data/healthTips";
import type { HealthTip } from "@/data/healthTips";
import { formatToday } from "@/lib/format";

interface ArticlePageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return healthTips.map((tip) => ({ slug: tip.slug }));
}

export async function generateMetadata({
  params,
}: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const tip = healthTips.find((t) => t.slug === slug);

  if (!tip) {
    return { title: "Article not found" };
  }

  return {
    title: tip.title,
    description: tip.summary,
  };
}

function renderBlocks(tip: HealthTip) {
  return tip.content.map((block, index) => {
    switch (block.type) {
      case "h2":
        return (
          <h2 key={index} className="mt-10 text-2xl font-bold text-ink-900">
            {block.text}
          </h2>
        );
      case "ul":
        return (
          <ul key={index} className="mb-5 list-disc space-y-2 pl-6 text-ink-700">
            {block.items.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        );
      default:
        return (
          <p key={index} className="mb-5 text-ink-700">
            {block.text}
          </p>
        );
    }
  });
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const tip = healthTips.find((t) => t.slug === slug);

  if (!tip) {
    notFound();
  }

  return (
    <article className="py-16">
      <div className="container-page mx-auto max-w-3xl">
        <Link
          href="/health-tips"
          className="mb-8 inline-block text-sm font-semibold text-brand-600 hover:text-brand-700"
        >
          ← Back to Health Tips
        </Link>

        <h1 className="text-3xl font-bold leading-tight tracking-tight text-ink-900 sm:text-4xl">
          {tip.title}
        </h1>

        <div className="mt-5 flex flex-wrap items-center gap-4 text-sm text-ink-500">
          <span className="rounded-full bg-brand-50 px-3.5 py-1.5 font-semibold text-brand-600">
            {tip.category}
          </span>
          <span>{formatToday()}</span>
          <span>· Maxtilliz Pharmacy Team</span>
        </div>

        <div className="mt-8 overflow-hidden rounded-2xl">
          <Image
            src={tip.image}
            alt={tip.imageAlt}
            width={1200}
            height={675}
            className="aspect-[16/9] w-full object-cover"
            priority
          />
        </div>

        <div className="mt-10 text-base leading-relaxed">
          {renderBlocks(tip)}
        </div>

        <div className="mt-12 rounded-2xl bg-brand-50 p-7 text-center">
          <h3 className="text-lg font-bold text-ink-900">
            Have a question about your health?
          </h3>
          <p className="mt-2 text-sm text-ink-500">
            Our pharmacists are here to help. Reach out any time.
          </p>
          <Link
            href="/contact"
            className="mt-5 inline-block rounded-lg bg-brand-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-700"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </article>
  );
}
