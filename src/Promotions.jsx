import React from 'react';
import { motion } from 'framer-motion';
import './Promotions.css';

const Promotions = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section className="promotions-section">
      <div className="promotions-container">
        
        {/* Top Wide Banner */}
        <motion.div 
          className="promo-wide-banner"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="promo-wide-left">
            <img src="/media/promo_basket.png" alt="Fresh Produce Basket" className="promo-wide-img" />
          </div>
          <div className="promo-wide-right">
            <h2 className="promo-wide-title">Fresh Fruits & Vegetables.<br/>Delivered Daily.</h2>
            <p className="promo-wide-desc">We deliver everything you need straight to your door.</p>
            <button className="promo-shop-btn">
              Shop Fresh Produce <span className="arrow-circle">›</span>
            </button>
          </div>
        </motion.div>

        {/* 3 Cards Grid */}
        <motion.div 
          className="promo-cards-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Card 1 */}
          <motion.div variants={itemVariants} className="promo-card card-green">
            <h3 className="promo-card-title">THE FUTURE IS IN<br/>YOUR HANDS</h3>
            <div className="promo-blob-container">
              <img src="/media/promo_audio.png" alt="Tech Essentials" />
            </div>
            <div className="promo-card-footer">
              <p>Explore cutting-edge electronics and must-have tech essentials.</p>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div variants={itemVariants} className="promo-card card-red">
            <h3 className="promo-card-title">FREE DELIVERY<br/>ON ALL ORDERS</h3>
            <div className="promo-blob-container blob-alt-1">
              <img src="/media/homedelivery.png" alt="Free Delivery Bike" />
            </div>
            <div className="promo-card-footer">
              <p>Stock up on your weekly groceries and save more with zero delivery charges.</p>
            </div>
          </motion.div>

          {/* Card 3 */}
          <motion.div variants={itemVariants} className="promo-card card-yellow">
            <h3 className="promo-card-title">FRESH GROCERIES FOR YOUR<br/>FAMILY, WITHOUT HASSLE.</h3>
            <div className="promo-blob-container blob-alt-2">
              <img src="/media/promo_delivery.png" alt="Promo 3" />
            </div>
            <div className="promo-card-footer">
              <p>We deliver everything you need straight to your door.</p>
            </div>
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
};

export default Promotions;
