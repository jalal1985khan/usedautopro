import React from 'react';

const FindPartForm: React.FC = () => (
  <div className="bg-white p-6 rounded shadow-md w-full max-w-md mx-auto">
    <h2 className="text-xl font-bold mb-4 text-center">Find A Part Now</h2>
    <form className="space-y-3">
      <div className="grid grid-cols-2 gap-2">
        <input className="border p-2 rounded" placeholder="Year" />
        <input className="border p-2 rounded" placeholder="Choose Your Car" />
        <input className="border p-2 rounded" placeholder="Choose Model" />
        <input className="border p-2 rounded" placeholder="Choose Part" />
        <input className="border p-2 rounded" placeholder="Engine Size" />
        <input className="border p-2 rounded" placeholder="Choose Transmission" />
        <input className="border p-2 rounded col-span-2" placeholder="Your Name" />
        <input className="border p-2 rounded col-span-2" placeholder="Email Address" />
        <input className="border p-2 rounded col-span-2" placeholder="Phone No." />
      </div>
      <button type="submit" className="w-full bg-red-600 text-white py-2 rounded font-bold">Find My Part</button>
    </form>
    <div className="mt-4 text-center">
      <a href="tel:8779827774" className="block bg-red-700 text-white py-2 rounded font-bold">(877) 982-7774</a>
    </div>
  </div>
);

export default FindPartForm; 