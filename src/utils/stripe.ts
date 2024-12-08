import { loadStripe } from '@stripe/stripe-js';

// In a real application, this would be an environment variable
const STRIPE_PUBLIC_KEY = 'pk_test_your_key';

export const stripePromise = loadStripe(STRIPE_PUBLIC_KEY);