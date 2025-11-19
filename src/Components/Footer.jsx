import React from 'react';
import logo from '../assets/log 1.png';
import facebookIcon from '../assets/Facebook.png';
import twitterIcon from '../assets/Twitter.png';
import instagramIcon from '../assets/Instagram.png';

const Footer = () => {
  return (
    <footer className="bg-[#F9FAFB] py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 text-[#4F5665]">
          
          {/* Left Section */}
          <div className="flex flex-col items-start">
            <div className="flex space-x-2">
              <img src={logo} alt="LaslesVPN Logo" className="h-8" />
              <span className="text-lg font-semibold text-[#0B132A] font-rubik">
                Lasles<span className="font-bold">VPN</span>
              </span>
            </div>

            <p className="text-sm text-[#4F5665] mt-4">
              LaslesVPN is a private virtual network that <br /> 
              has unique features and has high security.
            </p>

            <div className="flex space-x-4 mt-4">
              <a href="#"><img src={facebookIcon} alt="Facebook" className="w-10 h-10" /></a>
              <a href="#"><img src={twitterIcon} alt="Twitter" className="w-10 h-10" /></a>
              <a href="#"><img src={instagramIcon} alt="Instagram" className="w-10 h-10" /></a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-lg font-semibold text-[#0B132A] mb-4">Product</h3>
            <ul className="space-y-4">
              <li><a href="#" className="hover:text-[#F53838]">Download</a></li>
              <li><a href="#" className="hover:text-[#F53838]">Pricing</a></li>
              <li><a href="#" className="hover:text-[#F53838]">Locations</a></li>
              <li><a href="#" className="hover:text-[#F53838]">Server</a></li>
              <li><a href="#" className="hover:text-[#F53838]">Countries</a></li>
              <li><a href="#" className="hover:text-[#F53838]">Blog</a></li>
            </ul>
          </div>

          {/* Engage */}
          <div>
            <h3 className="text-lg font-semibold text-[#0B132A] mb-4">Engage</h3>
            <ul className="space-y-4">
              <li><a href="#" className="hover:text-[#F53838]">LaslesVPN?</a></li>
              <li><a href="#" className="hover:text-[#F53838]">FAQ</a></li>
              <li><a href="#" className="hover:text-[#F53838]">Tutorials</a></li>
              <li><a href="#" className="hover:text-[#F53838]">About Us</a></li>
              <li><a href="#" className="hover:text-[#F53838]">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-[#F53838]">Terms of Service</a></li>
            </ul>
          </div>

          {/* Earn Money */}
          <div>
            <h3 className="text-lg font-semibold text-[#0B132A] mb-4">Earn Money</h3>
            <ul className="space-y-4">
              <li><a href="#" className="hover:text-[#F53838]">Affiliate</a></li>
              <li><a href="#" className="hover:text-[#F53838]">Become Partner</a></li>
            </ul>
          </div>

        </div>

        <div className="text-left mt-8">
          <p className="text-sm text-[#4F5665]">&copy; 2020 LaslesVPN</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
