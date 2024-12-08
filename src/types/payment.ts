export interface PaymentFormData {
  amount: number;
  currency: string;
  cardNumber: string;
  expiry: string;
  cvc: string;
  email: string;
}

export interface ExchangeRate {
  atomPrice: number;
  lastUpdated: Date;
}