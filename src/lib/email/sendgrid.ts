import sgMail from '@sendgrid/mail';

const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;
const SENDGRID_FROM = process.env.SENDGRID_FROM || 'Mukilteo Technical Solutions <info@mukilteotech.com>';

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
  replyTo?: string;
  from?: string;
};

export async function sendEmail(options: SendEmailOptions) {
  if (!SENDGRID_API_KEY) {
    return { ok: false, error: 'SENDGRID_API_KEY not configured' } as const;
  }

  const msg = {
    to: options.to,
    from: options.from || SENDGRID_FROM,
    subject: options.subject,
    text: options.text,
    html: options.html,
    replyTo: options.replyTo,
  } as sgMail.MailDataRequired;

  try {
    await sgMail.send(msg);
    return { ok: true } as const;
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Unknown SendGrid error';
    return { ok: false, error: message } as const;
  }
}
