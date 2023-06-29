import React from 'react'
import NavBar from '../../CommonComponents/Navbar';
import CheckoutForm from './CheckoutForm';
// import AuthContext from '../../AuthProvider';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import StripeCheckout from 'react-stripe-checkout';
import 'dotenv/config'
console.log(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY)

const stripe = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY ?? '');

function CheckoutPage() {
  const options = {
    // Fully customizable with appearance API.
    appearance: {/*...*/},
    // clientSecret: (process.env.STRIPE_SECRET_KEY ?? ''
    clientSecret: process.env.REACT_APP_STRIPE_SECRET_KEY || ''
  }
  console.log(stripe)

  return (
    <div>
        <NavBar/>
        <Elements stripe={stripe} options={options}>
          <CheckoutForm/>
        </Elements>
    </div>
  )
}

export default CheckoutPage