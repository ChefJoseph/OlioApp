import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
// import AuthContext from '../../AuthProvider';
import NavBar from '../../CommonComponents/Navbar';
import Footer from '../../CommonComponents/Footer';
import ProductCard from '../../CommonComponents/ProductCard';
import { EmptyProductValue, IProduct  } from '../../types/IProducts';
import ShoppingSideBar from './ShoppingSideBar';
import background from '../../assets/alhambra2hero.png'


function Italian() {
    const navigate = useNavigate();
    const [productData, setProductData] = useState<IProduct[]>([EmptyProductValue]);
   
    // const [search, setSearch] = useState<string>('');

    const filteredProducts = productData.filter((item, index) => item.name! && item.region === 'Spain').reverse() ;

//   useEffect(() => {
//     fetch('/products')
//       .then((res) => {
//         if (res.ok) {
//           res.json()
//             .then((data) => {
//               console.log(data);
//               setProductData(data);
//             });
//         }
//       });
//   }, []);



  const renderProducts = filteredProducts.map((product: IProduct) => (
		<ProductCard key={product.id} product={product} productData={productData} setProductData={setProductData} />
  )
  )

  return (
    <div>
        <NavBar/>
        <div className="flex row mt-5 mb-10">
            <ShoppingSideBar setProductData={setProductData} />
            <div id="productshell" className="w-full mt-5 mr-5">
                {/* <h1 className="text-2xl my-5 text-center text-gray-800 ">Search Products</h1> */}
    {/* Products */}
                <div className="max-h-64 w-full mb-10" >
    {/* Hero  */}
                    <div className="flex relative justify-center align-middle">
                        <img className=" max-h-64 overflow-hidden object-cover" src={background}></img>
                        <div id="hero-text" className="text-center absolute w-1/2 z-1">
                            <h1 className="mt-16 text-4xl font-bold text-yellow-300 sm:text-6xl">Spanish Olive Oil</h1>
                            <p className="mt-6 font-semibold  leading-8 text-yellow-300 text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                        </div>
                    </div>
                </div>
                <div id="productdiv" >
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