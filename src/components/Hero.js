import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ImageOptimizer from './ImageOptimizer';

const Hero = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: '50px'
  });

  const textVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        delay: 0.2,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 1.1 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        delay: 0.4,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="hero-section" ref={ref}>
      <div className="hero-background">
        <ImageOptimizer
          src="/manual_storage/banner/1730185048_pLu3l0aVEcdkBN85BBpaWm0QxdshiMP1OzJpvGTZ.webp"
          alt="Credit Repair Services"
          className="hero-bg-image"
          width={1200}
          height={436}
          priority={true}
          sizes="100vw"
        />
        <div className="hero-overlay"></div>
      </div>

      <div className="container">
        <div className="hero-content">
          <motion.div 
            className="hero-text"
            variants={textVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <h1>Are you struggling in getting your loans approved?</h1>
            <p className="hero-subtitle">
              Let us take care of your credit today so you can take care of your life tomorrow. 
              Get expert credit repair help you can trust.
            </p>
            <motion.div 
              className="hero-cta"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a href="#contact-form" className="btn btn-primary btn-large">
                Get Free Credit Assessment
              </a>
            </motion.div>
          </motion.div>

          <motion.div 
            className="hero-image"
            variants={imageVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <div className="hero-stats">
              <div className="stat-item">
                <span className="stat-number">1000+</span>
                <span className="stat-label">Happy Clients</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">95%</span>
                <span className="stat-label">Success Rate</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">24/7</span>
                <span className="stat-label">Support</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        .hero-section {
          position: relative;
          min-height: 80vh;
          display: flex;
          align-items: center;
          overflow: hidden;
        }

        .hero-background {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: -2;
        }

        .hero-bg-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(
            135deg,
            rgba(6, 104, 165, 0.8) 0%,
            rgba(7, 179, 225, 0.6) 100%
          );
          z-index: -1;
        }

        .hero-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
          padding: 4rem 0;
        }

        .hero-text h1 {
          font-size: clamp(2.5rem, 5vw, 4rem);
          font-weight: 700;
          color: var(--white);
          margin-bottom: 1.5rem;
          line-height: 1.2;
        }

        .hero-subtitle {
          font-size: 1.2rem;
          color: rgba(255, 255, 255, 0.9);
          margin-bottom: 2rem;
          line-height: 1.6;
        }

        .btn-large {
          padding: 1rem 2rem;
          font-size: 1.1rem;
          font-weight: 600;
        }

        .hero-stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
          background: rgba(255, 255, 255, 0.95);
          padding: 2rem;
          border-radius: 15px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
          backdrop-filter: blur(10px);
        }

        .stat-item {
          text-align: center;
        }

        .stat-number {
          display: block;
          font-size: 2.5rem;
          font-weight: 700;
          color: var(--theme1);
          line-height: 1;
        }

        .stat-label {
          display: block;
          font-size: 0.9rem;
          color: var(--gray);
          margin-top: 0.5rem;
          font-weight: 500;
        }

        @media (max-width: 768px) {
          .hero-content {
            grid-template-columns: 1fr;
            gap: 2rem;
            text-align: center;
          }

          .hero-text h1 {
            font-size: clamp(2rem, 6vw, 3rem);
          }

          .hero-subtitle {
            font-size: 1rem;
          }

          .hero-stats {
            grid-template-columns: 1fr;
            gap: 1rem;
            padding: 1.5rem;
          }

          .stat-number {
            font-size: 2rem;
          }
        }

        @media (max-width: 480px) {
          .hero-section {
            min-height: 70vh;
          }

          .hero-content {
            padding: 2rem 0;
          }

          .btn-large {
            padding: 0.8rem 1.5rem;
            font-size: 1rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero; 