import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
// import AuthContext from '../../AuthProvider';
import NavBar from '../../CommonComponents/Navbar';
import ProductCard from '../../CommonComponents/ProductCard';
import { EmptyProductValue, IProduct  } from '../../types/IProducts';
import ShoppingSideBar from './ShoppingSideBar';


function index() {
    const navigate = useNavigate();
    const [productData, setProductData] = useState<IProduct[]>([EmptyProductValue]);
   
    // const [search, setSearch] = useState<string>('');

    const filteredProducts = productData.filter((item, index) => item.name! && index >= 0).reverse() ;

  useEffect(() => {
    fetch('/products')
      .then((res) => {
        if (res.ok) {
          res.json()
            .then((data) => {
              console.log(data);
              setProductData(data);
            });
        }
      });
  }, []);



  const renderProducts = filteredProducts.map((product: IProduct) => (
		<ProductCard key={product.id} product={product} productData={productData} setProductData={setProductData} />
  )
  )

  return (
    <div>
        <NavBar/>
        <div className="flex row">
            <ShoppingSideBar setProductData={setProductData} />
            <div id="productshell" className="w-full mt-5 mr-5">
                {/* <h1 className="text-2xl my-5 text-center text-gray-800 ">Search Products</h1> */}
    {/* Products */}
                <div id="productdiv" >
                    <div className="grid lg:grid-cols-4 sm:grid-cols-2 gap-5 ">
                        {renderProducts}
                    </div>
                
                </div>
            </div>
        </div>
    </div>
  )
}

export default index