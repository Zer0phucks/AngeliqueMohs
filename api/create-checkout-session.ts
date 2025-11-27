import type { VercelRequest, VercelResponse } from '@vercel/node';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2023-10-16',
});

export default async function handler(
  request: VercelRequest,
  response: VercelResponse,
) {
  if (request.method !== 'POST') {
    return response.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { items } = request.body;

    if (!items || !Array.isArray(items) || items.length === 0) {
      return response.status(400).json({ error: 'Items are required' });
    }

    // Get the origin from the request headers
    const origin = request.headers.origin || request.headers.referer?.split('/').slice(0, 3).join('/') || 'http://localhost:3000';

    // Helper to convert relative URLs to absolute URLs for Stripe
    const getAbsoluteImageUrl = (imageUrl: string): string => {
      if (!imageUrl) return '';
      // If already absolute, return as-is
      if (imageUrl.startsWith('http://') || imageUrl.startsWith('https://')) {
        return imageUrl;
      }
      // Convert relative URL to absolute
      return new URL(imageUrl.startsWith('/') ? imageUrl : `/${imageUrl}`, origin).href;
    };

    // Transform cart items into Stripe line items
    const lineItems = items.map((item: any) => ({
      price_data: {
        currency: 'usd',
        product_data: {
          name: item.title,
          images: item.imageUrl ? [getAbsoluteImageUrl(item.imageUrl)] : [],
          description: `Artwork: ${item.title}`,
        },
        unit_amount: Math.round(item.price * 100), // Convert dollars to cents
      },
      quantity: item.quantity || 1,
    }));

    // Create Stripe Checkout Session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: lineItems,
      mode: 'payment',
      success_url: `${origin}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/gallery?canceled=true`,
      metadata: {
        items: JSON.stringify(items.map((item: any) => ({ id: item.id, title: item.title }))),
      },
    });

    return response.status(200).json({ sessionId: session.id });
  } catch (error: any) {
    console.error('Error creating checkout session:', error);
    return response.status(500).json({ 
      error: error.message || 'Failed to create checkout session' 
    });
  }
}

