import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../../AuthProvider';
import { Checkbox, Label } from 'flowbite-react';
import AddressMain from './AddressMain'
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import {PaymentElement} from '@stripe/react-stripe-js';


function CheckoutForm() {
    const navigate = useNavigate();
    const [checkBox, setCheckBox] = useState(true)
    const [fullName, setFullName] = useState<string>("")
    const [streetAddress, setStreetAddress] = useState<string>("")
    const [aptNo, setAptNo] = useState<string>("")
    const [city, setCity] = useState<string>("")
    const [state, setState] = useState<string>("")
    const [zipCode, setZipCode] = useState<string>("")
    const [phoneNumber, setPhoneNumber] = useState<string>("")
    const [fullNameBill, setFullNameBill] = useState<string>("")
    const [streetAddressBill, setStreetAddressBill] = useState<string>("")
    const [aptNoBill, setAptNoBill] = useState<string>("")
    const [cityBill, setCityBill] = useState<string>("")
    const [stateBill, setStateBill] = useState<string>("")
    const [zipCodeBill, setZipCodeBill] = useState<string>("")
    const [phoneNumberBill, setPhoneNumberBill] = useState<string>("")
    const [paymentMethod, setPaymentMethod] = useState<string>("")

    const {
      subtotal, cartTotalItems, shoppingCart, user, setShoppingCart,
      } = useContext(AuthContext);
    const subtotalFixed = parseFloat(subtotal.toFixed(2))
    const tax = parseFloat((subtotalFixed * 0.08875).toFixed(2));
    const shippingCost = parseFloat((10.00).toFixed(2));
    const total = (subtotalFixed + tax + shippingCost).toFixed(2);
 

    const handleCheckOut = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
      
        const cartTotalData = {
          user_id: user.id,
          shipping_address: {
            full_name: fullName,
            street_address: streetAddress,
            apt_no: aptNo,
            city: city,
            state: state,
            zip_code: zipCode,
            phone_number: phoneNumber,
          },
          billing_address: {
            full_name: fullNameBill,
            street_address: streetAddressBill,
            apt_no: aptNoBill,
            city: cityBill,
            state: stateBill,
            zip_code: zipCodeBill,
            phone_number: phoneNumberBill,
          },
          tax: tax,
          shipping: shippingCost,
          purchased_items: shoppingCart,
        //   payment_method: paymentMethod,
        };
        fetch('/purchases', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accepts': 'application/json',
          },
          body: JSON.stringify(cartTotalData),
        })
          .then((res) => {
            if (res.ok) {
              res.json()
                .then(() => {
                  setShoppingCart([]);
                  navigate('/orderHistory');
                  console.log(res)
                });
            } else {
              res.json()
                .then(({ errors }) => {
                //   setCartErrorMessages(errors);
                console.log(errors, "checkout form")
                });
            }
          });
      };


  return (
    <div>
        <h1 className="text-2xl my-10 max-h-screen px-5">Checkout Page</h1>
        <div id="billingContainer" >
{/* Shipping Info  */}
        <form onSubmit={handleCheckOut} className="flex justify-between ">
            <div id="billingFields" className="w-1/2 ml-5 shadow-md">
                <div id="shippingdetals">
                    <p className="text-lg pt-5 pl-5">Shipping Address</p>
                    <div className="p-5 grid grid-col-1 ">
                        <label>Full Name</label>
                        <input type="text" value={fullName || ''} onChange={(e) => setFullName(e.target.value)}></input>
                        <label>Street Address</label>
                        <input type="text" value={streetAddress || ''} onChange={(e) => setStreetAddress(e.target.value)}></input>
                        <label>Apt/Unit</label>
                        <input type="text" value={aptNo || ''} onChange={(e) => setAptNo(e.target.value)}></input>
                        <label>City</label>
                        <input type="text" value={city || ''} onChange={(e) => setCity(e.target.value)}></input>
                        <label>State</label>
                        <input type="text" value={state || ''} onChange={(e) => setState(e.target.value)}></input>
                        <label>Zip code</label>
                        <input type="text" value={zipCode || ''} onChange={(e) => setZipCode(e.target.value)}></input>
                        <label>Phone number</label>
                        <input type="tel" value={phoneNumber || ""} onChange={(e) => setPhoneNumber(e.target.value)}></input>
                    </div>
                </div>
                <div id= "toggle&save" className="grid grid-col-1 pb-5">
                    <div className="">
                        <Checkbox 
                        id="shippingtoggle"
                        defaultChecked={true}
                        className="text-gray-600 bg-gray-100 border-gray-300 mb-1 mr-1 ml-5"
                        onChange={() => setCheckBox(!checkBox)}/>
                        <Label htmlFor="shippingtoggle" className= "">        
                            Billing address same as shipping
                        </Label>
                    </div>
                    {!checkBox && (
                        <div id="billingdetails">
                            <p className="text-lg pt-5 pl-5">Billing Address</p>
                            <div className="p-5 grid grid-col-1 ">
                                <label>Full Name</label>
                                <input type="text" value={fullNameBill || ''} onChange={(e) => setFullNameBill(e.target.value)}></input>
                                <label>Street Address</label>
                                <input type="text" value={streetAddressBill || ''} onChange={(e) => setStreetAddressBill(e.target.value)}></input>
                                <label>Apt/Unit</label>
                                <input type="text" value={aptNoBill || ''} onChange={(e) => setAptNoBill(e.target.value)}></input>
                                <label>City</label>
                                <input type="text" value={cityBill || ''} onChange={(e) => setCityBill(e.target.value)}></input>
                                <label>State</label>
                                <input type="text" value={stateBill || ''} onChange={(e) => setStateBill(e.target.value)}></input>
                                <label>Zip code</label>
                                <input type="text" value={zipCodeBill || ''} onChange={(e) => setZipCodeBill(e.target.value)}></input>
                                <label>Phone number</label>
                                <input type="tel" value={phoneNumberBill || ""} onChange={(e) => setPhoneNumberBill(e.target.value)}></input>
                            </div>
                        </div>
                    )}
                    <button className="w-1/2 text-center bg-slate-900 text-white mt-5 ml-5 py-2 px-10 rounded-md hover:bg-slate-500 text-xl">
                        Save and Continue
                    </button>
                </div>
            </div>
{/* Order Summary  */}
            <div id="orderSummary" className="w-1/3 grid grid-col-1 pr-5">
                <div className="sticky top-5">
                    <div className="h-64 p-5 shadow-md">
                        <p className="text-lg mb-5 ">Order summary</p>
            <p className="text-2xl font-bold">
              Item List- Total Items
              {' '}
              {cartTotalItems}
            </p>
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
            <PaymentElement/>
                    <div className="flex justify-center">
                        <button type="submit" className="text-center bg-orange-500 text-white mt-5 py-2 px-10 rounded-md hover:bg-orange-400 text-xl">Place order</button>
                    </div>
                </div>
                <div></div>
                <div></div>
            </div>
            </form>
           
            <AddressMain/>
        </div>
    </div>
  )
}

export default CheckoutForm