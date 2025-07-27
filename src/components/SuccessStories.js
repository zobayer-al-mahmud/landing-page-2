import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const SuccessStories = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section className="success-stories" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2>Success Stories</h2>
          <p>Real results from real clients</p>
        </motion.div>
        
        <div className="stories-content">
          <p>Success stories and testimonials will be displayed here.</p>
        </div>
      </div>

      <style jsx>{`
        .success-stories {
          padding: 4rem 0;
          background: var(--white);
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

        .stories-content {
          text-align: center;
          color: var(--gray);
        }

        @media (max-width: 768px) {
          .success-stories {
            padding: 2rem 0;
          }
        }
      `}</style>
    </section>
  );
};

export default SuccessStories; 