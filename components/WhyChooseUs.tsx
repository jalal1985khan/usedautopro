import React from 'react';
import { FaCheckCircle, FaShippingFast, FaExchangeAlt, FaShieldAlt, FaTags, FaSearch } from 'react-icons/fa';

const features = [
  { title: 'Guaranteed Parts', desc: 'Seamless shipping, worry-free service, and a touch of professionalism redefine your journey. Choose us for quality and satisfaction, every step of the way.', icon: <FaCheckCircle size={48} className="text-red-500 mb-4" /> },
  { title: 'We Offer Free Shipping', desc: 'Seamless shipping on every order. Find your auto part at no extra cost. Experience the difference with us.', icon: <FaShippingFast size={48} className="text-red-500 mb-4" /> },
  { title: 'We Offer Easy Replacements', desc: 'We stand behind our hassle-free returns and replacements. Your satisfaction, our priority.', icon: <FaExchangeAlt size={48} className="text-red-500 mb-4" /> },
  { title: 'We Offer Reliability', desc: 'Count on us for reliability. Our commitment shines through in every quality used OEM Auto Part, from engines to transmissions.', icon: <FaShieldAlt size={48} className="text-red-500 mb-4" /> },
  { title: 'We Offer Competitive Pricing.', desc: 'Unlock affordability with us. Our products boast competitive pricing, perfectly aligned with your budget.', icon: <FaTags size={48} className="text-red-500 mb-4" /> },
  { title: 'We Search All Brands', desc: 'We explore every brand, every make, and model. Have a question? Reach out to (877) 982-7774.', icon: <FaSearch size={48} className="text-red-500 mb-4" /> },
];

const WhyChooseUs: React.FC = () => (
  <section className="py-10 bg-gray-100">
    <h2 className="text-2xl font-bold text-center mb-8">Why Choose Us?</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
      {features.map((f, i) => (
        <div key={i} className="bg-black text-white p-6 rounded shadow-md flex flex-col items-center">
          {f.icon}
          <h3 className="font-bold text-lg mb-2 text-center">{f.title}</h3>
          <p className="text-center text-sm">{f.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

export default WhyChooseUs; 