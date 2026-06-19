import React from 'react';
import { motion } from 'framer-motion';
import './InfoBanners.css';

const InfoBanners = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="info-banners-section">
      <motion.div 
        className="info-banners-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        
        {/* Banner 1 */}
        <motion.div variants={itemVariants} className="info-banner-card bg-light-blue">
          <div className="info-banner-img-box">
            <img src="/media/img_vegetables.png" alt="Fresh Products" />
          </div>
          <div className="info-banner-text">
            <h3>Everyday Fresh with Our Products</h3>
          </div>
        </motion.div>

        {/* Banner 2 */}
        <motion.div variants={itemVariants} className="info-banner-card bg-yellow-grad">
          <div className="info-banner-img-box">
            <img src="/media/floating_veggies_transparent.png" alt="Guaranteed Fresh" />
          </div>
          <div className="info-banner-text">
            <h3>100% guaranteed all Fresh items</h3>
          </div>
        </motion.div>

        {/* Banner 3 */}
        <motion.div variants={itemVariants} className="info-banner-card bg-green-grad">
          <div className="info-banner-img-box">
            <img src="/media/img_fruits-removebg-preview.png" alt="Quality Products" />
          </div>
          <div className="info-banner-text">
            <h3>Quality products at affordable prices</h3>
          </div>
        </motion.div>

      </motion.div>
    </section>
  );
};

export default InfoBanners;
