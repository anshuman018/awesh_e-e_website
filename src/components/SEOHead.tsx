import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  canonicalUrl?: string;
  ogType?: string;
  ogImage?: string;
  structuredData?: Record<string, any>;
}

export default function SEOHead({
  title = "Awesh Electronic and Electrical - Expert Repair Services in Singrauli",
  description = "Professional electronic and electrical repair services for TVs, ACs, refrigerators, washing machines and more in Singrauli region.",
  canonicalUrl = "https://aweshelectronics.in",
  ogType = "website",
  ogImage = "/logos/awesh_E&E_logo.jpg",
  structuredData,
}: SEOProps) {
  const fullTitle = `${title} | Awesh Electronics`;
  
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content="Awesh Electronics" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
}