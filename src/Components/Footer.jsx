import React from 'react';
import logo from '../assets/log 1.png';
import facebookIcon from '../assets/Facebook.png';
import twitterIcon from '../assets/Twitter.png';
import instagramIcon from '../assets/Instagram.png';

const Footer = () => {
  return (
    <footer className="bg-[#F9FAFB] py-8 sm:py-12 px-4 sm:px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 lg:gap-20 text-[#4F5665]">
          
          {/* Left Section */}
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
            <div className="flex items-center space-x-2">
              <img src={logo} alt="LaslesVPN Logo" className="h-6 sm:h-7 lg:h-8" />
              <span className="text-base sm:text-lg font-semibold text-[#0B132A] font-rubik">
                Lasles<span className="font-bold">VPN</span>
              </span>
            </div>

            <p className="text-sm text-[#4F5665] mt-3 sm:mt-4 max-w-xs">
              LaslesVPN is a private virtual network that has unique features and has high security.
            </p>

            <div className="flex space-x-3 sm:space-x-4 mt-3 sm:mt-4">
              <a href="#"><img src={facebookIcon} alt="Facebook" className="w-8 h-8 sm:w-10 sm:h-10" /></a>
              <a href="#"><img src={twitterIcon} alt="Twitter" className="w-8 h-8 sm:w-10 sm:h-10" /></a>
              <a href="#"><img src={instagramIcon} alt="Instagram" className="w-8 h-8 sm:w-10 sm:h-10" /></a>
            </div>
          </div>

          {/* Product */}
          <div className="text-center sm:text-left">
            <h3 className="text-base sm:text-lg font-semibold text-[#0B132A] mb-3 sm:mb-4">Product</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li><a href="#" className="hover:text-[#F53838] text-sm sm:text-base">Download</a></li>
              <li><a href="#" className="hover:text-[#F53838] text-sm sm:text-base">Pricing</a></li>
              <li><a href="#" className="hover:text-[#F53838] text-sm sm:text-base">Locations</a></li>
              <li><a href="#" className="hover:text-[#F53838] text-sm sm:text-base">Server</a></li>
              <li><a href="#" className="hover:text-[#F53838] text-sm sm:text-base">Countries</a></li>
              <li><a href="#" className="hover:text-[#F53838] text-sm sm:text-base">Blog</a></li>
            </ul>
          </div>

          {/* Engage */}
          <div className="text-center sm:text-left">
            <h3 className="text-base sm:text-lg font-semibold text-[#0B132A] mb-3 sm:mb-4">Engage</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li><a href="#" className="hover:text-[#F53838] text-sm sm:text-base">LaslesVPN?</a></li>
              <li><a href="#" className="hover:text-[#F53838] text-sm sm:text-base">FAQ</a></li>
              <li><a href="#" className="hover:text-[#F53838] text-sm sm:text-base">Tutorials</a></li>
              <li><a href="#" className="hover:text-[#F53838] text-sm sm:text-base">About Us</a></li>
              <li><a href="#" className="hover:text-[#F53838] text-sm sm:text-base">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-[#F53838] text-sm sm:text-base">Terms of Service</a></li>
            </ul>
          </div>

          {/* Earn Money */}
          <div className="text-center sm:text-left">
            <h3 className="text-base sm:text-lg font-semibold text-[#0B132A] mb-3 sm:mb-4">Earn Money</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li><a href="#" className="hover:text-[#F53838] text-sm sm:text-base">Affiliate</a></li>
              <li><a href="#" className="hover:text-[#F53838] text-sm sm:text-base">Become Partner</a></li>
            </ul>
          </div>

        </div>

        <div className="text-center sm:text-left mt-6 sm:mt-8 pt-6 border-t border-gray-200">
          <p className="text-xs sm:text-sm text-[#4F5665]">&copy; 2020 LaslesVPN</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;