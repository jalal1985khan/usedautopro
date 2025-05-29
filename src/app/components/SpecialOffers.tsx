import React from 'react';
import { FaCogs, FaExchangeAlt } from 'react-icons/fa';

const SpecialOffers: React.FC = () => (
  <section className="py-10 bg-gray-100 text-gray-800">
    <h2 className="text-2xl font-bold text-center mb-8">Special Offers - SHOP NOW!</h2>
    <div className="flex flex-col md:flex-row gap-6 justify-center">
      <div className="bg-white p-6 rounded shadow-md max-w-md flex-1">
        <h3 className="font-bold text-lg mb-2">Unlock Enhanced Performance: Engine Assembly Done Right!</h3>
        <p className="mb-2">Elevate your vehicle&apos;s power with our meticulously crafted and quality-tested rebuilt engines. Designed for superior performance, reliability, and longevity. Each assembly is done by experts for complete confidence, reliability, and value for money.</p>
        <div className="flex justify-center mt-4">
          <FaCogs size={48} className="text-red-500" />
        </div>
      </div>
      <div className="bg-white p-6 rounded shadow-md max-w-md flex-1">
        <h3 className="font-bold text-lg mb-2">Seamless Shifting: Elevate Your Drive with Our Transmission Assemblies!</h3>
        <p className="mb-2">Upgrade your driving experience with our rigorously tested transmission assemblies. Each unit is expertly rebuilt for smooth shifting, reliability, and extended lifespan. Transform your vehicle&apos;s performance today!</p>
        <div className="flex justify-center mt-4">
          <FaExchangeAlt size={48} className="text-red-500" />
        </div>
      </div>
    </div>
  </section>
);

export default SpecialOffers; 