import React from 'react'
// import {Dropdown} from 'flowbite-react'
import { useNavigate } from 'react-router-dom';

function ShopDropDown() {
    // const onClick= ()=> {
    //     console.log(1)
    // }
const navigate = useNavigate()

  return (
    <div>
    {/* <!-- Dropdown menu --> */}
    <div className="">
      <div className="group inline-block relative">
        <button className="py-2 font-normal rounded inline-flex items-center">
            Shopping
            <svg
            className="fill-current h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            >
            <path
                d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
            />
            </svg>
        </button>
        <ul className="absolute hidden z-10 w-40 rounded-lg text-gray-700 bg-gray-100 pt-1 group-hover:block">
          <li className="">
            <button className=" hover:bg-gray-200 py-2 px-4 w-full text-left block whitespace-no-wrap" onClick={() => navigate('/shopping')}>
                All Products
            </button>
          </li>
          <li className="">
            <a className="py-2 px-4 block whitespace-no-wrap" href="#">
                Regions
            </a>
          </li>
          <li className="">
            <button className=" hover:bg-gray-200 py-2 px-8 w-full text-left block whitespace-no-wrap" onClick={() => navigate('/shopping/italian')}>
                Italy
            </button>
          </li>
          <li className="">
            <button className=" hover:bg-gray-200 py-2 px-8 w-full text-left block whitespace-no-wrap" onClick={() => navigate('/shopping/spain')}>
                Spain
            </button>
          </li>
          <li className="">
            <button className=" hover:bg-gray-200 py-2 px-8 w-full text-left block whitespace-no-wrap" onClick={() => navigate('/shopping/greece')}>
                Greece
            </button>
          </li>
          <li className="">
            <button className="  hover:bg-gray-200 py-2 px-4 w-full text-left block whitespace-no-wrap" onClick={() => navigate('/shopping/organic')}>
                Organic
            </button>
          </li>
          <li className="">
            <button className="  hover:bg-gray-200 py-2 px-4 w-full text-left  block whitespace-no-wrap" onClick={() => navigate('/shopping/flavored')}>
                Flavored
            </button>
          </li>
          <li className="">
            <button className="rounded-b-lg  hover:bg-gray-200 py-2 px-4 w-full text-left block whitespace-no-wrap" onClick={() => navigate('/shopping/forcooking')}>
                For Cooking
            </button>
          </li>
        </ul>
      </div>
    </div>
    </div>
  )
}

export default ShopDropDown