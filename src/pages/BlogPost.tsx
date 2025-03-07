import React from 'react';
import { useParams } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import Header from '../components/Header';
import Footer from '../components/Footer';

// This would normally come from a database or API
const blogPosts = [
  {
    slug: "ac-warning-signs",
    title: "5 Warning Signs Your AC Needs Immediate Attention",
    content: `
      <h3>1. You notice unusual noises coming from the unit</h3>
      <p>A clear indication of a problem with your air conditioner is a screeching or scratching sound coming from the outdoor condenser. This could mean that one of the belts has worked its way out of proper position.</p>
      
      <h3>2. Not enough air flowing from the vents</h3>
      <p>If you notice the airflow in your home is weak or nonexistent, it could be that your compressor could be going out or that there is a serious leak in your ductwork.</p>
      
      <h3>3. Unusually high energy bills</h3>
      <p>A sudden spike in your energy bills during the summer is typical, but if the amount is excessively high—say, more than double the normal amount—it could mean that there is an AC issue.</p>
    `,
    image: "/logos/AC_blog.jpeg",
    date: "2024-03-15"
  },
  {
    slug: "refrigerator-cooling-issues",
    title: "Why is My Refrigerator Not Cooling Properly?",
    content: `
      <h3>Common Causes of Refrigerator Cooling Problems</h3>
      <p>If your refrigerator isn't cooling properly, you might be facing one of these common issues:</p>
      
      <h3>1. Dirty Condenser Coils</h3>
      <p>When dust and debris build up on your condenser coils, they can't efficiently release heat. This makes your fridge work harder and reduces cooling effectiveness.</p>
    `,
    image: "/logos/fridge.jpg",
    date: "2024-03-10"
  }
];

export default function BlogPost() {
  const { slug } = useParams<{slug: string}>();
  const post = blogPosts.find(post => post.slug === slug);

  if (!post) {
    return (
      <>
        <Header />
        <div className="container mx-auto px-4 py-20">
          <h1 className="text-3xl font-bold">Post not found</h1>
          <p className="mt-4">Sorry, the blog post you're looking for doesn't exist.</p>
        </div>
        <Footer />
      </>
    );
  }

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "image": post.image,
    "datePublished": post.date,
    "author": {
      "@type": "Organization",
      "name": "Awesh Electronic and Electrical"
    }
  };

  return (
    <>
      <SEOHead 
        title={post.title}
        description={`${post.title} - Expert advice from Awesh Electronics`}
        canonicalUrl={`https://aweshelectronics.in/blog/${slug}`}
        ogType="article"
        ogImage={post.image}
        structuredData={structuredData}
      />
      
      <Header />
      <main className="pt-20">
        <article className="container mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
          <p className="text-gray-500 mb-6">Published on: {new Date(post.date).toLocaleDateString()}</p>
          
          <div className="mb-8">
            <img 
              src={post.image} 
              alt={post.title} 
              className="w-full max-h-96 object-cover rounded-lg"
            />
          </div>
          
          <div 
            className="prose max-w-none" 
            dangerouslySetInnerHTML={{ __html: post.content }}
          ></div>
        </article>
      </main>
      <Footer />
    </>
  );
}