"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import type { HealthTip, TipCategory } from "@/data/healthTips";
import { formatToday } from "@/lib/format";

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
              className="group flex flex-col overflow-hidden rounded-2xl border border-ink-100 bg-white transition-all duration-500 ease-out hover:-translate-y-1.5 hover:shadow-xl"
            >
              <Link
                href={`/health-tips/${tip.slug}`}
                className="relative block overflow-hidden bg-brand-50"
              >
                <Image
                  src={tip.image}
                  alt={tip.imageAlt}
                  width={1200}
                  height={750}
                  className="aspect-[16/10] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-brand-700 backdrop-blur">
                  {tip.category}
                </span>
              </Link>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-lg font-bold leading-snug text-ink-900">
                  <Link
                    href={`/health-tips/${tip.slug}`}
                    className="transition-colors group-hover:text-brand-700"
                  >
                    {tip.title}
                  </Link>
                </h3>
                <p className="mt-2 flex-1 text-base leading-relaxed text-ink-500">
                  {tip.summary}
                </p>
                <div className="mt-5 flex items-center justify-between border-t border-ink-100 pt-4">
                  <span className="text-sm text-ink-400">{formatToday()}</span>
                  <Link
                    href={`/health-tips/${tip.slug}`}
                    className="inline-flex items-center gap-1 text-sm font-semibold text-brand-600 transition-colors hover:text-brand-700"
                  >
                    Read more →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}
    </>
  );
}
