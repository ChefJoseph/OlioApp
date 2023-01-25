import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../../AuthProvider';

function CheckoutForm() {
  const {
      subtotal, cartTotalItems, shoppingCart, user, setShoppingCart,
      } = useContext(AuthContext);
    const subtotalFixed = parseFloat(subtotal.toFixed(2))
    const tax = parseFloat((subtotalFixed * 0.08875).toFixed(2));
    const shippingCost = parseFloat((10.00).toFixed(2));
    const total = (subtotalFixed + tax + shippingCost).toFixed(2);


  return (
    <div>
        <h1 className="text-2xl mb-10 max-h-screen">Checkout Page</h1>
        <div id="billingContainer" className="flex justify-between ">
{/* Shipping Info  */}
            <div id="billingFields" className="w-1/2 grid grid-col-1 p-5 shadow-md">
                <p className="text-lg mb-5">Shipping Address</p>
                <label>Full Name</label>
                <input type="text"></input>
                <label>Street Address</label>
                <input type="text"></input>
                <label>Apt/Unit</label>
                <input type="text"></input>
                <label>City</label>
                <input type="text"></input>
                <label>State</label>
                <input type="text"></input>
                <label>Zip code</label>
                <input type="text"></input>
                <label>Phone number</label>
                <input type="text"></input>
                <div className="grid grid-col-1">
                    <label className= "pt-5 ">        
                        <input type="checkbox" id="checkbox" className="text-gray-600 bg-gray-100 border-gray-300 mb-1 mr-1"/> Shipping address same as billing
                    </label>
                    <button className="w-1/2 text-center bg-slate-900 text-white mt-5 py-2 px-10 rounded-md hover:bg-slate-500 text-xl">
                        Save and Continue
                    </button>
                </div>
                
            </div>
{/* Order Summary  */}
            <div id="orderSummary" className="w-1/3 grid grid-col-1 ">
                <div className="sticky top-5">
                    <div className="h-64 p-5 shadow-md">
                        <p className="text-lg mb-5 ">Order summary</p>
                        <div className="">
                          <div id="subtotal" className="py-1">
                              <p >
                                  Subtotal
                                  <span className="float-right">{subtotal}</span>
                              </p>
                              
                          </div>
                          <div id="shipping" className="py-1">
                              <p>
                                  Shipping
                                  <span className="float-right">{shippingCost}.00</span>
                              </p>
                              
                          </div>
                          <div id="discounts" className="py-1">
                              <p>
                                  Discounts
                                  <span className="float-right">Price</span>
                              </p>
                              
                          </div>
                          <div id="estTax" className="py-1">
                              <p>
                                  Estimated Tax
                                  <span className="float-right">{tax}</span>
                              </p>
                              
                          </div>
                        </div>
                        <div id="Total" className="">
                            <p className=" border-t text-lg">
                                Total
                                <span className="float-right">$ {total}</span>
                            </p>

                        </div>
                    </div>
                    <div className="flex justify-center">
                        <button className="text-center bg-orange-500 text-white mt-5 py-2 px-10 rounded-md hover:bg-orange-400 text-xl">Place order</button>
                    </div>
                </div>
                <div></div>
                <div></div>
            </div>

        </div>
    </div>
  )
}

export default CheckoutForm