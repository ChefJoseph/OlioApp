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

  const handleRemoveAllItems = () => {
    setShoppingCart([]);
  };

  const handleRemoveSingleItem = (product:IShoppingCart) => {
    const arrayWithoutItem = shoppingCart.filter((cart) => cart.id !== product.id);
    setShoppingCart(arrayWithoutItem);
  };

const renderCart = shoppingCart.map((product) => (
    <div id="cartmaprender" key={product.id}>
        <div>
            <img 
            src={product.image_url}
            alt={product.name}
            />
        </div>
        <div>
            <p>{product.name}</p>
            <p>{product.price}</p>
        </div>
        <div>
            <button onClick={() => handleCartSubtract(product)}> - </button>
            <p>{product.quantity}</p>
            <button onClick={() => handleCartAdd(product)}> + </button>
        </div>
        <div>
            <p>${product.price && product.quantity ? (product.price * product.quantity) : ''}</p>
        </div>
        <button onClick = {() => handleRemoveSingleItem(product) }>
            Remove Item
        </button>
    </div>
))
  return (
    <div id="cartcards">
        {renderCart}
        <button onClick={() => handleRemoveAllItems()}>Clear cart</button>
    </div>
  )
}

export default CartProductCards