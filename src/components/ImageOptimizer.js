import React, { useState, useRef } from 'react';

const ImageOptimizer = ({ 
  src, 
  alt, 
  className = '', 
  width, 
  height, 
  sizes = '100vw',
  priority = false 
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef(null);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    setHasError(true);
    // Fallback to original image if WebP fails
    if (imgRef.current && src && !src.includes('.webp')) {
      imgRef.current.src = src.replace('.webp', '.jpg');
    }
  };

  return (
    <img
      ref={imgRef}
      src={src}
      alt={alt}
      className={`${className} ${isLoaded ? 'loaded' : 'loading'}`}
      width={width}
      height={height}
      sizes={sizes}
      loading={priority ? 'eager' : 'lazy'}
      decoding="async"
      onLoad={handleLoad}
      onError={handleError}
      style={{
        opacity: isLoaded ? 1 : 0.7,
        transition: 'opacity 0.3s ease-in-out',
        filter: isLoaded ? 'none' : 'blur(1px)',
        transform: isLoaded ? 'scale(1)' : 'scale(1.02)'
      }}
    />
  );
};

export default ImageOptimizer; 