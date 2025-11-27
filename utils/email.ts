// Email utility functions for sending emails via Resend API

export interface ContactFormData {
  name: string;
  email: string;
  inquiryType: string;
  message: string;
}

export interface OrderConfirmationData {
  customerEmail: string;
  customerName?: string;
  orderId: string;
  items: Array<{
    title: string;
    price: number;
    quantity: number;
  }>;
  total: number;
}

export const sendContactEmail = async (formData: ContactFormData): Promise<void> => {
  try {
    // Use relative URL for Vercel serverless functions (same domain)
    const apiUrl = import.meta.env.VITE_API_URL || '/api';
    
    const response = await fetch(`${apiUrl}/send-contact-email`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      throw new Error('Failed to send contact email');
    }
  } catch (error) {
    console.error('Error sending contact email:', error);
    throw error;
  }
};

export const sendOrderConfirmation = async (orderData: OrderConfirmationData): Promise<void> => {
  try {
    // Use relative URL for Vercel serverless functions (same domain)
    const apiUrl = import.meta.env.VITE_API_URL || '/api';
    
    const response = await fetch(`${apiUrl}/send-order-confirmation`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(orderData),
    });

    if (!response.ok) {
      throw new Error('Failed to send order confirmation email');
    }
  } catch (error) {
    console.error('Error sending order confirmation email:', error);
    throw error;
  }
};

