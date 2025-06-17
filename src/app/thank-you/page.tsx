'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';

export default function ThankYouPage() {
  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.href = 'https://2ndweb.vercel.app/';
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      
      <Header />  
<script async src="https://www.googletagmanager.com/gtag/js?id=AW-17155724755"></script>
      <script
        dangerouslySetInnerHTML={{
            __html: `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'AW-17155724755');
  `,
          }}
/>

      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto p-8 text-center"
        >
          <div className="mb-8">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <svg
                className="w-10 h-10 text-green-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </motion.div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Thank You!
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Your submission has been received successfully. We appreciate your interest and will get back to you soon.
            </p>
            <Link
              href="https://2ndweb.vercel.app/"
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200"
            >
              Return to Home
            </Link>
          </div>
        </motion.div>
      </div>
      <Footer />
    </>
  );
} 