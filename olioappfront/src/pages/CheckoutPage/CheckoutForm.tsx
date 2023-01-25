import React from 'react'

function CheckoutForm() {
  return (
    <div>
        <h1 className="text-2xl mb-10 max-h-screen">Checkout Page</h1>
        <div id="billingContainer" className="flex justify-between ">
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
                <div>
                <label>
          <input type="checkbox" id="checkbox"/> Shipping address same as billing
        </label>
                    <button className="text-center bg-slate-900 text-white mt-5 py-2 px-10 rounded-md hover:bg-slate-500 text-xl">
                        Save and Continue
                    </button>
                </div>
            </div>
            <div id="orderSummary" className="w-1/3 grid grid-col-1 ">
                <div className="h-80 p-5 shadow-md sticky top-5">
                    <p className="text-lg mb-5 ">Order summary</p>
                    <div id="subtotal">
                        <p>
                            Subtotal
                            <p className="float-right">Price</p>
                        </p>
                        
                    </div>
                    <div id="shipping">
                        <p>
                            Shipping
                            <p className="float-right">Price</p>
                        </p>
                        
                    </div>
                    <div id="discounts">
                        <p>
                            Discounts
                            <p className="float-right">Price</p>
                        </p>
                        
                    </div>
                    <div id="estTax">
                        <p>
                            Estimated Tax
                            <p className="float-right">Price</p>
                        </p>
                        
                    </div>
                    <div id="Total">
                        <p>
                            Total
                            <p className="float-right">Price</p>
                        </p>

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