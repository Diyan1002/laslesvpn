import React from 'react';
import netflixLogo from '../assets/br4.png'; 
import redditLogo from '../assets/br3.png'; 
import amazonLogo from '../assets/br2.png'; 
import discordLogo from '../assets/br3.png'; 
import spotifyLogo from '../assets/br4.png'; 

const BrandSection = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto text-center">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 opacity-120">
          {/* Brand Logos */}
          <img src={netflixLogo} alt="Netflix Logo" className="w-24 sm:w-32 lg:w-36 mx-auto" />
          <img src={redditLogo} alt="Reddit Logo" className="w-24 sm:w-32 lg:w-36 mx-auto" />
          <img src={amazonLogo} alt="Amazon Logo" className="w-24 sm:w-32 lg:w-36 mx-auto" />
          <img src={discordLogo} alt="Discord Logo" className="w-24 sm:w-32 lg:w-36 mx-auto" />
          <img src={spotifyLogo} alt="Spotify Logo" className="w-24 sm:w-32 lg:w-36 mx-auto" />
        </div>
      </div>
    </section>
  );
};

export default BrandSection;
