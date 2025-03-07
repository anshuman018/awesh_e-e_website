import React, { useState } from 'react';
import { ArrowRight, X } from 'lucide-react';
import AnimatedElement from './AnimatedElement';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom

const blogPosts = [
  {
    title: "5 Warning Signs Your AC Needs Immediate Attention",
    excerpt: "Learn to recognize these early symptoms of AC failure to prevent costly repairs and stay comfortable this summer.",
    image: "/logos/AC_blog.jpeg",
    date: "2024-03-15",
    slug: "ac-warning-signs",
    content: `
      <h3>1. You notice unusual noises coming from the unit</h3>
      <p>A clear indication of a problem with your air conditioner is a screeching or scratching sound coming from the outdoor condenser. This could mean that one of the belts has worked its way out of proper position. Without being fixed, the belt will continue slipping until it comes completely off its pulley and can potentially cause more damage.</p>
      
      <h3>2. Not enough air flowing from the vents</h3>
      <p>If you notice the airflow in your home is weak or nonexistent, it could be that your compressor could be going out or that there is a serious leak in your ductwork. If the ductwork is the issue, this means there is a tear or block somewhere deep in the ductwork system inside your home. Have one of our techs come out and take a look—we could identify the source of the problem and lack of airflow before your system experiences further issues.</p>
      
      <h3>3. Unusually high energy bills</h3>
      <p>A sudden spike in your energy bills during the summer is typical, but if the amount is excessively high—say, more than double the normal amount—it could mean that there is an AC issue. This could be caused by a number of things, from the compressor failing to a torn or blocked air duct. The best way to find out what is going on is to call the experienced AC professionals at Awesh Electronics. Our team has the right tools and equipment to find and repair the problem as soon as possible!</p>
      
      <h3>4. Foul smell while system is on</h3>
      <p>A foul mildew smell that is coming from the vents while your AC unit is running could mean fungus is forming in your ductwork. Some forms of mold are hazardous to humans and animals, so this is an issue that needs to be handled right away. Unlike being uncomfortable in your home, this situation really cannot be put off. We offer Day or Night emergency service. Don't wait when something is wrong. Call our team!</p>
      
      <h3>5. Moisture leaking from the unit</h3>
      <p>If you notice a wet spot around your unit, it could mean that the condensation drain tube is blocked or busted. However, it could mean that poisonous Freon is leaking from your system, so calling our team is your best bet here to avoid any serious damage.</p>
    `
  },
  {
    title: "Why is My Refrigerator Not Cooling Properly?",
    excerpt: "Troubleshoot common refrigerator cooling problems with our step-by-step guide before calling for service.",
    image: "/logos/fridge.jpg",
    date: "2024-03-10",
    slug: "refrigerator-cooling-issues",
    content: `
      <h3>Common Causes of Refrigerator Cooling Problems</h3>
      <p>If your refrigerator isn't cooling properly, you might be facing one of these common issues:</p>
      
      <h3>1. Dirty Condenser Coils</h3>
      <p>When dust and debris build up on your condenser coils, they can't efficiently release heat. This makes your fridge work harder and reduces cooling effectiveness. Solution: Unplug your fridge and carefully vacuum the coils using a brush attachment. These are typically located either underneath or behind the refrigerator.</p>
      
      <h3>2. Faulty Door Seals</h3>
      <p>If your refrigerator door gaskets are damaged or dirty, cold air escapes and warm air enters. Check your door seals by closing the door on a piece of paper - if you can easily pull it out, your seals need attention. Clean gaskets with warm soapy water and check for cracks or tears.</p>
      
      <h3>3. Improper Temperature Settings</h3>
      <p>The ideal refrigerator temperature is between 35-38°F (1.7-3.3°C). Check your temperature controls and adjust if necessary. Give the unit 24 hours to stabilize after making adjustments.</p>
      
      <h3>4. Blocked Air Vents</h3>
      <p>Overcrowding your refrigerator blocks air circulation. Make sure vents aren't blocked by food items, and leave some space between items for proper airflow.</p>
      
      <h3>5. Defrost System Problems</h3>
      <p>If frost is building up on the back wall of your refrigerator, there might be an issue with the defrost system. This requires professional attention from our technicians.</p>
      
      <p>If you've tried these solutions and your refrigerator still isn't cooling properly, it's time to call Awesh Electronics for professional refrigerator repair services.</p>
    `
  },
  {
    title: "How to Extend the Life of Your Washing Machine",
    excerpt: "Simple maintenance tips that can add years to your washing machine's lifespan and prevent common breakdowns.",
    image: "/logos/washing.jpeg",
    date: "2024-03-05",
    slug: "washing-machine-maintenance",
    content: `
      <h3>Essential Washing Machine Maintenance Tips</h3>
      <p>With proper care, your washing machine can last 10-15 years. Here's how to keep it running smoothly:</p>
      
      <h3>1. Don't Overload</h3>
      <p>Overloading puts strain on the motor, drum, and bearings. Follow manufacturer guidelines for load capacity, typically 80% full for optimal cleaning and machine health.</p>
      
      <h3>2. Use the Right Amount of Detergent</h3>
      <p>Using too much detergent creates excess suds and leaves residue that attracts dirt and can damage components. For HE machines, use only HE detergent in the recommended amounts.</p>
      
      <h3>3. Leave the Door Ajar After Use</h3>
      <p>Front-loading machines especially benefit from leaving the door open after cycles to prevent mold and mildew growth. Wipe down door seals periodically.</p>
      
      <h3>4. Clean the Drum Monthly</h3>
      <p>Run an empty cycle with hot water and 2 cups of white vinegar monthly to remove soap scum and mineral deposits. For persistent odors, use washing machine cleaner tablets.</p>
      
      <h3>5. Check and Clean Filters</h3>
      <p>Many washing machines have accessible filters that catch coins, buttons and debris. Check your owner's manual for location and cleaning instructions, typically every 3-6 months.</p>
      
      <h3>6. Inspect Hoses Regularly</h3>
      <p>Check inlet and drain hoses for cracks, leaks or bulges every 6 months. Replace rubber hoses every 3-5 years, or consider upgrading to stainless steel braided hoses for longer life.</p>
      
      <h3>7. Level Your Machine</h3>
      <p>An unbalanced machine creates excessive vibration that damages internal components. Use a level to check, and adjust the feet if necessary.</p>
      
      <p>If you notice unusual noises, leaks, or performance issues despite regular maintenance, contact Awesh Electronics for professional washing machine repair.</p>
    `
  }
];

