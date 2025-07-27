import React, { Suspense, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { reportWebVitals, performanceUtils } from './utils/webVitals';

// Lazy load all pages
const Home = React.lazy(() => import('./pages/Home'));
const Services = React.lazy(() => import('./pages/Services'));
const Contact = React.lazy(() => import('./pages/Contact'));

// Lazy load components
const Header = React.lazy(() => import('./components/Header'));
const Footer = React.lazy(() => import('./components/Footer'));

// Loading component
const LoadingSpinner = () => (
  <div style={{ 
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center', 
    height: '100vh',
    background: 'linear-gradient(45deg, #667eea 0%, #764ba2 100%)',
    color: 'white',
    fontSize: '18px'
  }}>
    <div>
      <div style={{ marginBottom: '10px' }}>Loading Australian Credit Solutions...</div>
      <div style={{ 
        width: '40px', 
        height: '40px', 
        border: '3px solid rgba(255,255,255,0.3)', 
        borderTop: '3px solid white', 
        borderRadius: '50%', 
        animation: 'spin 1s linear infinite',
        margin: '0 auto'
      }}></div>
      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  </div>
);

function App() {
  useEffect(() => {
    // Register service worker
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
          .then((registration) => {
            console.log('SW registered: ', registration);
          })
          .catch((registrationError) => {
            console.log('SW registration failed: ', registrationError);
          });
      });
    }

    // Initialize performance monitoring
    reportWebVitals();
    performanceUtils.measureTTI();
    performanceUtils.measureMemory();
    performanceUtils.measureResources();

    // Preload critical resources
    const preloadLinks = [
      { rel: 'preload', href: '/front-asset/images/logo.webp', as: 'image' },
      { rel: 'preload', href: '/front-asset/css/style.css', as: 'style' },
      { rel: 'dns-prefetch', href: 'https://www.googletagmanager.com' },
      { rel: 'dns-prefetch', href: 'https://connect.facebook.net' },
      { rel: 'dns-prefetch', href: 'https://fonts.googleapis.com' },
    ];

    preloadLinks.forEach(link => {
      const linkElement = document.createElement('link');
      Object.assign(linkElement, link);
      document.head.appendChild(linkElement);
    });

    // Add critical CSS inline
    const criticalCSS = `
      body { margin: 0; font-family: 'Noto Sans', sans-serif; }
      .header { background: #f8f9fa; padding: 10px 0; }
      .banner_home { position: relative; }
      .banner_img img { width: 100%; height: auto; }
      .form_sec { background: #fff; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); }
      .input_icons { position: relative; }
      .input_icons input, .input_icons select { width: 100%; padding: 12px 40px 12px 12px; border: 1px solid #ddd; border-radius: 4px; }
      .button_1 { background: #0668a5; color: white; padding: 12px 24px; border: none; border-radius: 4px; cursor: pointer; }
      .wow { visibility: hidden; }
      .fadeInUp { animation: fadeInUp 0.6s ease-out; }
      @keyframes fadeInUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
    `;

    const styleElement = document.createElement('style');
    styleElement.textContent = criticalCSS;
    document.head.appendChild(styleElement);

  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <Suspense fallback={<LoadingSpinner />}>
          <Header />
        </Suspense>
        
        <main>
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Suspense>
        </main>
        
        <Suspense fallback={<LoadingSpinner />}>
          <Footer />
        </Suspense>
      </div>
    </BrowserRouter>
  );
}

export default App; 