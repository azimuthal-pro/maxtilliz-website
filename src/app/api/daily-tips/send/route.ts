import { NextResponse } from "next/server";
import { Resend } from "resend";
import { getSupabaseAdmin, SUBSCRIBERS_TABLE } from "@/lib/supabase";
import { getTipForDate, getSiteUrl } from "@/lib/dailyTips";
import { site } from "@/data/site";
import type { HealthTip } from "@/data/healthTips";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const BATCH_SIZE = 100;

interface Subscriber {
  name: string;
  email: string;
  unsubscribe_token: string;
}

function buildEmail(
  tip: HealthTip,
  subscriber: Subscriber,
  siteUrl: string
): { subject: string; html: string; text: string } {
  const readMoreUrl = `${siteUrl}/health-tips/${tip.slug}`;
  const unsubscribeUrl = `${siteUrl}/unsubscribe?token=${subscriber.unsubscribe_token}`;
  const firstName = subscriber.name.split(" ")[0] || subscriber.name;

  const subject = `Today's health tip: ${tip.title}`;

  const text = [
    `Hi ${firstName},`,
    "",
    `Today's health tip from ${site.name}:`,
    "",
    tip.title.toUpperCase(),
    tip.summary,
    "",
    `Read the full article: ${readMoreUrl}`,
    "",
    `— The ${site.name} team`,
    "",
    `Don't want these emails? Unsubscribe: ${unsubscribeUrl}`,
  ].join("\n");

  const html = `<!doctype html>
<html>
  <body style="margin:0; padding:0; background:#f4f7f6;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f4f7f6; padding:24px 12px;">
      <tr>
        <td align="center">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px; background:#ffffff; border-radius:14px; overflow:hidden; font-family:Arial,Helvetica,sans-serif;">
            <tr>
              <td style="background:#0B132B; padding:20px 28px;">
                <span style="color:#ffffff; font-size:18px; font-weight:bold;">${site.name}</span>
                <br />
                <span style="color:#90e0ef; font-size:12px; letter-spacing:0.08em; text-transform:uppercase;">Daily Health Tip</span>
              </td>
            </tr>
            <tr>
              <td style="padding:28px;">
                <p style="margin:0 0 16px; color:#334e68; font-size:15px;">Hi ${escapeHtml(firstName)},</p>
                <p style="margin:0 0 6px; color:#00B4D8; font-size:12px; font-weight:bold; letter-spacing:0.08em; text-transform:uppercase;">${escapeHtml(tip.category)}</p>
                <h1 style="margin:0 0 12px; color:#0D102F; font-size:22px; line-height:1.3;">${escapeHtml(tip.title)}</h1>
                <p style="margin:0 0 22px; color:#334e68; font-size:15px; line-height:1.6;">${escapeHtml(tip.summary)}</p>
                <a href="${readMoreUrl}" style="display:inline-block; background:#00B4D8; color:#ffffff; text-decoration:none; padding:12px 22px; border-radius:8px; font-size:14px; font-weight:bold;">Read the full tip</a>
              </td>
            </tr>
            <tr>
              <td style="padding:18px 28px; background:#f7faf9; border-top:1px solid #e6f4ef;">
                <p style="margin:0; color:#627d98; font-size:12px; line-height:1.6;">
                  You're receiving this because you signed up for daily health tips at ${escapeHtml(site.name)}.
                  <br />
                  <a href="${unsubscribeUrl}" style="color:#627d98; text-decoration:underline;">Unsubscribe</a>
                </p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;

  return { subject, html, text };
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

async function handle(request: Request) {
  try {
    const cronSecret = process.env.CRON_SECRET;
    if (cronSecret) {
      const auth = request.headers.get("authorization");
      if (auth !== `Bearer ${cronSecret}`) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
      }
    }

    const resendKey = process.env.RESEND_API_KEY?.trim();
    const from = process.env.DAILY_TIPS_FROM?.trim();

    if (!resendKey || !from) {
      console.error("Daily tips: RESEND_API_KEY or DAILY_TIPS_FROM is missing.");
      return NextResponse.json(
        { error: "Email sending is not configured." },
        { status: 500 }
      );
    }

    const supabase = getSupabaseAdmin();

    const { data, error } = await supabase
      .from(SUBSCRIBERS_TABLE)
      .select("name,email,unsubscribe_token")
      .eq("status", "active")
      .eq("channel", "email");

    if (error) {
      console.error("Daily tips: failed to load subscribers:", error);
      return NextResponse.json(
        { error: "Could not load subscribers." },
        { status: 500 }
      );
    }

    const subscribers = (data ?? []) as Subscriber[];

    if (subscribers.length === 0) {
      return NextResponse.json({ ok: true, sent: 0, tip: null });
    }

    const tip = getTipForDate();
    const siteUrl = getSiteUrl(request);
    const resend = new Resend(resendKey);

    let sent = 0;
    const failures: string[] = [];

    for (let i = 0; i < subscribers.length; i += BATCH_SIZE) {
      const chunk = subscribers.slice(i, i + BATCH_SIZE);

      const messages = chunk.map((subscriber) => {
        const { subject, html, text } = buildEmail(tip, subscriber, siteUrl);
        return { from, to: subscriber.email, subject, html, text };
      });

      const { error: sendError } = await resend.batch.send(messages);

      if (sendError) {
        console.error("Daily tips: batch send failed:", sendError);
        failures.push(...chunk.map((s) => s.email));
      } else {
        sent += chunk.length;
      }
    }

    return NextResponse.json({
      ok: true,
      sent,
      failed: failures.length,
      tip: tip.slug,
    });
  } catch (error) {
    console.error("Daily tips error:", error);
    return NextResponse.json(
      { error: "Something went wrong sending the daily tips." },
      { status: 500 }
    );
  }
}

export async function GET(request: Request) {
  return handle(request);
}

export async function POST(request: Request) {
  return handle(request);
}
