import React from 'react'
import NavBar from '../../CommonComponents/Navbar'
import Footer from '../../CommonComponents/Footer'
import CartProductCards from './CartProductCards'

function Cart() {
  return (
    <div>
        <NavBar/>
        <h1>Cart</h1>
        <div>
           <CartProductCards/>
        </div>
        <div className="grid justify-items-end">
            Total
            <button>Checkout</button>
        </div>
        
        <Footer/>
    </div>
  )
}

export default Cart