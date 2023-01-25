import React from 'react'

function CheckoutForm() {
  return (
    <div>
        <h1 className="text-2xl mb-10">Checkout Page</h1>
        <div id="billingContainer">
            <div id="billingFields" className="w-1/2 grid grid-col-1">
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
                    <button className="text-center bg-slate-900 text-white mt-5 py-2 px-10 rounded-md hover:bg-slate-500 text-xl">
                        Save and Continue
                    </button>
                </div>

            </div>

        </div>
    </div>
  )
}

export default CheckoutForm