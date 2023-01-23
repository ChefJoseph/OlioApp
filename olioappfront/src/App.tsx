import React from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import Home from "./pages/Home"
import AboutUs from "./pages/AboutUs"

function App() {
  return (
    <Routes>
    <Route path="/#" element={<Home/>} />
    <Route path="/home" element={<Home/>} />
    <Route path="*" element={<Home/>} />
    <Route path="/about" element={<AboutUs/>} />
    
  </Routes>
  );
}

export default App;
