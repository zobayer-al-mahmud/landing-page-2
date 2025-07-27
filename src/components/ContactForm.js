import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ContactForm = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    phone: '',
    email: '',
    loan: '',
    job: '',
    suburb: '',
    state: '',
    postal_code: '',
    review: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.first_name.trim()) newErrors.first_name = 'First name is required';
    if (!formData.last_name.trim()) newErrors.last_name = 'Last name is required';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.suburb.trim()) newErrors.suburb = 'Suburb is required';
    if (!formData.state) newErrors.state = 'State is required';
    if (!formData.postal_code.trim()) newErrors.postal_code = 'Postcode is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setSubmitSuccess(true);
      setFormData({
        first_name: '',
        last_name: '',
        phone: '',
        email: '',
        loan: '',
        job: '',
        suburb: '',
        state: '',
        postal_code: '',
        review: ''
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitSuccess(false), 5000);
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const formVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="contact-form-section" id="contact-form" ref={ref}>
      <div className="container">
        <motion.div 
          className="contact-form-container"
          variants={formVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <div className="form-header">
            <h2>Free Credit Check Form</h2>
            <p>Get your free credit assessment worth $199. No obligation, no pressure.</p>
          </div>

          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-grid">
              <div className="form-group">
                <label htmlFor="first_name">First Name *</label>
                <input
                  type="text"
                  id="first_name"
                  name="first_name"
                  value={formData.first_name}
                  onChange={handleChange}
                  className={errors.first_name ? 'error' : ''}
                  placeholder="Enter your first name"
                />
                {errors.first_name && <span className="error-message">{errors.first_name}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="last_name">Last Name *</label>
                <input
                  type="text"
                  id="last_name"
                  name="last_name"
                  value={formData.last_name}
                  onChange={handleChange}
                  className={errors.last_name ? 'error' : ''}
                  placeholder="Enter your last name"
                />
                {errors.last_name && <span className="error-message">{errors.last_name}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone Number *</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={errors.phone ? 'error' : ''}
                  placeholder="Enter your phone number"
                />
                {errors.phone && <span className="error-message">{errors.phone}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={errors.email ? 'error' : ''}
                  placeholder="Enter your email address"
                />
                {errors.email && <span className="error-message">{errors.email}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="loan">Are you looking for</label>
                <select
                  id="loan"
                  name="loan"
                  value={formData.loan}
                  onChange={handleChange}
                >
                  <option value="">Select loan type</option>
                  <option value="home">Home Loan</option>
                  <option value="car">Car Loan</option>
                  <option value="personal">Personal Loan</option>
                  <option value="future">For future reference</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="job">Employment Status</label>
                <select
                  id="job"
                  name="job"
                  value={formData.job}
                  onChange={handleChange}
                >
                  <option value="">Select employment status</option>
                  <option value="fulltime">Full Time</option>
                  <option value="parttime">Part Time</option>
                  <option value="centerlink">Centrelink</option>
                  <option value="jobseeker">Job Seeker</option>
                  <option value="disability">Disability Pension</option>
                  <option value="unemployed">Unemployed</option>
                  <option value="middle">Middle of Jobs</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="suburb">Suburb *</label>
                <input
                  type="text"
                  id="suburb"
                  name="suburb"
                  value={formData.suburb}
                  onChange={handleChange}
                  className={errors.suburb ? 'error' : ''}
                  placeholder="Enter your suburb"
                />
                {errors.suburb && <span className="error-message">{errors.suburb}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="state">State *</label>
                <select
                  id="state"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  className={errors.state ? 'error' : ''}
                >
                  <option value="">Select State</option>
                  <option value="nsw">NSW</option>
                  <option value="vic">VIC</option>
                  <option value="wa">WA</option>
                  <option value="qld">QLD</option>
                  <option value="sa">SA</option>
                  <option value="tas">TAS</option>
                  <option value="act">ACT</option>
                  <option value="nt">NT</option>
                </select>
                {errors.state && <span className="error-message">{errors.state}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="postal_code">Postcode *</label>
                <input
                  type="text"
                  id="postal_code"
                  name="postal_code"
                  value={formData.postal_code}
                  onChange={handleChange}
                  className={errors.postal_code ? 'error' : ''}
                  placeholder="Enter your postcode"
                />
                {errors.postal_code && <span className="error-message">{errors.postal_code}</span>}
              </div>
            </div>

            <div className="form-group full-width">
              <label htmlFor="review">Additional Information</label>
              <textarea
                id="review"
                name="review"
                value={formData.review}
                onChange={handleChange}
                placeholder="Please share any other information regarding your credit file"
                rows="4"
              />
            </div>

            <motion.button
              type="submit"
              className="btn btn-primary btn-large submit-btn"
              disabled={isSubmitting}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {isSubmitting ? 'Submitting...' : 'Apply Now'}
            </motion.button>

            {submitSuccess && (
              <motion.div
                className="success-message"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                ✅ Thank you! Your form has been submitted successfully. We'll contact you soon.
              </motion.div>
            )}
          </form>
        </motion.div>
      </div>

      <style jsx>{`
        .contact-form-section {
          padding: 4rem 0;
          background: linear-gradient(135deg, var(--light-gray) 0%, #f0f8ff 100%);
        }

        .contact-form-container {
          max-width: 800px;
          margin: 0 auto;
          background: var(--white);
          border-radius: 20px;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
          overflow: hidden;
        }

        .form-header {
          background: linear-gradient(135deg, var(--theme1), var(--theme2));
          color: var(--white);
          padding: 2rem;
          text-align: center;
        }

        .form-header h2 {
          margin-bottom: 0.5rem;
          color: var(--white);
        }

        .form-header p {
          color: rgba(255, 255, 255, 0.9);
          margin: 0;
        }

        .contact-form {
          padding: 2rem;
        }

        .form-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.5rem;
          margin-bottom: 2rem;
        }

        .form-group {
          display: flex;
          flex-direction: column;
        }

        .form-group.full-width {
          grid-column: 1 / -1;
        }

        .form-group label {
          font-weight: 600;
          color: var(--dark);
          margin-bottom: 0.5rem;
        }

        .form-group input,
        .form-group select,
        .form-group textarea {
          padding: 0.8rem;
          border: 2px solid var(--border-color);
          border-radius: 8px;
          font-size: 1rem;
          transition: var(--transition);
          background: var(--white);
        }

        .form-group input:focus,
        .form-group select:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: var(--theme1);
          box-shadow: 0 0 0 3px rgba(6, 104, 165, 0.1);
        }

        .form-group input.error,
        .form-group select.error {
          border-color: #e74c3c;
        }

        .error-message {
          color: #e74c3c;
          font-size: 0.8rem;
          margin-top: 0.25rem;
        }

        .submit-btn {
          width: 100%;
          padding: 1rem;
          font-size: 1.1rem;
          font-weight: 600;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          transition: var(--transition);
        }

        .submit-btn:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        .success-message {
          background: #d4edda;
          color: #155724;
          padding: 1rem;
          border-radius: 8px;
          margin-top: 1rem;
          text-align: center;
          font-weight: 500;
        }

        @media (max-width: 768px) {
          .form-grid {
            grid-template-columns: 1fr;
            gap: 1rem;
          }

          .contact-form {
            padding: 1.5rem;
          }

          .form-header {
            padding: 1.5rem;
          }
        }

        @media (max-width: 480px) {
          .contact-form-section {
            padding: 2rem 0;
          }

          .contact-form {
            padding: 1rem;
          }

          .form-header {
            padding: 1rem;
          }
        }
      `}</style>
    </section>
  );
};

export default ContactForm; 