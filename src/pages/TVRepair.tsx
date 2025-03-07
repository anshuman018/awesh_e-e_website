import React from 'react';
import SEOHead from '../components/SEOHead';

export default function TVRepair() {
  // Service-specific structured data
  const serviceStructuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "TV Repair Service",
    "serviceType": "TV Repair",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Awesh Electronic and Electrical"
    },
    "areaServed": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": 24.0999118,
        "longitude": 82.610449
      },
      "geoRadius": "30000"
    },
    "description": "Professional TV repair service for all brands including LED, LCD, and Smart TVs",
    "offers": {
      "@type": "Offer",
      "price": "400.00",
      "priceCurrency": "INR",
      "priceSpecification": {
        "@type": "PriceSpecification",
        "price": "400.00",
        "priceCurrency": "INR",
        "eligibleQuantity": {
          "@type": "QuantitativeValue",
          "value": "1"
        },
        "valueAddedTaxIncluded": "true"
      }
    }
  };

  return (
    <>
      <SEOHead 
        title="Professional TV Repair Services | LED, LCD & Smart TVs" 
        description="Expert TV repair services in Singrauli for all brands. Same-day LED, LCD and Smart TV repairs with warranty. Call now for quick service."
        canonicalUrl="https://aweshelectronics.in/services/tv-repair"
        structuredData={serviceStructuredData}
      />

      <main className="pt-20">
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-6">Professional TV Repair Services in Singrauli</h1>
            
            {/* Rich content with keywords and semantic structure */}
            <div className="prose max-w-none">
              <p>
                At Awesh Electronics, we provide comprehensive TV repair services for all makes and models. 
                Whether you have a traditional CRT, LCD, LED, or the latest Smart TV, our certified technicians 
                can diagnose and fix almost any issue.
              </p>
              
              <h2>Common TV Problems We Fix</h2>
              <ul>
                <li><strong>No power or won't turn on</strong> - Power supply issues, main board failures</li>
                <li><strong>No picture but has sound</strong> - Backlight problems, T-Con board issues</li>
                <li><strong>Distorted picture or colors</strong> - Screen panel damage, cable connections</li>
                <li><strong>Smart TV connectivity issues</strong> - WiFi problems, software updates</li>
                <li><strong>Remote control not working</strong> - IR sensor replacement, circuit repairs</li>
              </ul>
              
              <h2>Brands We Service</h2>
              <p>
                Our technicians are trained to repair all major TV brands including Samsung, LG, Sony, 
                Panasonic, Videocon, Onida, Mi, and many more.
              </p>
              
              <h2>Our TV Repair Process</h2>
              <ol>
                <li><strong>Initial Diagnosis</strong> - We identify the exact problem with your TV</li>
                <li><strong>Cost Estimate</strong> - Transparent pricing with no hidden charges</li>
                <li><strong>Quality Repairs</strong> - Using genuine replacement parts</li>
                <li><strong>Testing</strong> - Thorough testing to ensure everything works perfectly</li>
                <li><strong>After-service Support</strong> - 90-day warranty on all repairs</li>
              </ol>
              
              <div className="bg-blue-50 p-6 rounded-lg my-8 border border-blue-100">
                <h3 className="text-xl font-semibold text-blue-800">Emergency TV Repair</h3>
                <p className="text-blue-700">
                  Need your TV fixed urgently? We offer same-day service for most repairs in the Singrauli region. 
                  Call us at <a href="tel:+919669231117" className="font-bold">+91 9669231117</a>.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}