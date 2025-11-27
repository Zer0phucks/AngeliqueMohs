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
    const { customerEmail, customerName, orderId, items, total } = request.body;

    if (!customerEmail || !orderId || !items || !Array.isArray(items)) {
      return response.status(400).json({ error: 'Missing required fields' });
    }

    // Get the origin for the from email domain
    const origin = request.headers.origin || request.headers.referer?.split('/').slice(0, 3).join('/') || '';
    const fromDomain = origin ? new URL(origin).hostname : 'onboarding.resend.dev';
    const fromEmail = `Portfolio Orders <noreply@${fromDomain}>`;

    const itemsList = items
      .map((item: any) => `<li>${item.title} - $${item.price.toFixed(2)} x ${item.quantity || 1}</li>`)
      .join('');

    // Email to customer
    await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || fromEmail,
      to: customerEmail,
      subject: 'Order Confirmation - Angelique Mohs Fine Art',
      html: `
        <h2>Thank you for your purchase!</h2>
        <p>Dear ${customerName || 'Valued Customer'},</p>
        <p>Your order has been confirmed. We will process your order and contact you shortly regarding shipping details.</p>
        <h3>Order Details</h3>
        <p><strong>Order ID:</strong> ${orderId}</p>
        <ul>
          ${itemsList}
        </ul>
        <p><strong>Total:</strong> $${total.toFixed(2)}</p>
        <p>If you have any questions, please don't hesitate to contact us.</p>
        <p>Best regards,<br>Angelique Mohs</p>
      `,
    });

    // Notification email to artist
    await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || fromEmail,
      to: CONTACT_EMAIL,
      subject: `New Order: ${orderId}`,
      html: `
        <h2>New Order Received</h2>
        <p><strong>Order ID:</strong> ${orderId}</p>
        <p><strong>Customer:</strong> ${customerName || 'N/A'} (${customerEmail})</p>
        <h3>Order Items:</h3>
        <ul>
          ${itemsList}
        </ul>
        <p><strong>Total:</strong> $${total.toFixed(2)}</p>
      `,
    });

    return response.status(200).json({ success: true, message: 'Order confirmation email sent' });
  } catch (error: any) {
    console.error('Error sending order confirmation email:', error);
    return response.status(500).json({ 
      error: error.message || 'Failed to send email' 
    });
  }
}

