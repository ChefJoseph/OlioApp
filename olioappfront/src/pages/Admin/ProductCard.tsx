import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import AuthContext from '../../AuthProvider';
import AdminSideBar from './AdminSideBar'
import { IProduct } from '../../types/IProducts';
import oliveoil from '../../assets/oliveoil.png'

interface Props {
    productData:IProduct[]
    setProductData:React.Dispatch<React.SetStateAction<IProduct[]>>
    search:string
}

function ProductCard({ productData, setProductData, search }: Props) {
    const navigate = useNavigate();
    const { setProductItem } = useContext(AuthContext);
    const filteredProducts = productData.filter((item) => item.name!.toLowerCase().includes(search.toLowerCase())).reverse();
    console.log(productData, "ProductCard")
    
    const renderProducts = filteredProducts.map((product) => (
        <div key={product.id} >
            <div>
                <img
                className="w-full h-2/3 border-b "
                src={product.image_url ? product.image_url : ""}
                alt={oliveoil}
                />
                <div>
                <div>{product.name}</div>
                <div>
                    <span>{product.price}</span>
                    <span>{product.category}</span>
                </div>
                {/* <div>{product.description}</div> */}
                </div>
            </div>
            <div>
                <button>
                    Edit Page
                </button>
                <button>
                    Make Inactive
                </button>
          </div>
        </div>
      ));

    return (
        <div className="mt-10">
        <div className="flex">
            <AdminSideBar setProductData={setProductData}/>
            <div className="grid lg:grid-cols-4 sm:grid-cols-2 w-4/5 gap-6 mb-10 mr-10">
            {renderProducts}
            </div>
        </div>
        </div>
    )
}

export default ProductCard