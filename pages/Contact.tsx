import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { sendContactEmail } from '../utils/email';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    inquiryType: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');
    
    try {
      await sendContactEmail(formData);
      setStatus('success');
      setFormData({ name: '', email: '', inquiryType: '', message: '' });
    } catch (error) {
      setStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'Failed to send message. Please try again.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="bg-art-50 min-h-screen py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          
          <div>
            <h1 className="font-serif text-4xl md:text-5xl text-art-900 mb-6">Get in Touch</h1>
            <p className="text-art-700 text-lg mb-8 leading-relaxed">
              Whether you are interested in purchasing a piece, commissioning a portrait, or simply want to say hello, I would love to hear from you.
            </p>
            
            <div className="space-y-6">
              <div>
                <h3 className="font-serif text-xl font-bold text-art-900">Studio Location</h3>
                <p className="text-art-600 mt-2">California, USA</p>
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold text-art-900">Email</h3>
                <p className="text-art-600 mt-2">nsnfrd@gmail.com</p>
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold text-art-900">Commission Status</h3>
                <p className="text-green-700 mt-2 font-medium bg-green-50 inline-block px-3 py-1 rounded-full text-sm">
                  Currently accepting new projects
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 shadow-sm rounded-sm">
            {status === 'success' ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <Send className="text-green-600" size={32} />
                </div>
                <h3 className="font-serif text-2xl text-art-900 mb-2">Message Sent</h3>
                <p className="text-art-600">Thank you for reaching out. I will get back to you shortly.</p>
                <button 
                  onClick={() => setStatus('idle')}
                  className="mt-6 text-sm underline text-art-900"
                >
                  Send another message
                </button>
              </div>
            ) : status === 'error' ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
                  <Send className="text-red-600" size={32} />
                </div>
                <h3 className="font-serif text-2xl text-art-900 mb-2">Error</h3>
                <p className="text-art-600 mb-4">{errorMessage}</p>
                <button 
                  onClick={() => setStatus('idle')}
                  className="mt-6 text-sm underline text-art-900"
                >
                  Try again
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-art-700 mb-1">Name</label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-art-200 rounded-sm focus:ring-1 focus:ring-art-500 focus:border-art-500 bg-art-50"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-art-700 mb-1">Email</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-art-200 rounded-sm focus:ring-1 focus:ring-art-500 focus:border-art-500 bg-art-50"
                  />
                </div>
                <div>
                  <label htmlFor="inquiryType" className="block text-sm font-medium text-art-700 mb-1">Inquiry Type</label>
                  <select
                    name="inquiryType"
                    id="inquiryType"
                    required
                    value={formData.inquiryType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-art-200 rounded-sm focus:ring-1 focus:ring-art-500 focus:border-art-500 bg-art-50"
                  >
                    <option value="">Select an inquiry type</option>
                    <option value="general inquiry">General Inquiry</option>
                    <option value="purchase inquiry">Purchase Inquiry</option>
                    <option value="commission request">Commission Request</option>
                    <option value="collaboration">Collaboration</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-art-700 mb-1">Message</label>
                  <textarea
                    name="message"
                    id="message"
                    rows={5}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-art-200 rounded-sm focus:ring-1 focus:ring-art-500 focus:border-art-500 bg-art-50"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full bg-art-900 text-white py-4 px-6 rounded-sm uppercase tracking-widest font-bold hover:bg-art-800 transition-colors disabled:opacity-50"
                >
                  {status === 'submitting' ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;