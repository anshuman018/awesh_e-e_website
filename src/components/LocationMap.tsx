import React from 'react';
import { MapPin, Clock, Phone, Car, Route } from 'lucide-react';
import AnimatedElement from './AnimatedElement';

export default function LocationMap() {
  return (
    <section id="map" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <AnimatedElement animation="up">
          <div className="text-center mb-16">
            <span className="inline-block py-1 px-3 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-4">OUR LOCATION</span>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Visit Our Store</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Conveniently located at Amlori Mod for easy access
            </p>
          </div>
        </AnimatedElement>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Location info card */}
          <AnimatedElement animation="left" delay={200} className="md:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-8 h-full border border-gray-100">
              <h3 className="text-2xl font-bold mb-6 border-b border-gray-100 pb-4">Store Information</h3>
              
              <div className="space-y-6">
                <div className="flex">
                  <MapPin className="w-6 h-6 text-primary-500 mr-4 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Address</h4>
                    <p className="text-gray-700">
                      Majan Kala Main Road, Amlori Mod,<br />
                      Nawanagar, Singrauli - 486887<br />
                      (In Front Of Vijay Medical Store)
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <Clock className="w-6 h-6 text-primary-500 mr-4 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Business Hours</h4>
                    <p className="text-gray-700">
                      Monday - Saturday: 9:00 AM - 9:00 PM<br />
                      Sunday: By appointment only
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <Phone className="w-6 h-6 text-primary-500 mr-4 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Contact</h4>
                    <p className="text-gray-700">
                      <a href="tel:7610138113" className="hover:text-primary-500">7610138113</a><br />
                      <a href="tel:9669231117" className="hover:text-primary-500">9669231117</a>
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <Route className="w-6 h-6 text-primary-500 mr-4 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Nearby Landmarks</h4>
                    <ul className="text-gray-700 list-disc pl-5">
                      <li>Vijay Medical Store</li>
                      <li>Amlori Bus Stand</li>
                      <li>NCL Township</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <a 
                  href="https://www.google.com/maps/dir//Amlori+Mod/@24.0999118,82.610449,17z/"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center bg-primary-500 hover:bg-primary-600 text-white py-3 px-6 rounded-lg transition-colors w-full shadow-sm hover:shadow-md"
                >
                  <Car className="mr-2 w-5 h-5" />
                  Get Directions
                </a>
              </div>
            </div>
          </AnimatedElement>
          
          {/* Map container */}
          <AnimatedElement animation="right" delay={300} className="md:col-span-2">
            <div className="rounded-xl overflow-hidden shadow-lg border border-gray-100 h-full">
              <div className="w-full h-full min-h-[500px] relative">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3642.045032362256!2d82.6104490739057!3d24.09991177527132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398f370076d52509%3A0xa973f0ea6b3d90b7!2sAmlori%20Mod!5e0!3m2!1sen!2sin!4v1741245358206!5m2!1sen!2sin" 
                  className="absolute top-0 left-0 w-full h-full border-0" 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Awesh Electronics Location"
                />
              </div>
            </div>
          </AnimatedElement>
        </div>
      </div>
    </section>
  );
}