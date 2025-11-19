// src/components/FeatureSection.jsx

import React from 'react';
import featureImage from '../assets/img2.png'; // Import the image from assets

const FeatureSection = () => {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center space-y-8 lg:space-y-0 lg:space-x-12">
        {/* Image Section - Move image to the left */}
        <div className="flex-1 order-1 lg:order-1">
          <img src={featureImage} alt="Feature Image" className="w-full h-auto max-w-md mx-auto lg:ml-0" />
        </div>

        {/* Text Section - Move text to the right */}
        <div className="flex-1 order-2 lg:order-2 text-center lg:text-left">
          <h2 className="text-3xl font-bold text-[#0B132A] mb-4">
            We Provide Many <br /> Features You Can Use
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            You can explore the features that we provide with fun and <br /> have their own functions each feature.
          </p>
          <ul className="space-y-4">
            <li className="flex items-center text-gray-700 justify-center lg:justify-start">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-green-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              Powerful online protection.
            </li>
            <li className="flex items-center text-gray-700 justify-center lg:justify-start">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-green-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              Internet without borders.
            </li>
            <li className="flex items-center text-gray-700 justify-center lg:justify-start">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-green-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              Supercharged VPN.
            </li>
            <li className="flex items-center text-gray-700 justify-center lg:justify-start">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-green-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              No specific time limits.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
