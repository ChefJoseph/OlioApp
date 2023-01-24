import React from 'react'

function CartProductCards() {
  return (
    <div className="container py-3 mx-10 mt-10">
        <div id="cartheaders" className="flex justify-around text-4xl  border-b ">
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