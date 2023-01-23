import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../AuthProvider';
import ShopDropDown from './ShopDropDown';
import ProfileDropDown from './ProfileDropDown';

function NavBar() {
  const navigate = useNavigate();
  const { user, cartTotalItems } = useContext(AuthContext);

  return (
    <nav id="header" className="w-full z-30 top-0 py-1">
    <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-6 py-3">
		<div className="hidden md:flex md:items-center md:w-auto w-full order-3 md:order-1" id="menu">
			<nav>
				<ul className="md:flex items-center justify-between text-base text-gray-700 pt-4 md:pt-0">
{/* Shop */}
					<li className= "hover:text-yellow-300">
						<ShopDropDown  />
					</li>
{/* About */}
					<li className="" >
						<button className="inline-block no-underline hover:text-yellow-300 py-2 px-4"  type="button" onClick={() => navigate('/about')} >About</button>
					</li>
				</ul>
			</nav>
		</div>
{/* Company Name */}
		<div className="order-1 md:order-2">
			<a href="/#" className="flex items-center">
				<span className="flex items-center tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-4xl ">OLIO</span>
			</a>
			{/* <button className="flex items-center tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-3xl " type="button" onClick={() => navigate('/home')}>
				OLIO
			</button> */}
		</div>

		<div className="order-2 md:order-3 flex items-center text-gray-700" id="nav-content">
{/*Profile*/}
			<div >
				{user.account_type === 'user' ? <span
				// onClick={() => navigate('/purchaseHistory')} 
				className="py-5 hover:text-yellow-300 ">
				<ProfileDropDown/></span> 
				: <div/>}
			{/* Login/Out */}
			{user.account_type === 'user' ? 
			// <LogOutNavtab />
			''
			: <button type="button" onClick={() => navigate('/login')} className="py-5 px-10 font-semibold hover:text-yellow-300 transition duration-300">Log In</button>}
		</div>
{/* Search */}
			<button className="py-5 px-5 font-semibold hover:text-yellow-300 transition duration-300"> 
				<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
			</button>
{/* Cart */}
			<button type="button" onClick={() => navigate('/cart')} className=" hover:text-yellow-300 transition duration-300 relative flex" >
				{cartTotalItems > 0 ? (
				<mark className="bg-red-600 absolute top-0 rounded-full w-4 h-4 top -right-1 p-0 m-0 text-white font-mono text-sm leading-tight text-center">{' '}{cartTotalItems}</mark>) : ''}
				<svg className="fill-current flex-1 w-7 h-7 hover:text-yellow-300 " strokeWidth="1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
					<path d="M21,7H7.462L5.91,3.586C5.748,3.229,5.392,3,5,3H2v2h2.356L9.09,15.414C9.252,15.771,9.608,16,10,16h8 c0.4,0,0.762-0.238,0.919-0.606l3-7c0.133-0.309,0.101-0.663-0.084-0.944C21.649,7.169,21.336,7,21,7z M17.341,14h-6.697L8.371,9 h11.112L17.341,14z" />
					<circle cx="10.5" cy="18.5" r="1.5" />
					<circle cx="17.5" cy="18.5" r="1.5" />
				</svg>
			</button>
		</div>
    </div>
    </nav>
  );
}

export default NavBar;