import React from 'react';

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  
  return (
    <div className="static bottom-0 w-full overflow-hidden">
      <div className="bg-gray-800 md:px-5 lg:px-10">
        <div className="flex justify-between pb-8 pt-4 text-white sm:flex-row sm:items-baseline md:space-x-10 lg:space-x-12 xl:space-x-24">
          <div id="footerlogo&subscribe" className="items-top">
            <div className="order-1 md:order-2 mt-5">
              <a className="flex items-center" onClick={scrollToTop}>
                <span className="flex items-center tracking-wide no-underline hover:no-underline font-medium text-white text-4xl ">o l i o</span>
              </a>
              <p className="my-5 text-md font-bold">Get updates</p>
              <div id="subscribe" className=" grid grid-rows-1 my-5 max-w-md mx-auto rounded-sm md:max-w-xl">
                <div className="w-full">
                <input className="bg-white h-10 w-75 px-4 pr-20 rounded-sm focus:outline-none text-black " type="text" placeholder='Enter your e-mail'></input>
                <button className="h-10 rounded-sm bg-black text-sm px-3 text-white hover:bg-gray-900 ">Subscribe</button> 
                
                </div>
              </div>
            </div>
          </div>

          <div id="footerinfo" className="flex flex-cols-3 items-top hover:cursor-pointer">
            <div className="px-10">
              <h1 className="mb-2 text-md font-bold">Company</h1>
              <ul className="font-normal text-sm">
                <li className="link">About Us</li>
                <li className="link">Products</li>
                <li className="link">Careers</li>
                <li className="link">Press Release</li>
                <li className="link">Contact us</li>
              </ul>
            </div>
            <div className="px-10">
              <h1 className="mb-2 text-md font-bold">Connect With Us</h1>
              <ul className="font-normal text-sm">
                <li className="link">Facebook</li>
                <li className="link">Twitter</li>
                <li className="link">Instagram</li>
              </ul>
            </div>
            <div className="px-10">
              <h1 className="mb-2 text-md font-bold ">Support</h1>
              <ul className="font-normal text-sm">
                <li className="link">Your Account</li>
                <li className="link">FAQ</li>
                <li className="link">Terms of Service</li>
                <li className="link">Privacy Policy</li>
                <li className="link">Help</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <p className="flex flex-grow justify-evenly border-t border-gray-600 bg-gray-800 font-normal text-xs text-white">
        Note : This has been made only for educational purposes. No copyright
        intended.
      </p>
  </div>
  );
}

export default Footer