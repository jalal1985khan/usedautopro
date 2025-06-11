'use client'
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { useRouter } from 'next/navigation';

const FindPartForm: React.FC = () => {
  const [state, handleSubmit] = useForm("mzzrnnkv");
  const router = useRouter();

  if (state.succeeded) {
    router.push('/thank-you');
    return null;
  }

  return (
    <div className="bg-white p-6 rounded shadow-md w-full max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4 text-center text-black">Find A Part Now</h2>
      <form onSubmit={handleSubmit} className="space-y-3">
        <div className="grid grid-cols-2 gap-2 text-black">
          <input className="border p-2 rounded" name="year" placeholder="Year" />
          <input className="border p-2 rounded" name="car" placeholder="Your Car" />
          <input className="border p-2 rounded" name="model" placeholder="Model" />
          <input className="border p-2 rounded" name="part" placeholder="Part" />
          <input className="border p-2 rounded" name="engine" placeholder="Engine Size" />
          <input className="border p-2 rounded" name="transmission" placeholder="Transmission" />
          <input className="border p-2 rounded col-span-2" name="name" placeholder="Your Name" required />
          <input className="border p-2 rounded col-span-2" name="email" type="email" placeholder="Email Address" required />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
          <input className="border p-2 rounded col-span-2" name="phone" placeholder="Phone No." required />
        </div>
        <button 
          type="submit" 
          disabled={state.submitting}
          className="w-full bg-red-600 text-white py-2 rounded font-bold hover:bg-red-700 transition-colors"
        >
          {state.submitting ? 'Submitting...' : 'Find My Part'}
        </button>
      </form>
      
    </div>
  );
};

export default FindPartForm; 