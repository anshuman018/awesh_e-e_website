import React from 'react';
import { ArrowRight, PhoneCall, ChevronDown } from 'lucide-react';
import AnimatedElement from './AnimatedElement';

export default function Hero() {
  const scrollToNext = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      window.scrollTo({
        top: servicesSection.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="relative h-screen overflow-hidden bg-gradient-to-br from-primary-900 via-primary-800 to-primary-950">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-700/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-primary-600/10 rounded-full blur-3xl"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/90 to-primary-950/90 z-10"></div>
        <img
          src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&q=80"
          alt="Electronics repair"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-primary-900/20 backdrop-blur-sm z-0"></div>
      </div>
      
      <div className="relative container mx-auto px-4 h-screen flex items-center z-20">
        <div className="max-w-3xl">
          <AnimatedElement animation="fade" delay={200}>
            <div className="inline-block mb-4 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10">
              <span className="text-primary-100 font-medium">Trusted by 5000+ customers in Singrauli</span>
            </div>
          </AnimatedElement>
          
          <AnimatedElement animation="up" delay={300}>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white leading-tight">
              Expert <span className="text-primary-300">Electronics</span> Repair & Service
            </h1>
          </AnimatedElement>
          
          <AnimatedElement animation="up" delay={400}>
            <p className="text-xl text-primary-100 mb-10 max-w-2xl leading-relaxed">
              Your trusted partner for all home appliance repairs. Professional service
              for TVs, ACs, refrigerators, and more with guaranteed workmanship.
            </p>
          </AnimatedElement>
          
          <AnimatedElement animation="up" delay={500}>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#services"
                className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-lg flex items-center justify-center font-medium transition-all shadow-lg hover:shadow-primary-500/30 hover:-translate-y-1"
              >
                Our Services
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a
                href="tel:9669231117"
                className="bg-white hover:bg-primary-50 text-primary-600 px-8 py-4 rounded-lg flex items-center justify-center font-medium transition-all hover:-translate-y-1"
              >
                <PhoneCall className="mr-2 w-5 h-5" />
                Call for Service
              </a>
            </div>
          </AnimatedElement>
          
          <AnimatedElement animation="fade" delay={700}>
            <div className="mt-16 flex items-center space-x-6">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-200 to-primary-400 border-2 border-white text-primary-900 flex items-center justify-center text-xs font-bold">
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg key={star} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 24 24">
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-primary-100 ml-2">5.0 rating</span>
                </div>
                <p className="text-primary-200 text-sm">from 200+ verified reviews</p>
              </div>
            </div>
          </AnimatedElement>
        </div>
      </div>
      
      {/* Subtle scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-30 text-white flex flex-col items-center cursor-pointer" onClick={scrollToNext}>
        <p className="text-sm text-primary-200 mb-2">Scroll to explore</p>
        <ChevronDown className="w-6 h-6 text-primary-300 animate-bounce-gentle" />
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent z-20"></div>
    </section>
  );
}