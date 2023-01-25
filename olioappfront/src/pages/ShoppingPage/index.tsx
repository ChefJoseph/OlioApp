import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
// import AuthContext from '../../AuthProvider';
import NavBar from '../../CommonComponents/Navbar';
import ProductCard from '../../CommonComponents/ProductCard';
import AdminSideBar from '../Admin/AdminSideBar';
import { EmptyProductValue, IProduct  } from '../../types/IProducts';


function index() {
    const navigate = useNavigate();
    const [productData, setProductData] = useState<IProduct[]>([EmptyProductValue]);
   
    // const [search, setSearch] = useState<string>('');

    const filteredProducts = productData.filter((item, index) => item.name! && index > 0).reverse() ;

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
        <AdminSideBar setProductData={setProductData} />
        {renderProducts}
    </div>
  )
}

export default index