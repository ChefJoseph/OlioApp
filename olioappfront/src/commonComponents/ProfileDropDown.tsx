import React, { useContext } from 'react';
// import {Dropdown} from 'flowbite-react'
// import { truncate } from 'fs/promises';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../AuthProvider';

function ProfileDropDown() {
    const navigate = useNavigate();
    const {
      setUser, user, setProductItem, setCartTotalItems, setShoppingCart,
    } = useContext(AuthContext);
  
    const handleLogout = () => {
      fetch('/logout', { method: 'DELETE' });
      setUser({});
      setProductItem({});
      setCartTotalItems(0);
      setShoppingCart([]);
      localStorage.clear();
      navigate('/login');
    };

    
return (
    <div>
    {/* <!-- Dropdown menu --> */}
    <div className="">
      <div className="group inline-block relative">
        <button className="py-2 rounded inline-flex items-center">
            <svg className="fill-current hover:text-yellow-300" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" >
                <circle fill="none" cx="12" cy="7" r="3" />
                <path d="M12 2C9.243 2 7 4.243 7 7s2.243 5 5 5 5-2.243 5-5S14.757 2 12 2zM12 10c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3S13.654 10 12 10zM21 21v-1c0-3.859-3.141-7-7-7h-4c-3.86 0-7 3.141-7 7v1h2v-1c0-2.757 2.243-5 5-5h4c2.757 0 5 2.243 5 5v1H21z" />
            </svg> 
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
        <ul className="absolute hidden rounded-lg rounded-b-lg w-40 bg-gray-200 z-10 text-gray-700 pt-1 group-hover:block">
          <li className="">
            <a className=" bg-gray-200  py-2 px-4 block whitespace-no-wrap" href="#">
                Welcome, 
            </a>
          </li>
          <li className="">
            <a className=" bg-gray-200 hover:bg-gray-300 py-2 px-4 block whitespace-no-wrap" href="#">
                Your Account
            </a>
          </li>
          <li className="">
            <a className=" bg-gray-200 hover:bg-gray-300 py-2 px-4 block whitespace-no-wrap" href="#">
                Orders & Returns
            </a>
          </li>
          <li className="">
            <a className=" bg-gray-200 hover:bg-gray-300 py-2 px-4 block whitespace-no-wrap" href="#">
                Invite
            </a>
          </li>
          <li className="">
            <a className=" bg-gray-200 hover:bg-gray-300 py-2 px-4 block whitespace-no-wrap" href="#">
                Help Center 
            </a>
          </li>
          <li className="">
            <a className=" rounded-b-lg bg-gray-200 hover:bg-gray-300 py-2 px-4 block whitespace-no-wrap" href="#" onClick={handleLogout}>
                Log Out
            </a>
          </li>
        </ul>
      </div>
    </div>
        {/* <Dropdown 
        label={ 
            <svg className="fill-current hover:text-yellow-300" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" >
                <circle fill="none" cx="12" cy="7" r="3" />
                <path d="M12 2C9.243 2 7 4.243 7 7s2.243 5 5 5 5-2.243 5-5S14.757 2 12 2zM12 10c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3S13.654 10 12 10zM21 21v-1c0-3.859-3.141-7-7-7h-4c-3.86 0-7 3.141-7 7v1h2v-1c0-2.757 2.243-5 5-5h4c2.757 0 5 2.243 5 5v1H21z" />
            </svg> }
        inline={true}
        >
            <Dropdown.Header >
                Welcome,
            </Dropdown.Header>
            <Dropdown.Header>
                Your Account
            </Dropdown.Header>
            <Dropdown.Item onClick={onClick}>
                Account
            </Dropdown.Item>
            <Dropdown.Item onClick={onClick}>
                Orders & Returns
            </Dropdown.Item>
            <Dropdown.Item onClick={onClick}>
                Invite
            </Dropdown.Item>       
            <Dropdown.Item onClick={onClick}>
                Help Center
            </Dropdown.Item>        
            <Dropdown.Item onClick={onClick}>
                Log Out
            </Dropdown.Item>
        </Dropdown> */}
    </div>
)
}

export default ProfileDropDown