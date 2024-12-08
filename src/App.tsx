import React from 'react';
import { PaymentForm } from './components/PaymentForm';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import type { PaymentFormData } from './types/payment';
import toast, { Toaster } from 'react-hot-toast';

function App() {
  // In a real application, this would be fetched from an API
  const mockAtomPrice = 7.85;

  const handlePayment = async (data: PaymentFormData) => {
    try {
      // This is where you would integrate with your backend
      // to process the payment and initiate the ATOM transfer
      console.log('Processing payment:', data);
      toast.success('Payment processed successfully! ATOM transfer initiated.');
    } catch (error) {
      toast.error('Payment failed. Please try again.');
      console.error('Payment error:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-md mx-auto pt-16 px-4">
        <div className="bg-white rounded-xl shadow-lg p-6 space-y-8">
          <Header atomPrice={mockAtomPrice} />
          <PaymentForm onSubmit={handlePayment} atomPrice={mockAtomPrice} />
          <Footer />
        </div>
      </div>
      <Toaster position="top-right" />
    </div>
  );
}

export default App;