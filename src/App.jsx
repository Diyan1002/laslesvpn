// src/App.jsx

import React from 'react';
import Navbar from './Components/Navbar ';
import HeroSection from './Components/HeroSection';
import StatsSection from './Components/StatsSection';
import FeatureSection from './Components/FeatureSection';
import PricingSection from './Components/PricingSection';
import GlobalMapSection from './Components/GlobalMapSection';
import BrandSection from './Components/BrandSection';
import TestimonialSection from './Components/TestimonialSection';
import SubscribeSection from './Components/SubscribeSection';
import Footer from './Components/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <StatsSection />
      <FeatureSection />
      <PricingSection />
      <GlobalMapSection />
      <BrandSection />
      <TestimonialSection />
      <SubscribeSection />
      <Footer />
    </div>
  );
}

export default App;
