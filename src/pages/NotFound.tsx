import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEOHead from '../components/SEOHead';

export default function NotFound() {
  return (
    <>
      <SEOHead 
        title="Page Not Found" 
        description="The page you're looking for doesn't exist."
      />
      
      <Header />
      <main className="pt-20">
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-6xl font-bold text-primary-600 mb-6">404</h1>
          <h2 className="text-3xl font-semibold mb-4">Page Not Found</h2>
          <p className="text-xl text-gray-600 mb-8">
            Sorry, the page you're looking for doesn't exist or has been moved.
          </p>
          <Link 
            to="/" 
            className="inline-block bg-primary-600 hover:bg-primary-700 text-white font-medium px-6 py-3 rounded-lg transition-colors"
          >
            Return to Home
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}