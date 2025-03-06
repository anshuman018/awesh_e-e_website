// import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Brands from './components/Brands';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import ScrollToTop from './components/ScrollToTop';
// import CookieConsent from './components/CookieConsent';
// import ThemeToggle from './components/ThemeToggle';
import PriceCalculator from './components/PriceCalculator';
// import Notifications from './components/Notifications';

function App() {
  return (
    <div className="min-h-screen dark:bg-gray-900 dark:text-white">
      <Header />
      <main className="pt-16">
        <Hero />
        <Services />
        <About />
        <Brands />
        <Testimonials />
        <FAQ />
        <Blog />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
      {/* <CookieConsent /> */}
      {/* <ThemeToggle /> */}
      <PriceCalculator />
      {/* <Notifications /> */}
    </div>
  );
}

export default App;