import React from 'react';

const SubscribeSection = () => {
  return (
    <section className="bg-white py-8 sm:py-12 lg:py-16 px-4 sm:px-6">
      <div className="container mx-auto max-w-5xl">
        <div className="flex flex-col lg:flex-row justify-between items-center bg-[#F9FAFB] p-6 sm:p-8 rounded-lg shadow-lg text-center lg:text-left gap-6 lg:gap-0">
          {/* Left Text */}
          <div className="lg:max-w-lg">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-[#0B132A] mb-2 lg:mb-3">
              Subscribe Now for <br className="hidden sm:block" /> Get Special Features!
            </h2>
            <p className="text-sm sm:text-base text-[#6B7280] mt-2">
              Let’s subscribe with us and find the fun.
            </p>
          </div>

          {/* Subscribe Button */}
          <div className="lg:flex-shrink-0">
            <button className="bg-[#F53838] text-white py-3 px-8 sm:py-2 sm:px-6 rounded-lg shadow-lg hover:bg-[#D42F30] transition duration-300 w-full sm:w-auto lg:mr-10 text-sm sm:text-base font-medium">
              Subscribe Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubscribeSection;