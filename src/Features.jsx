import React from 'react';
import './Features.css';

const Features = () => {
  return (
    <section className="features-section">
      <div className="features-container">
        
        {/* Left Features */}
        <div className="features-column left-column">
          <div className="feature-item">
            <div className="feature-icon-circle">
              <span className="icon">🎧</span>
            </div>
            <div className="feature-text">
              <h4 className="feature-title">24 X 7 Free Support</h4>
              <p className="feature-desc">We are always here to help! Reach out to our customer support team anytime for assistance with your orders.</p>
            </div>
          </div>
          <div className="feature-item">
            <div className="feature-icon-circle">
              <span className="icon">📱</span>
            </div>
            <div className="feature-text">
              <h4 className="feature-title">Easy WhatsApp Ordering</h4>
              <p className="feature-desc">Skip the hassle! Just send us your grocery list on WhatsApp and we'll deliver it fast.</p>
            </div>
          </div>
        </div>

        {/* Center Image */}
        <div className="features-center">
          <div className="organic-circle-wrapper">
            <img src="/media/floating_veggies.png" alt="Organic Vegetables" className="organic-bg-img" />
            <div className="organic-center-badge">
              <span className="organic-leaf">🌿</span>
              <h3>organic</h3>
            </div>
          </div>
        </div>

        {/* Right Features */}
        <div className="features-column right-column">
          <div className="feature-item">
            <div className="feature-icon-circle">
              <span className="icon">💲</span>
            </div>
            <div className="feature-text">
              <h4 className="feature-title">Money Back Guarantee</h4>
              <p className="feature-desc">Not satisfied with the quality? We offer a hassle-free money-back guarantee on all our fresh products.</p>
            </div>
          </div>
          <div className="feature-item">
            <div className="feature-icon-circle">
              <span className="icon">🚚</span>
            </div>
            <div className="feature-text">
              <h4 className="feature-title">Free Delivery</h4>
              <p className="feature-desc">Enjoy fast and reliable free home delivery right to your doorstep for all your daily grocery needs.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Features;
