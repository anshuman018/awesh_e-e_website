import React, { useState } from 'react';
import { Calculator, X, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = {
  'TV Repair': {
    '20" to 24" LED TV': 400, 
    '32" to 40" LED TV': 500,
    '41" to 50" LED TV': 600,
    '51" to 60" LED TV': 900,
    '61" to 73" LED TV': 1200,
  },
  'AC Service': {
    'Window AC Wet Service': 500,
    'Split AC Wet Service': 600,
    'Window AC Gas Charging': 1750,
    'Split AC Gas Charging': 2400,
    'Window AC Compressor & Gas': 2000,
    'Split AC Compressor & Gas': 2600,
  },
  'Refrigerator': {
    'Direct Cool': 400,
    'Frost Free': 500,
  },
  'Washing Machine': {
    'Semi Auto': 400,
    'Fully Auto Top Load': 550,
    'Fully Auto Front Load': 550,
  },
  'Kitchen Appliances': {
    'Microwave Oven': 400,
    'Electric Chimney': 500,
    'Induction Cooker': 350,
    'Mixer Grinder': 350,
  },
  'Home Appliances': {
    'Air Cooler': 500,
    'Water Purifier': 500,
    'Vacuum Cleaner': 350,
    'Treadmill': 750,
  }
};

// Service locations with their pricing factors
const serviceTypes = {
  'Local Visit': 1.0, // Base rate
  'Up Country Visit': 1.25, // ~25% higher
  'Carry-In Service': 0.6, // ~40% lower
};

// Transportation charges
const transportationCharges = {
  'TV 20" to 32"': 300,
  'TV 33" to 45"': 600,
  'TV 46" to 50"': 800,
  'TV 51" to 60"': 1000,
  'TV 61" to 73"': 1500,
  'Washing Machine': 600,
  'Window AC': 600,
  'Split AC': 800,
  'Treadmill': 1000,
};

export default function PriceCalculator() {
  const [isOpen, setIsOpen] = useState(false);
  const [category, setCategory] = useState('');
  const [service, setService] = useState('');
  const [serviceType, setServiceType] = useState('Local Visit');
  const [includeTransport, setIncludeTransport] = useState(false);
  const [transportItem, setTransportItem] = useState('');
  const [totalPrice, setTotalPrice] = useState(0);

  const toggleCalculator = () => {
    setIsOpen(!isOpen);
  };

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCategory(e.target.value);
    setService('');
    calculateTotal('', e.target.value, serviceType, includeTransport, transportItem);
  };

  const handleServiceChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setService(e.target.value);
    calculateTotal(e.target.value, category, serviceType, includeTransport, transportItem);
  };

  const handleServiceTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setServiceType(e.target.value);
    calculateTotal(service, category, e.target.value, includeTransport, transportItem);
  };

  const handleTransportToggle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIncludeTransport(e.target.checked);
    calculateTotal(service, category, serviceType, e.target.checked, transportItem);
  };

  const handleTransportItemChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTransportItem(e.target.value);
    calculateTotal(service, category, serviceType, includeTransport, e.target.value);
  };

  const calculateTotal = (
    currService: string,
    currCategory: string,
    currServiceType: string,
    currIncludeTransport: boolean,
    currTransportItem: string
  ) => {
    let price = 0;
    
    // Calculate base service price
    if (currService && currCategory) {
      const basePrice = services[currCategory as keyof typeof services][currService as keyof typeof services[keyof typeof services]];
      if (basePrice) {
        // Apply service type factor
        price = basePrice * (serviceTypes[currServiceType as keyof typeof serviceTypes] || 1);
      }
    }

    // Add transportation charges if selected
    if (currIncludeTransport && currTransportItem) {
      price += transportationCharges[currTransportItem as keyof typeof transportationCharges] || 0;
    }

    setTotalPrice(Math.round(price));
  };

  return (
    <div className="fixed bottom-24 right-6 z-50">
      {!isOpen ? (
        <Link
          to="/price-calculator"
          className="group flex items-center gap-2 bg-primary-500 hover:bg-primary-600 text-white py-3 px-5 rounded-lg shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary-500/20"
          aria-label="Open Price Calculator"
        >
          <Calculator className="w-5 h-5" />
          <span className="font-medium">Price Calculator</span>
          <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 border-2 border-white/20"></div>
        </Link>
      ) : (
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl p-6 w-96 animate-fade-in border border-gray-100 dark:border-gray-700">
          <div className="flex items-center justify-between mb-5">
            <div className="flex items-center">
              <div className="bg-primary-500 p-2 rounded-lg mr-3">
                <Calculator className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-primary-500 dark:text-primary-300">Service Price Estimator</h3>
            </div>
            <button 
              onClick={toggleCalculator}
              className="p-1.5 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              aria-label="Close calculator"
            >
              <X className="w-5 h-5 text-gray-500" />
            </button>
          </div>

          <div className="space-y-5">
            <div className="relative">
              <label className="block text-sm font-medium mb-1.5 text-gray-700 dark:text-gray-300">Category</label>
              <div className="relative">
                <select
                  value={category}
                  onChange={handleCategoryChange}
                  className="w-full p-2.5 pl-4 pr-10 border border-gray-200 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 appearance-none focus:ring-2 focus:ring-primary-300 focus:border-primary-500 transition-all"
                >
                  <option value="">Select category</option>
                  {Object.keys(services).map(cat => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
              </div>
            </div>

            {category && (
              <div className="relative">
                <label className="block text-sm font-medium mb-1.5 text-gray-700 dark:text-gray-300">Service</label>
                <div className="relative">
                  <select
                    value={service}
                    onChange={handleServiceChange}
                    className="w-full p-2.5 pl-4 pr-10 border border-gray-200 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 appearance-none focus:ring-2 focus:ring-primary-300 focus:border-primary-500 transition-all"
                  >
                    <option value="">Select service</option>
                    {Object.keys(services[category as keyof typeof services]).map(svc => (
                      <option key={svc} value={svc}>{svc}</option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                </div>
              </div>
            )}

            <div className="relative">
              <label className="block text-sm font-medium mb-1.5 text-gray-700 dark:text-gray-300">Service Type</label>
              <div className="relative">
                <select
                  value={serviceType}
                  onChange={handleServiceTypeChange}
                  className="w-full p-2.5 pl-4 pr-10 border border-gray-200 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 appearance-none focus:ring-2 focus:ring-primary-300 focus:border-primary-500 transition-all"
                >
                  {Object.keys(serviceTypes).map(type => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
              </div>
            </div>

            <div className="flex items-center p-2.5 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
              <input
                type="checkbox"
                id="transport"
                checked={includeTransport}
                onChange={handleTransportToggle}
                className="w-4 h-4 mr-3 accent-primary-500"
              />
              <label htmlFor="transport" className="text-sm font-medium">Include Transportation</label>
            </div>

            {includeTransport && (
              <div className="relative">
                <label className="block text-sm font-medium mb-1.5 text-gray-700 dark:text-gray-300">Transport For</label>
                <div className="relative">
                  <select
                    value={transportItem}
                    onChange={handleTransportItemChange}
                    className="w-full p-2.5 pl-4 pr-10 border border-gray-200 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 appearance-none focus:ring-2 focus:ring-primary-300 focus:border-primary-500 transition-all"
                  >
                    <option value="">Select item</option>
                    {Object.keys(transportationCharges).map(item => (
                      <option key={item} value={item}>{item}</option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                </div>
              </div>
            )}

            {totalPrice > 0 && (
              <div className="mt-5 p-4 bg-primary-50 dark:bg-primary-900/20 rounded-lg border border-primary-100 dark:border-primary-800 overflow-hidden relative">
                <div className="texture-overlay absolute inset-0 opacity-5"></div>
                <p className="text-center font-semibold text-lg text-primary-500 dark:text-primary-300 relative z-10">
                  Estimated Price: <span className="text-xl">₹{totalPrice}</span>
                </p>
                <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-1 relative z-10">
                  *Final price may vary based on inspection
                </p>
              </div>
            )}
            
            <div className="mt-3 text-xs text-gray-500 dark:text-gray-400 space-y-1 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <p className="flex items-center">
                <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-2 inline-block"></span>
                Local service within 25km radius
              </p>
              <p className="flex items-center">
                <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-2 inline-block"></span>
                Up Country charges apply beyond 25km
              </p>
              <p className="flex items-center">
                <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-2 inline-block"></span>
                Carry-in prices for drop-off at our service center
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}