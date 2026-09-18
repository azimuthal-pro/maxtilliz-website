# Daily Health Tips — Setup Guide

The "Daily Health Tips" feature lets visitors subscribe with their name and
email, then automatically emails them one health tip every morning.

- **Storage:** Supabase (Postgres)
- **Email sending:** Resend
- **Trigger:** Vercel Cron (daily)
- **Unsubscribe:** one-click link in every email

---

## What was built

| File | Purpose |
| --- | --- |
| `supabase/schema.sql` | The `subscribers` table definition |
| `src/lib/supabase.ts` | Server-only Supabase client (service role) |
| `src/lib/dailyTips.ts` | Picks the tip of the day + resolves the site URL |
| `src/components/DailyTipsSignup.tsx` | The sign-up form |
| `src/app/daily-tips/page.tsx` | Public page: `/daily-tips` |
| `src/app/api/subscribe/route.ts` | Saves a new subscriber |
| `src/app/api/daily-tips/send/route.ts` | Sends the daily email (cron target) |
| `src/app/unsubscribe/page.tsx` | One-click unsubscribe page |
| `vercel.json` | Cron schedule (daily at 07:00 UTC) |

---

## Step 1 — Create the Supabase project

1. Go to <https://supabase.com> and create a free project.
2. Open **SQL Editor → New query**.
3. Paste the contents of `supabase/schema.sql` and click **Run**.
4. Copy these from **Project Settings → API**:
   - **Project URL** → `SUPABASE_URL`
   - **service_role** secret key → `SUPABASE_SERVICE_ROLE_KEY`
     (⚠️ the *service_role* key, not the anon key. Keep it secret — server only.)

## Step 2 — Create the Resend account

1. Go to <https://resend.com> and create a free account.
2. **Domains** → add and verify your domain (add the DNS records they give you).
   - No domain yet? You can test with `onboarding@resend.dev`, but it will
     only deliver to the email address you signed up with.
3. **API Keys** → create a key → copy it → `RESEND_API_KEY`.

## Step 3 — Add the environment variables

Add these locally in `.env.local`, and in **Vercel → Project → Settings →
Environment Variables** (Production, Preview and Development):

```env
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxx
DAILY_TIPS_FROM="Maxtilliz Chem <tips@yourdomain.com>"
SUPABASE_URL=https://xxxxxxxxxxxx.supabase.co
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
CRON_SECRET=some-long-random-string
NEXT_PUBLIC_SITE_URL=https://your-site.vercel.app
```

- `DAILY_TIPS_FROM` must be on the domain you verified in Resend.
- `CRON_SECRET` is any long random string. Vercel automatically sends it as a
  `Bearer` token when the cron job fires, which is how the endpoint is protected.
- `NEXT_PUBLIC_SITE_URL` is used to build the "read more" and unsubscribe links
  inside the emails — set it to your real domain.

## Step 4 — Deploy

Push to `main`. Vercel reads `vercel.json` and registers the daily cron job.
Everything activates once the environment variables are in place.

---

## Testing

**Test a sign-up:** visit `/daily-tips`, submit the form, then check the
`subscribers` table in Supabase (Table Editor) for the new row.

**Test the send immediately** (instead of waiting for 07:00):

```bash
curl -H "Authorization: Bearer YOUR_CRON_SECRET" \
  https://your-site.vercel.app/api/daily-tips/send
```

You should get back something like:
```json
{ "ok": true, "sent": 3, "failed": 0, "tip": "understanding-your-prescription" }
```

**Test unsubscribe:** open `/unsubscribe?token=<unsubscribe_token>` using a
token from the `subscribers` table — the page should confirm and the row's
`status` should become `unsubscribed`.

---

## How the daily tip is chosen

`getTipForDate()` rotates through the articles in `src/data/healthTips.ts`
using the current UTC day number. Everyone gets the same tip on the same day,
and it cycles automatically — no manual scheduling needed. Add more articles
to that file and they join the rotation.

---

## Good to know / limitations

- **Vercel Hobby cron:** on the free plan, cron jobs run **once per day** and
  the exact time isn't guaranteed (it can be up to an hour late). That's fine
  for a daily tip. For precise timing, use a GitHub Actions scheduled workflow
  that hits the same endpoint instead.
- **Resend free tier:** roughly 3,000 emails/month and 100/day. Enough to
  start; upgrade if your list grows.
- **Don't use Gmail SMTP for this.** Gmail caps around 500 sends/day and bulk
  automated mail breaches their terms. Resend is the right tool — the Gmail
  SMTP setup stays for the contact form only.
- **Consent matters.** The form includes a required consent checkbox, every
  email has a one-click unsubscribe link, and the page explains how data is
  used. Keep those in place.
- **SMS is Phase 2.** The `subscribers` table already has a `channel` column
  (currently `email`), so adding an SMS provider like Africa's Talking or
  Termii later won't need a data migration.
