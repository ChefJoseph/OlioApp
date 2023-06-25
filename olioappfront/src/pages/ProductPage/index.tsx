import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../../AuthProvider';
import {BsChevronLeft} from 'react-icons/bs'
import NavBar from '../../CommonComponents/Navbar';
import Footer from '../../CommonComponents/Footer';
import { IShoppingCart } from '../../types/IShoppingCart';

function ProductPage() {
    const navigate = useNavigate();
    const {
        productItem, setProductItem, shoppingCart, setShoppingCart,
    } = useContext(AuthContext);

    const [addToCartNumber, setAddToCartNumber] = useState<number>(1);

    const selectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
      const value = parseInt(event.target.value);
      setAddToCartNumber(value)
    };

    useEffect(() => {
      if (productItem.name === '') {
        navigate('/products');
      }
    }, []);

    // const handleMinusButton = () => {
    //     if (addToCartNumber > 1) {
    //       setAddToCartNumber(addToCartNumber - 1);
    //     }
    // };
    
    // const handlePlusButton = () => {
    //     if (addToCartNumber < 10) {
    //         setAddToCartNumber(addToCartNumber + 1);
    //     }
    // };

    const handleBackButton = () => {
      setProductItem({});
      navigate('/shopping');
    };

    const handleAddToCart = () => {
      const newShoppingCartItem: IShoppingCart = {
        id: productItem.id,
        name: productItem.name,
        price: productItem.price,
        image_url: productItem.image_url,
        quantity: addToCartNumber,
      };
      if (shoppingCart.find((cart) => cart.id === productItem.id)) {
        const updateProductQuantity = shoppingCart.map((cart) => {
          if (cart.id === productItem.id && cart.quantity) {
            cart.quantity += addToCartNumber;
            return cart;
          }
          return cart;
        });
        setShoppingCart(updateProductQuantity);
      } else {
        setShoppingCart([...shoppingCart, newShoppingCartItem]);
      }
      // navigate('/cart');
    };

  return (
    <div>
      <NavBar/>
      <button
        type="button"
        onClick={handleBackButton}
        className="bg-slate-800 text-white py-1 ml-5 pl-2 pr-4 rounded-md hover:bg-slate-500 w-30 text-lg flex row"
      >
          <BsChevronLeft className="pt-2 text-xl"/>
          Back

      </button>
      <div className="flex mt-10 px-20 mx-10 justify-center">
        <div className=" flex flex-col items-center w-1/2 mr-20">
          <img
            className="border w-640px h-580px "
            src={productItem.image_url ? productItem.image_url : ''}
            alt={productItem.name}
          />
          <p
            className="text-xl px-5 mt-1"
          >
            {productItem.description}
          </p>
      </div>
      <div className="w-1/4 px-5">
        <p
          className="text-2xl"
        >
          {productItem.name}
        </p>
          <span>
            <strong>
              <mark className="text-red-500 bg-white">
                {productItem.active === false ? 'Out Of Stock' : ''}
              </mark>
            </strong>
          </span>
        
  {/* Review stars  */}
        <div className="mt-2.5 mb-5 flex justify-start items-center">
          <svg
          className="h-5 w-5 text-yellow-300"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
          >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          <svg
          className="h-5 w-5 text-yellow-300"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
          >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          <svg
          className="h-5 w-5 text-yellow-300"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
          >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          <svg
          className="h-5 w-5 text-yellow-300"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
          >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          <svg
          className="h-5 w-5 text-yellow-300"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
          >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          <span className="mr-2 ml-3 rounded bg-blue-100 px-2.5 py-0.5 text-xs font-semibold text-blue-800 dark:bg-blue-200 dark:text-blue-800">
          5.0
          </span>
        </div>
        
        {productItem.active === true ? (
          <p className="text-2xl mt-5">
            ${productItem.price ? productItem.price : ''}</p>
          ) : (<p className="text-2xl mt-5 line-through">
          $ {productItem.price ? productItem.price : ''}</p>
          )
        }

        <div className="flex justify-start mt-5">
  {/* -/+ adjust quantity                */}
                  {/* {productItem.active === true ? (
                  <button
                      type="button"
                      className="text-4xl px-4 py-1 border rounded-full bg-zinc-100 hover:bg-zinc-200"
                      onClick={handleMinusButton}
                  >
                      -
                  </button>
                  ) : ''}
                  {productItem.active === true ? <p className="text-4xl px-3 py-1">{addToCartNumber}</p> : null}
                  {productItem.active === true ? (
                  <button
                      type="button"
                      className="text-4xl px-3 py-1 border rounded-full bg-zinc-100 hover:bg-zinc-200"
                      onClick={handlePlusButton}
                  >
                      +
                  </button>
                  ) : ''} */}
  {/* Quantity dropdown  */}
          <div className="mt-50px flex flex-col-1">
            <select onChange={selectChange} defaultValue={1}className="">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
            {/* {selectedOption && <h2 className="mt-30px">{selectedOption}</h2>} */}
          </div>
    {/* Add to Cart btn  */}
          {productItem.active === true ? (
            <button
              type="button"
              className="bg-slate-800 text-white py-2 px-3 ml-4 rounded-md hover:bg-slate-500 text-lg"
              onClick={handleAddToCart}
            >
              Add to cart
            </button>
          ) : ''}
        </div>
      </div>
    </div>
    <div className="w-640px">
      Reviews
    </div>
      <Footer/>
    </div>
  )
}

export default ProductPage