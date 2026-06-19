import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Eye, Plus } from 'lucide-react';
import './TrendingProducts.css';

const latestProducts = [
  {
    id: 1,
    name: 'Onion - Organically Grown',
    category: 'Vegetables',
    image: '/media/latest_onion_1781877712145.png',
    badge: null
  },
  {
    id: 2,
    name: 'Pomegranate - Small',
    category: 'Summer Fruits',
    image: '/media/latest_pomegranate_1781877732418.png',
    badge: 'SALE'
  },
  {
    id: 3,
    name: 'Fresh Sweet Cherries',
    category: 'Summer Fruits',
    image: '/media/latest_cherries_1781877755882.png',
    badge: null
  },
  {
    id: 4,
    name: 'Fruit - Fresh, Regular, 2 Pcs',
    category: 'Winter Fruits',
    image: '/media/latest_apple_1781877773407.png',
    badge: null
  }
];

const trendingProducts = [
  {
    id: 5,
    name: 'Rustic Crusty Baguette',
    category: 'Bakery',
    image: '/media/prod_bread_1781876697910.png',
    badge: 'FRESH'
  },
  {
    id: 6,
    name: 'Farm Fresh Milk',
    category: 'Dairy',
    image: '/media/prod_milk_1781876730462.png',
    badge: null
  },
  {
    id: 7,
    name: 'Fresh Squeezed Orange Juice',
    category: 'Beverages',
    image: '/media/prod_juice_1781876758786.png',
    badge: 'NEW'
  },
  {
    id: 8,
    name: 'Premium Dark Chocolate Bar',
    category: 'Snacks',
    image: '/media/prod_choco_1781876793761.png',
    badge: null
  }
];

const TrendingProducts = () => {
  const [activeTab, setActiveTab] = useState('Trending');
  
  const currentProducts = activeTab === 'Trending' ? trendingProducts : latestProducts;
  return (
    <section className="trending-section">
      <div className="trending-container">
        
        <div className="trending-header">
          <h2 className="trending-title">Trending Product</h2>
          <div className="trending-leaves">🌿</div>
          <div className="trending-tabs">
            <button 
              className={`tab-btn ${activeTab === 'Trending' ? 'active' : ''}`}
              onClick={() => setActiveTab('Trending')}
            >
              Trending
            </button>
            <button 
              className={`tab-btn ${activeTab === 'Latest' ? 'active' : ''}`}
              onClick={() => setActiveTab('Latest')}
            >
              Latest
            </button>
          </div>
        </div>

        <div className="trending-grid">
          <AnimatePresence mode="wait">
            {currentProducts.map((product) => (
              <motion.div 
                key={product.id} 
                className="trending-card"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                whileHover={{ y: -5 }}
              >
              {product.badge && <span className="card-badge">{product.badge}</span>}
              <button className="view-btn"><Eye size={18} /></button>
              
              <div className="card-img-wrapper">
                <img src={product.image} alt={product.name} />
              </div>
              
              <div className="card-info">
                <span className="card-category">{product.category}</span>
                <h4 className="card-name">{product.name}</h4>
                <div className="card-actions">
                  <a 
                    href="https://wa.me/971553641135" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="shop-now-btn"
                  >
                    Shop Now
                  </a>
                </div>
              </div>
            </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};

export default TrendingProducts;
