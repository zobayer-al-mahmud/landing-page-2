import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Reviews = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const reviews = [
    {
      id: 1,
      name: "Virginia Fay",
      initials: "VF",
      comment: "I feel happy a lot thanks heaps I'm so thankful for everything you's have done for me and I really do appreciate it so much thank you so much.",
      rating: 5
    },
    {
      id: 2,
      name: "Abeer B.",
      initials: "AB",
      comment: "Great work Dear Gemmalyn, Thanks for helping me realise the stress away Now I can buy my dream.",
      rating: 5
    },
    {
      id: 3,
      name: "Cardozn",
      initials: "C",
      comment: "Great work A big thank you to Bryan for the swift response and updating on the handling of my account.",
      rating: 5
    },
    {
      id: 4,
      name: "Lovepreet",
      initials: "L",
      comment: "Perfect Information about my credit Enquiry removal Gemma informed me about my 3 inquiries removal from my file.",
      rating: 5
    },
    {
      id: 5,
      name: "Leigh",
      initials: "L",
      comment: "I'm so grateful didn't think this was possible Harman and Carla cammile have been fantastic in helping me with my business.",
      rating: 5
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span key={index} className={`star ${index < rating ? 'filled' : ''}`}>
        ⭐
      </span>
    ));
  };

  return (
    <section className="reviews-section" ref={ref}>
      <div className="container">
        <motion.div
          className="reviews-header"
          variants={itemVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <h2>What Our Clients Say</h2>
          <p>Don't just take our word for it - hear from our satisfied clients</p>
        </motion.div>

        <motion.div
          className="reviews-grid"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {reviews.map((review) => (
            <motion.div
              key={review.id}
              className="review-card"
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="review-header">
                <div className="reviewer-avatar">
                  <span>{review.initials}</span>
                </div>
                <div className="reviewer-info">
                  <h4>{review.name}</h4>
                  <div className="stars">
                    {renderStars(review.rating)}
                  </div>
                </div>
              </div>
              <div className="review-content">
                <p>"{review.comment}"</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="reviews-cta"
          variants={itemVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <a href="https://www.australiancreditsolutions.com.au/testimonial" className="btn btn-secondary">
            View All Testimonials
          </a>
        </motion.div>
      </div>

      <style jsx>{`
        .reviews-section {
          padding: 4rem 0;
          background: var(--white);
        }

        .reviews-header {
          text-align: center;
          margin-bottom: 3rem;
        }

        .reviews-header h2 {
          color: var(--theme1);
          margin-bottom: 1rem;
        }

        .reviews-header p {
          color: var(--gray);
          font-size: 1.1rem;
        }

        .reviews-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          margin-bottom: 3rem;
        }

        .review-card {
          background: var(--white);
          border-radius: 15px;
          padding: 2rem;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          border: 1px solid var(--border-color);
          transition: var(--transition);
        }

        .review-card:hover {
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
        }

        .review-header {
          display: flex;
          align-items: center;
          margin-bottom: 1.5rem;
        }

        .reviewer-avatar {
          width: 50px;
          height: 50px;
          background: linear-gradient(135deg, var(--theme1), var(--theme2));
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-right: 1rem;
        }

        .reviewer-avatar span {
          color: var(--white);
          font-weight: 600;
          font-size: 1.1rem;
        }

        .reviewer-info h4 {
          margin: 0 0 0.5rem 0;
          color: var(--dark);
          font-size: 1.1rem;
        }

        .stars {
          display: flex;
          gap: 0.2rem;
        }

        .star {
          font-size: 1rem;
          opacity: 0.3;
        }

        .star.filled {
          opacity: 1;
        }

        .review-content p {
          color: var(--gray);
          line-height: 1.6;
          font-style: italic;
          margin: 0;
        }

        .reviews-cta {
          text-align: center;
        }

        @media (max-width: 768px) {
          .reviews-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }

          .review-card {
            padding: 1.5rem;
          }
        }

        @media (max-width: 480px) {
          .reviews-section {
            padding: 2rem 0;
          }

          .review-card {
            padding: 1rem;
          }

          .reviewer-avatar {
            width: 40px;
            height: 40px;
          }

          .reviewer-avatar span {
            font-size: 1rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Reviews; 