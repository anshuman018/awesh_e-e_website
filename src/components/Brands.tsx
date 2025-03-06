import React from 'react';
import { Shield } from 'lucide-react';

const brands = [
  { name: 'V GUARD', logo: '/logos/V GUARD.png' },
  { name: 'Haier', logo: '/logos/Haier.jpeg' },
  { name: 'Philips', logo: '/logos/phlips.png' },
  { name: 'Xiaomi', logo: '/logos/mi.png' },
  { name: 'Sansui', logo: '/logos/Sansui High Resolution Logo.png' },
  { name: 'summercool', logo: '/logos/summercool Logo.png' },
  { name: 'Intex', logo: '/logos/Intex.jpeg' },
  { name: 'Goldmedal', logo: '/logos/Goldmedal High Resolution .jpg' },
];

export default function Brands() {
  return (
    <section id="brands" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-16">
          <div className="mb-8 md:mb-0 md:max-w-xl">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Authorized Service Partner
            </h2>
            <p className="text-xl text-gray-600">
              We are certified to repair and service all major electronic brands with genuine parts and manufacturer-approved methods
            </p>
          </div>
          
          <div className="bg-blue-50 p-4 rounded-xl border border-blue-100 flex items-center max-w-md">
            <Shield className="w-12 h-12 text-blue-600 mr-4 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Warranty-Approved</h3>
              <p className="text-sm text-gray-600">Our repairs maintain your product warranty with manufacturer-certified parts</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {brands.map((brand, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition-all duration-300 border border-gray-100 flex flex-col items-center justify-center h-40"
            >
              <div className="h-16 flex items-center justify-center mb-4">
                <img 
                  src={brand.logo} 
                  alt={`${brand.name} logo`} 
                  className="max-h-16 max-w-full object-contain filter drop-shadow-sm" 
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    if (e.currentTarget.nextSibling) {
                      (e.currentTarget.nextSibling as HTMLElement).style.display = 'block';
                    }
                  }}
                />
              </div>
              <span className="text-lg font-medium text-gray-800 text-center border-t border-gray-100 pt-3 w-full">
                {brand.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}