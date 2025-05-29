import React from 'react';

const HeroSection: React.FC = () => (
  <section className="relative bg-black text-white h-[550px] flex items-center justify-center">
    <img src="/IMG_1585.JPG" alt="Hero Background" className="absolute inset-0 w-full h-full object-cover opacity-60" />
    <div className="relative z-10 text-center">
      <h1 className="text-4xl md:text-5xl font-bold mb-4">Quality Used Auto Parts Online</h1>
      <p className="text-lg md:text-xl">Your Reliable Online Marketplace for Used Auto Parts in the USA</p>
    </div>
  </section>
);

export default HeroSection; 