import React, { useContext, useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import AuthContext from './AuthProvider';
import Home from "./pages/Home"
import AboutUs from "./pages/AboutUs"
import Login from './pages/Login';
import CreateAccountPage from './pages/Login/CreateAccountPage';
import Admin from './pages/Admin'
import AddProduct from './pages/Admin/AddProduct';
import Cart from './pages/Cart';

function App() {
  const {
    setUser, setCartTotalItems, shoppingCart, setSubtotal,
  } = useContext(AuthContext);
  const navigate = useNavigate();

  // Auto Login
  useEffect(() => {
    fetch('/me')
      .then((res) => {
        if (res.ok) {
          res.json()
            .then((data) => {
              setUser(data);
              // if (data.account_type === 'admin') {
              //   navigate('/admin');
              // } else if (data.account_type === 'user') {
              //   navigate('/home');
              // }
            });
        }
      });
  }, []);

  // Find Cart Total Items
  useEffect(() => {
    const findCartTotalItems = shoppingCart.reduce((a, b) => a + b.quantity!, 0);
    setCartTotalItems(findCartTotalItems);
  }, [shoppingCart]);

  // Find Cart Subtotal
  useEffect(() => {
    const findCartSubTotal = shoppingCart.map((item) => {
      if (item.quantity && item.price) {
        return item.quantity * item.price;
      }
    }).reduce((a, b) => a! + b!, 0);
    setSubtotal(findCartSubTotal || 0);
  }, [shoppingCart]);

  // store shopping cart in local storage
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(shoppingCart));
  }, [shoppingCart]); 
  return (
    <Routes>
    <Route path="/#" element={<Home/>} />
    <Route path="/home" element={<Home/>} />
    <Route path="*" element={<Home/>} />
    <Route path="/about" element={<AboutUs/>} />
    <Route path="/login" element={<Login />} />
    <Route path="createAccount" element={<CreateAccountPage/>} />
    <Route path="/admin" element={<Admin/>} />
    <Route path="/addProduct" element={<AddProduct/>} />
    <Route path="/cart" element={<Cart/>} />
    
  </Routes>
  );
}

export default App;
