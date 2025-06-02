import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaCcVisa, FaCcMastercard, FaCcAmex, FaCcPaypal } from 'react-icons/fa';

const Footer: React.FC = () => (
  <footer className="bg-black text-white py-8 mt-10">
    <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
      <div>
        <ul className="space-y-2">
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Search by Vehicle Model</li>
          <li>Shop</li>
          <li>FAQ</li>
        </ul>
      </div>
      <div>
        <ul className="space-y-2">
          <li><a href="/privacy-policy" className="underline">Privacy Policy</a></li>
          <li><a href="/refund-policy" className="underline">Refund Policy</a></li>
          <li><a href="/terms" className="underline">Terms and Conditions</a></li>
          
          <li>Submit a Ticket</li>
        </ul>
      </div>
      <div>
        
        <div className="mb-2">Email: <a href="mailto:sales@recyledautoparts.com" className="underline">sales@recyledautoparts.com</a></div>
        <div className="flex space-x-2 mt-2">
          <a href="#" aria-label="Facebook"><FaFacebookF className="w-6 h-6 text-white hover:text-red-500" /></a>
          <a href="#" aria-label="Instagram"><FaInstagram className="w-6 h-6 text-white hover:text-red-500" /></a>
          <a href="#" aria-label="LinkedIn"><FaLinkedinIn className="w-6 h-6 text-white hover:text-red-500" /></a>
        </div>
        <div className="mt-4">
          <span className="block mb-1">PAY SECURELY WITH</span>
          <div className="flex space-x-2">
            <FaCcVisa className="w-10 h-6 text-blue-500" />
            <FaCcMastercard className="w-10 h-6 text-red-600" />
            <FaCcAmex className="w-10 h-6 text-blue-700" />
            <FaCcPaypal className="w-10 h-6 text-yellow-500" />
          </div>
        </div>
      </div>
    </div>
    <div className="text-center text-xs text-gray-400 mt-8">&copy; {new Date().getFullYear()} Used Auto Parts Pro. All rights reserved.</div>
  </footer>
);

export default Footer; 