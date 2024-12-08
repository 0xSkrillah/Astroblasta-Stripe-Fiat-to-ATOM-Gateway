import React, { useState } from 'react';
import { CreditCard, Mail, DollarSign } from 'lucide-react';
import type { PaymentFormData } from '../types/payment';
import { formatCardNumber, formatExpiry } from '../utils/formatters';
import { FormInput } from './FormInput';

interface PaymentFormProps {
  onSubmit: (data: PaymentFormData) => void;
  atomPrice: number;
}

export function PaymentForm({ onSubmit, atomPrice }: PaymentFormProps) {
  const [formData, setFormData] = useState<PaymentFormData>({
    amount: 100,
    currency: 'USD',
    cardNumber: '',
    expiry: '',
    cvc: '',
    email: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    let formattedValue = value;

    if (name === 'cardNumber') {
      formattedValue = formatCardNumber(value);
    } else if (name === 'expiry') {
      formattedValue = formatExpiry(value);
    }

    setFormData((prev) => ({
      ...prev,
      [name]: formattedValue,
    }));
  };

  const estimatedAtom = formData.amount / atomPrice;

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <FormInput
          label="Amount (USD)"
          name="amount"
          type="number"
          value={formData.amount}
          onChange={handleInputChange}
          icon={DollarSign}
          min={10}
        />
        <p className="text-sm text-gray-600">
          Estimated ATOM: {estimatedAtom.toFixed(6)}
        </p>
      </div>

      <FormInput
        label="Card Number"
        name="cardNumber"
        type="text"
        value={formData.cardNumber}
        onChange={handleInputChange}
        icon={CreditCard}
        placeholder="4242 4242 4242 4242"
        maxLength={19}
      />

      <div className="grid grid-cols-2 gap-4">
        <FormInput
          label="Expiry Date"
          name="expiry"
          type="text"
          value={formData.expiry}
          onChange={handleInputChange}
          placeholder="MM/YY"
          maxLength={5}
        />

        <FormInput
          label="CVC"
          name="cvc"
          type="text"
          value={formData.cvc}
          onChange={handleInputChange}
          placeholder="123"
          maxLength={3}
        />
      </div>

      <FormInput
        label="Email"
        name="email"
        type="email"
        value={formData.email}
        onChange={handleInputChange}
        icon={Mail}
        placeholder="you@example.com"
      />

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
      >
        Purchase ATOM
      </button>
    </form>
  );
}