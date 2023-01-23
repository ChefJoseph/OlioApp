import React from 'react'
import { useNavigate } from 'react-router-dom';

function Navbar() {
  return (
    <nav id="header" className="w-full z-30 top-0 py-1">
    <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-6 py-3">
		<div className="hidden md:flex md:items-center md:w-auto w-full order-3 md:order-1" id="menu">
			<nav>
				<ul className="md:flex items-center justify-between text-base text-gray-700 pt-4 md:pt-0">
{/* Shop */}
					<li className= "hover:text-yellow-300">
						Shop
					</li>
{/* About */}
					<li className="" >
						<button className="inline-block no-underline hover:text-yellow-300 py-2 px-4"  type="button" >About</button>
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
			Profile/Login
				
		</div>
{/* Search */}
			<button className="py-5 px-5 font-semibold hover:text-yellow-300 transition duration-300"> 
				<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
			</button>
{/* Cart */}
			<button type="button" className=" hover:text-yellow-300 transition duration-300 relative flex" >
				Cart
			</button>
		</div>

    </nav>
    
  )
}

export default Navbar