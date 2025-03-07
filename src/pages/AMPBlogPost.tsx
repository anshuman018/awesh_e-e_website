import React from 'react';

// Extend JSX namespace to include AMP components
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'amp-img': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        alt?: string;
        src?: string;
        width?: string | number;
        height?: string | number;
        layout?: string;
      };
    }
  }
}

interface BlogPostContent {
  title: string;
  slug: string;
  structuredData: any;
  date: string | number;
  htmlContent: React.ReactNode;
  image: string;
}

export default function AMPBlogPost({ content }: { content: BlogPostContent }) {
  return (
    <html data-amp={true} lang="en">
      <head>
        <meta charSet="utf-8" />
        <script async src="https://cdn.ampproject.org/v0.js"></script>
        <title>{content.title} | Awesh Electronics</title>
        <link rel="canonical" href={`https://aweshelectronics.in/blog/${content.slug}`} />
        <meta name="viewport" content="width=device-width,minimum-scale=1,initial-scale=1" />
        <script type="application/ld+json">{JSON.stringify(content.structuredData)}</script>
        <style amp-boilerplate dangerouslySetInnerHTML={{__html: `body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}`}} />
        <noscript><style amp-boilerplate dangerouslySetInnerHTML={{__html: `body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}`}} /></noscript>
        <style amp-custom>
          /* Add your AMP compatible styles here */
        </style>
      </head>
      <body>
        <header>
          <h1>{content.title}</h1>
          <p>{new Date(content.date).toLocaleDateString()}</p>
        </header>
        
        <article>
          {content.htmlContent}
        </article>
        
        <amp-img 
          alt={content.title}
          src={content.image}
          width="1200"
          height="675"
          layout="responsive">
        </amp-img>
      </body>
    </html>
  );
}