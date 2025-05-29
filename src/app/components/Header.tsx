import React from 'react';
// import Image from 'next/image';
import { FaCar } from 'react-icons/fa';

const navLinks = [
  { name: 'Home', href: '#', active: true },
  { name: 'Used Auto Parts', href: '#', active: false },
  { name: 'Used Transmissions', href: '#', active: false },
  { name: 'Used Engine', href: '#', active: false },
];

const Header: React.FC = () => (
  <header className="bg-white shadow-md">
    <div className="max-w-7xl mx-auto flex items-center justify-between py-3 px-4">
      <div className="flex items-center space-x-2">
        {/* <Image src="/logo.png" alt="AutoSquare Logo" width={40} height={40} /> */}
        <FaCar size={28} className="text-red-600 ml-2" />
        <span className="font-bold text-lg text-gray-800 tracking-wide uppercase">recyledautoparts</span>
        {/* <span className="text-xs text-gray-500 ml-2">AUTO PARTS EXPERT</span> */}
      </div>
      <nav className="hidden md:flex space-x-2">
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className={`px-4 py-2 rounded-full font-semibold text-sm transition-colors duration-200 ${link.active ? 'bg-red-600 text-white' : 'text-gray-700 hover:bg-red-100'}`}
          >
            {link.name}
          </a>
        ))}
      </nav>
    </div>
  </header>
);

export default Header; 