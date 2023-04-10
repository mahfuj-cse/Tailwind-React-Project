import React, { useState } from 'react';
// import { a } from 'react-router-dom';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function handleMenuToggle() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <nav className="bg-gray-900">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center ">
            <a to="/" className="text-white font-bold">
              My Logo
            </a>
          </div>
          <div className="hidden md:block " >
            <div className="ml-10 flex justify-between">
              <a to="/" className="px-3 py-2 rounded-md text-sm font-medium text-white hover:bg-gray-800">
                Home
              </a>
              <a to="/about" className="ml-4 px-3 py-2 rounded-md text-sm font-medium text-white hover:bg-gray-800">
                About
              </a>
              <a to="/contact" className="ml-4 px-3 py-2 rounded-md text-sm font-medium text-white hover:bg-gray-800">
                Contact
              </a>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button type="button" onClick={handleMenuToggle} className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:bg-gray-800 focus:text-white">
              <svg className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6`} stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6`} stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className={`${isMenuOpen ? 'block' : 'hidden'} flex justify-between md:hidden`} >
        <div className="px-2 pt-2 pb-3 flex justify-between sm:px-3">
          <a to="/" className="  bg-slate-600 text-center mx-11 px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-800">
            Home
          </a>
          <a to="/about" className="mt-1 w-full mx-10 bg-slate-600 text-center  px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-800">
            About
          </a>
          <a to="/contact" className="mt-1 mx-10 w-1/2 bg-slate-600 text-center  px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-800">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
