import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './Products.css';

const categories = [
  { name: 'Fruits & Vegetables', img: '/media/fruits and vegitables .jpeg', bgColor: '#eff6ff' },
  { name: 'Groceries', img: '/media/groceries.jpeg', bgColor: '#f3e8ff' },
  { name: 'Bread & Bakery', img: '/media/bread and breakery.jpeg', bgColor: '#dcfce7' },
  { name: 'Households', img: '/media/House Holds.jpeg', bgColor: '#ffe4e6' },
  { name: 'Dairy & Eggs', img: '/media/dairy .jpeg', bgColor: '#fef3c7' },
  { name: 'Soft Drinks & Juices', img: '/media/soft drinks.jpeg', bgColor: '#e8f5e9' },
  { name: 'Snacks & Chocolates', img: '/media/snaks and chocaltes.jpeg', bgColor: '#fce4ec' },
  { name: 'Rice & Flour', img: '/media/rice and flower.jpeg', bgColor: '#dcfce7' },
  { name: 'Personal Care', img: '/media/personsal care.jpeg', bgColor: '#e0f2fe' },
  { name: 'Stationary', img: '/media/stationary.jpeg', bgColor: '#fff8e1' },
  { name: 'Frozen Foods', img: '/media/frozenFoods.png', bgColor: '#eff6ff' }
];

const Products = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <section className="categories-section" id="products">
      <div className="categories-container">
        
        <div className="categories-header">
          <motion.h2 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="categories-title"
          >
            Popular Categories
          </motion.h2>
          
          <Link to="/products" style={{ textDecoration: 'none' }}>
            <motion.button 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="show-all-btn"
            >
              Show All <span className="arrow-circle">{'>'}</span>
            </motion.button>
          </Link>
        </div>

        <motion.div 
          className="categories-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {categories.map((cat, index) => (
            <motion.div 
              variants={itemVariants} 
              className="category-card" 
              key={index}
              whileHover={{ scale: 1.1, y: -8 }}
              whileTap={{ scale: 0.85, rotate: -5, filter: 'brightness(1.3)', transition: { type: "spring", stiffness: 400, damping: 10 } }}
            >
              <div className="category-img-wrapper">
                <img src={cat.img} alt={cat.name} className="category-img" />
              </div>
              <div className="category-info">
                <h3 className="category-name">{cat.name}</h3>
                <p className="category-count">{cat.count}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Products;
