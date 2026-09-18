import { healthTips, type HealthTip } from "@/data/healthTips";

const MS_PER_DAY = 86_400_000;

/**
 * Deterministically picks the tip for a given day by rotating through the
 * health tips list. Using the UTC day number means every server instance
 * (and every subscriber) gets the same tip on the same day.
 */
export function getTipForDate(date: Date = new Date()): HealthTip {
  const dayNumber = Math.floor(
    Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate()) /
      MS_PER_DAY
  );

  return healthTips[dayNumber % healthTips.length];
}

export function getSiteUrl(request: Request): string {
  const configured = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (configured) return configured.replace(/\/$/, "");

  const origin = request.headers.get("origin");
  if (origin) return origin.replace(/\/$/, "");

  const host = request.headers.get("host");
  if (host) return `https://${host}`;

  return "";
}
