import React from 'react'
import NavBar from '../../CommonComponents/Navbar'
import Footer from '../../CommonComponents/Footer'

function Cart() {
  return (
    <div>
        <NavBar/>
        <h1>Cart</h1>
        <div>
            CartProductCards
        </div>
        <div>
            Total
        </div>
        <button>Checkout</button>
        <Footer/>
    </div>
  )
}

export default Cart