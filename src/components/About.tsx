import React from 'react';
import { Award, Users, Clock, Shield } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Awesh Electronics</h2>
          <p className="text-xl text-gray-600">
            With over 15 years of experience, we're your trusted partner for all electronic repair needs.
            Our certified technicians ensure quality service for all major brands.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {[
            {
              icon: <Award className="w-8 h-8" />,
              title: "15+ Years",
              description: "Of trusted service"
            },
            {
              icon: <Users className="w-8 h-8" />,
              title: "5000+",
              description: "Happy customers"
            },
            {
              icon: <Clock className="w-8 h-8" />,
              title: "24/7",
              description: "Emergency service"
            },
            {
              icon: <Shield className="w-8 h-8" />,
              title: "Warranty",
              description: "Guaranteed work"
            }
          ].map((item, index) => (
            <div key={index} className="text-center">
              <div className="text-blue-600 flex justify-center mb-4">{item.icon}</div>
              <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6">Our Mission</h3>
              <p className="text-gray-600 mb-4">
                To provide reliable, efficient, and affordable electronic repair services
                while maintaining the highest standards of customer satisfaction.
              </p>
              <p className="text-gray-600">
                We believe in transparent pricing, quick turnaround times, and
                building long-lasting relationships with our customers.
              </p>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80"
                alt="Electronics repair workshop"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}