import sgMail from '@sendgrid/mail';

const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;
const DEFAULT_FROM_EMAIL = process.env.SENDGRID_FROM_EMAIL || 'info@mukilteotech.com';
const DEFAULT_FROM_NAME = process.env.SENDGRID_FROM_NAME || 'Mukilteo Technical Solutions';

if (SENDGRID_API_KEY) {
  sgMail.setApiKey(SENDGRID_API_KEY);
} else {
  console.warn('SENDGRID_API_KEY is not set. Emails will not be sent.');
}

export type SendEmailOptions = {
  to: string | string[];
  subject: string;
  text?: string;
  html?: string;
  replyToEmail?: string;
  replyToName?: string;
  fromEmail?: string;
  fromName?: string;
};

export async function sendEmail(options: SendEmailOptions) {
  if (!SENDGRID_API_KEY) {
    return { ok: false, error: 'SENDGRID_API_KEY not configured' } as const;
  }

  const msg = {
    to: options.to,
    from: { email: options.fromEmail || DEFAULT_FROM_EMAIL, name: options.fromName || DEFAULT_FROM_NAME },
    subject: options.subject,
    text: options.text,
    html: options.html,
    replyTo: options.replyToEmail ? { email: options.replyToEmail, name: options.replyToName } : undefined,
  } as sgMail.MailDataRequired;

  try {
    await sgMail.send(msg);
    return { ok: true } as const;
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Unknown SendGrid error';
    return { ok: false, error: message } as const;
  }
}
