import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Blog = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section className="blog" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2>Latest Blog Posts</h2>
          <p>Stay informed about credit repair and financial tips</p>
        </motion.div>
        
        <div className="blog-content">
          <p>Latest blog posts will be displayed here.</p>
        </div>
      </div>

      <style jsx>{`
        .blog {
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

        .blog-content {
          text-align: center;
          color: var(--gray);
        }

        @media (max-width: 768px) {
          .blog {
            padding: 2rem 0;
          }
        }
      `}</style>
    </section>
  );
};

export default Blog; 