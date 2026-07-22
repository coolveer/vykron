import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { contactSchema } from "@/lib/contact-schema";
import { projectTypeOptions } from "@/lib/contact-schema";
import type { ContactFormValues } from "@/lib/contact-schema";

export const runtime = "nodejs";

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function projectTypeLabel(slug: string) {
  return projectTypeOptions.find((o) => o.value === slug)?.label ?? slug;
}

function buildText(data: ContactFormValues) {
  return [
    `New project brief from ${data.name}`,
    "",
    `Name: ${data.name}`,
    `Email: ${data.email}`,
    `Company: ${data.company || "-"}`,
    `Budget: ${data.budget}`,
    `Project type: ${projectTypeLabel(data.projectType)}`,
    "",
    "Message:",
    data.message,
  ].join("\n");
}

function buildHtml(data: ContactFormValues, submittedAt: string) {
  const name = escapeHtml(data.name);
  const email = escapeHtml(data.email);
  const company = escapeHtml(data.company || "—");
  const budget = escapeHtml(data.budget);
  const projectType = escapeHtml(projectTypeLabel(data.projectType));
  const message = escapeHtml(data.message).replace(/\n/g, "<br />");

  const row = (label: string, value: string) => `
    <tr>
      <td style="padding:14px 0;border-bottom:1px solid #e6e9ef;font-family:'Courier New',monospace;font-size:11px;letter-spacing:0.08em;text-transform:uppercase;color:#5a6b85;width:140px;vertical-align:top;">${label}</td>
      <td style="padding:14px 0;border-bottom:1px solid #e6e9ef;font-family:Arial,Helvetica,sans-serif;font-size:15px;color:#0a1628;vertical-align:top;">${value}</td>
    </tr>`;

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>New project brief</title>
</head>
<body style="margin:0;padding:0;background-color:#f7f8fa;">
  <div style="display:none;max-height:0;overflow:hidden;opacity:0;">New project brief from ${name} — ${projectType}, ${budget}.</div>
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f7f8fa;padding:32px 16px;">
    <tr>
      <td align="center">
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="width:600px;max-width:600px;background-color:#ffffff;border-radius:14px;overflow:hidden;border:1px solid #e6e9ef;">
          <!-- Header -->
          <tr>
            <td style="background-color:#0a1628;padding:32px 40px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="font-family:Arial,Helvetica,sans-serif;font-size:18px;font-weight:700;letter-spacing:0.14em;color:#ffffff;">VYKRON</td>
                  <td align="right" style="font-family:'Courier New',monospace;font-size:11px;letter-spacing:0.1em;text-transform:uppercase;color:#5c8aff;">New brief</td>
                </tr>
              </table>
              <div style="margin-top:20px;font-family:Arial,Helvetica,sans-serif;font-size:24px;font-weight:600;color:#ffffff;line-height:1.3;">New project brief from ${name}</div>
              <div style="margin-top:8px;font-family:Arial,Helvetica,sans-serif;font-size:14px;color:rgba(247,248,250,0.65);">Submitted via the website contact form · ${escapeHtml(submittedAt)}</div>
            </td>
          </tr>
          <!-- Details -->
          <tr>
            <td style="padding:16px 40px 8px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                ${row("Name", name)}
                ${row("Email", `<a href="mailto:${email}" style="color:#2e6bff;text-decoration:none;">${email}</a>`)}
                ${row("Company", company)}
                ${row("Budget", budget)}
                ${row("Project type", projectType)}
              </table>
            </td>
          </tr>
          <!-- Message -->
          <tr>
            <td style="padding:16px 40px 8px;">
              <div style="font-family:'Courier New',monospace;font-size:11px;letter-spacing:0.08em;text-transform:uppercase;color:#5a6b85;margin-bottom:10px;">Message</div>
              <div style="background-color:#f7f8fa;border:1px solid #e6e9ef;border-left:3px solid #2e6bff;border-radius:8px;padding:18px 20px;font-family:Arial,Helvetica,sans-serif;font-size:15px;line-height:1.6;color:#0a1628;">${message}</div>
            </td>
          </tr>
          <!-- CTA -->
          <tr>
            <td style="padding:24px 40px 32px;">
              <a href="mailto:${email}?subject=${encodeURIComponent(`Re: your project brief`)}" style="display:inline-block;background-color:#2e6bff;color:#ffffff;font-family:Arial,Helvetica,sans-serif;font-size:14px;font-weight:600;text-decoration:none;padding:13px 26px;border-radius:8px;">Reply to ${name} →</a>
            </td>
          </tr>
          <!-- Footer -->
          <tr>
            <td style="background-color:#f7f8fa;padding:20px 40px;border-top:1px solid #e6e9ef;">
              <div style="font-family:Arial,Helvetica,sans-serif;font-size:12px;color:#5a6b85;line-height:1.5;">This message was sent automatically by the Vykron Technologies website. Reply directly to reach ${name}.</div>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_body" }, { status: 400 });
  }

  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, error: "validation", issues: parsed.error.flatten() },
      { status: 400 },
    );
  }

  const data = parsed.data;

  // Honeypot: a real visitor never fills this field. Report success without
  // sending, so the bot has no signal that it was caught.
  if (data.website) {
    return NextResponse.json({ ok: true });
  }

  const senderEmail = process.env.GMAIL_SENDER_EMAIL;
  // Gmail app passwords are shown in groups of four; spaces are cosmetic.
  const appPassword = process.env.GMAIL_APP_PASSWORD?.replace(/\s+/g, "");
  const recipients = (process.env.RECIPIENT_EMAIL || "")
    .split(",")
    .map((address) => address.trim())
    .filter(Boolean);

  // Without credentials, tell the client to fall back to a mailto: link.
  if (!senderEmail || !appPassword || recipients.length === 0) {
    return NextResponse.json({ ok: false, error: "no_email_service" });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: { user: senderEmail, pass: appPassword },
    });

    const submittedAt = new Intl.DateTimeFormat("en-US", {
      dateStyle: "medium",
      timeStyle: "short",
      timeZone: "America/Boise",
    }).format(new Date());

    await transporter.sendMail({
      from: `"Vykron Website" <${senderEmail}>`,
      to: recipients,
      replyTo: `"${data.name}" <${data.email}>`,
      subject: `New project brief from ${data.name}`,
      text: buildText(data),
      html: buildHtml(data, `${submittedAt} MT`),
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false, error: "send_failed" }, { status: 502 });
  }
}
