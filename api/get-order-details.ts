import type { VercelRequest, VercelResponse } from '@vercel/node';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2024-11-20.acacia',
});

export default async function handler(
  request: VercelRequest,
  response: VercelResponse,
) {
  if (request.method !== 'GET') {
    return response.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { session_id } = request.query;

    if (!session_id || typeof session_id !== 'string') {
      return response.status(400).json({ error: 'Session ID is required' });
    }

    // Retrieve Stripe Checkout Session
    const session = await stripe.checkout.sessions.retrieve(session_id, {
      expand: ['line_items'],
    });

    if (!session.line_items || !session.line_items.data) {
      return response.status(404).json({ error: 'Session not found' });
    }

    const items = session.line_items.data.map((item: any) => ({
      title: item.description || item.price?.product?.name || 'Artwork',
      price: (item.price?.unit_amount || 0) / 100,
      quantity: item.quantity || 1,
    }));

    return response.status(200).json({
      customerEmail: session.customer_details?.email,
      customerName: session.customer_details?.name,
      items,
      total: (session.amount_total || 0) / 100,
    });
  } catch (error: any) {
    console.error('Error fetching order details:', error);
    return response.status(500).json({ 
      error: error.message || 'Failed to fetch order details' 
    });
  }
}

