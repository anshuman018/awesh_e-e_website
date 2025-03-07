import React, { useState, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import AnimatedElement from './AnimatedElement';

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
  },
  {
    name: "Rakesh Kumar",
    role: "School Principal",
    image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80",
    content: "I've been using Awesh Electronics for our school's AV equipment maintenance. Their knowledge and prompt service are outstanding.",
    rating: 5
  }
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  useEffect(() => {
    if (!autoplay) return;
    
    const interval = setInterval(() => {
      setActiveIndex(prev => (prev + 1) % Math.ceil(testimonials.length / 2));
    }, 5000);
    
    return () => clearInterval(interval);
  }, [autoplay]);

  const goToSlide = (index: number) => {
    setActiveIndex(index);
    setAutoplay(false);
    setTimeout(() => setAutoplay(true), 10000);
  };

  const nextSlide = () => goToSlide((activeIndex + 1) % Math.ceil(testimonials.length / 2));
  const prevSlide = () => goToSlide((activeIndex - 1 + Math.ceil(testimonials.length / 2)) % Math.ceil(testimonials.length / 2));

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <AnimatedElement animation="up">
          <div className="text-center mb-16">
            <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-4">TESTIMONIALS</span>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it - hear from our satisfied customers across Singrauli
            </p>
          </div>
        </AnimatedElement>
        
        <AnimatedElement animation="fade" delay={300}>
          <div className="relative max-w-6xl mx-auto overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-out" 
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {Array.from({ length: Math.ceil(testimonials.length / 2) }).map((_, pageIndex) => (
                <div key={pageIndex} className="w-full flex-shrink-0 px-4">
                  <div className="grid md:grid-cols-2 gap-8">
                    {testimonials.slice(pageIndex * 2, pageIndex * 2 + 2).map((testimonial, index) => (
                      <div 
                        key={index} 
                        className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all relative border border-gray-100"
                      >
                        <Quote className="absolute top-4 right-4 w-8 h-8 text-blue-100" />
                        
                        <div className="flex items-center mb-6">
                          <div className="w-16 h-16 rounded-full overflow-hidden mr-4 border-2 border-blue-100">
                            <img
                              src={testimonial.image}
                              alt={testimonial.name}
                              className="w-full h-full object-cover"
                              onError={(e) => {
                                e.currentTarget.src = "https://via.placeholder.com/150?text=Customer";
                              }}
                            />
                          </div>
                          <div>
                            <h3 className="font-bold text-lg">{testimonial.name}</h3>
                            <p className="text-gray-600">{testimonial.role}</p>
                          </div>
                        </div>
                        
                        <div className="flex mb-4 text-yellow-400">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i} 
                              className={`w-5 h-5 ${i < testimonial.rating ? 'fill-current' : ''}`} 
                            />
                          ))}
                        </div>
                        
                        <p className="text-gray-600 italic">"{testimonial.content}"</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            
            {/* Navigation buttons */}
            {testimonials.length > 2 && (
              <>
                <button 
                  onClick={prevSlide}
                  className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-blue-600 hover:bg-blue-50"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button 
                  onClick={nextSlide}
                  className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-blue-600 hover:bg-blue-50"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </>
            )}
            
            {/* Dots indicator */}
            <div className="flex justify-center mt-8 space-x-2">
              {Array.from({ length: Math.ceil(testimonials.length / 2) }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    activeIndex === index ? 'bg-blue-600 w-8' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </AnimatedElement>
      </div>
    </section>
  );
}