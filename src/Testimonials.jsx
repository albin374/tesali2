import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      text: "Very good service. They are selling good quality products with affordable prices. Fast and free home delivery is really useful. Highly recommended from the area.",
      name: "Sheriff Blathur",
      role: "Local Guide",
      img: "/media/about us bg.png" // placeholder
    },
    {
      id: 2,
      text: "Very good quality products with affordable prices. Great services and customer support. Faster and free delivery makes this different.",
      name: "Sonam Shetty",
      role: "Customer",
      img: "/media/about us bg.png" // placeholder
    },
    {
      id: 3,
      text: "Amazing and Friendly Staff, clean and good environment, all essential grocery items and households available in affordable prices 👍",
      name: "Meraal Malik",
      role: "Local Guide",
      img: "/media/about us bg.png" // placeholder
    }
  ];

  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <div className="testimonial-card" key={testimonial.id}>
              <div className="quote-icon">
                <span className="quote-mark">“</span>
              </div>
              <p className="testimonial-text">{testimonial.text}</p>
              <div className="testimonial-author">
                <div className="author-img-wrapper">
                  <img src={testimonial.img} alt={testimonial.name} className="author-img" />
                </div>
                <div className="author-info">
                  <h4 className="author-name">{testimonial.name}</h4>
                  <span className="author-role">{testimonial.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
