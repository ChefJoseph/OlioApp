import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import AuthContext from '../../AuthProvider';
import { IProduct } from '../../types/IProducts';

interface Props {
    productData:IProduct[]
    setProductData:React.Dispatch<React.SetStateAction<IProduct[]>>
    search:string
}

function ProductCard({productData, setProductData, search }: Props) {
    const navigate = useNavigate();
    const { setProductItem } = useContext(AuthContext);
    const filteredProducts = productData.filter((item) => {
    // item.name!.toLowerCase().includes(search.toLowerCase())||
    // item.region!.toLowerCase().includes(search.toLowerCase())||
    // item.location!.toLowerCase().includes(search.toLowerCase())||
    // item.price!.toString().includes(search.toString())
    // );
    const name = item.name ? item.name.toLowerCase() : '';
    const region = item.region ? item.region.toLowerCase() : '';
    const location = item.location ? item.location.toLowerCase() : '';
    const price = item.price ? item.price.toString() : '';

    return (
        name.includes(search.toLowerCase()) ||
        region.includes(search.toLowerCase()) ||
        location.includes(search.toLowerCase()) ||
        price.includes(search.toString())
    );  
    });

    const handleEditPage = (product:IProduct) => {
        setProductItem(product);
        navigate('/editProduct');
      };

    const handleMakeInactive = (product:IProduct) => {
      fetch(`/products/${product.id}`, {
        method: 'PATCH',
        body: JSON.stringify({
          active: 'false',
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((res) => {
          if (res.ok) {
            res.json()
              .then((data) => setProductData(productData.filter((item) => item.id !== data.id)));
          }
        });
    };

    const handleMakeActive = (product:IProduct) => {
    fetch(`/products/${product.id}`, {
        method: 'PATCH',
        body: JSON.stringify({
        active: 'true',
        }),
        headers: {
        'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((res) => {
        if (res.ok) {
            res.json()
            .then((data) => setProductData(productData.filter((item) => item.id !== data.id)));
        }
        });
    };

    const renderProducts = filteredProducts.map((product: IProduct) => (
        <div key={product.id} className = "flex-col-1 justify-between w-52 h-88 border border-black-400">
            <div className="p-2" >
                <img
                className=" w-52 h-64 max-w-full classes object-contain border-b "
                src={product.image_url ? product.image_url : ""}
                alt={"loading"}
        
                />
                <div>
                <div className="text-lg font-semibold tracking-tight text-gray-900 dark:text-white max-h-6 overflow-hidden">{product.name}</div>
                <div className="flex space-between">
                    <span className="pr-2">${product.price}</span>
                    <p>
                      <span className="pr-2">{product.region}</span>
                      <span>{product.location}</span>
                    </p>
                </div>
                {/* <div>{product.description}</div> */}
                </div>
            </div>
            <div className="flex justify-around pb-2">
{/* Edit  */}
                <button           
                  type="button"
                  className="bg-gray-700 text-white py-1 px-1 rounded-md hover:bg-gray-500 w-2/5 text-md"
                  onClick={() => handleEditPage(product)}
                >
                    Edit Page
                </button>
{/* Inactive btn                  */}
                {product.active ? (
                  <button
                    type="button"
                    className="bg-red-600 text-white py-1 px-1 rounded-md hover:bg-red-400 w-2/5 text-md"
                    onClick={() => handleMakeInactive(product)}
                  >
                    Inactivate
                    {' '}
                  </button>
                ) : (
                  <button
                    type="button"
                    className="bg-green-600 text-white py-1 px-1 rounded-md hover:bg-green-700 w-2/5 text-md"
                    onClick={() => handleMakeActive(product)}
                  >
                    Activate
                  </button>
                )}
          </div>
        </div>
      ));

    return (
        <div id="productcard" className="flex justify-center">
            <div className="grid lg:grid-cols-4 sm:grid-cols-2 gap-10 ">
            {renderProducts}
            </div>
        </div>
    )
}

export default ProductCard