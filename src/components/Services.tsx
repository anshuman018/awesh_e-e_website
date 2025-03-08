import { Tv, Wind, Smartphone, Radio, ArrowRight } from 'lucide-react';
import AnimatedElement from './AnimatedElement';

const services = [
  {
    icon: <Tv className="w-12 h-12" />,
    title: 'TV Repair',
    description: 'Expert repair services for all TV brands including LED, LCD, and Smart TVs.',
    popular: true,
    link: '#contact'
  },
  {
    icon: <Wind className="w-12 h-12" />,
    title: 'AC Service',
    description: 'Professional AC repair, maintenance, and installation services.',
    popular: false,
    link: '#contact'
  },
  {
    icon: <Smartphone className="w-12 h-12" />,
    title: 'Home Appliances',
    description: 'Repair services for refrigerators, washing machines, and other home appliances.',
    popular: false,
    link: '#contact'
  },
  {
    icon: <Radio className="w-12 h-12" />,
    title: 'Electronics',
    description: 'Repair and maintenance of electronic devices and small appliances.',
    popular: false,
    link: '#contact'
  }
];

const breadcrumbStructuredData = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://aweshelectronics.in"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Services",
      "item": "https://aweshelectronics.in/#services"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "TV Repair Service", // or "AC Service" for that page
      "item": "https://aweshelectronics.in/services/tv-repair" // adjust URL accordingly
    }
  ]
};

const serviceStructuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Electronics Repair Services",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Awesh Electronics"
  }
};

const combinedStructuredData = {
  "@context": "https://schema.org",
  "@graph": [serviceStructuredData, breadcrumbStructuredData]
};

export default function Services() {
  return (
    <section id="services" className="py-24 bg-neutral-50" aria-labelledby="services-heading">
      <div className="container mx-auto px-4">
        {/* <SEOHead 
          // other props remain the same
          structuredData={combinedStructuredData}
        /> */}
        <AnimatedElement animation="fade">
          <div className="text-center mb-16">
            <h2 id="services-heading" className="text-4xl font-bold text-neutral-900 mb-4">Professional Electronics Services</h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Fast, reliable repair and maintenance services for all your home appliances
            </p>
          </div>
        </AnimatedElement>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <AnimatedElement 
              key={index} 
              animation="up" 
              delay={200 + (index * 100)}
              className="group bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden flex flex-col h-full relative hover-lift"
            >
              {service.popular && (
                <span className="absolute top-4 right-4 bg-primary-600 text-white text-xs px-3 py-1 rounded-full font-medium">
                  Popular
                </span>
              )}
              <article className="p-8 flex-grow">
                <div className="w-16 h-16 bg-primary-50 rounded-lg flex items-center justify-center mb-6 text-primary-600 group-hover:bg-primary-600 group-hover:text-white transition-colors duration-500" aria-hidden="true">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-neutral-600">{service.description}</p>
              </article>
              <div className="pt-2 pb-6 px-8 mt-auto">
                <a 
                  href={service.link} 
                  className="flex items-center font-medium text-primary-600 group-hover:text-primary-700 transition-colors"
                  aria-label={`Book ${service.title} service`}
                >
                  Book service
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-2" aria-hidden="true" />
                </a>
              </div>
            </AnimatedElement>
          ))}
        </div>
        
        <AnimatedElement animation="up" delay={600}>
          <div className="mt-16 text-center">
            <a href="#contact" className="inline-flex items-center justify-center bg-primary-600 hover:bg-primary-700 text-white font-medium py-3 px-6 rounded-lg transition-all hover:-translate-y-1 hover:shadow-lg">
              Schedule a Service
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </div>
        </AnimatedElement>
      </div>
    </section>
  );
}