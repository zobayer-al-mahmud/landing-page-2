import React, { Suspense, lazy, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import LoadingSpinner from './components/LoadingSpinner';
import Analytics from './components/Analytics';
import PerformanceMonitor from './components/PerformanceMonitor';
import CriticalCSS from './components/CriticalCSS';

// Lazy load components for better performance
const Header = lazy(() => import('./components/Header'));
const Hero = lazy(() => import('./components/Hero'));
const ContactForm = lazy(() => import('./components/ContactForm'));
const Reviews = lazy(() => import('./components/Reviews'));
const WhyChooseUs = lazy(() => import('./components/WhyChooseUs'));
const SuccessStories = lazy(() => import('./components/SuccessStories'));
const Services = lazy(() => import('./components/Services'));
const Process = lazy(() => import('./components/Process'));
const Testimonials = lazy(() => import('./components/Testimonials'));
const Blog = lazy(() => import('./components/Blog'));
const Calculator = lazy(() => import('./components/Calculator'));
const Footer = lazy(() => import('./components/Footer'));

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
  }, []);

  return (
    <>
      <Helmet>
        <title>Improve Your Credit Score with Australian Credit Solutions</title>
        <meta name="description" content="Improve your credit score with Australian Credit Solutions and secure better financial opportunities. Get credit repair expert help you can trust today!" />
        <meta name="keywords" content="improve your credit score, Australian Credit Solutions, credit solutions, credit repair" />
        <link rel="canonical" href="https://www.australiancreditsolutions.com.au" />
        
        {/* Preload critical resources */}
        <link rel="preload" href="/manual_storage/banner/1730185048_pLu3l0aVEcdkBN85BBpaWm0QxdshiMP1OzJpvGTZ.webp" as="image" />
        <link rel="preload" href="/front-asset/images/logo.webp" as="image" />
        <link rel="dns-prefetch" href="//www.googletagmanager.com" />
        <link rel="dns-prefetch" href="//connect.facebook.net" />
        <link rel="dns-prefetch" href="//analytics.tiktok.com" />
        <link rel="dns-prefetch" href="//sc-static.net" />
        
        {/* Resource hints */}
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://connect.facebook.net" />
        <link rel="preconnect" href="https://analytics.tiktok.com" />
        
        {/* Font optimization */}
        <link rel="preload" href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;600;700&display=swap" as="style" onLoad="this.onload=null;this.rel='stylesheet'" />
        <noscript><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;600;700&display=swap" /></noscript>
      </Helmet>

      <CriticalCSS />
      <Analytics />
      <PerformanceMonitor />
      
      <Suspense fallback={<LoadingSpinner />}>
        <Header />
      </Suspense>

      <main>
        <Suspense fallback={<LoadingSpinner />}>
          <Hero />
        </Suspense>

        <Suspense fallback={<LoadingSpinner />}>
          <ContactForm />
        </Suspense>

        <Suspense fallback={<LoadingSpinner />}>
          <Reviews />
        </Suspense>

        <Suspense fallback={<LoadingSpinner />}>
          <WhyChooseUs />
        </Suspense>

        <Suspense fallback={<LoadingSpinner />}>
          <SuccessStories />
        </Suspense>

        <Suspense fallback={<LoadingSpinner />}>
          <Services />
        </Suspense>

        <Suspense fallback={<LoadingSpinner />}>
          <Process />
        </Suspense>

        <Suspense fallback={<LoadingSpinner />}>
          <Testimonials />
        </Suspense>

        <Suspense fallback={<LoadingSpinner />}>
          <Blog />
        </Suspense>

        <Suspense fallback={<LoadingSpinner />}>
          <Calculator />
        </Suspense>
      </main>

      <Suspense fallback={<LoadingSpinner />}>
        <Footer />
      </Suspense>
    </>
  );
}

export default App; 