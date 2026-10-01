"use client";

import { useEffect, useRef, useState } from "react";

/** How long the number count-up takes, in ms. */
const COUNT_DURATION = 1300;
/** Delay between each card popping in, in ms. */
const STAGGER = 140;

const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

/**
 * Splits a stat like "3,000+" into its parts so the number can be counted up
 * while the surrounding symbols are preserved:
 * "3,000+" → { prefix: "", target: 3000, suffix: "+" }
 * "6+"     → { prefix: "", target: 6,    suffix: "+" }
 * "2"      → { prefix: "", target: 2,    suffix: ""  }
 */
function parseStat(value: string) {
  const match = /^(\D*)([\d,]+)(.*)$/.exec(value);
  if (!match) return null;

  const [, prefix, digits, suffix] = match;
  return { prefix, target: Number(digits.replace(/,/g, "")), suffix };
}

type StatsCardsProps = {
  years: string;
  customers: string;
  branches: string;
};

export default function StatsCards({
  years,
  customers,
  branches,
}: StatsCardsProps) {
  const hostRef = useRef<HTMLDivElement | null>(null);
  const [revealed, setRevealed] = useState(false);
  const [display, setDisplay] = useState<string[]>([years, customers, branches]);

  useEffect(() => {
    const host = hostRef.current;
    const stats = [years, customers, branches];

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    // Respect reduced-motion (and no-JS hosts): show the real numbers, no animation.
    if (prefersReducedMotion || !host) {
      setDisplay(stats);
      setRevealed(true);
      return;
    }

    const parsed = stats.map(parseStat);
    let frame = 0;

    const countUp = () => {
      const startedAt = performance.now();

      const tick = (now: number) => {
        const progress = Math.min(1, (now - startedAt) / COUNT_DURATION);
        const eased = easeOutCubic(progress);

        setDisplay(
          stats.map((stat, index) => {
            const parts = parsed[index];
            if (!parts) return stat;

            const current = Math.round(parts.target * eased);
            return `${parts.prefix}${current.toLocaleString("en-US")}${parts.suffix}`;
          })
        );

        if (progress < 1) frame = requestAnimationFrame(tick);
      };

      frame = requestAnimationFrame(tick);
    };

    // Fires immediately when the cards are already on screen at load, otherwise
    // when the visitor scrolls them into view.
    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries.some((entry) => entry.isIntersecting)) return;

        observer.disconnect();
        setRevealed(true);
        countUp();
      },
      { threshold: 0.3 }
    );

    observer.observe(host);

    return () => {
      observer.disconnect();
      if (frame) cancelAnimationFrame(frame);
    };
  }, [years, customers, branches]);

  const cards = [
    { label: "Years of service", value: years },
    { label: "Happy customers", value: customers },
    { label: "Branches", value: branches },
  ];

  return (
    <div ref={hostRef} className="grid grid-cols-3 gap-4">
      {cards.map((card, index) => (
        <div
          key={card.label}
          style={{ transitionDelay: `${index * STAGGER}ms` }}
          className={`rounded-xl bg-brand-50 p-4 text-center transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] motion-reduce:transition-none ${
            revealed
              ? "translate-y-0 scale-100 opacity-100"
              : "translate-y-3 scale-90 opacity-0"
          }`}
        >
          <div className="text-2xl font-bold tabular-nums text-brand-600">
            {display[index] ?? card.value}
          </div>
          <div className="mt-1 text-sm text-ink-500">{card.label}</div>
        </div>
      ))}
    </div>
  );
}
