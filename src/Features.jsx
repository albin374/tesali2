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
              <p className="feature-desc">Passage Of Lorem Ipsum, You Need To Be Amet Embarrassing.</p>
            </div>
          </div>
          <div className="feature-item">
            <div className="feature-icon-circle">
              <span className="icon">🚚</span>
            </div>
            <div className="feature-text">
              <h4 className="feature-title">Free Worldwide Shipping</h4>
              <p className="feature-desc">Passage Of Lorem Ipsum, You Need To Be Amet Embarrassing.</p>
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
              <p className="feature-desc">Passage Of Lorem Ipsum, You Need To Be Amet Embarrassing.</p>
            </div>
          </div>
          <div className="feature-item">
            <div className="feature-icon-circle">
              <span className="icon">🎁</span>
            </div>
            <div className="feature-text">
              <h4 className="feature-title">Win $100 To Shop</h4>
              <p className="feature-desc">Passage Of Lorem Ipsum, You Need To Be Amet Embarrassing.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Features;
