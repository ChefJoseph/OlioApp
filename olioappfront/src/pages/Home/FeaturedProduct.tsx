import React, {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom';
import ProductCard from '../../CommonComponents/ProductCard';
import { EmptyProductValue, IProduct } from '../../types/IProducts';

function FeaturedProduct() {
  const navigate = useNavigate()
  const [productData, setProductData] = useState<IProduct[]>([EmptyProductValue]);
  const filteredProducts = productData.filter((item, index) => item.name! && index >= 1 && index <=3).reverse() ;

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

  // const handleCardClick = (product: IProduct) => {
  //   setProductData(product);
  //   navigate('/individualProduct');
  // };
/* tslint:disable-next-line */
  const renderProducts = filteredProducts.map((product: IProduct) => (
		<ProductCard key={product.id} product={product} productData={productData} setProductData={setProductData} />
  )
  )

  return (
    <div className="container py-16 mx-auto" >
		<div >
			<h2 className="text-2xl font-medium text-gray-700 mb-6">
            Featured product
			</h2>
			<div className="flex flex-row ">
				{renderProducts}
			</div> 	
		</div>  
    </div>
  )
  }
export default FeaturedProduct