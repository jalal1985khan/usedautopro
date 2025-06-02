'use client'

import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const RefundPolicy = () => {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-6 text-center text-gray-900">REFUND POLICY</h1>
          
          <div className="prose prose-lg bg-white p-6 rounded-lg shadow-sm text-gray-900">
            <section className="mb-6">
              <h2 className="text-xl font-semibold mb-3 text-gray-900">Return Policy</h2>
              <p className="mb-4 text-gray-900">
                At Recycled Auto Parts, we strive to ensure complete customer satisfaction with every purchase. We understand that sometimes parts may not be exactly what you need, and we&apos;re here to help with returns and refunds.
              </p>
            </section>

            <section className="mb-6">
              <h2 className="text-xl font-semibold mb-3 text-gray-900">Return Conditions</h2>
              <ul className="list-disc pl-6 mb-4 text-gray-900">
                <li>Parts must be returned within 30 days of purchase</li>
                <li>Items must be in original condition and packaging</li>
                <li>All original documentation must be included</li>
                <li>Parts must not be installed or modified</li>
              </ul>
            </section>

            <section className="mb-6">
              <h2 className="text-xl font-semibold mb-3 text-gray-900">Refund Process</h2>
              <p className="mb-4 text-gray-900">
                Once we receive and inspect the returned item, we will process your refund within 5-7 business days. Refunds will be issued to the original payment method used for the purchase.
              </p>
            </section>

            <section className="mb-6">
              <h2 className="text-xl font-semibold mb-3 text-gray-900">Shipping Returns</h2>
              <p className="mb-4 text-gray-900">
                Customers are responsible for return shipping costs unless the return is due to our error. We recommend using a trackable shipping service and purchasing shipping insurance for valuable items.
              </p>
            </section>

            <section className="mb-6">
              <h2 className="text-xl font-semibold mb-3 text-gray-900">Non-Refundable Items</h2>
              <ul className="list-disc pl-6 mb-4 text-gray-900">
                <li>Items that have been installed or modified</li>
                <li>Items returned after 30 days</li>
                <li>Items not in original condition</li>
                <li>Items missing original packaging or documentation</li>
              </ul>
            </section>

            <section className="mb-6">
              <h2 className="text-xl font-semibold mb-3 text-gray-900">Contact Us</h2>
              <p className="mb-4 text-gray-900">
                If you have any questions about our refund policy or need assistance with a return, please contact us at sales@recyledautoparts.com
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default RefundPolicy; 