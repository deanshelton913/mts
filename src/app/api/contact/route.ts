import { NextResponse } from 'next/server';
import { sendEmail } from '@/lib/email/sendgrid';

const EMAIL_TO = process.env.EMAIL_TO || 'info@mukilteotech.com';
const DEFAULT_FROM_EMAIL = process.env.SENDGRID_FROM_EMAIL || process.env.EMAIL_FROM || 'info@mukilteotech.com';
const DEFAULT_FROM_NAME = process.env.SENDGRID_FROM_NAME || 'Mukilteo Technical Solutions';

// Very simple in-memory rate limiter: 5 requests per 60s per IP (resets on server restart)
const RATE_LIMIT_WINDOW_MS = 60 * 1000;
const RATE_LIMIT_MAX = 5;
const ipHits = new Map<string, { count: number; resetAt: number }>();

function getClientIp(req: Request) {
  const forwarded = req.headers.get('x-forwarded-for');
  if (forwarded) return forwarded.split(',')[0].trim();
  return 'unknown';
}

function rateLimit(req: Request) {
  const ip = getClientIp(req);
  const now = Date.now();
  const entry = ipHits.get(ip);
  if (!entry || now > entry.resetAt) {
    ipHits.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return { allowed: true } as const;
  }
  if (entry.count >= RATE_LIMIT_MAX) {
    const retryAfter = Math.ceil((entry.resetAt - now) / 1000);
    return { allowed: false, retryAfter } as const;
  }
  entry.count += 1;
  return { allowed: true } as const;
}

export async function POST(request: Request) {
  const rl = rateLimit(request);
  if (!rl.allowed) {
    return NextResponse.json({ ok: false, error: 'Too many requests' }, { status: 429, headers: { 'Retry-After': String(rl.retryAfter) } });
  }
  try {
    const body = await request.json();
    const { name, email, phone, company, message } = body || {};

    if (!name || !email || !message) {
      return NextResponse.json(
        { ok: false, error: 'Missing required fields: name, email, message' },
        { status: 400 }
      );
    }

    const subject = `New contact form submission from ${name}`;
    const text = [
      `Name: ${name}`,
      `Email: ${email}`,
      phone ? `Phone: ${phone}` : undefined,
      company ? `Company: ${company}` : undefined,
      '',
      'Message:',
      message,
    ]
      .filter(Boolean)
      .join('\n');

    const html = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
      ${company ? `<p><strong>Company:</strong> ${company}</p>` : ''}
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, '<br/>')}</p>
    `;

    const result = await sendEmail({
      to: EMAIL_TO,
      fromEmail: DEFAULT_FROM_EMAIL,
      fromName: DEFAULT_FROM_NAME,
      replyToEmail: email,
      replyToName: name,
      subject,
      text,
      html,
    });

    if (!result.ok) {
      return NextResponse.json({ ok: false, error: result.error }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Unknown error';
    return NextResponse.json({ ok: false, error: message }, { status: 500 });
  }
}
