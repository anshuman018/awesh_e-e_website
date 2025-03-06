import React from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Suraj Shah",
    role: "Doctor",
    image: "/logos/suraj.jpg",
    content: "Excellent service! They fixed my AC in no time and the technician was very professional. Highly recommended!",
    rating: 5
  },
  {
    name: "Saurav Shah",
    role: "Business Owner",
    image: "/logos/saurav.jpg",
    content: "We use Awesh Electronics for all our appliance repairs. Their team is reliable, efficient, and always delivers quality work.",
    rating: 5
  },
  {
    name: "Sanjay",
    role: "Restaurant Manager",
    image: "/logos/sanjay.jpg",
    content: "Quick response time and excellent repair work. They've helped us maintain our commercial refrigeration units perfectly.",
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
          <p className="text-xl text-gray-600">
            Don't just take our word for it - hear from our satisfied customers
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-lg relative">
              <Quote className="absolute top-4 right-4 w-8 h-8 text-blue-100" />
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                  <p className="text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600">{testimonial.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}