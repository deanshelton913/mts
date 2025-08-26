import { NextResponse } from 'next/server';
import { sendEmail } from '@/lib/email/sendgrid';

const EMAIL_TO = process.env.EMAIL_TO || 'info@mukilteotech.com';
const EMAIL_FROM = process.env.SENDGRID_FROM || process.env.EMAIL_FROM || 'Mukilteo Technical Solutions <no-reply@mukilteotech.com>';

export async function POST(request: Request) {
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
      from: EMAIL_FROM,
      replyTo: email,
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
