import React from 'react';
import { Menu, Phone, X } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <nav className="container mx-auto px-4 py-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            {/* Logo */}
            <a href="#home" className="flex items-center">
              <img 
                src="/logos/awesh_E&E_logo.jpg" 
                alt="Awesh Electronics Logo" 
                className="h-12 mr-3" 
              />
              <h1 className="text-xl md:text-2xl font-bold text-blue-600">Awesh Electronic <span className="hidden sm:inline">and Electrical</span></h1>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-blue-600">Home</a>
            <a href="#about" className="text-gray-700 hover:text-blue-600">About</a>
            <a href="#services" className="text-gray-700 hover:text-blue-600">Services</a>
            <a href="#brands" className="text-gray-700 hover:text-blue-600">Brands</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600">Contact</a>
            <a href="tel:9669231117" className="flex items-center text-blue-600 font-medium">
              <Phone className="w-4 h-4 mr-2" />
              <span>9669231117</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              <a href="#home" className="text-gray-700 hover:text-blue-600">Home</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600">About</a>
              <a href="#services" className="text-gray-700 hover:text-blue-600">Services</a>
              <a href="#brands" className="text-gray-700 hover:text-blue-600">Brands</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600">Contact</a>
              <a href="tel:9669231117" className="flex items-center text-blue-600 font-medium">
                <Phone className="w-4 h-4 mr-2" />
                <span>9669231117</span>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}