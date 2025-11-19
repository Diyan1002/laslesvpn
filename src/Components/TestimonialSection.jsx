// src/components/TestimonialSection.jsx

import React, { useState } from 'react';
import customerImage1 from '../assets/pic1.png';
import customerImage2 from '../assets/pic2.png';
import customerImage3 from '../assets/pic3.png';

const testimonials = [
  {
    id: 1,
    name: 'Viezh Robert',
    location: 'Warsaw, Poland',
    rating: 4.5,
    text: "Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best.",
    image: customerImage1,
  },
  {
    id: 2,
    name: 'Yessica Christy',
    location: 'Shanxi, China',
    rating: 4.5,
    text: "I like it because I like to travel far and still can connect with high speed.",
    image: customerImage2,
  },
  {
    id: 3,
    name: 'Kim Young Jou',
    location: 'Seoul, South Korea',
    rating: 4.5,
    text: "This is very unusual for my business that currently requires a virtual private network that has high security.",
    image: customerImage3,
  }
];

const TestimonialSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="bg-white py-8 sm:py-12 lg:py-16 px-4 sm:px-6">
      <div className="container mx-auto max-w-6xl">
        {/* Header Section */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0B132A] mb-3 sm:mb-4">
            Trusted by Thousands of <br className="hidden sm:block" /> Happy Customer
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-[#4F5665] max-w-2xl mx-auto">
            These are the stories of our customers who have joined us with great <br className="hidden sm:block" /> pleasure when using this crazy feature.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-6 sm:mb-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`bg-white border border-[#DDDDDD] rounded-2xl p-4 sm:p-6 lg:p-8 transition-all duration-300 ${
                index === currentTestimonial ? 'border-[#F53838] shadow-lg' : 'hover:border-[#F53838] hover:shadow-md'
              }`}
            >
              {/* Customer Info and Rating */}
              <div className="flex items-center justify-between mb-4 sm:mb-5">
                <div className="flex items-center">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-full object-cover mr-3 sm:mr-4" 
                  />
                  <div>
                    <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-[#0B132A]">{testimonial.name}</h3>
                    <p className="text-xs sm:text-sm text-[#4F5665]">{testimonial.location}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <span className="text-xs sm:text-sm font-medium text-[#0B132A] mr-1 sm:mr-2">{testimonial.rating}</span>
                  <div className="flex">
                    {[...Array(5)].map((_, starIndex) => (
                      <svg
                        key={starIndex}
                        className={`w-3 h-3 sm:w-4 sm:h-4 ${starIndex < Math.floor(testimonial.rating) ? 'text-[#FEA250]' : 'text-[#DEDEDE]'}`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                      </svg>
                    ))}
                  </div>
                </div>
              </div>

              {/* Testimonial Text */}
              <p className="text-[#0B132A] text-xs sm:text-sm lg:text-base leading-relaxed">
                {testimonial.text}
              </p>
            </div>
          ))}
        </div>

        {/* Navigation and Dots */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-0">
          {/* Dots Indicator */}
          <div className="flex space-x-2 order-2 sm:order-1">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-colors ${
                  index === currentTestimonial ? 'bg-[#F53838]' : 'bg-[#DDE0E4]'
                }`}
              />
            ))}
          </div>

          {/* Navigation Arrows */}
          <div className="flex space-x-3 sm:space-x-4 order-1 sm:order-2">
            <button
              onClick={prevTestimonial}
              className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 flex items-center justify-center border border-[#F53838] rounded-full text-[#F53838] hover:bg-[#F53838] hover:text-white transition-colors duration-300"
            >
              <svg className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextTestimonial}
              className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 flex items-center justify-center border border-[#F53838] rounded-full text-[#F53838] hover:bg-[#F53838] hover:text-white transition-colors duration-300"
            >
              <svg className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;