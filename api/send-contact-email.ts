import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const CONTACT_EMAIL = 'nsnfrd@gmail.com';

export default async function handler(
  request: VercelRequest,
  response: VercelResponse,
) {
  if (request.method !== 'POST') {
    return response.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, inquiryType, message } = request.body;

    if (!name || !email || !inquiryType || !message) {
      return response.status(400).json({ error: 'All fields are required' });
    }

    // Get the origin for the from email domain
    const origin = request.headers.origin || request.headers.referer?.split('/').slice(0, 3).join('/') || '';
    const fromDomain = origin ? new URL(origin).hostname : 'onboarding.resend.dev';
    const fromEmail = `Portfolio Contact <noreply@${fromDomain}>`;

    // Email to the artist
    await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || fromEmail,
      to: CONTACT_EMAIL,
      subject: `New ${inquiryType} from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Inquiry Type:</strong> ${inquiryType}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
        <hr>
        <p><small>You can reply directly to this email to respond to ${name}.</small></p>
      `,
      replyTo: email,
    });

    // Confirmation email to the user
    await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || fromEmail,
      to: email,
      subject: 'Thank you for contacting Angelique Mohs',
      html: `
        <h2>Thank you for reaching out!</h2>
        <p>Dear ${name},</p>
        <p>Thank you for your ${inquiryType}. I have received your message and will get back to you as soon as possible.</p>
        <p>Best regards,<br>Angelique Mohs</p>
      `,
    });

    return response.status(200).json({ success: true, message: 'Email sent successfully' });
  } catch (error: any) {
    console.error('Error sending contact email:', error);
    return response.status(500).json({ 
      error: error.message || 'Failed to send email' 
    });
  }
}

