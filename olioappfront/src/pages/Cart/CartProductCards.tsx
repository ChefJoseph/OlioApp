import React, { useContext } from 'react'
import AuthContext from '../../AuthProvider';
import { IShoppingCart } from '../../types/IShoppingCart';


function CartProductCards() {
const { shoppingCart, setShoppingCart } = useContext(AuthContext);

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
            <button> - </button>
            <p>{product.quantity}</p>
            <button> + </button>
        </div>
        <div>
            <p>${product.price && product.quantity ? (product.price * product.quantity) : ''}</p>
        </div>
        <button>
            Remove Item
        </button>
    </div>
))
  return (
    <div id="cartcards">
        {renderCart}
    </div>
  )
}

export default CartProductCards