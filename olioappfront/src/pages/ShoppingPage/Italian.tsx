import React, { useState, useEffect } from 'react'
// import { useNavigate } from 'react-router-dom';
// import AuthContext from '../../AuthProvider';
import NavBar from '../../CommonComponents/Navbar';
import Footer from '../../CommonComponents/Footer';
import ProductCard from '../../CommonComponents/ProductCard';
import { EmptyProductValue, IProduct  } from '../../types/IProducts';
import ShoppingSideBar from './ShoppingSideBar';
import background from '../../assets/tuscanyHero.png'


function Italian() {
    // const navigate = useNavigate();
    const [productData, setProductData] = useState<IProduct[]>([EmptyProductValue]);
   
    // const [search, setSearch] = useState<string>('');

    const filteredProducts = productData.filter((item) => (item.name ? item.name:'') && item.region === 'Italy').reverse() ;

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
        <div className="flex row mt-5 mb-10 ">
            <ShoppingSideBar setProductData={setProductData} />
            <div id="productshell" className="w-full mt-5 mr-5  ">
                {/* <h1 className="text-2xl my-5 text-center text-gray-800 ">Search Products</h1> */}
    {/* Products */}
                <div className="h-64 mb-10" >
    {/* Hero  */}
                    <div className="flex relative justify-center align-middle">
                        <img className="object-cover -z-1" src={background}></img>
                        <div id="hero-text" className="text-center absolute w-1/2">
                            <h1 className="mt-12 text-4xl font-bold text-white sm:text-6xl">Italian Olive Oil</h1>
                            <p className="mt-6 font-semibold  leading-8 text-white text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                        </div>
                    </div>
                </div>
                <div id="productdiv" className="h-screen" >
                    <div className="grid lg:grid-cols-4 sm:grid-cols-2 gap-5 ">
                        {renderProducts}
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Italian