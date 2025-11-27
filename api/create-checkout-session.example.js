/**
 * Example backend API endpoint for creating Stripe Checkout Sessions
 * 
 * This file shows how to implement the backend endpoint that the frontend calls.
 * You'll need to set up a backend server (Node.js/Express, Python/Flask, etc.)
 * and implement this endpoint.
 * 
 * Required: npm install stripe
 */

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

async function createCheckoutSession(req, res) {
  try {
    const { items } = req.body;

    // Transform cart items into Stripe line items
    const lineItems = items.map(item => ({
      price_data: {
        currency: 'usd',
        product_data: {
          name: item.title,
          images: [item.imageUrl], // Full URL to the image
          description: `Artwork: ${item.title}`,
        },
        unit_amount: item.price * 100, // Convert dollars to cents
      },
      quantity: item.quantity,
    }));

    // Create Stripe Checkout Session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: lineItems,
      mode: 'payment',
      success_url: `${req.headers.origin}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${req.headers.origin}/gallery?canceled=true`,
      metadata: {
        items: JSON.stringify(items.map(item => ({ id: item.id, title: item.title }))),
      },
    });

    res.json({ sessionId: session.id });
  } catch (error) {
    console.error('Error creating checkout session:', error);
    res.status(500).json({ error: error.message });
  }
}

module.exports = { createCheckoutSession };

