import React, { useState, useEffect } from 'react';
import { Menu, Phone, X, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white shadow-md py-2' : 'bg-white/95 backdrop-blur-sm py-3'
    }`}>
      <nav className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <img 
                src="/logos/awesh_E&E_logo.jpg" 
                alt="Awesh Electronics Logo" 
                className={`transition-all duration-300 ${scrolled ? 'h-10' : 'h-12'} mr-3`} 
              />
              <div>
                <h1 className={`font-bold text-primary-500 transition-all duration-300 ${
                  scrolled ? 'text-lg md:text-xl' : 'text-xl md:text-2xl'
                }`}>
                  Awesh Electronic <span className="hidden sm:inline">and Electrical</span>
                </h1>
                <p className="text-xs text-primary-400 hidden md:block">Your Trusted Electronics Service Partner</p>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center">
            <div className="flex space-x-6 mr-6">
              <a href="#home" className="text-gray-700 hover:text-primary-500 font-medium text-sm transition-colors">Home</a>
              <a href="#about" className="text-gray-700 hover:text-primary-500 font-medium text-sm transition-colors">About</a>
              <a href="#services" className="text-gray-700 hover:text-primary-500 font-medium text-sm transition-colors">Services</a>
              <a href="#brands" className="text-gray-700 hover:text-primary-500 font-medium text-sm transition-colors">Brands</a>
              <a href="#contact" className="text-gray-700 hover:text-primary-500 font-medium text-sm transition-colors">Contact</a>
            </div>
            <a 
              href="tel:9669231117" 
              className="flex items-center bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded-lg transition-all hover:-translate-y-0.5 hover:shadow-md font-medium"
            >
              <Phone className="w-4 h-4 mr-2" />
              <span>9669231117</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <a 
              href="tel:9669231117"
              className="mr-4 flex items-center bg-primary-500 text-white p-2 rounded-full"
            >
              <Phone className="w-4 h-4" />
            </a>
            <button
              className="p-2 rounded-md hover:bg-gray-100 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col divide-y divide-gray-100">
              {['Home', 'About', 'Services', 'Brands', 'Contact'].map((item, index) => (
                <a 
                  key={index} 
                  href={`#${item.toLowerCase()}`}
                  className="flex items-center justify-between py-3 text-gray-700 hover:text-primary-500"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span>{item}</span>
                  <ChevronRight className="w-5 h-5 text-gray-400" />
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}