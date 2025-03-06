import { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Brands from './components/Brands';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Blog from './components/Blog';
import LocationMap from './components/LocationMap';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import ScrollToTop from './components/ScrollToTop';
import PriceCalculator from './components/PriceCalculator';

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

  return (
    <div className="min-h-screen bg-white text-neutral-800 overflow-x-hidden">
      <Header />
      <main className="pt-16">
        <Hero />
        <Services />
        <About />
        <Brands />
        <Testimonials />
        <FAQ />
        <Blog />
        <LocationMap />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
      <PriceCalculator />
    </div>
  );
}

export default App;