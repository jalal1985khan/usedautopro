import React from 'react';

const carMakes = [
  'Acura', 'Audi', 'BMW', 'Buick', 'Cadillac', 'Chevrolet', 'Chrysler', 'Dodge', 'Eagle', 'Ford',
  'GMC', 'Honda', 'Hyundai', 'Infiniti', 'Isuzu', 'Jaguar', 'Jeep', 'Kia', 'Landrover', 'Lexus',
  'Mazda', 'Mercedes', 'Mercury', 'Mini', 'Mitsubishi', 'Nissan', 'Pontiac', 'Porsche', 'Saab',
  'Saturn', 'Suzuki', 'Subaru', 'Toyota', 'Volkswagen', 'Volvo'
];

const CarMakeGrid: React.FC = () => (
  <section className="py-10 bg-white">
    <h2 className="text-lg font-bold text-center mb-6">SEARCH BY CAR MAKE</h2>
    <div className="grid grid-cols-4 md:grid-cols-8 gap-6 max-w-5xl mx-auto">
      {carMakes.map((make) => (
        <div key={make} className="flex flex-col items-center">
          <img src={`/car-logos/${make.toLowerCase()}-logo.png`} alt={make} className="w-10 h-10 mb-2" />
          <span className="text-xs text-gray-700">{make}</span>
        </div>
      ))}
    </div>
  </section>
);

export default CarMakeGrid; 