import React from 'react';
import Image from 'next/image';

const carMakes = [
  'Acura', 'Audi', 'BMW', 'Buick', 'Cadillac', 'Chevrolet', 'Chrysler', 'Dodge', 'Eagle', 'Ford',
  'GMC', 'Honda', 'Hyundai', 'Infiniti', 'Isuzu', 'Jaguar', 'Jeep', 'Kia', 'Landrover', 'Lexus',
  'Mazda', 'Mercedes', 'Mercury', 'Mini', 'Mitsubishi', 'Nissan', 'Pontiac', 'Porsche', 'Saab',
  'Saturn', 'Suzuki', 'Subaru', 'Toyota', 'Volkswagen', 'Volvo'
];

const CarMakeGrid: React.FC = () => (
  <section className="py-10 bg-white text-gray-800">
    <h2 className="text-lg font-bold text-center mb-6">SEARCH BY CAR MAKE</h2>
    <div className="grid grid-cols-4 md:grid-cols-5 gap-6 max-w-5xl mx-auto">
      {carMakes.map((make) => (
        <div key={make} className="flex flex-col items-center">
          <div className="relative h-20 w-20 mb-2">
            <Image 
              src={`/${make.toLowerCase()}-logo.webp`} 
              alt={make}
              fill
              style={{ objectFit: 'contain' }}
            />
          </div>
          <span className="text-xs text-gray-700">{make}</span>
        </div>
      ))}
    </div>
  </section>
);

export default CarMakeGrid; 