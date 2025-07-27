import React, { useState, useCallback } from 'react';

const CreditForm = () => {
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

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = useCallback((e) => {
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
  }, [errors]);

  const validateForm = useCallback(() => {
    const newErrors = {};
    
    if (!formData.first_name.trim()) newErrors.first_name = 'First name is required';
    if (!formData.last_name.trim()) newErrors.last_name = 'Last name is required';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.loan) newErrors.loan = 'Please select what you are looking for';
    if (!formData.job) newErrors.job = 'Please select your employment status';
    if (!formData.suburb.trim()) newErrors.suburb = 'Suburb is required';
    if (!formData.state) newErrors.state = 'Please select your state';
    if (!formData.postal_code.trim()) newErrors.postal_code = 'Postcode is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [formData]);

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Reset form on success
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
      
      // Show success message
      alert('Thank you! Your credit assessment request has been submitted successfully.');
      
    } catch (error) {
      console.error('Form submission error:', error);
      alert('There was an error submitting your form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  }, [formData, validateForm]);

  return (
    <section className="fzi99">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-5">
            <form className="form_sec form_box wow fadeInUp" onSubmit={handleSubmit}>
              <h6 className="mt-0 mb-4 px-4 sub_heading">Free Credit Check Form</h6>
              
              <div className="row g-3 px-4">
                <div className="col-6">
                  <div className="input_icons">
                    <span className="mdi mdi-account-circle-outline"></span>
                    <input
                      type="text"
                      name="first_name"
                      placeholder="First Name"
                      value={formData.first_name}
                      onChange={handleChange}
                      className={errors.first_name ? 'error' : ''}
                      required
                    />
                    {errors.first_name && <span className="error-text">{errors.first_name}</span>}
                  </div>
                </div>
                
                <div className="col-6">
                  <div className="input_icons">
                    <span className="mdi mdi-account-circle-outline"></span>
                    <input
                      type="text"
                      name="last_name"
                      placeholder="Last Name"
                      value={formData.last_name}
                      onChange={handleChange}
                      className={errors.last_name ? 'error' : ''}
                      required
                    />
                    {errors.last_name && <span className="error-text">{errors.last_name}</span>}
                  </div>
                </div>
                
                <div className="col-sm-6">
                  <div className="input_icons">
                    <span className="mdi mdi-phone-outline"></span>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={handleChange}
                      className={errors.phone ? 'error' : ''}
                      required
                    />
                    {errors.phone && <span className="error-text">{errors.phone}</span>}
                  </div>
                </div>
                
                <div className="col-sm-6">
                  <div className="input_icons">
                    <span className="mdi mdi-email-outline"></span>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={handleChange}
                      className={errors.email ? 'error' : ''}
                      required
                    />
                    {errors.email && <span className="error-text">{errors.email}</span>}
                  </div>
                </div>
                
                <div className="col-sm-6">
                  <div className="input_icons">
                    <span className="mdi mdi-text-search-variant"></span>
                    <select
                      name="loan"
                      value={formData.loan}
                      onChange={handleChange}
                      className={errors.loan ? 'error' : ''}
                      required
                    >
                      <option value="">Are you looking for</option>
                      <option value="home">Home Loan</option>
                      <option value="car">Car Loan</option>
                      <option value="personal">Personal Loan</option>
                      <option value="future">For future reference</option>
                    </select>
                    {errors.loan && <span className="error-text">{errors.loan}</span>}
                  </div>
                </div>
                
                <div className="col-sm-6">
                  <div className="input_icons">
                    <span className="mdi mdi-account-hard-hat-outline"></span>
                    <select
                      name="job"
                      value={formData.job}
                      onChange={handleChange}
                      className={errors.job ? 'error' : ''}
                      required
                    >
                      <option value="">Are you currently working?</option>
                      <option value="fulltime">Full Time</option>
                      <option value="parttime">Part Time</option>
                      <option value="centerlink">Centrelink</option>
                      <option value="jobseeker">Job Seeker</option>
                      <option value="disability">Disability Pension</option>
                      <option value="unemployed">Unemployed</option>
                      <option value="middle">Middle of Jobs</option>
                    </select>
                    {errors.job && <span className="error-text">{errors.job}</span>}
                  </div>
                </div>
                
                <div className="col-md-6">
                  <div className="input_icons">
                    <span className="mdi mdi-selection-multiple-marker"></span>
                    <input
                      type="text"
                      name="suburb"
                      placeholder="Suburb"
                      value={formData.suburb}
                      onChange={handleChange}
                      className={errors.suburb ? 'error' : ''}
                      required
                    />
                    {errors.suburb && <span className="error-text">{errors.suburb}</span>}
                  </div>
                </div>
                
                <div className="col-md-3 col-6">
                  <select
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    className={errors.state ? 'error' : ''}
                    required
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
                  {errors.state && <span className="error-text">{errors.state}</span>}
                </div>
                
                <div className="col-md-3 col-6">
                  <input
                    type="text"
                    name="postal_code"
                    placeholder="Postcode"
                    value={formData.postal_code}
                    onChange={handleChange}
                    className={errors.postal_code ? 'error' : ''}
                    required
                  />
                  {errors.postal_code && <span className="error-text">{errors.postal_code}</span>}
                </div>
                
                <div className="col-12">
                  <textarea
                    name="review"
                    placeholder="Please share any other info in regards to your credit file"
                    value={formData.review}
                    onChange={handleChange}
                    rows={4}
                  />
                </div>
                
                <div className="col-12 text-center">
                  <button 
                    type="submit" 
                    className="button_1 fs_14 w-100"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Submitting...' : 'Apply Now'}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreditForm; 