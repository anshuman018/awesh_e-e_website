import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, AlertCircle } from 'lucide-react';
import AnimatedElement from './AnimatedElement';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{success?: boolean; message?: string}>({});
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Using FormSubmit.co service - free email form submission
      const response = await fetch('https://formsubmit.co/awesh9926@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          service: formData.service,
          message: formData.message,
          _subject: `New Service Request: ${formData.service}`
        })
      });
      
      if (response.ok) {
        setSubmitStatus({
          success: true,
          message: 'Your message has been sent successfully. We will contact you soon!'
        });
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          message: ''
        });
      } else {
        throw new Error('Failed to submit form');
      }
    } catch (error) {
      setSubmitStatus({
        success: false,
        message: 'Failed to send message. Please try again or contact us directly.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <AnimatedElement animation="up">
          <div className="text-center mb-16">
            <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-4">CONTACT US</span>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch With Us</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're here to help with all your electronic repair needs. Reach out to us for quick, professional service.
            </p>
          </div>
        </AnimatedElement>

        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8 items-start">
            {/* Contact Information Card */}
            <AnimatedElement animation="left" delay={200} className="lg:col-span-1">
              <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 transition-transform hover:shadow-xl">
                <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-8">
                  <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                  <p className="text-blue-100 mb-8">
                    Feel free to contact us for any inquiries or service requests. We'll be happy to assist you!
                  </p>
                </div>
                
                <div className="p-8">
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="bg-blue-50 p-3 rounded-full text-blue-600 mr-4">
                        <Phone className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-1">Call Us</h4>
                        <p className="text-gray-600">
                          <a href="tel:7610138113" className="hover:text-blue-600 transition-colors block">7610138113</a>
                          <a href="tel:9669231117" className="hover:text-blue-600 transition-colors block">9669231117</a>
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="bg-blue-50 p-3 rounded-full text-blue-600 mr-4">
                        <Mail className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-1">Email Us</h4>
                        <p className="text-gray-600">
                          <a href="mailto:awesh9926@gmail.com" className="hover:text-blue-600 transition-colors">awesh9926@gmail.com</a>
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="bg-blue-50 p-3 rounded-full text-blue-600 mr-4">
                        <MapPin className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-1">Our Location</h4>
                        <p className="text-gray-600">
                          Majan Kala Main Road, Amlori Mod, Nawanagar, Singrauli - 486887<br />
                          <span className="text-sm">(In Front Of Vijay Medical Store)</span>
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="bg-blue-50 p-3 rounded-full text-blue-600 mr-4">
                        <Clock className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-1">Business Hours</h4>
                        <p className="text-gray-600">
                          Monday - Saturday: 9:00 AM - 9:00 PM<br />
                          Sunday: Closed
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Social Media Links */}
                  <div className="mt-8 pt-6 border-t border-gray-100">
                    <h4 className="font-semibold text-gray-800 mb-3">Connect With Us</h4>
                    <div className="flex space-x-3">
                      <a href="https://www.facebook.com/aweshelectronic" target="_blank" rel="noopener noreferrer" className="bg-blue-50 text-blue-600 p-2 rounded-full hover:bg-blue-600 hover:text-white transition-colors">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                        </svg>
                      </a>
                      <a href="https://www.instagram.com/awesh_electronic?igsh=MWE4MGpheXIyd2p1Ng==" target="_blank" rel="noopener noreferrer" className="bg-blue-50 text-blue-600 p-2 rounded-full hover:bg-blue-600 hover:text-white transition-colors">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                        </svg>
                      </a>
                      <a href="https://in.linkedin.com/company/aweshelectronicandelectrical" target="_blank" rel="noopener noreferrer" className="bg-blue-50 text-blue-600 p-2 rounded-full hover:bg-blue-600 hover:text-white transition-colors">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedElement>
            
            {/* Contact Form */}
            <AnimatedElement animation="right" delay={400} className="lg:col-span-2">
              <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
                <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
                
                {submitStatus.message && (
                  <div 
                    className={`mb-6 p-5 rounded-lg flex items-start ${
                      submitStatus.success 
                        ? 'bg-green-50 text-green-800 border border-green-100' 
                        : 'bg-red-50 text-red-800 border border-red-100'
                    }`}
                  >
                    <div className="mr-3 mt-0.5">
                      {submitStatus.success ? (
                        <CheckCircle className="w-5 h-5 text-green-500" />
                      ) : (
                        <AlertCircle className="w-5 h-5 text-red-500" />
                      )}
                    </div>
                    <div>
                      <p className="font-medium">{submitStatus.message}</p>
                      {submitStatus.success && (
                        <p className="text-sm mt-1">One of our representatives will reach out to you shortly.</p>
                      )}
                    </div>
                  </div>
                )}
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label 
                        htmlFor="name" 
                        className={`block text-sm font-medium mb-1 transition-colors ${
                          focusedField === 'name' ? 'text-blue-600' : 'text-gray-700'
                        }`}
                      >
                        Full Name
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          onFocus={() => setFocusedField('name')}
                          onBlur={() => setFocusedField(null)}
                          className={`w-full px-4 py-3 border rounded-lg bg-gray-50 focus:bg-white transition-all duration-200 ${
                            focusedField === 'name' 
                              ? 'border-blue-500 ring-2 ring-blue-100' 
                              : 'border-gray-300 focus:border-blue-300'
                          }`}
                          placeholder="Your name"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label 
                        htmlFor="email" 
                        className={`block text-sm font-medium mb-1 transition-colors ${
                          focusedField === 'email' ? 'text-blue-600' : 'text-gray-700'
                        }`}
                      >
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('email')}
                        onBlur={() => setFocusedField(null)}
                        className={`w-full px-4 py-3 border rounded-lg bg-gray-50 focus:bg-white transition-all duration-200 ${
                          focusedField === 'email' 
                            ? 'border-blue-500 ring-2 ring-blue-100' 
                            : 'border-gray-300 focus:border-blue-300'
                        }`}
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label 
                        htmlFor="phone" 
                        className={`block text-sm font-medium mb-1 transition-colors ${
                          focusedField === 'phone' ? 'text-blue-600' : 'text-gray-700'
                        }`}
                      >
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('phone')}
                        onBlur={() => setFocusedField(null)}
                        className={`w-full px-4 py-3 border rounded-lg bg-gray-50 focus:bg-white transition-all duration-200 ${
                          focusedField === 'phone' 
                            ? 'border-blue-500 ring-2 ring-blue-100' 
                            : 'border-gray-300 focus:border-blue-300'
                        }`}
                        placeholder="Your phone number"
                        required
                      />
                    </div>

                    <div>
                      <label 
                        htmlFor="service" 
                        className={`block text-sm font-medium mb-1 transition-colors ${
                          focusedField === 'service' ? 'text-blue-600' : 'text-gray-700'
                        }`}
                      >
                        Service Required
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('service')}
                        onBlur={() => setFocusedField(null)}
                        className={`w-full px-4 py-3 border rounded-lg bg-gray-50 focus:bg-white transition-all duration-200 ${
                          focusedField === 'service' 
                            ? 'border-blue-500 ring-2 ring-blue-100' 
                            : 'border-gray-300 focus:border-blue-300'
                        }`}
                        required
                      >
                        <option value="">Select a service</option>
                        <option value="TV Repair">TV Repair</option>
                        <option value="AC Service">AC Service</option>
                        <option value="Refrigerator Repair">Refrigerator Repair</option>
                        <option value="Washing Machine Repair">Washing Machine Repair</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label 
                      htmlFor="message" 
                      className={`block text-sm font-medium mb-1 transition-colors ${
                        focusedField === 'message' ? 'text-blue-600' : 'text-gray-700'
                      }`}
                    >
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('message')}
                      onBlur={() => setFocusedField(null)}
                      rows={5}
                      className={`w-full px-4 py-3 border rounded-lg bg-gray-50 focus:bg-white transition-all duration-200 ${
                        focusedField === 'message' 
                          ? 'border-blue-500 ring-2 ring-blue-100' 
                          : 'border-gray-300 focus:border-blue-300'
                      }`}
                      placeholder="Please describe your issue or inquiry..."
                      required
                    ></textarea>
                  </div>

                  <div className="flex justify-end">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`
                        w-full py-3 rounded-lg text-white font-medium flex items-center justify-center transition-all
                        ${isSubmitting 
                          ? 'bg-primary-400 cursor-not-allowed' 
                          : 'bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 shadow-md hover:shadow-lg'
                        }
                      `}
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className="ml-2 w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </div>
              
              {/* Trust indicators */}
              <div className="mt-6 grid grid-cols-3 gap-4 text-center">
                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                  <div className="mx-auto w-8 h-8 flex items-center justify-center rounded-full bg-green-100 text-green-600 mb-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-gray-800 text-sm font-medium">Quick Response</p>
                  <p className="text-gray-500 text-xs">Within 2 hours</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                  <div className="mx-auto w-8 h-8 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 mb-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.660.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                    </svg>
                  </div>
                  <p className="text-gray-800 text-sm font-medium">Expert Technicians</p>
                  <p className="text-gray-500 text-xs">Certified professionals</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                  <div className="mx-auto w-8 h-8 flex items-center justify-center rounded-full bg-yellow-100 text-yellow-600 mb-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-gray-800 text-sm font-medium">Genuine Parts</p>
                  <p className="text-gray-500 text-xs">Manufacturer warranty</p>
                </div>
              </div>
            </AnimatedElement>
          </div>
        </div>
      </div>
    </section>
  );
}