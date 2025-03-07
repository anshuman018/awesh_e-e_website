import React from 'react';

interface ResponsiveImageProps {
  src: string;
  alt: string;
  sizes?: string;
  className?: string;
  width?: number;
  height?: number;
  loading?: 'lazy' | 'eager';
  priority?: boolean;
}

export default function ResponsiveImage({
  src,
  alt,
  sizes = "100vw",
  className = "",
  width,
  height,
  loading = "lazy",
  priority = false
}: ResponsiveImageProps) {
  // Create responsive images sources
  const baseSrc = src.split('?')[0];
  const extension = baseSrc.split('.').pop();
  
  let srcSet = '';
  
  if (src.includes('unsplash.com')) {
    // Unsplash images can use their API for resizing
    srcSet = `
      ${src}&w=480 480w,
      ${src}&w=800 800w,
      ${src}&w=1200 1200w,
      ${src}&w=1600 1600w
    `;
  } else if (extension) {
    // Local images
    srcSet = `
      ${baseSrc.replace(`.${extension}`, `-480.${extension}`)} 480w,
      ${baseSrc.replace(`.${extension}`, `-800.${extension}`)} 800w,
      ${baseSrc.replace(`.${extension}`, `-1200.${extension}`)} 1200w,
      ${baseSrc} 1600w
    `;
  }
  
  return (
    <img
      src={src}
      alt={alt}
      srcSet={srcSet}
      sizes={sizes}
      className={className}
      width={width}
      height={height}
      loading={priority ? 'eager' : loading}
      decoding={priority ? 'sync' : 'async'}
      fetchPriority={priority ? 'high' : 'auto'}
    />
  );
}