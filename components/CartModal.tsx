import React, { useState } from 'react';
import { X, Trash2, Loader2 } from 'lucide-react';
import { CartItem } from '../types';
import { redirectToCheckout } from '../utils/stripe';

interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onRemove: (id: string) => void;
}

const CartModal: React.FC<CartModalProps> = ({ isOpen, onClose, items, onRemove }) => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);

  if (!isOpen) return null;

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleCheckout = async () => {
    if (items.length === 0) return;

    setIsProcessing(true);
    setError(null);

    try {
      await redirectToCheckout(items);
      // If successful, the user will be redirected to Stripe Checkout
      // The cart will be cleared after successful payment (handled by success page)
    } catch (err) {
      console.error('Checkout error:', err);
      setError(err instanceof Error ? err.message : 'Failed to process checkout. Please try again.');
      setIsProcessing(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[60] overflow-y-auto">
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity" onClick={onClose}></div>
      
      <div className="flex min-h-full items-end justify-center p-4 sm:items-center sm:p-0">
        <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
          
          <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
            <div className="flex justify-between items-center mb-6 border-b border-art-100 pb-4">
              <h3 className="text-xl font-serif font-bold text-art-900">Your Cart</h3>
              <button onClick={onClose} className="text-art-400 hover:text-art-600">
                <X size={24} />
              </button>
            </div>

            {items.length === 0 ? (
              <div className="text-center py-8">
                <p className="text-art-500 mb-4">Your cart is currently empty.</p>
                <button onClick={onClose} className="text-art-900 font-bold underline">Continue browsing</button>
              </div>
            ) : (
              <div className="space-y-4 max-h-[60vh] overflow-y-auto">
                {items.map((item) => (
                  <div key={item.id} className="flex items-center space-x-4 py-2">
                    <img 
                      src={item.imageUrl} 
                      alt={item.title} 
                      className="h-16 w-16 object-cover rounded-md border border-art-200"
                    />
                    <div className="flex-1">
                      <h4 className="font-serif font-medium text-art-900">{item.title}</h4>
                      <p className="text-sm text-art-500">{item.category}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-art-900">${item.price}</p>
                      <button 
                        onClick={() => onRemove(item.id)}
                        className="text-red-500 text-xs mt-1 flex items-center justify-end hover:text-red-700"
                      >
                        <Trash2 size={12} className="mr-1" /> Remove
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {items.length > 0 && (
            <div className="bg-art-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6 border-t border-art-200">
              <div className="w-full">
                <div className="flex justify-between items-center mb-4 text-lg font-bold">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
                {error && (
                  <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-md">
                    <p className="text-sm text-red-600">{error}</p>
                  </div>
                )}
                <button
                  type="button"
                  disabled={isProcessing}
                  className="inline-flex w-full justify-center items-center rounded-md bg-art-900 px-3 py-3 text-sm font-semibold text-white shadow-sm hover:bg-art-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  onClick={handleCheckout}
                >
                  {isProcessing ? (
                    <>
                      <Loader2 className="animate-spin mr-2" size={16} />
                      Processing...
                    </>
                  ) : (
                    'Proceed to Checkout'
                  )}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartModal;