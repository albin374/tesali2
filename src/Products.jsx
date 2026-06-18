import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './Products.css';

const categories = [
  { name: 'Fresh Fruits', img: '/media/img_fruits.png', bgColor: '#eff6ff' },
  { name: 'Vegetables', img: '/media/img_vegetables.png', bgColor: '#e0f2fe' },
  { name: 'Grocery', img: '/media/img_oil.png', bgColor: '#f3e8ff' },
  { name: 'Household Items', img: '/media/img_dairy.png', bgColor: '#ffe4e6' },
  { name: 'Dairy Products', img: '/media/img_dairy.png', bgColor: '#fef3c7' },
  { name: 'Bread', img: '/media/img_bread.png', bgColor: '#dcfce7' },
  { name: 'Bakery', img: '/media/img_bread.png', bgColor: '#e0f2fe' },
  { name: 'Snacks', img: '/media/img_snacks.png', bgColor: '#fce4ec' },
  { name: 'Chocolates', img: '/media/img_snacks.png', bgColor: '#fff8e1' },
  { name: 'Soft Drinks', img: '/media/img_drinks.png', bgColor: '#e8f5e9' },
  { name: 'Juices', img: '/media/img_drinks.png', bgColor: '#eff6ff' },
  { name: 'Frozen Foods', img: '/media/img_vegetables.png', bgColor: '#f3e8ff' },
  { name: 'Tea', img: '/media/img_drinks.png', bgColor: '#ffe4e6' },
  { name: 'Coffee', img: '/media/img_drinks.png', bgColor: '#fef3c7' },
  { name: 'Rice, Flour', img: '/media/img_rice.png', bgColor: '#dcfce7' },
  { name: 'Cooking Essentials', img: '/media/img_oil.png', bgColor: '#e0f2fe' }
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
            <motion.div variants={itemVariants} className="category-card" key={index} style={{ backgroundColor: cat.bgColor }}>
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
