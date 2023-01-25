import React, { useContext, useEffect } from 'react'
import { isCompositeComponent } from 'react-dom/test-utils';
import AuthContext from '../../AuthProvider';
import { IShoppingCart } from '../../types/IShoppingCart';


function CartProductCards() {
const { shoppingCart, setShoppingCart } = useContext(AuthContext);

useEffect(() => {
    console.log(shoppingCart, "cart")
  }, []);

const handleCartAdd = (product:IShoppingCart) => {
    const updateCartQuantity = shoppingCart.map((cart) => {
      if (cart.id === product.id && cart.quantity) {
        cart.quantity += 1;
      }
      return cart;
    });
    setShoppingCart(updateCartQuantity);
  };

  const handleCartSubtract= (product:IShoppingCart) => {
    const updateCartQuantity = shoppingCart.map((cart) => {
      if (cart.id === product.id && cart.quantity && cart.quantity > 1) {
        cart.quantity -= 1;
      }
      return cart;
    });
    setShoppingCart(updateCartQuantity);
  };

//   const handleRemoveAllItems = () => {
//     setShoppingCart([]);
//   };

  const handleRemoveSingleItem = (product:IShoppingCart) => {
    const arrayWithoutItem = shoppingCart.filter((cart) => cart.id !== product.id);
    setShoppingCart(arrayWithoutItem);
  };

const renderCart = shoppingCart.map((product) => (
    <div id="cartmaprender" key={product.id} className="flex items-center border-b py-3 mx-10">
{/* Image         */}
        <div className="flex w-1/6 justify-center" >
            <img
            className="w-40 h-40 rounded-md"
            src={product.image_url}
            alt={product.name}
            />
        </div>
{/* Name */}
        <div className="flex w-1/6 justify-center items-center">
            <p className="w-full text-lg">{product.name}</p>
        </div>
{/* Unit price  */}
        <div className="flex w-1/6 justify-center items-center">
            <p className="w-1/6 text-lg">${product.price}</p>
        </div>
{/* Quantity  */}
        <div className="flex w-1/6 justify-center items-center">
            <button 
            onClick={() => handleCartSubtract(product)}
            className="text-lg px-4 py-1 border rounded-full bg-zinc-100 hover:bg-zinc-200"
            > - </button>
            <p className="text-lg px-3 py-1 mx-3">{product.quantity}</p>
            <button 
            className="text-lg px-3 py-1 border rounded-full bg-zinc-100 hover:bg-zinc-200"
            onClick={() => handleCartAdd(product)}
            > + </button>
        </div>
{/* Total Price  */}
        <div className="flex w-1/6 justify-center items-center text-lg">
            <p>${product.price && product.quantity ? (product.price * product.quantity) : ''}</p>
        </div>
{/* remove  */} 
        <div className="flex w-1/6 justify-center items-center text-lg">
            <button 
            className="rounded-lg bg-gray-800 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
            onClick = {() => handleRemoveSingleItem(product) }>
                Remove
            </button>
        </div>
    </div>
))

  return (
    <div id="cartcards" className="">
        {renderCart}
{/* Clear Cart  */}
        {/* <div className="flex justify-end my-5">
            <button 
                className="rounded-lg bg-gray-800 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
                onClick={() => handleRemoveAllItems()}
            >
                Clear cart
            </button>
        </div> */}
        
    </div>
  )
}

export default CartProductCards