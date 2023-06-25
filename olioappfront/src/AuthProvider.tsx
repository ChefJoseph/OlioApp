/* eslint-disable react/jsx-no-constructed-context-values */
import React, { createContext, useState} from 'react';
import { IUser, EmptyUserValue } from './types/IUser';
import { IProduct, EmptyProductValue } from './types/IProducts';
import { IShoppingCart, EmptyShoppingCartValue } from './types/IShoppingCart';

/* eslint-disable */
const AuthContext = createContext({
  user: EmptyUserValue,
  setUser: (_user: IUser) => {},
  productItem: EmptyProductValue,
  setProductItem: (_productItem: IProduct) => {},
  cartTotalItems: 0,
  setCartTotalItems: (_cartTotalItems: number) => {},
  subtotal: 0,
  setSubtotal: (_subtotal: number) => {},
  shoppingCart: [EmptyShoppingCartValue],
  setShoppingCart: (_shoppingCart: IShoppingCart[]) => {},
});
/* eslint-enable */
  interface Props {
    children: JSX.Element|JSX.Element[];
  }

  export function AuthProvider({ children }:Props) {
    const getShoppingCartFromLocalStorage = JSON.parse(localStorage?.getItem('cart') || '[]');
    const [user, setUser] = useState<IUser>(EmptyUserValue);
    const [productItem, setProductItem] = useState<IProduct>(EmptyProductValue);
    const [cartTotalItems, setCartTotalItems] = useState<number>(0);
    const [subtotal, setSubtotal] = useState<number>(0);
    const [shoppingCart, setShoppingCart] = useState<IShoppingCart[]>(getShoppingCartFromLocalStorage || []);

    return (
      <AuthContext.Provider value={{
        user, setUser, productItem, setProductItem, cartTotalItems, setCartTotalItems, shoppingCart, setShoppingCart, subtotal, setSubtotal,
      }}
      >
        <div>
          {children}
        </div>
        
      </AuthContext.Provider>
    );
  }

export default AuthContext;