import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import OptimizedImage from './OptimizedImage';

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

  return (
    <>
      <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <div className="row">
            <div className="col-12 wow fadeInUp">
              <ul className="float-sm-start header_ul">
                <li className="me-lg-4">
                  <a href="tel:1300 368 302">
                    <span className="mdi mdi-phone-in-talk-outline"></span> 1300 368 302
                  </a>
                </li>
                <li className="mb_li">
                  <a href="mailto:help@australiancreditsolutions.com.au" className="fs_15">
                    <span className="mdi mdi-email-outline"></span> help@australiancreditsolutions.com.au
                  </a>
                </li>
                <li><a href="javascript:void(0)">|</a></li>
                <li>
                  <Link to="/testimonial" className="fs_15">Testimonials</Link>
                </li>
              </ul>
              <ul className="float-sm-end">
                <li>
                  <a href="http://facebook.com/australiancreditsolutions" target="_blank" rel="noopener noreferrer">
                    <span className="mdi mdi-facebook"></span>
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/credits_aussie" target="_blank" rel="noopener noreferrer">
                    <span className="mdi mdi-twitter"></span>
                  </a>
                </li>
                <li>
                  <a href="http://www.youtube.com/@australiancreditsolutions3719" target="_blank" rel="noopener noreferrer">
                    <span className="mdi mdi-youtube"></span>
                  </a>
                </li>
                <li>
                  <a href="https://www.pinterest.ph/australiancreditsolutions/" target="_blank" rel="noopener noreferrer">
                    <span className="mdi mdi-pinterest"></span>
                  </a>
                </li>
                <li>
                  <a href="https://www.tiktok.com/@australiancreditrepair" target="_blank" rel="noopener noreferrer">
                    <OptimizedImage 
                      src="/front-asset/images/tiktok.webp" 
                      alt="TikTok"
                      style={{ height: '14px', position: 'relative', top: '1px' }}
                      width={14}
                      height={14}
                      loading="lazy"
                    />
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/australian_credit_solution/" target="_blank" rel="noopener noreferrer">
                    <span className="mdi mdi-instagram"></span>
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/company/australian-credit-solutions" target="_blank" rel="noopener noreferrer">
                    <span className="mdi mdi-linkedin"></span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>

      <nav id="menu" className={`wow fadeInUp ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <div className="row">
            <div className="col-lg-2 col-md-12">
              <Link to="/" className="logo_flex">
                <div className="logo">
                  <OptimizedImage 
                    src="/front-asset/images/logo.webp" 
                    alt="Australian Credit Solutions Logo"
                    loading="eager"
                    width={200}
                    height={60}
                    priority={true}
                  />
                </div>
              </Link>
            </div>
            <div className="col-lg-10 col-md-12">
              <ul className={`menu ${isMobileMenuOpen ? 'open' : ''}`}>
                <li className="nav_title">
                  <Link to="/" className="logo">
                    <OptimizedImage 
                      src="/front-asset/images/logo.webp" 
                      alt="Logo"
                      loading="eager"
                      width={150}
                      height={45}
                    />
                  </Link>
                  <i className="mdi mdi-arrow-left toggleNav" onClick={toggleMobileMenu}></i>
                </li>
                <li>
                  <Link to="/our-services">Our Service</Link>
                </li>
                <li>
                  <Link to="/credit-score">Credit Score</Link>
                </li>
                <span>
                  <li>
                    <Link to="/free-credit-assessment" className="button_2 fs_14">
                      Free Credit Assessment
                    </Link>
                  </li>
                  <li className="btnl">
                    <div className="button_1 py-2">
                      <span className="fw_400 fs_14">Credit Repair Helpline</span>
                      <a href="tel:0489 265 737" className="text-white">0489 265 737</a>
                    </div>
                  </li>
                  <li className="btnl">
                    <div className="button_1 py-2">
                      <span className="fw_400 fs_14">Contact</span>
                      <a href="tel:1300 368 302" className="text-white">1300 368 302</a>
                    </div>
                  </li>
                </span>
              </ul>
              <div className="bars">
                <div className="lines2 toggleNav" onClick={toggleMobileMenu}>
                  <OptimizedImage 
                    src="/front-asset/images/bars.webp" 
                    alt="Menu"
                    loading="lazy"
                    width={30}
                    height={30}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header; 