import React, { useState } from 'react';
import logo from '../assets/log.png'; // Import the image from assets

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to toggle menu visibility
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo and LaslesVPN text */}
        <div className="flex items-center ml-16 space-x-2">
          <img src={logo} alt="LaslesVPN Logo" className="h-8" />
          <span className="text-lg font-semibold text-[#0B132A] font-rubik">
            Lasles
            <span className="font-bold">VPN</span>
          </span>
        </div>

        {/* Navbar links (Desktop) */}
        <ul className="hidden lg:flex space-x-8">
          <li><a href="#" className="text-[#4F5665] font-rubik hover:text-red-500">About</a></li>
          <li><a href="#" className="text-[#4F5665] font-rubik hover:text-red-500">Features</a></li>
          <li><a href="#" className="text-[#4F5665] font-rubik hover:text-red-500">Pricing</a></li>
          <li><a href="#" className="text-[#4F5665] font-rubik hover:text-red-500">Testimonials</a></li>
          <li><a href="#" className="text-[#4F5665] font-rubik hover:text-red-500">Help</a></li>
        </ul>

        {/* Sign In and Sign Up buttons (Desktop) */}
        <div className="hidden lg:flex space-x-4 mr-16">
          <a href="#" className="text-[#0B132A] mt-3 font-rubik hover:text-red-500">Sign In</a>
          <a href="#" className="px-8 py-2 font-rubik font-semibold border border-[#F53855] text-[#F53855] rounded-full hover:bg-red-500 hover:text-white">
            Sign Up
          </a>
        </div>

        {/* Hamburger menu for mobile */}
        <div className="lg:hidden flex items-center" onClick={toggleMenu}>
          <button className="text-[#4F5665] focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
</svg>

          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <ul className="lg:hidden absolute top-16 left-0 right-0 bg-white shadow-lg py-4 px-6 space-y-4">
            <li><a href="#" className="text-[#4F5665] font-rubik hover:text-red-500">About</a></li>
            <li><a href="#" className="text-[#4F5665] font-rubik hover:text-red-500">Features</a></li>
            <li><a href="#" className="text-[#4F5665] font-rubik hover:text-red-500">Pricing</a></li>
            <li><a href="#" className="text-[#4F5665] font-rubik hover:text-red-500">Testimonials</a></li>
            <li><a href="#" className="text-[#4F5665] font-rubik hover:text-red-500">Help</a></li>

            {/* Sign In and Sign Up buttons inside the mobile menu */}
            <li><a href="#" className="text-[#0B132A] font-rubik hover:text-red-500">Sign In</a></li>
            <li>
              <a href="#" className="block w-full text-center px-8 py-2 font-rubik font-semibold border border-[#F53855] text-[#F53855] rounded-full hover:bg-red-500 hover:text-white">
                Sign Up
              </a>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
