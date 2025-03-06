import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative h-screen">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&q=80"
          alt="Electronics repair"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>
      
      <div className="relative container mx-auto px-4 h-full flex items-center">
        <div className="max-w-2xl text-white">
          <h1 className="text-5xl font-bold mb-6">Expert Electronics Repair & Service</h1>
          <p className="text-xl mb-8">
            Your trusted partner for all home appliance repairs. Professional service
            for TVs, ACs, refrigerators, and more.
          </p>
          <div className="flex space-x-4">
            <a
              href="#services"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg flex items-center"
            >
              Our Services
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
            <a
              href="#contact"
              className="bg-white hover:bg-gray-100 text-blue-600 px-8 py-3 rounded-lg"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}