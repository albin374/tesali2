import React from 'react';
import './ContactForm.css';

const ContactForm = () => {
  return (
    <section className="contact-form-section">
      <div className="contact-form-container">
        
        {/* Left Column */}
        <div className="contact-info-column">
          <span className="get-in-touch-tag">GET IN TOUCH</span>
          <h2 className="contact-info-title">
            We're here to help you get the best groceries locally.
          </h2>
          <p className="contact-info-desc">
            Based in the heart of Ajman, Tasali Supermarket connects you with premium daily essentials and fresh products. Reach out to our dedicated team today.
          </p>
          
          <div className="contact-details-grid">
            
            <div className="contact-detail-item">
              <div className="detail-icon">📞</div>
              <div className="detail-text">
                <h4>Phone Number</h4>
                <p>+971 55 364 1135</p>
              </div>
            </div>

            <div className="contact-detail-item">
              <div className="detail-icon">💬</div>
              <div className="detail-text">
                <h4>WhatsApp</h4>
                <p>+971 55 364 1135</p>
              </div>
            </div>

            <div className="contact-detail-item">
              <div className="detail-icon">✉️</div>
              <div className="detail-text">
                <h4>Email Address</h4>
                <p>reach@tasali.ae</p>
              </div>
            </div>

            <div className="contact-detail-item">
              <div className="detail-icon">📍</div>
              <div className="detail-text">
                <h4>Office Address</h4>
                <p>Tasali Supermarket<br/>CG23+W4V - Al Jerf 2 - Ajman - United Arab Emirates</p>
              </div>
            </div>

          </div>
        </div>

        {/* Right Column: Form */}
        <div className="contact-form-box">
          <h3>Send us a message</h3>
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="form-row">
              <div className="form-group">
                <label>First Name</label>
                <input type="text" placeholder="Enter first name" />
              </div>
              <div className="form-group">
                <label>Last Name</label>
                <input type="text" placeholder="Enter last name" />
              </div>
            </div>

            <div className="form-group">
              <label>Email Address</label>
              <input type="email" placeholder="Enter email address" />
            </div>

            <div className="form-group">
              <label>Subject</label>
              <input type="text" placeholder="How can we help you?" />
            </div>

            <div className="form-group">
              <label>Message</label>
              <textarea rows="4" placeholder="Enter your message here..."></textarea>
            </div>

            <button type="submit" className="submit-btn">Send Message ↗</button>
          </form>
        </div>

      </div>
    </section>
  );
};

export default ContactForm;
