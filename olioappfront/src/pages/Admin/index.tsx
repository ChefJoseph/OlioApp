import React, { useState, useEffect } from 'react'
import AdminNavBar from './AdminNavBar'
import AdminSideBar from './AdminSideBar'
import ProductCard from './AdminProductCard'
import Footer from '../../CommonComponents/Footer'
import { EmptyProductValue, IProduct } from '../../types/IProducts';

function Admin() {
  const [productData, setProductData] = useState<IProduct[]>([EmptyProductValue]);
  const [search, setSearch] = useState<string>('');

  useEffect(() => {
      fetch('/products')
        .then((res) => {
          if (res.ok) {
            res.json()
              .then((data) => {
                const allProducts = data.filter((item:IProduct) => item.active === true);
                setProductData(allProducts);
                console.log(data, "index, /products")
              });
          }
        });
    }, []);

  return (
    <div id= "index" className="">
        <AdminNavBar/>
        <div id="adminbody" className="flex row mt-5 mb-10">
          <AdminSideBar setProductData={setProductData}/>
  {/* Search */}
          <div id="productshell" className="w-full">
            <h1 className="text-2xl mt-5 text-center text-gray-800 ">Search Products</h1>
            <div className="flex justify-center mb-10">
                <label htmlFor="searchBar">
                    <input
                        className="text-l border p-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-slate-900 rounded-md mt-4"
                        style={{ width: '400px' }}
                        type="text"
                        name="searchbar"
                        placeholder="Search by Name"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </label>
            </div>
    {/* Products */}
            <div id="productdiv" className="">
              <ProductCard productData={productData} setProductData={setProductData} search={search}/>
            </div>
          </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Admin