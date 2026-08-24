import { NextResponse } from "next/server";
import { Resend } from "resend";
import { contactFormSchema } from "@/lib/validations";

// Basic in-memory rate limiting for serverless functions
const submissionLog = new Map<string, number[]>();
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const MAX_LIMIT_PER_WINDOW = 5;

function isRateLimited(identifier: string): boolean {
  const now = Date.now();
  const timestamps = submissionLog.get(identifier) || [];
  const validTimestamps = timestamps.filter((t) => now - t < RATE_LIMIT_WINDOW);

  if (validTimestamps.length >= MAX_LIMIT_PER_WINDOW) {
    return true;
  }

  validTimestamps.push(now);
  submissionLog.set(identifier, validTimestamps);
  return false;
}

export async function POST(req: Request) {
  try {
    const ip = req.headers.get("x-forwarded-for") || "unknown";
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    const body = await req.json();
    const result = contactFormSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { error: "Invalid submission data." },
        { status: 400 }
      );
    }

    // Honeypot check for bots
    if (result.data.company) {
      return NextResponse.json({ success: true });
    }

    const { name, email, subject, message } = result.data;

    const RESEND_API_KEY = process.env.RESEND_API_KEY;
    const TO_EMAIL = process.env.CONTACT_TO_EMAIL || "jawadimustafa7@gmail.com";
    const FROM_EMAIL = process.env.CONTACT_FROM_EMAIL || "onboarding@resend.dev";

    if (!RESEND_API_KEY) {
      console.error("RESEND_API_KEY is not set.");
      return NextResponse.json(
        { error: "Contact form is not fully configured." },
        { status: 500 }
      );
    }

    const resend = new Resend(RESEND_API_KEY);

    await resend.emails.send({
      from: `Portfolio Contact <${FROM_EMAIL}>`,
      to: [TO_EMAIL],
      reply_to: email,
      subject: `Portfolio Contact: ${subject}`,
      html: `
        <div style="font-family: sans-serif; font-size: 16px; line-height: 1.5;">
          <h2>New message from your portfolio</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <hr style="border: none; border-top: 1px solid #eaeaea; margin: 20px 0;" />
          <p><strong>Message:</strong></p>
          <p style="white-space: pre-wrap;">${message}</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json(
      { error: "Something went wrong. Please try again later." },
      { status: 500 }
    );
  }
}
