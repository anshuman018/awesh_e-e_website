import { useEffect } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import ScrollToTop from './components/ScrollToTop';
import PriceCalculator from './components/PriceCalculator';
import PageTransition from './components/PageTransition';
import SEOHead from './components/SEOHead';
import Analytics from './components/Analytics';

// Pages
import Home from './pages/Home';
import TVRepair from './pages/TVRepair';
import ACService from './pages/ACService';
import BlogPost from './pages/BlogPost';
import NotFound from './pages/NotFound';
import DiagnosticTool from './pages/DiagnosticTool';
import PriceCalculatorPage from './pages/PriceCalculatorPage';
import DiagnosticToolPage from './pages/DiagnosticTool';

function App() {
  // Add smooth scrolling behavior globally
  useEffect(() => {
    // Handle anchor links with smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(this: HTMLAnchorElement, e: Event) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (!targetId || targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (!targetElement) return;
        
        window.scrollTo({
          top: (targetElement as HTMLElement).offsetTop - 80, // Offset for header
          behavior: 'smooth'
        });
      });
    });
    
    // Add page transition effect when loaded
    document.body.classList.add('loaded');
    
    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', function(this: HTMLAnchorElement) {});
      });
    };
  }, []);

  // Define structured data for rich results
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Awesh Electronic and Electrical",
    "image": "/logos/awesh_E&E_logo.jpg",
    "url": "https://aweshelectronics.in",
    "telephone": "+919669231117",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Majan Kala Main Road, Amlori Mod",
      "addressLocality": "Nawanagar, Singrauli",
      "postalCode": "486887",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 24.0999118,
      "longitude": 82.610449
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "09:00",
      "closes": "21:00"
    },
    "priceRange": "₹₹"
  };

  return (
    <HelmetProvider>
      <Router>
        <Analytics />
        <PageTransition>
          <SEOHead structuredData={structuredData} />
          <div className="min-h-screen bg-white text-neutral-800 overflow-x-hidden">
            <Header />
            <main className="pt-16">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/services/tv-repair" element={<TVRepair />} />
                <Route path="/services/ac-service" element={<ACService />} />
                <Route path="/blog/:slug" element={<BlogPost />} />
                <Route path="/diagnostics" element={<DiagnosticTool />} />
                <Route path="/price-calculator" element={<PriceCalculatorPage />} />
                <Route path="/diagnostic-tool" element={<DiagnosticToolPage />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
            <WhatsAppButton />
            <ScrollToTop />
            <PriceCalculator />
          </div>
        </PageTransition>
      </Router>
    </HelmetProvider>
  );
}

export default App;