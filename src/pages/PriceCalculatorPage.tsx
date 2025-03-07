import React, { useState } from 'react';
import { Calculator, ChevronDown, ArrowLeft, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';

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

export default function PriceCalculatorPage() {
  const [category, setCategory] = useState('');
  const [service, setService] = useState('');
  const [serviceType, setServiceType] = useState('Local Visit');
  const [includeTransport, setIncludeTransport] = useState(false);
  const [transportItem, setTransportItem] = useState('');
  const [totalPrice, setTotalPrice] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCategory(e.target.value);
    setService('');
    setShowResult(false);
  };

  const handleServiceChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setService(e.target.value);
    setShowResult(false);
  };

  const handleServiceTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setServiceType(e.target.value);
    setShowResult(false);
  };

  const handleTransportToggle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIncludeTransport(e.target.checked);
    setShowResult(false);
  };

  const handleTransportItemChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTransportItem(e.target.value);
    setShowResult(false);
  };

  const calculateTotal = () => {
    let price = 0;
    
    // Calculate base service price
    if (service && category) {
      const basePrice = services[category as keyof typeof services][service as keyof typeof services[keyof typeof services]];
      if (basePrice) {
        // Apply service type factor
        price = basePrice * (serviceTypes[serviceType as keyof typeof serviceTypes] || 1);
      }
    }

    // Add transportation charges if selected
    if (includeTransport && transportItem) {
      price += transportationCharges[transportItem as keyof typeof transportationCharges] || 0;
    }

    setTotalPrice(Math.round(price));
    setShowResult(true);
  };

  return (
    <Layout>
      <div className="relative bg-gray-50 dark:bg-gray-900 py-12 lg:py-20 overflow-hidden">
        {/* Background decoration elements */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-primary-50 rounded-full opacity-50 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-accent-50 rounded-full opacity-50 blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="mb-10 flex flex-col md:flex-row md:items-center md:justify-between">
              <div className="mb-6 md:mb-0 flex items-center">
                <Link to="/" className="flex items-center text-primary-500 hover:text-primary-600 mr-6 transition-colors">
                  <ArrowLeft className="w-5 h-5 mr-2" />
                  <span className="font-medium">Back to Home</span>
                </Link>
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white flex items-center">
                  <Calculator className="w-7 h-7 mr-3 text-primary-500" />
                  Service Price Calculator
                </h1>
              </div>
              
              <div className="flex items-center px-4 py-2 bg-primary-50 rounded-lg border border-primary-100">
                <CheckCircle className="w-5 h-5 text-primary-500 mr-2" />
                <span className="text-sm text-primary-700">Transparent pricing guarantee</span>
              </div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
              {/* Left side - Calculator form */}
              <div className="lg:col-span-3">
                <div className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-8 border border-gray-100 dark:border-gray-700">
                  <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                    Use our calculator to estimate service costs for various appliances. Final prices may vary based on actual diagnosis.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                    <div className="relative">
                      <label className="block text-sm font-medium mb-1.5 text-gray-700 dark:text-gray-300">Category</label>
                      <div className="relative">
                        <select
                          value={category}
                          onChange={handleCategoryChange}
                          className="w-full p-3 pl-4 pr-10 border border-gray-200 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 appearance-none focus:ring-2 focus:ring-primary-300 focus:border-primary-500 transition-all"
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
                            className="w-full p-3 pl-4 pr-10 border border-gray-200 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 appearance-none focus:ring-2 focus:ring-primary-300 focus:border-primary-500 transition-all"
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
                          className="w-full p-3 pl-4 pr-10 border border-gray-200 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 appearance-none focus:ring-2 focus:ring-primary-300 focus:border-primary-500 transition-all"
                        >
                          {Object.keys(serviceTypes).map(type => (
                            <option key={type} value={type}>{type}</option>
                          ))}
                        </select>
                        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                      </div>
                    </div>

                    <div className="flex items-center p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                      <input
                        type="checkbox"
                        id="transport"
                        checked={includeTransport}
                        onChange={handleTransportToggle}
                        className="w-4 h-4 mr-3 accent-primary-500"
                      />
                      <label htmlFor="transport" className="text-sm font-medium text-gray-700 dark:text-gray-300">Include Transportation</label>
                    </div>

                    {includeTransport && (
                      <div className="relative">
                        <label className="block text-sm font-medium mb-1.5 text-gray-700 dark:text-gray-300">Transport For</label>
                        <div className="relative">
                          <select
                            value={transportItem}
                            onChange={handleTransportItemChange}
                            className="w-full p-3 pl-4 pr-10 border border-gray-200 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 appearance-none focus:ring-2 focus:ring-primary-300 focus:border-primary-500 transition-all"
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
                  </div>
                  
                  <div className="mt-8">
                    <button
                      onClick={calculateTotal}
                      disabled={!category || !service}
                      className={`w-full py-3 px-6 rounded-lg font-medium text-white transition-all ${
                        !category || !service 
                          ? 'bg-gray-400 cursor-not-allowed' 
                          : 'bg-gradient-to-r from-primary-500 to-primary-600 hover:shadow-lg hover:shadow-primary-500/20 hover:-translate-y-0.5'
                      }`}
                    >
                      Calculate Price
                    </button>
                  </div>
                  
                  {showResult && totalPrice > 0 && (
                    <div className="mt-8 p-6 bg-primary-50 dark:bg-primary-900/20 rounded-xl border border-primary-100 dark:border-primary-800 overflow-hidden relative animate-fade-in">
                      <div className="texture-overlay absolute inset-0 opacity-5"></div>
                      <div className="relative z-10">
                        <h3 className="text-xl font-semibold text-center text-primary-500 dark:text-primary-300 mb-4">Price Estimate</h3>
                        
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-gray-600 dark:text-gray-400">Base Service:</span>
                          <span className="font-medium">₹{services[category as keyof typeof services][service as keyof typeof services[keyof typeof services]]}</span>
                        </div>
                        
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-gray-600 dark:text-gray-400">Service Type:</span>
                          <span className="font-medium">{serviceType} (x{serviceTypes[serviceType as keyof typeof serviceTypes]})</span>
                        </div>
                        
                        {includeTransport && transportItem && (
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-gray-600 dark:text-gray-400">Transportation:</span>
                            <span className="font-medium">₹{transportationCharges[transportItem as keyof typeof transportationCharges]}</span>
                          </div>
                        )}
                        
                        <div className="h-px bg-primary-200 dark:bg-primary-700 my-4"></div>
                        
                        <div className="flex justify-between items-center">
                          <span className="text-lg font-semibold text-gray-800 dark:text-gray-200">Total Estimate:</span>
                          <span className="text-2xl font-bold text-primary-500 dark:text-primary-300">₹{totalPrice}</span>
                        </div>
                        
                        <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-4">
                          *Final price may vary based on diagnosis
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              
              {/* Right side - Visual elements */}
              <div className="lg:col-span-2">
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-gray-100 dark:border-gray-700 h-full">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=2070&auto=format&fit=crop" 
                      alt="Electronics repair technician" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="p-6">
                    <h3 className="font-bold text-xl mb-4 text-primary-500">Why Choose Our Service</h3>
                    
                    <div className="space-y-4">
                      <div className="flex">
                        <div className="w-10 h-10 rounded-full bg-primary-50 flex items-center justify-center mr-4 flex-shrink-0">
                          <span className="text-primary-500 font-bold">1</span>
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-800 dark:text-gray-200">Expert Technicians</h4>
                          <p className="text-sm text-gray-600 dark:text-gray-400">All our repair professionals are certified and experienced.</p>
                        </div>
                      </div>
                      
                      <div className="flex">
                        <div className="w-10 h-10 rounded-full bg-primary-50 flex items-center justify-center mr-4 flex-shrink-0">
                          <span className="text-primary-500 font-bold">2</span>
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-800 dark:text-gray-200">Genuine Parts</h4>
                          <p className="text-sm text-gray-600 dark:text-gray-400">We use only authentic replacement parts for all repairs.</p>
                        </div>
                      </div>
                      
                      <div className="flex">
                        <div className="w-10 h-10 rounded-full bg-primary-50 flex items-center justify-center mr-4 flex-shrink-0">
                          <span className="text-primary-500 font-bold">3</span>
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-800 dark:text-gray-200">Service Warranty</h4>
                          <p className="text-sm text-gray-600 dark:text-gray-400">All our repair services come with a service guarantee.</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-6 p-4 bg-primary-50 dark:bg-primary-900/30 rounded-lg">
                      <p className="text-primary-700 dark:text-primary-300 text-sm font-medium">
                        "Best service in Singrauli region. The technicians are knowledgeable and resolved our TV issue quickly." - Rajesh Kumar
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Service notes section */}
            <div className="mt-8 bg-white dark:bg-gray-800 shadow-lg rounded-xl p-8 border border-gray-100 dark:border-gray-700">
              <h4 className="font-semibold text-lg mb-4 text-gray-800 dark:text-gray-200">Important Service Information:</h4>
              <ul className="grid md:grid-cols-2 gap-4 text-sm text-gray-600 dark:text-gray-400">
                <li className="flex items-start">
                  <span className="w-5 h-5 bg-primary-50 rounded-full mr-3 flex items-center justify-center flex-shrink-0">
                    <span className="w-1.5 h-1.5 bg-primary-500 rounded-full"></span>
                  </span>
                  <span>Local service covers visits within 25km radius of our service center</span>
                </li>
                <li className="flex items-start">
                  <span className="w-5 h-5 bg-primary-50 rounded-full mr-3 flex items-center justify-center flex-shrink-0">
                    <span className="w-1.5 h-1.5 bg-primary-500 rounded-full"></span>
                  </span>
                  <span>Up Country charges apply for service beyond 25km (25% additional charge)</span>
                </li>
                <li className="flex items-start">
                  <span className="w-5 h-5 bg-primary-50 rounded-full mr-3 flex items-center justify-center flex-shrink-0">
                    <span className="w-1.5 h-1.5 bg-primary-500 rounded-full"></span>
                  </span>
                  <span>Carry-in service offers a 40% discount when you bring your appliance to our center</span>
                </li>
                <li className="flex items-start">
                  <span className="w-5 h-5 bg-primary-50 rounded-full mr-3 flex items-center justify-center flex-shrink-0">
                    <span className="w-1.5 h-1.5 bg-primary-500 rounded-full"></span>
                  </span>
                  <span>Prices include service charges only, additional parts costs may apply</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}