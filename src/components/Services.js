import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section className="services" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2>Our Services</h2>
          <p>Comprehensive credit repair solutions</p>
        </motion.div>
        
        <div className="services-content">
          <p>Credit repair services will be displayed here.</p>
        </div>
      </div>

      <style jsx>{`
        .services {
          padding: 4rem 0;
          background: var(--light-gray);
        }

        .section-header {
          text-align: center;
          margin-bottom: 3rem;
        }

        .section-header h2 {
          color: var(--theme1);
          margin-bottom: 1rem;
        }

        .section-header p {
          color: var(--gray);
          font-size: 1.1rem;
        }

        .services-content {
          text-align: center;
          color: var(--gray);
        }

        @media (max-width: 768px) {
          .services {
            padding: 2rem 0;
          }
        }
      `}</style>
    </section>
  );
};

export default Services; 