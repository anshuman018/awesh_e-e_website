import React from 'react';
import SEOHead from '../components/SEOHead';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function ACService() {
  // Service-specific structured data
  const serviceStructuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "AC Service",
    "serviceType": "Air Conditioner Repair & Service",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Awesh Electronic and Electrical"
    },
    "description": "Professional AC repair and service for all brands including window AC and split AC",
    "offers": {
      "@type": "Offer",
      "price": "500.00",
      "priceCurrency": "INR"
    }
  };

  return (
    <>
      <SEOHead 
        title="Professional AC Service & Repair | Window & Split AC" 
        description="Expert AC repair services in Singrauli. Window AC & Split AC repair, gas charging, and maintenance with warranty. Call for same-day service."
        canonicalUrl="https://aweshelectronics.in/services/ac-service"
        structuredData={serviceStructuredData}
      />

      <Header />
      <main className="pt-20">
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-6">Professional AC Service & Repair in Singrauli</h1>
            
            <div className="prose max-w-none">
              <p>Trust Awesh Electronics for all your AC repair and service needs. We provide comprehensive solutions for all brands and models of air conditioners, including:</p>
              
              <ul>
                <li>Split AC repair and service</li>
                <li>Window AC repair and service</li>
                <li>Gas charging and refilling</li>
                <li>Compressor replacement</li>
                <li>Regular maintenance and cleaning</li>
              </ul>
              
              <p>Our certified technicians ensure your AC runs at peak efficiency, helping you save on electricity bills while ensuring optimal cooling.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}