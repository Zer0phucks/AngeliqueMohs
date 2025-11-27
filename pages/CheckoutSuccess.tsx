import React, { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';
import { sendOrderConfirmation } from '../utils/email';

const CheckoutSuccess: React.FC = () => {
  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get('session_id');
  const [loading, setLoading] = useState(true);
  const [orderData, setOrderData] = useState<any>(null);

  useEffect(() => {
    // Fetch order details from backend and send confirmation email
    const fetchOrderAndSendEmail = async () => {
      try {
        // Use relative URL for Vercel serverless functions (same domain)
        const apiUrl = import.meta.env.VITE_API_URL || '/api';
        
        // Fetch order details from Stripe session
        const response = await fetch(`${apiUrl}/get-order-details?session_id=${sessionId}`);
        
        if (response.ok) {
          const data = await response.json();
          setOrderData(data);
          
          // Send order confirmation email
          if (data.customerEmail) {
            await sendOrderConfirmation({
              customerEmail: data.customerEmail,
              customerName: data.customerName,
              orderId: sessionId || '',
              items: data.items || [],
              total: data.total || 0,
            });
          }
        }
      } catch (error) {
        console.error('Error fetching order details:', error);
        // Continue to show success page even if email fails
      } finally {
        setLoading(false);
      }
    };

    if (sessionId) {
      fetchOrderAndSendEmail();
    } else {
      setLoading(false);
    }
  }, [sessionId]);

  return (
    <div className="bg-art-50 min-h-screen py-16 md:py-24">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-8 md:p-16 shadow-sm rounded-sm text-center">
          {loading ? (
            <div className="py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-art-900 mx-auto"></div>
              <p className="mt-4 text-art-600">Processing your order...</p>
            </div>
          ) : (
            <>
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="text-green-600" size={48} />
              </div>
              <h1 className="font-serif text-4xl md:text-5xl text-art-900 mb-4">
                Payment Successful!
              </h1>
              <p className="text-art-700 text-lg mb-8">
                Thank you for your purchase. Your order has been confirmed and you will receive an email confirmation shortly.
              </p>
              {sessionId && (
                <p className="text-sm text-art-500 mb-8">
                  Order ID: {sessionId}
                </p>
              )}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/gallery"
                  className="inline-block bg-art-900 text-white px-8 py-3 rounded-sm uppercase tracking-widest text-sm font-bold hover:bg-art-800 transition-colors"
                >
                  Continue Shopping
                </Link>
                <Link
                  to="/"
                  className="inline-block border border-art-900 text-art-900 px-8 py-3 rounded-sm uppercase tracking-widest text-sm font-bold hover:bg-art-50 transition-colors"
                >
                  Return Home
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default CheckoutSuccess;

