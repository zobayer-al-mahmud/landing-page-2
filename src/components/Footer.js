import React from 'react';
import ImageOptimizer from './ImageOptimizer';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <ImageOptimizer
                src="/front-asset/images/logo.webp"
                alt="Australian Credit Solutions"
                width={150}
                height={50}
                priority={false}
              />
            </div>
            <p className="company-info">
              ABN 80 650 730 699<br />
              Licensed and registered credit repair specialists
            </p>
            <div className="contact-info">
              <div className="contact-item">
                <span className="icon">📞</span>
                <a href="tel:1300 368 302">1300 368 302</a>
              </div>
              <div className="contact-item">
                <span className="icon">📞</span>
                <a href="tel:0489 265 737">0489 265 737</a>
              </div>
              <div className="contact-item">
                <span className="icon">✉️</span>
                <a href="mailto:help@australiancreditsolutions.com.au">
                  help@australiancreditsolutions.com.au
                </a>
              </div>
              <div className="contact-item">
                <span className="icon">📍</span>
                <span>Level 8 805/220 Collins Street Melbourne VIC 3000</span>
              </div>
            </div>
          </div>

          <div className="footer-section">
            <h4>Services by State</h4>
            <ul className="footer-links">
              <li><a href="https://www.australiancreditsolutions.com.au/credit-repair-adelaide">Credit Repair Adelaide</a></li>
              <li><a href="https://www.australiancreditsolutions.com.au/credit-repair-brisbane">Credit Repair Brisbane</a></li>
              <li><a href="https://www.australiancreditsolutions.com.au/credit-repair-canberra">Credit Repair Canberra</a></li>
              <li><a href="https://www.australiancreditsolutions.com.au/credit-repair-darwin">Credit Repair Darwin</a></li>
              <li><a href="https://www.australiancreditsolutions.com.au/credit-repair-hobart">Credit Repair Hobart</a></li>
              <li><a href="https://www.australiancreditsolutions.com.au/credit-repair-melbourne">Credit Repair Melbourne</a></li>
              <li><a href="https://www.australiancreditsolutions.com.au/credit-repair-perth">Credit Repair Perth</a></li>
              <li><a href="https://www.australiancreditsolutions.com.au/credit_repair_sydney">Credit Repair Sydney</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><a href="https://www.australiancreditsolutions.com.au/our-services">Our Services</a></li>
              <li><a href="https://www.australiancreditsolutions.com.au/credit-score">Credit Score</a></li>
              <li><a href="https://www.australiancreditsolutions.com.au/free-credit-assessment">Free Assessment</a></li>
              <li><a href="https://www.australiancreditsolutions.com.au/testimonial">Testimonials</a></li>
              <li><a href="https://www.australiancreditsolutions.com.au/blog">Blog</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Legal</h4>
            <ul className="footer-links">
              <li><a href="https://www.australiancreditsolutions.com.au/terms-and-conditions">Terms & Conditions</a></li>
              <li><a href="https://www.australiancreditsolutions.com.au/privacy-policy">Privacy Policy</a></li>
              <li><a href="https://www.australiancreditsolutions.com.au/front-asset/uploads/pdf/Complaints%20Handling%20and.pdf%20R1.pdf" target="_blank" rel="noopener noreferrer">Complaints Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="social-links">
            <a href="http://facebook.com/australiancreditsolutions" target="_blank" rel="noopener noreferrer" aria-label="Facebook">📘</a>
            <a href="https://twitter.com/credits_aussie" target="_blank" rel="noopener noreferrer" aria-label="Twitter">🐦</a>
            <a href="http://www.youtube.com/@australiancreditsolutions3719" target="_blank" rel="noopener noreferrer" aria-label="YouTube">📺</a>
            <a href="https://www.pinterest.ph/australiancreditsolutions/" target="_blank" rel="noopener noreferrer" aria-label="Pinterest">📌</a>
            <a href="https://www.tiktok.com/@australiancreditrepair" target="_blank" rel="noopener noreferrer" aria-label="TikTok">🎵</a>
            <a href="https://www.instagram.com/australian_credit_solution/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">📷</a>
            <a href="https://www.linkedin.com/company/australian-credit-solutions" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">💼</a>
          </div>

          <div className="footer-disclaimer">
            <p>
              Australian Credit Solutions specializes exclusively in credit repair services and does not provide legal advice. 
              For any legal matters, please contact Fogarty Oliver and Rothschilds.
            </p>
            <p className="copyright">
              © {currentYear} Australian Credit Solutions. All rights reserved.
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .footer {
          background: var(--theme1);
          color: var(--white);
          padding: 3rem 0 1rem;
        }

        .footer-content {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
          margin-bottom: 2rem;
        }

        .footer-section h4 {
          color: var(--white);
          margin-bottom: 1rem;
          font-size: 1.2rem;
        }

        .footer-logo img {
          height: 50px;
          width: auto;
          margin-bottom: 1rem;
        }

        .company-info {
          color: rgba(255, 255, 255, 0.8);
          margin-bottom: 1.5rem;
          line-height: 1.6;
        }

        .contact-info {
          display: flex;
          flex-direction: column;
          gap: 0.8rem;
        }

        .contact-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .contact-item .icon {
          font-size: 1.1rem;
        }

        .contact-item a {
          color: rgba(255, 255, 255, 0.9);
          text-decoration: none;
          transition: var(--transition);
        }

        .contact-item a:hover {
          color: var(--white);
        }

        .footer-links {
          list-style: none;
          padding: 0;
        }

        .footer-links li {
          margin-bottom: 0.5rem;
        }

        .footer-links a {
          color: rgba(255, 255, 255, 0.8);
          text-decoration: none;
          transition: var(--transition);
        }

        .footer-links a:hover {
          color: var(--white);
        }

        .footer-bottom {
          border-top: 1px solid rgba(255, 255, 255, 0.2);
          padding-top: 2rem;
          text-align: center;
        }

        .social-links {
          display: flex;
          justify-content: center;
          gap: 1rem;
          margin-bottom: 1.5rem;
        }

        .social-links a {
          display: inline-block;
          width: 40px;
          height: 40px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          transition: var(--transition);
          font-size: 1.2rem;
        }

        .social-links a:hover {
          background: rgba(255, 255, 255, 0.2);
          transform: translateY(-2px);
        }

        .footer-disclaimer {
          color: rgba(255, 255, 255, 0.7);
          font-size: 0.9rem;
          line-height: 1.6;
        }

        .footer-disclaimer p {
          margin-bottom: 0.5rem;
        }

        .copyright {
          font-weight: 600;
          color: rgba(255, 255, 255, 0.9);
        }

        @media (max-width: 768px) {
          .footer-content {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }

          .footer {
            padding: 2rem 0 1rem;
          }

          .social-links {
            gap: 0.8rem;
          }

          .social-links a {
            width: 35px;
            height: 35px;
            font-size: 1rem;
          }
        }

        @media (max-width: 480px) {
          .footer-content {
            gap: 1rem;
          }

          .contact-item {
            font-size: 0.9rem;
          }

          .footer-disclaimer {
            font-size: 0.8rem;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer; 