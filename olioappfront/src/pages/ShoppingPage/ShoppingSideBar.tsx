import React from 'react'
import { useNavigate } from 'react-router-dom';
import { IProduct } from '../../types/IProducts';
interface Props {
    setProductData:React.Dispatch<React.SetStateAction<IProduct[]>>
  }

function ShoppingSideBar({ setProductData }:Props) {
  const navigate = useNavigate();

    const handleAllProducts = () => {
        fetch('/products')
          .then((res) => {
            if (res.ok) {
              res.json()
                .then((data) => {
                  const allProducts = data
                  setProductData(allProducts);
                  navigate('/shopping')
                });
            }
          });
      };
    
      const handleItaly = () => {
        fetch('/products')
          .then((res) => {
            if (res.ok) {
              res.json()
                .then((data) => {
                  const allItaly = data.filter((item:IProduct) => item.region === 'Italy');
                  setProductData(allItaly);
                  navigate('/shopping/italian')
                });
            }
          });
      };
    
      const handleSpain = () => {
        fetch('/products')
          .then((res) => {
            if (res.ok) {
              res.json()
                .then((data) => {
                  const allSpain = data.filter((item:IProduct) =>  item.region=== 'Spain');
                  setProductData(allSpain);
                  navigate('/shopping/spain')
                });
            }
          });
      };
    
      const handleGreece = () => {
        fetch('/products')
          .then((res) => {
            if (res.ok) {
              res.json()
                .then((data) => {
                  const allGreece = data.filter((item:IProduct) =>  item.region === 'Greece');
                  setProductData(allGreece);
                  navigate('/shopping/greece')
                });
            }
          });
      };
    
      const handleOrganic= () => {
        fetch('/products')
          .then((res) => {
            if (res.ok) {
              res.json()
                .then((data) => {
                  const allOrganic = data.filter((item:IProduct) => item.organic === true);
                  setProductData(allOrganic);
                  navigate('/shopping/organic')
                });
            }
          });
      };
    
      const handleFlavored= () => {
        fetch('/products')
          .then((res) => {
            if (res.ok) {
              res.json()
                .then((data) => {
                  const allFlavored = data.filter((item:IProduct) =>  item.flavored === true);
                  setProductData(allFlavored);
                  navigate('/shopping/flavored')
                });
            }
          });
      };

      const handleCooking= () => {
        fetch('/products')
          .then((res) => {
            if (res.ok) {
              res.json()
                .then((data) => {
                  const allCooking = data.filter((item:IProduct) =>  item.forcooking === true);
                  setProductData(allCooking);
                  navigate('/shopping/forcooking')
                });
            }
          });
      };
    
  return (
    <div id="sidebar" className="flex sticky top-0 flex-col w-1/5 text-lg text-gray-800  mx-5 mt-4 ">
      <div className=" ">
        <p className="text-left text-xl px-3 pb-3 text-gray-800  rounded-t-lg font-semibold">Categories</p>
        <div className="flex flex-col">
          <button
              className="py-3 hover:bg-gray-200 text-left px-3"
              type="button"
              onClick={handleAllProducts}
          >
              All Products
          </button>
          <button
              className="py-3 hover:bg-gray-200 text-left px-3"
              type="button"
              onClick={handleItaly}
          >
              Italy
          </button>
          <button
              className="py-3 hover:bg-gray-200 text-left px-3"
              type="button"
              onClick={handleSpain}
          >
              Spain
          </button>
          <button
              className="py-3 hover:bg-gray-200 text-left px-3"
              type="button"
              onClick={handleGreece}
          >
              Greece
          </button>
          <button
              className="py-3 hover:bg-gray-200 text-left px-3"
              type="button"
              onClick={handleOrganic}
          >
              Organic
          </button>
          <button
              className="py-3 hover:bg-gray-200 text-left px-3"
              type="button"
              onClick={handleFlavored}
          >
              Flavored
          </button>
          <button
              className="py-3 hover:bg-gray-200 text-left px-3"
              type="button"
              onClick={handleCooking}
          >
              For Cooking
          </button>
        </div>
      </div>
    </div>
  )
}

export default ShoppingSideBar