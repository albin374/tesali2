import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './Products.css';

const categories = [
  { name: 'Fruits & Vegetables', img: '/media/fruits and vegetiables2.jpeg', bgColor: '#eff6ff' },
  { name: 'Groceries', img: '/media/cookingesstentials2.jpeg', bgColor: '#f3e8ff' },
  { name: 'Bread & Bakery', img: '/media/bakery and bread2.jpeg', bgColor: '#dcfce7' },
  { name: 'Households', img: '/media/house hold items2.jpeg', bgColor: '#ffe4e6' },
  { name: 'Dairy & Eggs', img: '/media/egg and diary products.jpeg', bgColor: '#fef3c7' },
  { name: 'Soft Drinks & Juices', img: '/media/softdrinks2.jpeg', bgColor: '#e8f5e9' },
  { name: 'Snacks & Chocolates', img: '/media/snaksand chocalates2.jpeg', bgColor: '#fce4ec' },
  { name: 'Rice & Flour', img: '/media/rice and flower2.jpeg', bgColor: '#dcfce7' },
  { name: 'Personal Care', img: '/media/personalcare2.jpeg', bgColor: '#e0f2fe' },
  { name: 'Stationery', img: '/media/satationary2.jpeg', bgColor: '#fff8e1' },
  { name: 'Electronics', img: '/media/eletronics 2.jpeg', bgColor: '#f3e8ff' },
  { name: 'Toys', img: '/media/toys 2.jpeg', bgColor: '#dcfce7' }
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
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Products;
