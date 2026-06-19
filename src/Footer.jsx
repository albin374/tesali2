import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        
        <div className="footer-top">
          <div className="footer-brand">
            <img src="/media/footer_logo-removebg-preview.png" alt="Tasali Supermarket" className="footer-logo-img" />
            <p className="footer-desc">
              Your trusted neighborhood supermarket in Al Jurf, Ajman. Enjoy fresh products, affordable prices, and fast free home delivery.
            </p>
          </div>
          
          <div className="footer-links-group">
            <h3 className="footer-heading">Quick Links</h3>
            <ul className="footer-list">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#products">Products</a></li>
              <li><a href="#contact">Contact Us</a></li>
            </ul>
          </div>
          
          <div className="footer-links-group">
            <h3 className="footer-heading">Categories</h3>
            <ul className="footer-list">
              <li><a href="#fresh">Fruits and Vegetables</a></li>
              <li><a href="#dairy">Dairy & Bakery</a></li>
              <li><a href="#snacks">Snacks & Beverages</a></li>
              <li><a href="#household">Household Items</a></li>
            </ul>
          </div>
          
          <div className="footer-links-group">
            <h3 className="footer-heading">Contact Us</h3>
            <ul className="footer-list contact-list">
              <li>📍 Al Jurf, Ajman, UAE</li>
              <li>📞 +971 55 364 1135</li>
              <li>✉️ reach@tasali.ae</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">&copy; {new Date().getFullYear()} Tasali Supermarket. All rights reserved.</p>
          
          <div className="footer-socials-detailed">
            <a href="https://fb.com/tasalimarket" className="social-block" aria-label="Facebook">
              <div className="social-icon facebook">
                <svg viewBox="0 0 24 24" fill="currentColor" height="20" width="20"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" /></svg>
              </div>
            </a>

            <a href="https://instagram.com/tasalisupermarket" className="social-block" aria-label="Instagram">
              <div className="social-icon instagram">
                <svg viewBox="0 0 24 24" fill="currentColor" height="20" width="20"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
              </div>
            </a>

            <a href="https://tiktok.com/tasalimarket.ae" className="social-block" aria-label="TikTok">
              <div className="social-icon tiktok">
                <svg viewBox="0 0 24 24" fill="currentColor" height="20" width="20"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg>
              </div>
            </a>
          </div>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;
