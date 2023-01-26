import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../AuthProvider';
// import LogOutNavtab from './LogOutNavTab';
import ShopDropDown from './ShopDropDown';
import ProfileDropDown from './ProfileDropDown';

function NavBar() {
  const navigate = useNavigate();
  const { user, cartTotalItems } = useContext(AuthContext);

//   console.log(user, "navbar")
  return (
    <nav id="header" className="w-full z-30 top-0 py-1 sticky bg-white">
    <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-5 py-3">
		<div className="md:flex md:items-center order-1 md:order-1 " id="menu">
			<nav>
				<ul className="md:flex items-center justify-between text-base text-gray-700 md:pt-0">
{/* Shop */}
					<li className= " hover:text-yellow-300">
						<ShopDropDown  />
					</li>
{/* About */}
					<li className="hidden md:flex" >
						<button className="inline-block no-underline hover:text-yellow-300 font-medium py-2 px-4"  type="button" onClick={() => navigate('/about')} >About</button>
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

		<div id="nav-content" className="order-2 md:order-2 flex text-gray-700" >
{/*Profile*/}
			<div className="px-2">
				{user.account_type === 'user' ? <span
				// onClick={() => navigate('/purchaseHistory')} 
				className=" hover:text-yellow-300 ">
				<ProfileDropDown/></span> 
				: <div/>}
                {/* Login/Out */}
                {user.account_type === 'user' ? 
                // <LogOutNavtab />
                ''
                : <button type="button" onClick={() => navigate('/login')} className="py-2 px-10 font-semibold hover:text-yellow-300 transition duration-300">Log In</button>}
            </div>
{/* Search */}
			<button className="px-2 font-semibold hover:text-yellow-300 transition duration-300"> 
				<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
			</button>
{/* Cart */}
			<button type="button" onClick={() => navigate('/cart')} className="pl-3 top-1 w-20px h-27px transition duration-300 relative flex group" >
				{cartTotalItems > 0 ? (
				<mark className="bg-transparent absolute top-2 w-5 h-5 m-0 text-white font-bold text-sm leading-tight text-center">{' '}{cartTotalItems}</mark>) : ''}
				<svg aria-hidden="true" data-testid="shopping-bag-icon-desktop" fill="#374160" height="27" stroke="#000" viewBox="0 0 20 27" width="20" xmlns="http://www.w3.org/2000/svg" className="sitewide-0 e123k0v92 group-hover:fill-yellow-300"><path d="M0 6.4v18.1S0 27 2.5 27h15s2.5 0 2.5-2.5V6.4H0z" strokeWidth="0"></path><path d="M5.5 7.1S4.8 1 10 1c5 0 4.5 6.1 4.5 6.1" fill="none" strokeMiterlimit="10" strokeWidth="2"></path></svg>
			</button>
		</div>
    </div>
    </nav>
  );
}

export default NavBar;
