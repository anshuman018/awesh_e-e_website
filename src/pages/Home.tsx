import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import About from '../components/About';
import Brands from '../components/Brands';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import Blog from '../components/Blog';
import LocationMap from '../components/LocationMap';
import Contact from '../components/Contact';
import SEOHead from '../components/SEOHead';

export default function Home() {
  return (
    <>
      <SEOHead />
      <Hero />
      <Services />
      <About />
      <Brands />
      <Testimonials />
      <FAQ />
      <Blog />
      <LocationMap />
      <Contact />
    </>
  );
}