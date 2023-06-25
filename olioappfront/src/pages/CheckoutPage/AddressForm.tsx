import React from 'react';
import {AddressElement, PaymentElement} from '@stripe/react-stripe-js';

const AddressForm = () => {
  return (
    <form>
      <h3>Shipping</h3>
      <AddressElement options={{mode: 'shipping'}} />
      <h3>Payment Element</h3>
      <PaymentElement/>
    </form>
    
  );
};

export default AddressForm;