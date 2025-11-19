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
    <section className="bg-white py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-[#0B132A] mb-8">Choose Your Plan</h2>
        <p className="text-lg text-gray-700 mb-12">Let's choose the package that is best for you and explore it happily and cheerfully.</p>

        <div className="flex justify-center space-x-6">
          {/* Free Plan */}
          <div
            className={`w-80 bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ${selectedPlan === 'free' ? 'border-2 border-red-500' : ''}`}
            onClick={() => handleSelect('free')}
          >
            <img src={freePlanImage} alt="Free Plan" className="w-24 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-[#0B132A] mb-8">Free Plan</h3>
            <ul className="text-left text-gray-700 space-y-4 mb-6">
              <li className="flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-green-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Unlimited Bandwidth
              </li>
              <li className="flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-green-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Encrypted Connection
              </li>
              <li className="flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-green-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                No Traffic Logs
              </li>
              <li className="flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-green-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Works on All Devices
              </li>
            </ul>
            <p className="text-xl font-semibold text-[#0B132A] mb-8">Free</p>
            <button className="px-6 py-2 bg-red-500 text-white rounded-full hover:bg-red-600">Select</button>
          </div>

          {/* Standard Plan */}
          <div
            className={`w-80 bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ${selectedPlan === 'standard' ? 'border-2 border-red-500' : ''}`}
            onClick={() => handleSelect('standard')}
          >
            <img src={standardPlanImage} alt="Standard Plan" className="w-24 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-[#0B132A] mb-4">Standard Plan</h3>
            <ul className="text-left text-gray-700 space-y-2 mb-6">
              <li className="flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-green-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Unlimited Bandwidth
              </li>
              <li className="flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-green-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Encrypted Connection
              </li>
              <li className="flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-green-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Yes Traffic Logs
              </li>
              <li className="flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-green-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Works on All Devices
              </li>
              <li className="flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-green-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Connect Anywhere
              </li>
            </ul>
            <p className="text-xl font-semibold text-[#0B132A] mb-8">$9 / mo</p>
            <button className="px-6 py-2 bg-red-500 text-white rounded-full hover:bg-red-600">Select</button>
          </div>

          {/* Premium Plan */}
          <div
            className={`w-80 bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300 border-2 ${selectedPlan === 'premium' ? 'border-red-500' : 'border-gray-300'}`}
            onClick={() => handleSelect('premium')}
          >
            <img src={premiumPlanImage} alt="Premium Plan" className="w-24 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-[#0B132A] mb-4">Premium Plan</h3>
            <ul className="text-left text-gray-700 space-y-2 mb-6">
              <li className="flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-green-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Unlimited Bandwidth
              </li>
              <li className="flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-green-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Encrypted Connection
              </li>
              <li className="flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-green-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Yes Traffic Logs
              </li>
              <li className="flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-green-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Works on All Devices
              </li>
              <li className="flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-green-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Connect Anywhere
              </li>
              <li className="flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-green-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Get New Features
              </li>
            </ul>
            <p className="text-xl font-semibold text-[#0B132A] mb-4">$12 / mo</p>
            <button className="px-6 py-2 bg-red-500 text-white rounded-full hover:bg-red-600">Select</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
