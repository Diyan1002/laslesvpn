// src/components/GlobalMapSection.jsx

import React from 'react';
import mapImage from '../assets/map.png'; // Import the map image from assets

const GlobalMapSection = () => {
  return (
    <section className="bg-white py-8 sm:py-12 lg:py-16 px-4 sm:px-6">
      <div className="container mx-auto text-center max-w-6xl">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0B132A] mb-4 sm:mb-6 lg:mb-8">
          Huge Global Network of Fast VPN
        </h2>
        <p className="text-sm sm:text-base lg:text-lg text-gray-700 mb-8 sm:mb-10 lg:mb-12 max-w-2xl mx-auto">
          See LaslesVPN everywhere to make it easier for you when you move locations.
        </p>

        <div className="relative">
          {/* Map Image */}
          <img
            src={mapImage}
            alt="World Map"
            className="w-full sm:w-11/12 lg:w-4/5 mx-auto h-auto max-w-full" // Responsive width
          />

          {/* Markers - Responsive positioning and sizing */}
          <div className="absolute top-[20%] sm:top-1/4 left-[15%] sm:left-1/4">
            <div className="w-3 h-3 sm:w-4 sm:h-4 bg-red-500 rounded-full animate-pulse"></div>
          </div>
          <div className="absolute top-[30%] sm:top-1/3 left-[45%] sm:left-1/2">
            <div className="w-3 h-3 sm:w-4 sm:h-4 bg-red-500 rounded-full animate-pulse"></div>
          </div>
          <div className="absolute top-[45%] sm:top-1/2 left-[25%] sm:left-1/3">
            <div className="w-3 h-3 sm:w-4 sm:h-4 bg-red-500 rounded-full animate-pulse"></div>
          </div>
          <div className="absolute top-[60%] sm:top-2/3 left-[70%] sm:left-3/4">
            <div className="w-3 h-3 sm:w-4 sm:h-4 bg-red-500 rounded-full animate-pulse"></div>
          </div>
          
          {/* Additional markers for better coverage */}
          <div className="absolute top-[15%] left-[75%] sm:top-[20%] sm:left-[80%]">
            <div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-500 rounded-full animate-pulse"></div>
          </div>
          <div className="absolute top-[55%] left-[60%] sm:top-[60%] sm:left-[65%]">
            <div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-500 rounded-full animate-pulse"></div>
          </div>
          <div className="absolute top-[35%] left-[10%] sm:top-[40%] sm:left-[15%]">
            <div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-500 rounded-full animate-pulse"></div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default GlobalMapSection;