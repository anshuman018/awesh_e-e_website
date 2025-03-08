import React from 'react';
import { Helmet } from 'react-helmet';
import { ChevronDown, ChevronUp, ArrowRight } from 'lucide-react';
import AnimatedElement from './AnimatedElement';

const faqs = [
  {
    question: "What types of appliances do you repair?",
    answer: "We repair a wide range of home appliances including TVs, ACs, refrigerators, washing machines, microwave ovens, water heaters, and more. Our technicians are certified to work with all major brands."
  },
  {
    question: "Do you offer warranty on repairs?",
    answer: "Yes, we provide a warranty on all our repair services. The warranty period varies depending on the type of repair and parts used. Generally, we offer 3-6 months warranty on repairs and replaced parts."
  },
  {
    question: "What are your service hours?",
    answer: "We are open Monday through Saturday from 9:00 AM to 8:00 PM. For emergencies, we also offer 24/7 support through our hotline."
  },
  {
    question: "Do you provide on-site repairs?",
    answer: "Yes, we offer on-site repairs for most appliances. Our technicians will visit your location equipped with the necessary tools and common replacement parts."
  },
  {
    question: "What is your service area?",
    answer: "We currently service the entire metropolitan area and surrounding suburbs within a 30km radius of our main service center."
  }
];

const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
};

export default function FAQ() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  return (
    <section id="faq" className="py-20 bg-white">
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(faqStructuredData)}
        </script>
      </Helmet>
      <div className="container mx-auto px-4">
        <AnimatedElement animation="up">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">
              Find answers to common questions about our services
            </p>
          </div>
        </AnimatedElement>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <AnimatedElement key={index} animation="up" delay={100 * index}>
              <div className="mb-4">
                <button
                  className="w-full flex items-center justify-between p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  <span className="text-lg font-semibold text-left">{faq.question}</span>
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-gray-600" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-600" />
                  )}
                </button>
                {openIndex === index && (
                  <div className="p-6 bg-white border border-gray-100 rounded-b-lg">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            </AnimatedElement>
          ))}
        </div>

        <div className="bg-primary-50 border border-primary-100 rounded-xl p-6 shadow-sm mt-12">
          <h3 className="text-xl font-semibold text-primary-800 mb-2">Having trouble with your appliance?</h3>
          <p className="text-primary-600 mb-4">
            Our diagnostic guides can help you identify the issue before scheduling a service.
          </p>
          <a href="/diagnostics" className="inline-flex items-center justify-center px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors">
            Try our diagnostic tool
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}