import React from 'react';
import { motion } from 'framer-motion';
import './ContactUs.css';
import ContactForm from './ContactForm';

const ContactUs = () => {
  return (
    <>
    <section className="contact-banner-section">
      <div className="contact-banner-container">
        
        {/* Left Column */}
        <motion.div 
          className="contact-text-column"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="contact-title text-green">
            For Faster<br />
            <span className="text-orange">Delivery</span><br />
            <span className="text-green-bold">Contact Us.</span>
          </h1>
        </motion.div>

        {/* Right Column */}
        <motion.div 
          className="contact-image-column"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img src="/media/removed contact us.png" alt="Delivery Person" className="contact-main-img" />
        </motion.div>

      </div>
    </section>
    <ContactForm />
    
    <section className="contact-map-section">
      <div className="contact-map-container">
        <iframe 
          src="https://maps.google.com/maps?q=Tasali+Supermarket+Al+Jurf+2+Ajman&t=&z=15&ie=UTF8&iwloc=&output=embed" 
          width="100%" 
          height="450" 
          style={{ border: 0 }} 
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="Tasali Supermarket Location"
        ></iframe>
      </div>
    </section>
    </>
  );
};

export default ContactUs;
