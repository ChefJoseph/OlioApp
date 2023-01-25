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
        <button className="py-2 font-medium rounded inline-flex items-center">
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
        <ul className="absolute hidden z-10 w-40 rounded-lg text-gray-700 bg-gray-200 pt-1 group-hover:block">
          <li className="">
            <a className=" bg-gray-200 py-2 px-4 block whitespace-no-wrap" href="#">
                Regions
            </a>
          </li>
          <li className="">
            <button className=" bg-gray-200 hover:bg-gray-300 py-2 px-8 w-full text-left block whitespace-no-wrap" onClick={() => navigate('/products')}>
                Italy
            </button>
          </li>
          <li className="">
            <button className=" bg-gray-200 hover:bg-gray-300 py-2 px-8 w-full text-left block whitespace-no-wrap" onClick={() => navigate('/products')}>
                Spain
            </button>
          </li>
          <li className="">
            <button className=" bg-gray-200 hover:bg-gray-300 py-2 px-8 w-full text-left block whitespace-no-wrap" onClick={() => navigate('/products')}>
                Greece
            </button>
          </li>
          <li className="">
            <button className=" bg-gray-200 hover:bg-gray-300 py-2 px-4 w-full text-left block whitespace-no-wrap" onClick={() => navigate('/products')}>
                Organic
            </button>
          </li>
          <li className="">
            <button className=" bg-gray-200 hover:bg-gray-300 py-2 px-4 w-full text-left  block whitespace-no-wrap" onClick={() => navigate('/products')}>
                Flavored
            </button>
          </li>
          <li className="">
            <button className="rounded-b-lg bg-gray-200 hover:bg-gray-300 py-2 px-4 w-full text-left block whitespace-no-wrap" onClick={() => navigate('/products')}>
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