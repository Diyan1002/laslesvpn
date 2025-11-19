// src/components/GlobalMapSection.jsx

import React from 'react';
import mapImage from '../assets/map.png'; // Import the map image from assets

const GlobalMapSection = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-[#0B132A] mb-8">Huge Global Network of Fast VPN</h2>
        <p className="text-lg text-gray-700 mb-12">See LaslesVPN everywhere to make it easier for you when you move locations.</p>

        <div className="relative">
          {/* Map Image */}
          <img
            src={mapImage}
            alt="World Map"
            className="w-4/5 mx-auto h-auto max-w-full" // Set width to 80% of the container and center it
          />

          {/* Markers */}
          <div className="absolute top-1/4 left-1/4">
            <div className="w-4 h-4 bg-red-500 rounded-full"></div>
          </div>
          <div className="absolute top-1/3 left-1/2">
            <div className="w-4 h-4 bg-red-500 rounded-full"></div>
          </div>
          <div className="absolute top-1/2 left-1/3">
            <div className="w-4 h-4 bg-red-500 rounded-full"></div>
          </div>
          <div className="absolute top-2/3 left-3/4">
            <div className="w-4 h-4 bg-red-500 rounded-full"></div>
          </div>
          {/* Add more markers here */}
        </div>
      </div>
    </section>
  );
};

export default GlobalMapSection;
