import React from 'react';

const SubscribeSection = () => {
  return (
    <section className="bg-white py-16 px-4">
      <div className="container mx-auto max-w-5xl">
        <div className="flex justify-between items-center bg-[#F9FAFB] p-6 rounded-lg shadow-lg">
          {/* Left Text */}
          <div>
            <h2 className="text-2xl font-semibold text-[#0B132A] mb-2">Subscribe Now for <br /> Get Special Features!</h2>
            <p className="text-sm text-[#6B7280] mt-2">Let’s subscribe with us and find the fun.</p>
          </div>

          {/* Subscribe Button */}
          <div>
            <button className="bg-[#F53838] mr-10 text-white py-2 px-6 rounded-lg shadow-lg hover:bg-[#D42F30] transition duration-300">
              Subscribe Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubscribeSection;
