// src/components/StatsSection.jsx

import React from 'react';

// Import images
import userIcon from '../assets/user.png'; // Replace with actual image name
import locationIcon from '../assets/location.png'; // Replace with actual image name
import serverIcon from '../assets/server.png'; // Replace with actual image name

const StatsSection = () => {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto flex flex-col lg:flex-row justify-around space-y-8 lg:space-y-0 lg:space-x-12">
        {/* Users Stats */}
        <div className="flex flex-col items-center hover:bg-red-50 p-4 rounded-lg transition duration-300">
          <div className="bg-red-100 p-6 rounded-full">
            <img src={userIcon} alt="User Icon" className="w-16 h-16 object-contain" />
          </div>
          <p className="text-2xl font-semibold text-gray-800 mt-4">90+ Users</p>
        </div>

        {/* Locations Stats */}
        <div className="flex flex-col items-center hover:bg-red-50 p-4 rounded-lg transition duration-300">
          <div className="bg-red-100 p-6 rounded-full">
            <img src={locationIcon} alt="Location Icon" className="w-16 h-16 object-contain" />
          </div>
          <p className="text-2xl font-semibold text-gray-800 mt-4">30+ Locations</p>
        </div>

        {/* Servers Stats */}
        <div className="flex flex-col items-center hover:bg-red-50 p-4 rounded-lg transition duration-300">
          <div className="bg-red-100 p-6 rounded-full">
            <img src={serverIcon} alt="Server Icon" className="w-16 h-16 object-contain" />
          </div>
          <p className="text-2xl font-semibold text-gray-800 mt-4">50+ Servers</p>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
