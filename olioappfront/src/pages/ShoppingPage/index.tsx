import React, { useState, useEffect } from 'react'
// import { useNavigate } from 'react-router-dom';
// import AuthContext from '../../AuthProvider';
import NavBar from '../../CommonComponents/Navbar';
import Footer from '../../CommonComponents/Footer';
import ProductCard from '../../CommonComponents/ProductCard';
import { EmptyProductValue, IProduct  } from '../../types/IProducts';
import ShoppingSideBar from './ShoppingSideBar';

// interface Props {
//   region: string;
//   productData:IProduct[]
// }

function index() {
    // const navigate = useNavigate();
    const [productData, setProductData] = useState<IProduct[]>([EmptyProductValue]);
   
    // const [search, setSearch] = useState<string>('');

    const filteredProducts = productData.filter((item, index) => (item.name ? item.name:'') && index >= 0) ;

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

    // const ShowHero = (productData: Props)  => {
    //   if (productData.region === 'Italy') {
    //   }
    //   return(
    //     <div>
    //       Herooo
    //     </div>
    //   )
    // }

    return (
      <div>
          <NavBar/>
          <div className="flex relative row mt-5 mb-10">
              <ShoppingSideBar setProductData={setProductData} />
              <div id="productshell" className="w-full mt-5 mr-5">
                  {/* <h1 className="text-2xl my-5 text-center text-gray-800 ">Search Products</h1> */}
      {/* Products */}
      {/* Hero  */}
            
                  <div id="productdiv" className="overflow-y-auto max-h-screen no-scrollbar" >
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

export default index