import React from 'react';
import { Award, Users, Clock, Shield, CheckCircle, Wrench, Star, Zap } from 'lucide-react';
import AnimatedElement from './AnimatedElement';

export default function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-neutral-50 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <AnimatedElement animation="up">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-block py-1 px-3 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-4">ABOUT US</span>
            <h2 className="text-4xl font-bold text-neutral-900 mb-6">Your Trusted Partner Since 2009</h2>
            <p className="text-xl text-neutral-600">
              With over 15 years of experience, Awesh Electronics has been providing expert repair services for all major electronic brands in Singrauli. Our mission is to deliver reliable solutions with unmatched customer service.
            </p>
          </div>
        </AnimatedElement>

        {/* Stats with Enhanced Visual Appeal */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: <Award className="w-10 h-10" />,
              title: "15+ Years",
              description: "Of trusted service in Singrauli",
              color: "bg-amber-50 text-amber-600"
            },
            {
              icon: <Users className="w-10 h-10" />,
              title: "5000+",
              description: "Happy customers served",
              color: "bg-emerald-50 text-emerald-600"
            },
            {
              icon: <Clock className="w-10 h-10" />,
              title: "24/7",
              description: "Emergency repair service",
              color: "bg-blue-50 text-blue-600"
            },
            {
              icon: <Shield className="w-10 h-10" />,
              title: "Warranty",
              description: "On all repair services",
              color: "bg-purple-50 text-purple-600"
            }
          ].map((item, index) => (
            <AnimatedElement 
              key={index} 
              animation="up" 
              delay={100 + index * 50} // Reduced delay between items
              speed="fast" 
              distance={15}
              className="bg-white p-6 rounded-xl shadow-sm border border-neutral-100 transition-all duration-300 hover:shadow-md hover:-translate-y-1"
            >
              <div className={`${item.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-5`}>
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
              <p className="text-neutral-600">{item.description}</p>
            </AnimatedElement>
          ))}
        </div>

        {/* Story & Mission Section */}
        <AnimatedElement animation="fade" className="mb-20">
          <div className="bg-white rounded-2xl overflow-hidden shadow-lg relative">
            <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-primary-500 to-primary-700"></div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center p-8 md:p-12">
              <AnimatedElement animation="left" delay={200} className="relative z-10">
                <h3 className="text-3xl font-bold mb-6">Our Story & Mission</h3>
                
                <p className="text-neutral-700 mb-6 leading-relaxed">
                  Founded in 2009 by Mr. Awesh Kumar, our journey began with a simple vision: to provide affordable and reliable electronic repair services to the Singrauli community.
                </p>
                
                <p className="text-neutral-700 mb-8 leading-relaxed">
                  Today, we've grown into a trusted name in electronic repair, serving thousands of satisfied customers. Our team of certified technicians brings expertise, dedication, and genuine care to every repair job.
                </p>
                
                <div className="bg-primary-50 p-4 rounded-lg border-l-4 border-primary-600">
                  <p className="text-primary-800 font-medium italic">
                    "Our mission is to restore your valuable electronics with quality, transparency and care - turning frustrating breakdowns into opportunities for renewed satisfaction."
                  </p>
                  <p className="text-primary-600 mt-2 text-sm font-medium">— Awesh Kumar, Founder</p>
                </div>
              </AnimatedElement>
              
              <AnimatedElement animation="right" delay={400} className="relative">
                <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary-100 rounded-full opacity-60 animate-pulse"></div>
                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-amber-100 rounded-full opacity-60 animate-pulse" style={{ animationDelay: '1s', animationDuration: '4s' }}></div>
                
                <img
                  src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80"
                  alt="Electronics repair workshop at Awesh Electronics"
                  className="rounded-lg shadow-lg relative z-10 hover:scale-105 transition-transform duration-700"
                />
                
                <div className="absolute bottom-4 right-4 glass-effect px-4 py-2 rounded-lg">
                  <p className="text-sm font-medium text-neutral-800">Our Singrauli Workshop</p>
                </div>
              </AnimatedElement>
            </div>
          </div>
        </AnimatedElement>
        
        {/* Why Choose Us Section */}
        <div>
          <AnimatedElement animation="up">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-neutral-900">Why Choose Awesh Electronics</h3>
              <p className="text-xl text-neutral-600 mt-4 max-w-3xl mx-auto">
                We combine technical expertise with exceptional customer care to deliver a repair experience that's second to none.
              </p>
            </div>
          </AnimatedElement>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: <Wrench className="w-6 h-6" />,
                title: "Expert Technicians",
                description: "Our team consists of certified professionals with years of experience in repairing various electronic devices."
              },
              {
                icon: <Zap className="w-6 h-6" />,
                title: "Quick Turnaround",
                description: "We understand the importance of your devices, which is why we strive for rapid repair times without compromising quality."
              },
              {
                icon: <CheckCircle className="w-6 h-6" />,
                title: "Genuine Parts",
                description: "We use only authentic replacement parts to ensure the longevity and optimal performance of your repaired devices."
              },
              {
                icon: <Star className="w-6 h-6" />,
                title: "Transparent Pricing",
                description: "No hidden fees or surprises. We provide clear, honest pricing before starting any repair work."
              },
              {
                icon: <Shield className="w-6 h-6" />,
                title: "Service Warranty",
                description: "Our confidence in our work allows us to offer warranty on all our repair services for your peace of mind."
              },
              {
                icon: <Users className="w-6 h-6" />,
                title: "Customer-First Approach",
                description: "We prioritize your satisfaction above all else, offering personalized service tailored to your specific needs."
              }
            ].map((item, index) => (
              <AnimatedElement 
                key={index} 
                animation="up" 
                delay={200 + index * 100}
                className="bg-white p-6 rounded-xl shadow-sm border border-neutral-100 hover:shadow-md transition-all duration-300 hover-lift group"
              >
                <div className="flex items-start mb-4">
                  <div className="bg-primary-100 text-primary-600 p-3 rounded-lg mr-4 group-hover:bg-primary-600 group-hover:text-white transition-colors duration-300">
                    {item.icon}
                  </div>
                  <h4 className="text-xl font-semibold pt-2 group-hover:text-primary-700 transition-colors duration-300">{item.title}</h4>
                </div>
                <p className="text-neutral-600 pl-16">{item.description}</p>
              </AnimatedElement>
            ))}
          </div>
                  
          {/* Call to Action */}
          <AnimatedElement animation="up" delay={800}>
            <div className="mt-16 relative overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute -top-12 -left-12 w-48 h-48 bg-primary-200 rounded-full opacity-20 blur-2xl"></div>
              <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-primary-300 rounded-full opacity-20 blur-2xl"></div>
              
              <div className="bg-gradient-to-r from-primary-600 to-primary-800 rounded-2xl p-8 md:p-12 text-white text-center shadow-xl relative z-10">
                <h3 className="text-3xl font-bold mb-4">Ready to get your devices fixed?</h3>
                <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
                  Experience the Awesh Electronics difference. Schedule a repair or consultation today.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="#contact" 
                    className="bg-white text-primary-700 hover:bg-primary-50 px-8 py-3 rounded-lg font-medium transition-all hover:shadow-lg hover:-translate-y-1"
                  >
                    Contact Us
                  </a>
                  <a 
                    href="tel:7610138113" 
                    className="bg-primary-700/30 hover:bg-primary-700/50 text-white border border-primary-400 px-8 py-3 rounded-lg font-medium transition-all hover:shadow-lg hover:-translate-y-1"
                  >
                    Call: 7610138113
                  </a>
                </div>
              </div>
            </div>
          </AnimatedElement>
        </div>
      </div>
    </section>
  );
}