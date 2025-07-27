import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const OptimizedImage = ({ 
  src, 
  alt, 
  className, 
  width, 
  height, 
  priority = false,
  placeholder = null 
}) => {
  // Convert to WebP if not already
  const webpSrc = src.replace(/\.(jpg|jpeg|png)$/i, '.webp');
  
  // Fallback to original if WebP doesn't exist
  const imageSrc = src.includes('.webp') ? src : webpSrc;
  
  // Default placeholder
  const defaultPlaceholder = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E`;
  
  return (
    <LazyLoadImage
      src={imageSrc}
      alt={alt}
      className={className}
      width={width}
      height={height}
      effect="blur"
      placeholderSrc={placeholder || defaultPlaceholder}
      loading={priority ? 'eager' : 'lazy'}
      threshold={100}
      onError={(e) => {
        // Fallback to original image if WebP fails
        if (e.target.src !== src) {
          e.target.src = src;
        }
      }}
    />
  );
};

export default OptimizedImage; 