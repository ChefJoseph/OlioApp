import React, { useEffect} from 'react';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';

import AddressForm from './AddressForm';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
// const stripe = loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx');
// useEffect(() => {
//   // Load Stripe client-side
//   const loadStripeClient = async () => {
//     const stripe = await loadStripe(process.env.STRIPE_PUBLISHABLE_KEY ?? '');
//     // Use the stripe object
//     // For example, you can create an instance of Elements
//     // and pass the clientSecret or mode when creating the Elements group
//     // Example:
//     // const elements = stripe.elements({ clientSecret: YOUR_CLIENT_SECRET });
//     // Use the elements object as needed
//   };

//   loadStripeClient();
// }, []);

const stripe = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY ?? '');

function AddressMain() {
  const options = {
    // Fully customizable with appearance API.
    appearance: {/*...*/},
  };

  return (
    <Elements stripe={stripe} options={options}>
      <AddressForm />
    </Elements>
  );
}

export default AddressMain