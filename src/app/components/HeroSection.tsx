import React from 'react';
import Image from 'next/image';

const HeroSection: React.FC = () => (
  <section className="relative bg-black text-white h-[550px] flex items-center justify-center">
    <div className="absolute inset-0 w-full h-full">
      <Image 
        src="/IMG_1585.JPG" 
        alt="Hero Background" 
        fill
        style={{ objectFit: 'cover', opacity: 0.6 }}
        priority
      />
    </div>
    <div className="relative z-10 text-start right-[200px]">
      <h1 className="text-4xl md:text-5xl font-bold mb-4">Quality Used Auto Parts Online</h1>
      <p className="text-lg md:text-xl">Your Reliable Online Marketplace for Used Auto Parts in the USA</p>
    </div>
  </section>
);

export default HeroSection; 