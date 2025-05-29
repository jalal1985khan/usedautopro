import React from 'react';

const testimonials = [
  {
    name: 'Heidi Gavalon from TX',
    text: `I can't express how thrilled I am with the motor I got. It runs like a dream, and my mechanic was impressed with how clean and low mileage everything under the cover was. Used Auto Parts Pro came through for me, and I wouldn't think twice about choosing them again for novel another engine timing. Top-notch quality and service all the way!`,
  },
  {
    name: 'Mike Anspach from MA',
    text: `Used Auto Parts Pro deserves nothing less than a perfect 10 in my book. The professionalism, turnaround time, and the level of dedication impressed me. The hours of research paid off, and entrusting my vehicle to Used Auto Parts Pro's team is commendable. You've won my trust and loyalty. Kudos to Used Auto Parts Pro for setting a new standard of excellence!`,
  },
  {
    name: 'Robert S from NY',
    text: `I want to shout from the rooftop about my 100% satisfaction with my order. When it comes to accuracy and smoothness, nobody does it better. So, if you're on the fence about where to source a used auto part, Used Auto Parts Pro, you've earned my unwavering trust and admiration!`,
  },
];

const Testimonials: React.FC = () => (
  <section className="py-10 bg-gray-100 text-gray-800">
    <h2 className="text-2xl font-bold text-center mb-8">Testimonial</h2>
    <div className="flex flex-col md:flex-row gap-6 justify-center">
      {testimonials.map((t, i) => (
        <div key={i} className="bg-white p-6 rounded shadow-md max-w-md flex-1">
          <p className="mb-2 text-gray-700">{t.text}</p>
          <span className="block mt-4 font-bold text-gray-900">{t.name}</span>
        </div>
      ))}
    </div>
  </section>
);

export default Testimonials; 