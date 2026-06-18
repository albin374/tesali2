import React from 'react';
import { motion } from 'framer-motion';
import './AboutUs.css';

const AboutUs = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 1, ease: "easeOut" } }
  };

  return (
    <>
      <section className="about-showcase-section">
        <div className="about-showcase-container">
          
          {/* Left Column: Image */}
          <motion.div 
            className="about-image-column"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={imageVariants}
          >
            <img src="/media/floating_veggies.png" alt="Fresh Floating Vegetables" className="floating-veggies-img" />
          </motion.div>

          {/* Right Column: Text Content */}
          <motion.div 
            className="about-text-column"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.span variants={itemVariants} className="showcase-tag">About Us</motion.span>
            <motion.h2 variants={itemVariants} className="showcase-title">
              About Tasali Supermarket
            </motion.h2>
            <motion.p variants={itemVariants} className="showcase-description">
              Tasali Supermarket is a neighborhood shopping destination located in Al Jurf, Ajman.
            </motion.p>
            <motion.p variants={itemVariants} className="showcase-description" style={{ marginTop: '-15px' }}>
              Formerly known as Abadi Al Madeena, we have transformed into Tasali with a renewed vision to provide better service, quality products, and affordable prices to our customers.
            </motion.p>
          </motion.div>

        </div>
      </section>

      {/* Promotional Grid Section */}
      <section className="about-promo-section">
        <div className="about-promo-container">
          <div className="promo-grid">
            
            {/* Left Tall Card */}
            <motion.div 
              className="promo-card promo-tall"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img src="/media/about1.png" alt="Healthy Foods" className="promo-bg" />
              <div className="promo-content text-right promo-content-center">
                <span className="promo-subtitle">We Supply 100% Fresh</span>
                <h3 className="promo-title">Fresh Healthy Foods</h3>
                <a href="/shop" className="promo-link">SHOP NOW</a>
              </div>
            </motion.div>

            {/* Right Column */}
            <div className="promo-right-col">
              <div className="promo-right-top">
                {/* Top Left Card */}
                <motion.div 
                  className="promo-card"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <img src="/media/aboutcard2.png" alt="Fresh Vegetable" className="promo-bg" />
                  <div className="promo-content text-right">
                    <span className="promo-subtitle">-30% Off</span>
                    <h3 className="promo-title">Full Fresh<br/>Vegetable</h3>
                    <a href="/shop" className="promo-link">SHOP NOW</a>
                  </div>
                </motion.div>

                {/* Top Right Card */}
                <motion.div 
                  className="promo-card"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <img src="/media/aboutcard3.png" alt="Organic Food" className="promo-bg" />
                  <div className="promo-content text-left promo-content-top">
                    <span className="promo-subtitle">-35% Off</span>
                    <h3 className="promo-title">100% Organic<br/>Food</h3>
                    <a href="/shop" className="promo-link">SHOP NOW</a>
                  </div>
                </motion.div>
              </div>

              {/* Bottom Wide Card */}
              <motion.div 
                className="promo-card promo-wide"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <img src="/media/aboutcard4.png" alt="Fruite Products" className="promo-bg" />
                <div className="promo-content text-left promo-content-center">
                  <span className="promo-subtitle">Daily Essentials</span>
                  <h3 className="promo-title">Sale 58% Off All<br/>Fruite Products</h3>
                  <a href="/shop" className="promo-link">SHOP NOW</a>
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="about-choose-section">
        <div className="about-choose-container">
          
          <motion.div 
            className="choose-image-column"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img src="/media/choose1.png" alt="Fresh Salad" className="choose-main-img" />
          </motion.div>

          <motion.div 
            className="choose-content"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2>Why Choose Tasali?</h2>
            
            <div className="choose-features-list">
              <div className="choose-feature-item">
                <div className="feature-icon-small">🍎</div>
                <h4>Fresh Fruits &amp; Vegetables</h4>
              </div>
              <div className="choose-feature-item">
                <div className="feature-icon-small">🛒</div>
                <h4>Daily Grocery Essentials</h4>
              </div>
              <div className="choose-feature-item">
                <div className="feature-icon-small">🧃</div>
                <h4>Snacks &amp; Beverages</h4>
              </div>
              <div className="choose-feature-item">
                <div className="feature-icon-small">🍞</div>
                <h4>Bakery &amp; Dairy Products</h4>
              </div>
              <div className="choose-feature-item">
                <div className="feature-icon-small">🚚</div>
                <h4>Fast &amp; Free Home Delivery</h4>
              </div>
            </div>
          </motion.div>

        </div>
      </section>
    </>
  );
};

export default AboutUs;
