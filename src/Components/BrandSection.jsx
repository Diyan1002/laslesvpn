import React from 'react';
import netflixLogo from '../assets/br4.png'; 
import redditLogo from '../assets/br3.png'; 
import amazonLogo from '../assets/br2.png'; 
import discordLogo from '../assets/br3.png'; 
import spotifyLogo from '../assets/br4.png'; 

const BrandSection = () => {
  const brands = [netflixLogo, redditLogo, amazonLogo, discordLogo, spotifyLogo];

  return (
    <section className="bg-white py-8 sm:py-12 lg:py-16 px-4 sm:px-6">
      <div className="container mx-auto max-w-6xl">
        
        {/* Desktop Grid Layout */}
        <div className="hidden lg:grid grid-cols-5 gap-8 opacity-120">
          {brands.map((logo, index) => (
            <div key={index} className="flex items-center justify-center">
              <img 
                src={logo} 
                alt={`Brand Logo ${index + 1}`} 
                className="w-24 xl:w-32 mx-auto max-w-full h-auto" 
              />
            </div>
          ))}
        </div>

        {/* Mobile & Tablet - Animated Scroll */}
        <div className="lg:hidden relative overflow-hidden">
          <div className="flex animate-scroll space-x-8 py-2">
            {/* Double the logos for seamless looping */}
            {[...brands, ...brands].map((logo, index) => (
              <div key={index} className="flex-shrink-0">
                <img 
                  src={logo} 
                  alt={`Brand Logo ${index % brands.length + 1}`} 
                  className="w-20 h-12 sm:w-24 sm:h-14 object-contain" 
                />
              </div>
            ))}
          </div>
          
          {/* Gradient overlays to hide edges */}
          <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-white to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-white to-transparent z-10"></div>
        </div>

      </div>

      {/* Add custom animation to your CSS */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 20s linear infinite;
          display: flex;
          width: max-content;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default BrandSection;