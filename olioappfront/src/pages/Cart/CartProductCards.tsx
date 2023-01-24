import React from 'react'

function CartProductCards() {
  return (
    <div>
        <div id="cartheaders">
            <p>Product</p>
            <p>Unit Price</p>
            <p>Quantity</p>
            <p>Price</p>
            <button>Clear cart</button>
        </div>
        <div id="cartcards">
            renderCartDetails
        </div>
        
    </div>
  )
}

export default CartProductCards