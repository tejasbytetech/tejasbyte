import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, subject, message, company, budget } = body;

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    // Send notification email to Tejasbyte
    const { error } = await resend.emails.send({
      from: "Tejasbyte Contact Form <contact@tejasbyte.com>",
      to: ["contact@tejasbyte.com"],
      replyTo: email,
      subject: subject
        ? `[Contact Form] ${subject}`
        : `[Contact Form] New message from ${name}`,
      html: `
        <div style="font-family: 'Inter', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f7f5ff; padding: 0;">

          <!-- Header -->
          <div style="background: linear-gradient(135deg, #1A1035 0%, #2D3A6E 100%); padding: 32px 40px; border-radius: 12px 12px 0 0;">
            <h1 style="color: #fff; font-size: 22px; font-weight: 800; margin: 0; letter-spacing: -0.02em;">
              New Contact Form Submission
            </h1>
            <p style="color: rgba(255,255,255,0.55); font-size: 13px; margin: 6px 0 0;">tejasbyte.com contact form</p>
          </div>

          <!-- Body -->
          <div style="background: #fff; padding: 32px 40px; border: 1px solid rgba(91,48,232,0.1); border-top: none;">

            <!-- Sender info -->
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f0eeff; width: 120px;">
                  <span style="font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; color: #9ca3af;">From</span>
                </td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f0eeff;">
                  <span style="font-size: 14px; font-weight: 600; color: #1A1035;">${name}</span>
                </td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f0eeff;">
                  <span style="font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; color: #9ca3af;">Email</span>
                </td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f0eeff;">
                  <a href="mailto:${email}" style="font-size: 14px; color: #5B30E8; text-decoration: none;">${email}</a>
                </td>
              </tr>
              ${company ? `
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f0eeff;">
                  <span style="font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; color: #9ca3af;">Company</span>
                </td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f0eeff;">
                  <span style="font-size: 14px; font-weight: 600; color: #1A1035;">${company}</span>
                </td>
              </tr>` : ""}
              ${budget ? `
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f0eeff;">
                  <span style="font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; color: #9ca3af;">Budget</span>
                </td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f0eeff;">
                  <span style="display: inline-block; padding: 3px 12px; background: rgba(91,48,232,0.08); border: 1px solid rgba(91,48,232,0.2); border-radius: 100px; font-size: 13px; font-weight: 600; color: #5B30E8;">${budget}</span>
                </td>
              </tr>` : ""}
              ${subject ? `
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f0eeff;">
                  <span style="font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; color: #9ca3af;">Subject</span>
                </td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f0eeff;">
                  <span style="font-size: 14px; font-weight: 600; color: #1A1035;">${subject}</span>
                </td>
              </tr>` : ""}
            </table>

            <!-- Message -->
            <div style="margin-bottom: 28px;">
              <p style="font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; color: #9ca3af; margin: 0 0 10px;">Message</p>
              <div style="background: #f7f5ff; border: 1px solid rgba(91,48,232,0.1); border-radius: 10px; padding: 20px 24px;">
                <p style="font-size: 14px; line-height: 1.75; color: #1A1035; margin: 0; white-space: pre-wrap;">${message}</p>
              </div>
            </div>

            <!-- Reply button -->
            <a href="mailto:${email}?subject=Re: ${subject || `Your message to Tejasbyte`}"
              style="display: inline-block; padding: 12px 28px; background: #2D3A6E; color: #fff; text-decoration: none; border-radius: 8px; font-size: 14px; font-weight: 700; letter-spacing: 0.02em;">
              Reply to ${name} →
            </a>
          </div>

          <!-- Footer -->
          <div style="padding: 20px 40px; text-align: center; border-radius: 0 0 12px 12px;">
            <p style="font-size: 12px; color: #9ca3af; margin: 0;">
              Tejasbyte Technologies · Kathmandu, Nepal ·
              <a href="https://www.tejasbyte.com" style="color: #5B30E8; text-decoration: none;">tejasbyte.com</a>
            </p>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: "Failed to send email." }, { status: 500 });
    }

    // Send auto-reply to the sender
    await resend.emails.send({
      from: "Tejasbyte Technologies <contact@tejasbyte.com>",
      to: [email],
      subject: "We received your message — Tejasbyte Technologies",
      html: `
        <div style="font-family: 'Inter', Arial, sans-serif; max-width: 600px; margin: 0 auto;">

          <!-- Header -->
          <div style="background: linear-gradient(135deg, #1A1035 0%, #2D3A6E 100%); padding: 32px 40px; border-radius: 12px 12px 0 0;">
            <h1 style="color: #fff; font-size: 22px; font-weight: 800; margin: 0;">Thanks, ${name}!</h1>
            <p style="color: rgba(255,255,255,0.55); font-size: 13px; margin: 6px 0 0;">We've received your message.</p>
          </div>

          <!-- Body -->
          <div style="background: #fff; padding: 32px 40px; border: 1px solid rgba(91,48,232,0.1); border-top: none;">
            <p style="font-size: 15px; line-height: 1.75; color: #1A1035; margin: 0 0 20px;">
              Your message has been received. Our team will review it and get back to you within <strong>24 hours</strong>.
            </p>

            <!-- What you sent -->
            <div style="background: #f7f5ff; border: 1px solid rgba(91,48,232,0.1); border-radius: 10px; padding: 20px 24px; margin-bottom: 28px;">
              <p style="font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; color: #9ca3af; margin: 0 0 10px;">Your message</p>
              <p style="font-size: 14px; line-height: 1.75; color: #1A1035; margin: 0; white-space: pre-wrap;">${message}</p>
            </div>

            <p style="font-size: 14px; color: rgba(26,16,53,0.55); margin: 0 0 24px;">
              While you wait, feel free to explore our work at
              <a href="https://www.tejasbyte.com/portfolio" style="color: #5B30E8; text-decoration: none;">tejasbyte.com/portfolio</a>.
            </p>

            <!-- Contact info -->
            <div style="border-top: 1px solid rgba(91,48,232,0.08); padding-top: 20px;">
              <p style="font-size: 13px; color: #9ca3af; margin: 0;">
                📍 Kathmandu, Nepal<br/>
                📞 +977 9849627282<br/>
                ✉️ contact@tejasbyte.com
              </p>
            </div>
          </div>

          <!-- Footer -->
          <div style="padding: 20px 40px; text-align: center;">
            <p style="font-size: 12px; color: #9ca3af; margin: 0;">
              © ${new Date().getFullYear()} Tejasbyte Technologies Pvt. Ltd. ·
              <a href="https://www.tejasbyte.com" style="color: #5B30E8; text-decoration: none;">tejasbyte.com</a>
            </p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });

  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json({ error: "Internal server error." }, { status: 500 });
  }
}
