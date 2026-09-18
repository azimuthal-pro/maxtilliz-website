import { NextResponse } from "next/server";
import { getSupabaseAdmin, SUBSCRIBERS_TABLE } from "@/lib/supabase";

export const runtime = "nodejs";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const name = String(body.name || "").trim();
    const email = String(body.email || "").trim().toLowerCase();

    if (!name || !email) {
      return NextResponse.json(
        { error: "Please enter your name and email address." },
        { status: 400 }
      );
    }

    if (!EMAIL_RE.test(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    const supabase = getSupabaseAdmin();

    // Upsert so an existing subscriber is kept as active (and a previously
    // unsubscribed person is re-subscribed if they sign up again).
    const { error } = await supabase.from(SUBSCRIBERS_TABLE).upsert(
      {
        name,
        email,
        channel: "email",
        status: "active",
        unsubscribed_at: null,
      },
      { onConflict: "email" }
    );

    if (error) {
      console.error("Subscribe error:", error);
      return NextResponse.json(
        { error: "We couldn't save your details. Please try again." },
        { status: 500 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Subscribe error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
