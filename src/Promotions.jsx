import React from 'react';
import { motion } from 'framer-motion';
import './Promotions.css';
import Testimonials from './Testimonials';

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
            <img src="/media/freesh.png" alt="Fresh Fruits" className="promo-wide-img" />
          </div>
          <div className="promo-wide-right">
            <h2 className="promo-wide-title">Fresh Fruits & Vegetables.<br/>Delivered Daily.</h2>
            <p className="promo-wide-desc">We deliver everything you need straight to your door.</p>
          </div>
        </motion.div>

        <Testimonials />

      </div>
    </section>
  );
};

export default Promotions;
