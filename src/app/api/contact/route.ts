import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { site } from "@/data/site";

export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const name = String(body.name || "").trim();
    const email = String(body.email || "").trim();
    const phone = String(body.phone || "").trim();
    const message = String(body.message || "").trim();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Please fill in your name, email and message." },
        { status: 400 }
      );
    }

    const recipient = process.env.CONTACT_RECIPIENT_EMAIL?.trim();
    const smtpUser = process.env.SMTP_USER?.trim();

    const smtpPass = (process.env.SMTP_PASS || "").replace(/\s/g, "");

    if (!recipient || !smtpUser || !smtpPass || !process.env.SMTP_HOST) {
      console.error("Contact form: SMTP configuration is missing.");
      return NextResponse.json(
        { error: "Server email is not configured yet. Please add your SMTP settings." },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    const text = [name, email, phone ? `Phone: ${phone}` : "", "", message]
      .filter(Boolean)
      .join("\n");

    const html = `
      <div style="font-family: Arial, Helvetica, sans-serif; line-height: 1.6; color: #1e293b;">
        <h2 style="margin: 0 0 16px;">New message from the ${site.name} website</h2>
        <table style="border-collapse: collapse; font-size: 15px;">
          <tr>
            <td style="padding: 4px 16px 4px 0; font-weight: 600; white-space: nowrap;">Name</td>
            <td>${escapeHtml(name)}</td>
          </tr>
          <tr>
            <td style="padding: 4px 16px 4px 0; font-weight: 600; white-space: nowrap;">Email</td>
            <td>${escapeHtml(email)}</td>
          </tr>
          ${
            phone
              ? `<tr>
                  <td style="padding: 4px 16px 4px 0; font-weight: 600; white-space: nowrap;">Phone</td>
                  <td>${escapeHtml(phone)}</td>
                </tr>`
              : ""
          }
        </table>
        <p style="margin: 20px 0 4px; font-weight: 600;">Message:</p>
        <p style="margin: 0; white-space: pre-wrap;">${escapeHtml(message)}</p>
      </div>
    `;

    await transporter.sendMail({
      from: `"${site.name} Website" <${smtpUser}>`,
      replyTo: email,
      to: recipient,
      subject: `New contact message from ${name}`,
      text,
      html,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      {
        error:
          "Something went wrong sending your message. Please try again or contact us directly.",
      },
      { status: 500 }
    );
  }
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
