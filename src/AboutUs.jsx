import React from 'react';
import { motion } from 'framer-motion';
import { Target, Rocket, Eye } from 'lucide-react';
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
      {/* Top Banner Section */}
      <section className="about-page-banner">
        <div className="about-banner-container">
          <div className="about-page-header">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              About Us
            </motion.h2>
          </div>
        </div>
      </section>

      <section className="about-showcase-section">
        <div className="about-showcase-container">
          
          {/* Left Column: Text Content */}
          <motion.div 
            className="about-text-column"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.p variants={itemVariants} className="showcase-description" style={{ fontSize: '1.05rem', lineHeight: '1.8' }}>
              Tasali Supermarket is your trusted neighborhood shopping destination in Al Jurf, Ajman. Formerly known as Abadi Al Madeena, we have rebranded as Tasali with a renewed commitment to delivering exceptional service, quality products, and affordable prices for every customer. Our goal is to make everyday shopping convenient, enjoyable, and value-driven for families and individuals alike.
            </motion.p>
            <motion.p variants={itemVariants} className="showcase-description" style={{ fontSize: '1.05rem', lineHeight: '1.8' }}>
              At Tasali, we offer a wide range of products under one roof, including fresh Fruits & Vegetables, Cooking Essentials, Bakery & Breads, Household Items, Egg & Dairy Products, Soft Drinks & Juices, Snacks & Chocolates, Rice & Flour, Personal Care Products, Stationery, Electronics, and Toys. We carefully select our products to ensure freshness, quality, and great value, making Tasali the perfect place for all your daily shopping needs.
            </motion.p>
            <motion.p variants={itemVariants} className="showcase-description" style={{ fontSize: '1.05rem', lineHeight: '1.8' }}>
              Whether you're shopping for groceries, household necessities, or specialty items, Tasali Supermarket is dedicated to providing a comfortable shopping experience with friendly service and a diverse selection of products for the entire family.
            </motion.p>
          </motion.div>

          {/* Right Column: Image */}
          <motion.div 
            className="about-image-column"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={imageVariants}
          >
            <img src="/media/supermarket imge.jpeg" alt="About Tasali Supermarket" className="floating-veggies-img" />
          </motion.div>

        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="about-mission-section">
        <div className="about-mission-container">
          <div className="mission-grid">
            
            <motion.div 
              className="mission-card" 
              initial={{opacity:0, y:40}} 
              whileInView={{opacity:1, y:0}} 
              viewport={{once:true}}
              whileHover={{ y: -10, boxShadow: '0px 15px 30px rgba(0,255,0,0.2)' }}
              transition={{ duration: 0.4 }}
            >
              <div className="mission-icon-wrapper">
                <Target size={40} className="mission-icon" />
              </div>
              <div className="mission-content">
                <h3>Our Goal</h3>
                <p>To make everyday shopping fresher, more affordable, and more convenient.</p>
              </div>
            </motion.div>

            <motion.div 
              className="mission-card" 
              initial={{opacity:0, y:40}} 
              whileInView={{opacity:1, y:0}} 
              viewport={{once:true}} 
              transition={{ duration: 0.4, delay: 0.2 }}
              whileHover={{ y: -10, boxShadow: '0px 15px 30px rgba(0,255,0,0.2)' }}
            >
              <div className="mission-icon-wrapper">
                <Rocket size={40} className="mission-icon" />
              </div>
              <div className="mission-content">
                <h3>Our Mission</h3>
                <p>To provide quality products and excellent customer service while making grocery shopping easy and accessible for every family.</p>
              </div>
            </motion.div>

            <motion.div 
              className="mission-card" 
              initial={{opacity:0, y:40}} 
              whileInView={{opacity:1, y:0}} 
              viewport={{once:true}} 
              transition={{ duration: 0.4, delay: 0.4 }}
              whileHover={{ y: -10, boxShadow: '0px 15px 30px rgba(0,255,0,0.2)' }}
            >
              <div className="mission-icon-wrapper">
                <Eye size={40} className="mission-icon" />
              </div>
              <div className="mission-content">
                <h3>Our Vision</h3>
                <p>To become the most trusted neighborhood supermarket in Ajman through quality, affordability, and convenience.</p>
              </div>
            </motion.div>

          </div>
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
              <div className="promo-content text-right promo-content-bottom">
                <span className="promo-subtitle">We Supply 100% Fresh</span>
                <h3 className="promo-title">Fresh Healthy Foods</h3>
                <a href="/products" className="promo-link">SHOP NOW</a>
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
                    <h3 className="promo-title">Full Fresh<br/>Vegetable</h3>
                    <a href="/products" className="promo-link">SHOP NOW</a>
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
                    <h3 className="promo-title">100% Organic<br/>Food</h3>
                    <a href="/products" className="promo-link">SHOP NOW</a>
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
                <img src="/media/aboutcard4.png" alt="Fruit Products" className="promo-bg" />
                <div className="promo-content text-left promo-content-center">
                  <span className="promo-subtitle">Daily Essentials</span>
                  <h3 className="promo-title">All Fruit<br/>Products</h3>
                  <a href="/products" className="promo-link">SHOP NOW</a>
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
            <img src="/media/Vibrant salad in white bowl.png" alt="Fresh Salad" className="choose-main-img" />
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
