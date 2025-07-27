import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const WhyChooseUs = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const reasons = [
    {
      id: 1,
      number: "1",
      title: "No Win No Fee Policy",
      description: "Our confidence in our services is backed by a 'no win no fee' policy. If we are unable to secure a win in your case, we initiate a refund of your fees."
    },
    {
      id: 2,
      number: "2", 
      title: "Award-Winning Excellence",
      description: "We take pride in being the number one award-winning company within our industry. We have a track record of award-winning excellence in 2022, 2023, and 2024."
    },
    {
      id: 3,
      number: "3",
      title: "Consistently Recognized for Outstanding Services",
      description: "Our exceptional services have earned us recognition three times consecutively, emphasizing our commitment to high standards in credit repair and customer satisfaction."
    },
    {
      id: 4,
      number: "4",
      title: "Licensed and Registered",
      description: "Australian Credit Solutions proudly holds a valid license, a testament to our legitimacy and adherence to regulatory standards. Our ACL number is 532003."
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

  return (
    <section className="why-choose-us" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          variants={itemVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <h2>Why Choose Australian Credit Solutions?</h2>
          <p>Here are the compelling reasons why Australian Credit Solutions stands out as your preferred choice in the credit management market:</p>
        </motion.div>

        <motion.div
          className="reasons-grid"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {reasons.map((reason) => (
            <motion.div
              key={reason.id}
              className="reason-card"
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="reason-number">{reason.number}</div>
              <div className="reason-content">
                <h3>{reason.title}</h3>
                <p>{reason.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <style jsx>{`
        .why-choose-us {
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
          max-width: 600px;
          margin: 0 auto;
        }

        .reasons-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }

        .reason-card {
          background: var(--white);
          border-radius: 15px;
          padding: 2rem;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          border: 1px solid var(--border-color);
          transition: var(--transition);
          position: relative;
          overflow: hidden;
        }

        .reason-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(135deg, var(--theme1), var(--theme2));
        }

        .reason-card:hover {
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
        }

        .reason-number {
          width: 60px;
          height: 60px;
          background: linear-gradient(135deg, var(--theme1), var(--theme2));
          color: var(--white);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: 1.5rem;
        }

        .reason-content h3 {
          color: var(--dark);
          margin-bottom: 1rem;
          font-size: 1.3rem;
        }

        .reason-content p {
          color: var(--gray);
          line-height: 1.6;
          margin: 0;
        }

        @media (max-width: 768px) {
          .reasons-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }

          .reason-card {
            padding: 1.5rem;
          }
        }

        @media (max-width: 480px) {
          .why-choose-us {
            padding: 2rem 0;
          }

          .reason-card {
            padding: 1rem;
          }

          .reason-number {
            width: 50px;
            height: 50px;
            font-size: 1.2rem;
          }
        }
      `}</style>
    </section>
  );
};

export default WhyChooseUs; 