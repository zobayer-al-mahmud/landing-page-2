import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ImageOptimizer from './ImageOptimizer';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const headerVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const mobileMenuVariants = {
    closed: { 
      opacity: 0,
      height: 0,
      transition: { duration: 0.3 }
    },
    open: { 
      opacity: 1,
      height: "auto",
      transition: { duration: 0.3 }
    }
  };

  return (
    <>
      {/* Top Header */}
      <motion.header 
        className={`top-header ${isScrolled ? 'scrolled' : ''}`}
        variants={headerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="container">
          <div className="row">
            <div className="col-12">
              <ul className="header-contact">
                <li>
                  <a href="tel:1300 368 302">
                    <span className="icon">📞</span> 1300 368 302
                  </a>
                </li>
                <li>
                  <a href="mailto:help@australiancreditsolutions.com.au">
                    <span className="icon">✉️</span> help@australiancreditsolutions.com.au
                  </a>
                </li>
                <li>
                  <a href="https://www.australiancreditsolutions.com.au/testimonial">Testimonials</a>
                </li>
              </ul>
              
              <ul className="header-social">
                <li><a href="http://facebook.com/australiancreditsolutions" target="_blank" rel="noopener noreferrer">📘</a></li>
                <li><a href="https://twitter.com/credits_aussie" target="_blank" rel="noopener noreferrer">🐦</a></li>
                <li><a href="http://www.youtube.com/@australiancreditsolutions3719" target="_blank" rel="noopener noreferrer">📺</a></li>
                <li><a href="https://www.pinterest.ph/australiancreditsolutions/" target="_blank" rel="noopener noreferrer">📌</a></li>
                <li><a href="https://www.tiktok.com/@australiancreditrepair" target="_blank" rel="noopener noreferrer">🎵</a></li>
                <li><a href="https://www.instagram.com/australian_credit_solution/" target="_blank" rel="noopener noreferrer">📷</a></li>
                <li><a href="https://www.linkedin.com/company/australian-credit-solutions" target="_blank" rel="noopener noreferrer">💼</a></li>
              </ul>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Main Navigation */}
      <motion.nav 
        className={`main-nav ${isScrolled ? 'sticky' : ''}`}
        variants={headerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="container">
          <div className="nav-content">
            {/* Logo */}
            <motion.div 
              className="logo"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <a href="/">
                <ImageOptimizer
                  src="/front-asset/images/logo.webp"
                  alt="Australian Credit Solutions"
                  width={200}
                  height={60}
                  priority={true}
                />
              </a>
            </motion.div>

            {/* Navigation Menu */}
            <div className="nav-menu">
              <ul className="nav-links">
                <li><a href="/our-services">Our Services</a></li>
                <li><a href="/credit-score">Credit Score</a></li>
                <li><a href="/free-credit-assessment" className="cta-button">Free Credit Assessment</a></li>
                <li className="contact-info">
                  <span>Credit Repair Helpline</span>
                  <a href="tel:0489 265 737">0489 265 737</a>
                </li>
                <li className="contact-info">
                  <span>Contact</span>
                  <a href="tel:1300 368 302">1300 368 302</a>
                </li>
              </ul>
            </div>

            {/* Mobile Menu Toggle */}
            <motion.button
              className="mobile-menu-toggle"
              onClick={toggleMobileMenu}
              whileTap={{ scale: 0.95 }}
            >
              <span></span>
              <span></span>
              <span></span>
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="mobile-menu"
              variants={mobileMenuVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              <div className="container">
                <ul className="mobile-nav-links">
                  <li><a href="/our-services">Our Services</a></li>
                  <li><a href="/credit-score">Credit Score</a></li>
                  <li><a href="/free-credit-assessment" className="cta-button">Free Credit Assessment</a></li>
                  <li className="contact-info">
                    <span>Credit Repair Helpline</span>
                    <a href="tel:0489 265 737">0489 265 737</a>
                  </li>
                  <li className="contact-info">
                    <span>Contact</span>
                    <a href="tel:1300 368 302">1300 368 302</a>
                  </li>
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      <style jsx>{`
        .top-header {
          background: var(--theme1);
          color: var(--white);
          padding: 8px 0;
          font-size: 0.9rem;
        }

        .top-header.scrolled {
          transform: translateY(-100%);
        }

        .header-contact,
        .header-social {
          list-style: none;
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .header-contact {
          float: left;
        }

        .header-social {
          float: right;
        }

        .header-contact a,
        .header-social a {
          color: var(--white);
          text-decoration: none;
          transition: var(--transition);
        }

        .header-contact a:hover,
        .header-social a:hover {
          opacity: 0.8;
        }

        .main-nav {
          background: var(--white);
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
          padding: 1rem 0;
          position: relative;
          z-index: 1000;
        }

        .main-nav.sticky {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          animation: slideDown 0.3s ease;
        }

        @keyframes slideDown {
          from { transform: translateY(-100%); }
          to { transform: translateY(0); }
        }

        .nav-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo img {
          height: 60px;
          width: auto;
        }

        .nav-menu {
          list-style: none;
          display: flex;
          align-items: center;
          gap: 2rem;
        }

        .nav-menu a {
          color: var(--dark);
          text-decoration: none;
          font-weight: 500;
          transition: var(--transition);
        }

        .nav-menu a:hover {
          color: var(--theme1);
        }

        .contact-info {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .contact-info span {
          font-size: 0.8rem;
          color: var(--gray);
        }

        .contact-info a {
          font-weight: 600;
          color: var(--theme1);
        }

        .mobile-menu-toggle {
          display: none;
          flex-direction: column;
          background: none;
          border: none;
          cursor: pointer;
          padding: 0.5rem;
        }

        .mobile-menu-toggle span {
          width: 25px;
          height: 3px;
          background: var(--dark);
          margin: 3px 0;
          transition: var(--transition);
        }

        .mobile-menu {
          background: var(--white);
          border-top: 1px solid var(--border-color);
          overflow: hidden;
        }

        .mobile-menu ul {
          list-style: none;
          padding: 1rem 0;
        }

        .mobile-menu li {
          padding: 0.5rem 0;
          border-bottom: 1px solid var(--border-color);
        }

        .mobile-menu a {
          display: block;
          padding: 0.5rem 0;
          color: var(--dark);
          text-decoration: none;
        }

        @media (max-width: 768px) {
          .header-contact,
          .header-social {
            float: none;
            justify-content: center;
            margin: 0.5rem 0;
          }

          .desktop-menu {
            display: none;
          }

          .mobile-menu-toggle {
            display: flex;
          }

          .nav-content {
            justify-content: space-between;
          }
        }

        @media (max-width: 480px) {
          .header-contact,
          .header-social {
            flex-wrap: wrap;
            gap: 0.5rem;
          }

          .header-contact li,
          .header-social li {
            font-size: 0.8rem;
          }
        }
      `}</style>
    </>
  );
};

export default Header; 