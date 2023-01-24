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


    const renderProducts = filteredProducts.map((product) => (
        <div key={product.id} className = "w-52 h-52">
            <div >
                <img
                className=" w-52 h-64 max-w-full classes object-contain border-b "
                src={product.image_url ? product.image_url : ""}
                alt={"loading"}
        
                />
                <div>
                <div>{product.name}</div>
                <div>
                    <span>{product.price}</span>
                    <span>{product.region}</span>
                    <span>{product.location}</span>
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
        <div id="productcard" className="flex">
            <AdminSideBar setProductData={setProductData}/>
            <div className="grid lg:grid-cols-4 sm:grid-cols-2 w-4/5 h-80 gap-6 m-10">
            {renderProducts}
            </div>
        </div>
    )
}

export default ProductCard