import React, { Suspense } from 'react';
import { LazyLoadComponent } from 'react-lazy-load-image-component';
import OptimizedImage from '../components/OptimizedImage';

// Lazy load non-critical components
const Testimonials = React.lazy(() => import('../components/Testimonials'));
const Services = React.lazy(() => import('../components/Services'));
const CreditForm = React.lazy(() => import('../components/CreditForm'));

const Home = () => {
  return (
    <div>
      {/* Critical content loads immediately */}
      <section className="banner_home">
        <div className="banner">
          <div className="banner_img">
            <OptimizedImage
              src="/manual_storage/banner/1730185048_pLu3l0aVEcdkBN85BBpaWm0QxdshiMP1OzJpvGTZ.webp"
              alt="Credit Repair Services Banner"
              className="wow fadeInLeft"
              width={1200}
              height={436}
              priority={true}
            />
            <div className="banner_info wow fadeInRight">
              <div className="container">
                <div className="row justify-content-between align-items-lg-center align-items-baseline g-md-5 g-3">
                  <div className="col-lg-7 col-md-8">
                    <div className="banner_text">
                      <h1>Are you struggling in getting you loans approved?</h1>
                      <h4></h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bnnrSlide bnnrLeft">
          <OptimizedImage 
            src="/front-asset/images/prev.webp" 
            alt="Previous" 
            loading="lazy"
            width={50}
            height={50}
          />
        </div>
        <div className="bnnrSlide bnnrRight">
          <OptimizedImage 
            src="/front-asset/images/next.webp" 
            alt="Next" 
            loading="lazy"
            width={50}
            height={50}
          />
        </div>
      </section>

      {/* Form section - critical for conversion */}
      <Suspense fallback={<div>Loading form...</div>}>
        <CreditForm />
      </Suspense>

      {/* Non-critical content loads when scrolled into view */}
      <LazyLoadComponent>
        <Suspense fallback={<div>Loading testimonials...</div>}>
          <Testimonials />
        </Suspense>
      </LazyLoadComponent>
      
      <LazyLoadComponent>
        <Suspense fallback={<div>Loading services...</div>}>
          <Services />
        </Suspense>
      </LazyLoadComponent>

      {/* Additional sections with lazy loading */}
      <LazyLoadComponent>
        <section className="content_sec pt-md-3 pt-0 pb-md-5">
          <div className="container">
            <div className="row gy-0 justify-content-center">
              <div className="col-12">
                <div className="review_heading">
                  <h5><small>Best 2025</small><br>Credit Score Repair</h5>
                  <OptimizedImage 
                    src="/front-asset/images/product_review.svg"
                    alt="Product Review"
                    width={200}
                    height={60}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </LazyLoadComponent>

      <LazyLoadComponent>
        <section className="content_sec pt-0">
          <div className="container">
            <div className="row justify-content-center gy-4">
              <div className="col-lg-12">
                <h4 className="main_heading text_theme1 wow fadeInUp">Why Choose Australian Credit Solutions?</h4>
                <p className="para3 wow fadeInDown">Here are the compelling reasons why Australian Credit Solutions stands out as your preferred choice in the credit management market:</p>
              </div>
              <div className="col-lg-12">
                <div className="why_choose why_choose1 wow fadeInUp">
                  <span>1</span>
                  <div>
                    <h6>No Win No Fee Policy</h6>
                    <p className="para1 mb-0">Our confidence in our services is backed by a 'no win no fee' policy. If we are unable to secure a win in your case, we initiate a refund of your fees.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="why_choose why_choose2 wow fadeInUp">
                  <span>2</span>
                  <div>
                    <h6>Award-Winning Excellence</h6>
                    <p className="para1 mb-0">We take pride in being the number one award-winning company within our industry. We have a track record of award-winning excellence in 2022, 2023, and 2024.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="why_choose why_choose3 wow fadeInUp">
                  <span>3</span>
                  <div>
                    <h6>Consistently Recognized for Outstanding Services</h6>
                    <p className="para1 mb-0">Our exceptional services have earned us recognition three times consecutively, emphasizing our commitment to high standards in credit repair and customer satisfaction.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="why_choose why_choose4 wow fadeInUp">
                  <span>4</span>
                  <div>
                    <h6>Licensed and Registered</h6>
                    <p className="para1 mb-0">In Australia, all credit repair companies must be licensed under the Australian Securities and Investments Commission (ASIC) and are required to obtain an Australian Credit License (ACL).</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </LazyLoadComponent>

      <LazyLoadComponent>
        <section className="content_sec bg_4 pt-3">
          <div className="container">
            <div className="row justify-content-center g-lg-4 g-3">
              <div className="col-12 text-center">
                <h4 className="main_heading text_theme1 wow fadeInUp">Don't Just Take Our Word for It</h4>
                <h6 className="main_heading fs_24 wow fadeInDown">See This Transformational Credit Repair Journey</h6>
              </div>
              <div className="col-lg-5 wow fadeInLeft">
                <div className="proof_box">
                  <div className="proof_img">
                    <OptimizedImage 
                      src="/front-asset/images/proofS1E1.webp"
                      alt="Credit Score Proof 1"
                      width={300}
                      height={200}
                    />
                    <OptimizedImage 
                      src="/front-asset/images/proofS1E2.webp"
                      alt="Credit Score Proof 2"
                      width={300}
                      height={200}
                    />
                  </div>
                  <div className="proof_text">
                    <h6 className="text_theme1 fs_18 fw_700">576 Points Credit Score Increase!</h6>
                    <p className="para2">Consider the case of Jordan, who approached us in a state of despair. Jordan was burdened with a default from a major bank that made applying for a mortgage an impossible dream.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-5 wow fadeInRight">
                <div className="proof_box">
                  <div className="proof_img">
                    <OptimizedImage 
                      src="/front-asset/images/proofS2E1.webp"
                      alt="Credit Score Proof 3"
                      width={300}
                      height={200}
                    />
                    <OptimizedImage 
                      src="/front-asset/images/proofS2E2.webp"
                      alt="Credit Score Proof 4"
                      width={300}
                      height={200}
                    />
                  </div>
                  <div className="proof_text">
                    <h6 className="text_theme1 fs_18 fw_700">Incredible Credit Score Jump of 369 Points!</h6>
                    <p className="para2">James found himself in a tight spot over a relatively minor default – just a few hundred dollars. It might seem insignificant, but to most reputable lenders, the size of the default hardly matters.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </LazyLoadComponent>
    </div>
  );
};

export default Home; 