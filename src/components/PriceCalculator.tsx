import React, { useState } from 'react';
import { Calculator, X } from 'lucide-react';

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
        <button
          onClick={toggleCalculator}
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105"
        >
          <Calculator className="w-5 h-5" />
          <span>Price Calculator</span>
        </button>
      ) : (
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 w-96 animate-fade-in">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <Calculator className="w-6 h-6 text-blue-600 mr-2" />
              <h3 className="text-lg font-semibold">Service Price Calculator</h3>
            </div>
            <button 
              onClick={toggleCalculator}
              className="p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <X className="w-5 h-5 text-gray-500" />
            </button>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Category</label>
              <select
                value={category}
                onChange={handleCategoryChange}
                className="w-full p-2 border rounded-lg"
              >
                <option value="">Select category</option>
                {Object.keys(services).map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>

            {category && (
              <div>
                <label className="block text-sm font-medium mb-1">Service</label>
                <select
                  value={service}
                  onChange={handleServiceChange}
                  className="w-full p-2 border rounded-lg"
                >
                  <option value="">Select service</option>
                  {Object.keys(services[category as keyof typeof services]).map(svc => (
                    <option key={svc} value={svc}>{svc}</option>
                  ))}
                </select>
              </div>
            )}

            <div>
              <label className="block text-sm font-medium mb-1">Service Type</label>
              <select
                value={serviceType}
                onChange={handleServiceTypeChange}
                className="w-full p-2 border rounded-lg"
              >
                {Object.keys(serviceTypes).map(type => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                id="transport"
                checked={includeTransport}
                onChange={handleTransportToggle}
                className="mr-2"
              />
              <label htmlFor="transport" className="text-sm">Include Transportation</label>
            </div>

            {includeTransport && (
              <div>
                <label className="block text-sm font-medium mb-1">Transport For</label>
                <select
                  value={transportItem}
                  onChange={handleTransportItemChange}
                  className="w-full p-2 border rounded-lg"
                >
                  <option value="">Select item</option>
                  {Object.keys(transportationCharges).map(item => (
                    <option key={item} value={item}>{item}</option>
                  ))}
                </select>
              </div>
            )}

            {totalPrice > 0 && (
              <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg border border-blue-100 dark:border-blue-800">
                <p className="text-center font-semibold text-lg">
                  Estimated Price: ₹{totalPrice}
                </p>
                <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-1">
                  *Final price may vary based on inspection
                </p>
              </div>
            )}
            
            <div className="text-xs text-gray-500 mt-2">
              <p>• Local service within 25km radius</p>
              <p>• Up Country charges apply beyond 25km</p>
              <p>• Carry-in prices for drop-off at our service center</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}