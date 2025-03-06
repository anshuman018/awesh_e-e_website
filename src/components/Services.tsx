import React from 'react';
import { Tv, Wind, Smartphone, Radio } from 'lucide-react';

const services = [
  {
    icon: <Tv className="w-8 h-8" />,
    title: 'TV Repair',
    description: 'Expert repair services for all TV brands including LED, LCD, and Smart TVs.'
  },
  {
    icon: <Wind className="w-8 h-8" />,
    title: 'AC Service',
    description: 'Professional AC repair, maintenance, and installation services.'
  },
  {
    icon: <Smartphone className="w-8 h-8" />,
    title: 'Home Appliances',
    description: 'Repair services for refrigerators, washing machines, and other home appliances.'
  },
  {
    icon: <Radio className="w-8 h-8" />,
    title: 'Electronics',
    description: 'Repair and maintenance of electronic devices and small appliances.'
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600">
            Professional repair and maintenance services for all your home appliances
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="text-blue-600 mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}