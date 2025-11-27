/**
 * Example backend API endpoints for sending emails via Resend
 * 
 * This file shows how to implement the backend endpoints that the frontend calls.
 * You'll need to set up a backend server and implement these endpoints.
 * 
 * Required: npm install resend
 */

const { Resend } = require('resend');

const resend = new Resend(process.env.RESEND_API_KEY);
const CONTACT_EMAIL = 'nsnfrd@gmail.com';

/**
 * Send contact form email
 * POST /api/send-contact-email
 */
async function sendContactEmail(req, res) {
  try {
    const { name, email, inquiryType, message } = req.body;

    // Email to the artist
    await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>', // Update with your verified domain
      to: CONTACT_EMAIL,
      subject: `New ${inquiryType} from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Inquiry Type:</strong> ${inquiryType}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
      replyTo: email,
    });

    // Confirmation email to the user
    await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>', // Update with your verified domain
      to: email,
      subject: 'Thank you for contacting Angelique Mohs',
      html: `
        <h2>Thank you for reaching out!</h2>
        <p>Dear ${name},</p>
        <p>Thank you for your ${inquiryType}. I have received your message and will get back to you as soon as possible.</p>
        <p>Best regards,<br>Angelique Mohs</p>
      `,
    });

    res.json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending contact email:', error);
    res.status(500).json({ error: error.message });
  }
}

/**
 * Send order confirmation email
 * POST /api/send-order-confirmation
 */
async function sendOrderConfirmation(req, res) {
  try {
    const { customerEmail, customerName, orderId, items, total } = req.body;

    const itemsList = items
      .map(item => `<li>${item.title} - $${item.price.toFixed(2)} x ${item.quantity}</li>`)
      .join('');

    // Email to customer
    await resend.emails.send({
      from: 'Portfolio Orders <onboarding@resend.dev>', // Update with your verified domain
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
      from: 'Portfolio Orders <onboarding@resend.dev>', // Update with your verified domain
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

    res.json({ success: true, message: 'Order confirmation email sent' });
  } catch (error) {
    console.error('Error sending order confirmation email:', error);
    res.status(500).json({ error: error.message });
  }
}

/**
 * Get order details from Stripe session
 * GET /api/get-order-details?session_id=xxx
 */
async function getOrderDetails(req, res) {
  try {
    const { session_id } = req.query;
    
    // You'll need to use Stripe SDK to retrieve session details
    const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
    const session = await stripe.checkout.sessions.retrieve(session_id, {
      expand: ['line_items'],
    });

    const items = session.line_items.data.map(item => ({
      title: item.description || item.price.product.name,
      price: item.price.unit_amount / 100,
      quantity: item.quantity,
    }));

    res.json({
      customerEmail: session.customer_details?.email,
      customerName: session.customer_details?.name,
      items,
      total: session.amount_total / 100,
    });
  } catch (error) {
    console.error('Error fetching order details:', error);
    res.status(500).json({ error: error.message });
  }
}

module.exports = {
  sendContactEmail,
  sendOrderConfirmation,
  getOrderDetails,
};