export default function Blog() {
  const [selectedPost, setSelectedPost] = useState<null | typeof blogPosts[0]>(null);

  const openFullArticle = (post: typeof blogPosts[0]) => {
    setSelectedPost(post);
    document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
  };

  const closeFullArticle = () => {
    setSelectedPost(null);
    document.body.style.overflow = 'auto'; // Re-enable scrolling
  };

  return (
    <section id="blog" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <AnimatedElement animation="up">
          <div className="flex justify-between items-center mb-16">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Repair Tips & Guides</h2>
              <p className="text-xl text-gray-600">
                Practical advice from our certified technicians
              </p>
            </div>
            <a
              href="/blog"
              className="hidden md:flex items-center text-blue-600 hover:text-blue-700"
            >
              View all guides
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </div>
        </AnimatedElement>

        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <AnimatedElement key={index} animation="up" delay={200 + (index * 100)}>
              <article 
                key={index} 
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 border border-gray-100"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <p className="text-blue-600 text-sm mb-2 font-medium">
                    {new Date(post.date).toLocaleDateString('en-US', {
                      month: 'long',
                      day: 'numeric',
                      year: 'numeric'
                    })}
                  </p>
                  <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <button
                    onClick={() => openFullArticle(post)}
                    className="text-blue-600 hover:text-blue-700 font-medium flex items-center bg-transparent border-none p-0 cursor-pointer"
                  >
                    Read full guide
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </button>
                </div>
              </article>
            </AnimatedElement>
          ))}
        </div>

        <AnimatedElement animation="up" delay={500}>
          <div className="mt-12 bg-blue-50 rounded-xl p-8 border border-blue-100">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-6 md:mb-0">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Having trouble with your appliance?</h3>
                <p className="text-gray-700">Our diagnostic guides can help you identify the issue before scheduling a service.</p>
              </div>
              {/* Replace the regular anchor with Link component */}
              <Link
                to="/diagnostics"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-300 inline-flex items-center"
              >
                Try our diagnostic tool
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </AnimatedElement>

        {/* Also update the "View all guides" links */}
        <div className="text-center mt-8 md:hidden">
          <Link
            to="/blog"
            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
          >
            View all guides
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>

      {/* Full Article Modal */}
      {selectedPost && (
        <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white p-4 border-b flex justify-between items-center z-10">
              <h2 className="text-2xl font-bold">{selectedPost.title}</h2>
              <button 
                onClick={closeFullArticle}
                className="p-2 rounded-full hover:bg-gray-100"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <p className="text-blue-600 text-sm font-medium">
                  {new Date(selectedPost.date).toLocaleDateString('en-US', {
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric'
                  })}
                </p>
              </div>
              
              <div 
                className="prose max-w-none" 
                dangerouslySetInnerHTML={{ __html: selectedPost.content }}
              ></div>
              
              <div className="mt-8 pt-6 border-t border-gray-100">
                <h4 className="font-semibold mb-2">Need professional help?</h4>
                <p className="text-gray-600 mb-4">
                  If you're experiencing issues with your {selectedPost.title.toLowerCase().includes('ac') ? 'air conditioner' : 
                    selectedPost.title.toLowerCase().includes('refrigerator') ? 'refrigerator' : 
                    selectedPost.title.toLowerCase().includes('washing') ? 'washing machine' : 'appliance'},
                  our team of certified technicians is ready to help.
                </p>
                <div className="flex flex-wrap gap-3">
                  <a 
                    href="#contact" 
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors"
                  >
                    Contact us
                  </a>
                  <button 
                    onClick={closeFullArticle}
                    className="border border-gray-300 hover:bg-gray-50 px-4 py-2 rounded-lg font-medium transition-colors"
                  >
                    Close article
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}