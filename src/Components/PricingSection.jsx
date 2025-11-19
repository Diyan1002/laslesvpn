// src/components/PricingSection.jsx

import React, { useState } from 'react';
import freePlanImage from '../assets/fea.png'; // Import the image for Free Plan from assets
import standardPlanImage from '../assets/fea1.png'; // Import the image for Standard Plan from assets
import premiumPlanImage from '../assets/fea2.png'; // Import the image for Premium Plan from assets

const PricingSection = () => {
  // State to track the selected plan
  const [selectedPlan, setSelectedPlan] = useState(null);

  // Function to handle plan selection
  const handleSelect = (plan) => {
    setSelectedPlan(plan);
  };

  return (
    <section className="bg-white py-8 md:py-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto text-center max-w-7xl">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0B132A] mb-4 md:mb-8">
          Choose Your Plan
        </h2>
        <p className="text-base sm:text-lg text-gray-700 mb-8 md:mb-12 max-w-2xl mx-auto">
          Let's choose the package that is best for you and explore it happily and cheerfully.
        </p>

        <div className="flex flex-col lg:flex-row justify-center items-center gap-6 md:gap-8 lg:space-x-6">
          {/* Free Plan */}
          <div
            className={`w-full max-w-sm sm:max-w-md lg:w-80 bg-white p-6 sm:p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300 cursor-pointer ${
              selectedPlan === 'free' ? 'border-2 border-red-500' : 'border border-gray-200'
            }`}
            onClick={() => handleSelect('free')}
          >
            <img 
              src={freePlanImage} 
              alt="Free Plan" 
              className="w-16 sm:w-20 lg:w-24 mx-auto mb-4" 
            />
            <h3 className="text-lg sm:text-xl font-semibold text-[#0B132A] mb-6 sm:mb-8">
              Free Plan
            </h3>
            <ul className="text-left text-gray-700 space-y-3 sm:space-y-4 mb-6">
              <li className="flex items-center justify-center sm:justify-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm sm:text-base">Unlimited Bandwidth</span>
              </li>
              <li className="flex items-center justify-center sm:justify-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm sm:text-base">Encrypted Connection</span>
              </li>
              <li className="flex items-center justify-center sm:justify-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm sm:text-base">No Traffic Logs</span>
              </li>
              <li className="flex items-center justify-center sm:justify-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm sm:text-base">Works on All Devices</span>
              </li>
            </ul>
            <p className="text-lg sm:text-xl font-semibold text-[#0B132A] mb-6 sm:mb-8">Free</p>
            <button className="w-full sm:w-auto px-6 py-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition duration-300 text-sm sm:text-base">
              Select
            </button>
          </div>

          {/* Standard Plan */}
          <div
            className={`w-full max-w-sm sm:max-w-md lg:w-80 bg-white p-6 sm:p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300 cursor-pointer ${
              selectedPlan === 'standard' ? 'border-2 border-red-500' : 'border border-gray-200'
            }`}
            onClick={() => handleSelect('standard')}
          >
            <img 
              src={standardPlanImage} 
              alt="Standard Plan" 
              className="w-16 sm:w-20 lg:w-24 mx-auto mb-4" 
            />
            <h3 className="text-lg sm:text-xl font-semibold text-[#0B132A] mb-4 sm:mb-6">
              Standard Plan
            </h3>
            <ul className="text-left text-gray-700 space-y-2 sm:space-y-3 mb-6">
              <li className="flex items-center justify-center sm:justify-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm sm:text-base">Unlimited Bandwidth</span>
              </li>
              <li className="flex items-center justify-center sm:justify-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm sm:text-base">Encrypted Connection</span>
              </li>
              <li className="flex items-center justify-center sm:justify-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm sm:text-base">Yes Traffic Logs</span>
              </li>
              <li className="flex items-center justify-center sm:justify-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm sm:text-base">Works on All Devices</span>
              </li>
              <li className="flex items-center justify-center sm:justify-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm sm:text-base">Connect Anywhere</span>
              </li>
            </ul>
            <p className="text-lg sm:text-xl font-semibold text-[#0B132A] mb-6 sm:mb-8">$9 / mo</p>
            <button className="w-full sm:w-auto px-6 py-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition duration-300 text-sm sm:text-base">
              Select
            </button>
          </div>

          {/* Premium Plan */}
          <div
            className={`w-full max-w-sm sm:max-w-md lg:w-80 bg-white p-6 sm:p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300 cursor-pointer ${
              selectedPlan === 'premium' ? 'border-2 border-red-500' : 'border border-gray-200'
            }`}
            onClick={() => handleSelect('premium')}
          >
            <img 
              src={premiumPlanImage} 
              alt="Premium Plan" 
              className="w-16 sm:w-20 lg:w-24 mx-auto mb-4" 
            />
            <h3 className="text-lg sm:text-xl font-semibold text-[#0B132A] mb-4 sm:mb-6">
              Premium Plan
            </h3>
            <ul className="text-left text-gray-700 space-y-2 sm:space-y-3 mb-6">
              <li className="flex items-center justify-center sm:justify-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm sm:text-base">Unlimited Bandwidth</span>
              </li>
              <li className="flex items-center justify-center sm:justify-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm sm:text-base">Encrypted Connection</span>
              </li>
              <li className="flex items-center justify-center sm:justify-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm sm:text-base">Yes Traffic Logs</span>
              </li>
              <li className="flex items-center justify-center sm:justify-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm sm:text-base">Works on All Devices</span>
              </li>
              <li className="flex items-center justify-center sm:justify-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm sm:text-base">Connect Anywhere</span>
              </li>
              <li className="flex items-center justify-center sm:justify-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm sm:text-base">Get New Features</span>
              </li>
            </ul>
            <p className="text-lg sm:text-xl font-semibold text-[#0B132A] mb-6 sm:mb-8">$12 / mo</p>
            <button className="w-full sm:w-auto px-6 py-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition duration-300 text-sm sm:text-base">
              Select
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;