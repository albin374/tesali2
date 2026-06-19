import React from 'react';
import { motion } from 'framer-motion';
import './Banner.css';

const Banner = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.8,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 1.5, ease: [0.16, 1, 0.3, 1] }
    },
  };

  return (
    <div className="banner-wrapper">
      <section className="banner-section">
        {/* Background Image */}
        <picture>
          <source media="(max-width: 768px)" srcSet="/media/mobile banner2.png" />
          <img src="/media/black banner.png" alt="Tasali Banner" className="banner-image" />
        </picture>
        
        {/* Text Overlay inside the image */}
        <motion.div 
          className="banner-text-overlay"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.span variants={itemVariants} className="hero-tagline">
            Fresher. Affordable. Best
          </motion.span>
          
          <motion.h1 variants={itemVariants} className="hero-title">
            Fresh Groceries Delivered to Your Doorstep
          </motion.h1>
          
          <motion.p variants={itemVariants} className="hero-description">
            Your trusted neighborhood supermarket in Al Jurf, Ajman. Enjoy fresh products, affordable prices, and fast free home delivery.
          </motion.p>
        </motion.div>
      </section>
    </div>
  );
};

export default Banner;
