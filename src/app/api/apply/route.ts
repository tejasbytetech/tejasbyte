import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const fd = await req.formData();

    const name       = fd.get("name")       as string;
    const email      = fd.get("email")      as string;
    const phone      = fd.get("phone")      as string | null;
    const role       = fd.get("role")       as string;
    const experience = fd.get("experience") as string | null;
    const portfolio  = fd.get("portfolio")  as string | null;
    const cover      = fd.get("cover")      as string | null;
    const resumeFile = fd.get("resume")     as File | null;

    if (!name || !email || !role) {
      return NextResponse.json({ error: "Name, email, and role are required." }, { status: 400 });
    }

    // Build optional attachment array
    type Attachment = { filename: string; content: Buffer; contentType: string };
    const attachments: Attachment[] = [];

    if (resumeFile && resumeFile.size > 0) {
      const arrayBuffer = await resumeFile.arrayBuffer();
      attachments.push({
        filename:    resumeFile.name,
        content:     Buffer.from(arrayBuffer),
        contentType: resumeFile.type || "application/octet-stream",
      });
    }

    const resumeRow = attachments.length > 0
      ? `<tr>
          <td style="padding:10px 0;border-bottom:1px solid #f0eeff;width:130px;">
            <span style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.08em;color:#9ca3af;">Resume</span>
          </td>
          <td style="padding:10px 0;border-bottom:1px solid #f0eeff;font-size:14px;color:#1A1035;">
            📎 ${attachments[0].filename} (attached)
          </td>
        </tr>`
      : "";

    // ── Notification email to Tejasbyte ──
    const { error } = await resend.emails.send({
      from:        "Tejasbyte Careers <contact@tejasbyte.com>",
      to:          ["contact@tejasbyte.com"],
      replyTo:     email,
      subject:     `[Job Application] ${name} — ${role}`,
      attachments: attachments,
      html: `
        <div style="font-family:'Inter',Arial,sans-serif;max-width:600px;margin:0 auto;">
          <div style="background:linear-gradient(135deg,#1A1035 0%,#2D3A6E 100%);padding:32px 40px;border-radius:12px 12px 0 0;">
            <h1 style="color:#fff;font-size:20px;font-weight:800;margin:0;">New Job Application</h1>
            <p style="color:rgba(255,255,255,0.5);font-size:13px;margin:6px 0 0;">${role}</p>
          </div>
          <div style="background:#fff;padding:32px 40px;border:1px solid rgba(91,48,232,0.1);border-top:none;">
            <table style="width:100%;border-collapse:collapse;margin-bottom:24px;">
              <tr>
                <td style="padding:10px 0;border-bottom:1px solid #f0eeff;width:130px;"><span style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.08em;color:#9ca3af;">Name</span></td>
                <td style="padding:10px 0;border-bottom:1px solid #f0eeff;font-size:14px;font-weight:600;color:#1A1035;">${name}</td>
              </tr>
              <tr>
                <td style="padding:10px 0;border-bottom:1px solid #f0eeff;"><span style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.08em;color:#9ca3af;">Email</span></td>
                <td style="padding:10px 0;border-bottom:1px solid #f0eeff;"><a href="mailto:${email}" style="font-size:14px;color:#5B30E8;text-decoration:none;">${email}</a></td>
              </tr>
              ${phone ? `
              <tr>
                <td style="padding:10px 0;border-bottom:1px solid #f0eeff;"><span style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.08em;color:#9ca3af;">Phone</span></td>
                <td style="padding:10px 0;border-bottom:1px solid #f0eeff;font-size:14px;color:#1A1035;">${phone}</td>
              </tr>` : ""}
              <tr>
                <td style="padding:10px 0;border-bottom:1px solid #f0eeff;"><span style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.08em;color:#9ca3af;">Role</span></td>
                <td style="padding:10px 0;border-bottom:1px solid #f0eeff;font-size:14px;font-weight:600;color:#5B30E8;">${role}</td>
              </tr>
              ${experience ? `
              <tr>
                <td style="padding:10px 0;border-bottom:1px solid #f0eeff;"><span style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.08em;color:#9ca3af;">Experience</span></td>
                <td style="padding:10px 0;border-bottom:1px solid #f0eeff;font-size:14px;color:#1A1035;">${experience}</td>
              </tr>` : ""}
              ${portfolio ? `
              <tr>
                <td style="padding:10px 0;border-bottom:1px solid #f0eeff;"><span style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.08em;color:#9ca3af;">Portfolio</span></td>
                <td style="padding:10px 0;border-bottom:1px solid #f0eeff;"><a href="${portfolio}" style="font-size:14px;color:#5B30E8;text-decoration:none;">${portfolio}</a></td>
              </tr>` : ""}
              ${resumeRow}
            </table>
            ${cover ? `
            <div style="margin-bottom:28px;">
              <p style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.08em;color:#9ca3af;margin:0 0 10px;">Cover Letter</p>
              <div style="background:#f7f5ff;border:1px solid rgba(91,48,232,0.1);border-radius:10px;padding:20px 24px;">
                <p style="font-size:14px;line-height:1.75;color:#1A1035;margin:0;white-space:pre-wrap;">${cover}</p>
              </div>
            </div>` : ""}
            <a href="mailto:${email}?subject=Re: Your application for ${role} at Tejasbyte" style="display:inline-block;padding:12px 28px;background:#2D3A6E;color:#fff;text-decoration:none;border-radius:8px;font-size:14px;font-weight:700;">Reply to Applicant →</a>
          </div>
          <div style="padding:16px 40px;text-align:center;">
            <p style="font-size:12px;color:#9ca3af;margin:0;">Tejasbyte Technologies · <a href="https://www.tejasbyte.com/careers" style="color:#5B30E8;text-decoration:none;">careers page</a></p>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error("Resend notification error:", error);
      return NextResponse.json({ error: "Failed to send application." }, { status: 500 });
    }

    // ── Auto-reply to applicant ──
    await resend.emails.send({
      from:    "Tejasbyte Technologies <contact@tejasbyte.com>",
      to:      [email],
      subject: `We received your application — ${role} at Tejasbyte`,
      html: `
        <div style="font-family:'Inter',Arial,sans-serif;max-width:600px;margin:0 auto;">
          <div style="background:linear-gradient(135deg,#1A1035 0%,#2D3A6E 100%);padding:32px 40px;border-radius:12px 12px 0 0;">
            <h1 style="color:#fff;font-size:20px;font-weight:800;margin:0;">Thanks for applying, ${name}!</h1>
            <p style="color:rgba(255,255,255,0.5);font-size:13px;margin:6px 0 0;">${role} — Tejasbyte Technologies</p>
          </div>
          <div style="background:#fff;padding:32px 40px;border:1px solid rgba(91,48,232,0.1);border-top:none;">
            <p style="font-size:15px;line-height:1.8;color:#1A1035;margin:0 0 20px;">
              We've received your application for the <strong>${role}</strong> position and we're genuinely excited to review it.
            </p>
            <p style="font-size:15px;line-height:1.8;color:#1A1035;margin:0 0 20px;">
              Our team carefully evaluates every application. We'll review your details and get back to you with next steps.
            </p>
            <div style="background:#f7f5ff;border:1px solid rgba(91,48,232,0.12);border-radius:12px;padding:20px 24px;margin-bottom:28px;">
              <p style="font-size:13px;font-weight:700;color:#5B30E8;margin:0 0 12px;text-transform:uppercase;letter-spacing:.06em;">What happens next</p>
              <table style="width:100%;border-collapse:collapse;">
                <tr><td style="padding:6px 0;vertical-align:top;width:24px;font-size:14px;">1.</td><td style="padding:6px 0;font-size:14px;line-height:1.6;color:#1A1035;">Our engineering team reviews your application</td></tr>
                <tr><td style="padding:6px 0;vertical-align:top;font-size:14px;">2.</td><td style="padding:6px 0;font-size:14px;line-height:1.6;color:#1A1035;">If there's a match, we'll reach out to schedule a conversation</td></tr>
                <tr><td style="padding:6px 0;vertical-align:top;font-size:14px;">3.</td><td style="padding:6px 0;font-size:14px;line-height:1.6;color:#1A1035;">We aim to respond to all applications within 5–7 business days</td></tr>
              </table>
            </div>
            <p style="font-size:14px;line-height:1.75;color:rgba(26,16,53,0.55);margin:0 0 24px;">
              In the meantime, feel free to explore our work at <a href="https://www.tejasbyte.com/portfolio" style="color:#5B30E8;text-decoration:none;">tejasbyte.com/portfolio</a>.
            </p>
            <div style="border-top:1px solid rgba(91,48,232,0.08);padding-top:20px;">
              <p style="font-size:13px;color:#9ca3af;margin:0;">
                ✉️ contact@tejasbyte.com<br/>
                🌐 www.tejasbyte.com
              </p>
            </div>
          </div>
          <div style="padding:16px 40px;text-align:center;">
            <p style="font-size:12px;color:#9ca3af;margin:0;">© ${new Date().getFullYear()} Tejasbyte Technologies Pvt. Ltd.</p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Apply API error:", err);
    return NextResponse.json({ error: "Internal server error." }, { status: 500 });
  }
}
