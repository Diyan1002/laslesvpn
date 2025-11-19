// src/components/HeroSection.jsx

import React from 'react';
import heroImage from '../assets/her.png'; // Import the image from assets

const HeroSection = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-between py-16 px-8 bg-white">
      {/* Left content: Text */}
     <div className="max-w-lg mx-auto lg:mx-0 lg:ml-24 mb-8 lg:mb-0 px-4 sm:px-6 lg:px-0">
  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-medium font-rubik text-[#0B132A] mb-4 text-center lg:text-left">
    Want anything to be <br className="hidden sm:block" /> easy with <span className="font-rubik font-bold">LaslesVPN</span>.
  </h1>
  <p className="text-sm sm:text-base font-rubik text-[#4F5665] mb-6 text-center lg:text-left max-w-md mx-auto lg:mx-0">
    Provide a network for all your needs with ease and fun using LaslesVPN. Discover interesting features from us.
  </p>
  <div className="text-center lg:text-left">
    <a
      href="#"
      className="inline-block font-semibold px-8 sm:px-10 py-3 sm:py-4 bg-[#F53838] text-[#FFFFFF] rounded-lg hover:bg-red-600 text-sm sm:text-base transition duration-300"
    >
      Get Started
    </a>
  </div>
</div>
      {/* Right content: Image */}
      <div className="w-full lg:w-1/2">
        <img src={heroImage} alt="Hero Illustration" className="w-full h-auto" />
      </div>
    </section>
  );
};

export default HeroSection;
