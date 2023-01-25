import React, { useContext } from 'react'
import NavBar from '../../CommonComponents/Navbar'
import Footer from '../../CommonComponents/Footer'
import CartProductCards from './CartProductCards'
import { useNavigate } from 'react-router-dom';
import AuthContext from '../../AuthProvider';

function Cart() {
  const navigate = useNavigate();
  const { user, subtotal, cartTotalItems, setShoppingCart } = useContext(AuthContext);

  const handleRemoveAllItems = () => {
    setShoppingCart([]);
  };
  const subtotalFix = Number(subtotal).toFixed(2)
// eslint-disable-next-line consistent-return
  const renderCheckOut = () => {
      if (user.account_type === 'user' && cartTotalItems > 0) {
      return (
        <div className="flex justify-end">
          <div className="grid-col-1 my-5 mr-5">
  {/* clearcart */}
            {/* <div >
              <button 
                  className="rounded-lg bg-gray-800 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
                  onClick={() => handleRemoveAllItems()}
              >
                Clear cart
              </button>
            </div> */}
  {/* Subtotal  */}
            <div className="text-xl pb-2">
              <p className="">
                Subtotal
                <span className="float-right">${subtotalFix}</span>
              </p>     
            </div>
  {/* Checkout btn  */}
            <div>
              <button
                type="button"
                className=" text-center bg-slate-900 text-white mt-1 py-2 px-10 rounded-md hover:bg-slate-500 text-xl"
                onClick={() => navigate('/checkout')}
              >
                CheckOut
              </button>
            </div>
          </div>
        </div>
      );
      }
// If empty cart 
      if (cartTotalItems === 0) {
      return (
        <div className="flex justify-start ml-10 mb-5">
          <p className="w-full text-3xl">No Items in Cart</p>
        </div>
      )
      }
// If not logged in
      return (
          <div className="w-1/6 text-center text-3xl" style={{ marginTop: '-10px' }}>
          <p className="text-lg">Log in to checkout</p>
          <button
              className="bg-slate-900 text-white mt-1 py-2 px-10 rounded-md hover:bg-slate-800 text-xl"
              onClick={() => { navigate('/login'); }}
              type="button"
          >
              Log In
          </button>
          </div>
      );
  };

  return (
    <div>
        <NavBar/>
{/* cartheaders */}
        <div id="cartheaders" className="container py-3 mr-4 my-5">
            <div id="cartheaders" className="text-3xl pl-10 border-b ">
                <p className="pb-5">Cart</p>
            </div>
        </div>
{/* renderCartCards         */}
        <div>
           <CartProductCards/>
        </div>
{/* Totals and Checkout button */}
        <div className="w-full">
            <div className="">
              {renderCheckOut()}
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Cart