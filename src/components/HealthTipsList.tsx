"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import type { HealthTip, TipCategory } from "@/data/healthTips";
import { formatDate } from "@/lib/format";

type Filter = "all" | TipCategory;

interface HealthTipsListProps {
  tips: HealthTip[];
  categories: TipCategory[];
}

export default function HealthTipsList({ tips, categories }: HealthTipsListProps) {
  const [active, setActive] = useState<Filter>("all");

  const filtered = active === "all" ? tips : tips.filter((tip) => tip.category === active);

  return (
    <>
      {/* Category filter */}
      <div className="mb-10 flex flex-wrap gap-2.5">
        <button
          type="button"
          onClick={() => setActive("all")}
          className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
            active === "all"
              ? "border-brand-600 bg-brand-600 text-white"
              : "border-ink-100 bg-white text-ink-700 hover:border-brand-600 hover:text-brand-600"
          }`}
        >
          All
        </button>
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setActive(category)}
            className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
              active === category
                ? "border-brand-600 bg-brand-600 text-white"
                : "border-ink-100 bg-white text-ink-700 hover:border-brand-600 hover:text-brand-600"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Cards */}
      {filtered.length === 0 ? (
        <p className="text-ink-500">
          No articles in this category yet — check back soon!
        </p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((tip) => (
            <article
              key={tip.slug}
              data-category={tip.category}
              className="flex flex-col overflow-hidden rounded-2xl border border-ink-100 bg-white transition-shadow hover:shadow-lg"
            >
              <Link
                href={`/health-tips/${tip.slug}`}
                className="block overflow-hidden bg-brand-50"
              >
                <Image
                  src={tip.image}
                  alt={tip.imageAlt}
                  width={1200}
                  height={750}
                  className="aspect-[16/10] w-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </Link>
              <div className="flex flex-1 flex-col p-6">
                <div className="mb-3 flex items-center gap-3 text-xs text-ink-500">
                  <span className="rounded-full bg-brand-50 px-3 py-1 font-semibold text-brand-600">
                    {tip.category}
                  </span>
                  <span>{formatDate(tip.date)}</span>
                </div>
                <h3 className="text-lg font-bold text-ink-900">
                  <Link href={`/health-tips/${tip.slug}`} className="hover:text-brand-600">
                    {tip.title}
                  </Link>
                </h3>
                <p className="mt-2 flex-1 text-sm text-ink-500">{tip.summary}</p>
                <Link
                  href={`/health-tips/${tip.slug}`}
                  className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-brand-600 hover:text-brand-700"
                >
                  Read more →
                </Link>
              </div>
            </article>
          ))}
        </div>
      )}
    </>
  );
}
