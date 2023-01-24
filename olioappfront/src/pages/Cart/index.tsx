import React from 'react'
import NavBar from '../../CommonComponents/Navbar'
import Footer from '../../CommonComponents/Footer'
import CartProductCards from './CartProductCards'

function Cart() {
  return (
    <div>
        <NavBar/>
        <h1>Cart</h1>
{/* cartheaders */}
        <div id="cartheaders" className="container py-3 mx-10 mt-10">
            <div id="cartheaders" className="flex justify-around text-4xl  border-b ">
                <p>Product</p>
                <p>Unit Price</p>
                <p>Quantity</p>
                <p>Price</p>
                <button>Clear cart</button>
            </div>
        </div>
{/* renderCartCards         */}
        <div>
           <CartProductCards/>
        </div>
{/* Totals and Checkout button */}
        <div className="grid justify-items-end">
            Total
            <button>Checkout</button>
        </div>
        
        <Footer/>
    </div>
  )
}

export default Cart