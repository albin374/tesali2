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
              <span className="icon">🍎</span>
            </div>
            <div className="feature-text">
              <h4 className="feature-title">Fresh Products</h4>
              <p className="feature-desc">We guarantee the highest quality fresh fruits, vegetables, and daily essentials sourced directly for you.</p>
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
            <img src="/media/oraganic.png" alt="Organic Vegetables" className="organic-bg-img" />
          </div>
        </div>

        {/* Right Features */}
        <div className="features-column right-column">
          <div className="feature-item">
            <div className="feature-icon-circle">
              <span className="icon">🏷️</span>
            </div>
            <div className="feature-text">
              <h4 className="feature-title">Affordable Prices</h4>
              <p className="feature-desc">Get the best value for your money. We offer premium quality products at the most competitive prices.</p>
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
