import React from 'react';
import { motion } from 'framer-motion';
import './JustForYou.css';

const products = [
  {
    id: 1,
    name: 'Fresh Grapes',
    img: '/media/grapes.png'
  },
  {
    id: 2,
    name: 'Wireless Headphones',
    img: '/media/sidephone .png'
  },
  {
    id: 3,
    name: 'Rubik\'s Cube',
    img: '/media/cube.png'
  },
  {
    id: 4,
    name: 'Potato',
    img: '/media/potato2.png'
  },
  {
    id: 5,
    name: 'Dark Chocolate',
    img: '/media/cho.png'
  }
];

const JustForYou = () => {
  return (
    <section className="just-for-you-section">
      <div className="jfy-container">
        
        <div className="jfy-header">
          <h2 className="jfy-title">Just for you</h2>
          <button className="jfy-show-all">
            Show All <span className="jfy-arrow">{'>'}</span>
          </button>
        </div>

        <div className="jfy-grid">
          {products.map((product) => (
            <motion.div 
              key={product.id} 
              className="jfy-card"
              whileHover={{ y: -5 }}
            >
              <div className="jfy-img-container">
                <img src={product.img} alt={product.name} />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default JustForYou;
