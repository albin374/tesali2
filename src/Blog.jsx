import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Blog.css';

const initialPosts = [
  {
    id: 1,
    date: '07',
    month: 'Jul',
    author: 'Winter Infotech',
    comments: 0,
    title: 'Mango Day at Tasali\nSupermarket!',
    excerpt: 'Sweet, juicy, and bursting with freshness - your favorite mangoes are waiting for you at Tasali! Visit us today and enjoy quality fruits at affordable prices',
    img: '/media/mango basket.png'
  },
  {
    id: 2,
    date: '07',
    month: 'Jul',
    author: 'Winter Infotech',
    comments: 0,
    title: 'Match Momentzz at Tasali Supermarket!',
    excerpt: 'Grab your favorite snacks and drinks for the perfect game-night combo. From chilled beverages to crunchy chips and sweet treats, we\'ve got everything you need delivered right to your doorstep.',
    img: '/media/proper.png'
  },
  {
    id: 3,
    date: '07',
    month: 'Jul',
    author: 'Winter Infotech',
    comments: 0,
    title: 'WEEKEND OFFER is here at Tasali Supermarket, Ajman!',
    excerpt: 'Stock up on your daily essentials and enjoy amazing savings on tea, rice, noodles, cleaning products, and more. Visit us this weekend and shop smart for your family.',
    img: '/media/about us bg.png'
  }
];

const Blog = () => {
  const [posts, setPosts] = useState(initialPosts);
  const [selectedImg, setSelectedImg] = useState(null);

  const handleNext = () => {
    setPosts((prev) => {
      const newPosts = [...prev];
      const first = newPosts.shift();
      newPosts.push(first);
      return newPosts;
    });
  };

  const handlePrev = () => {
    setPosts((prev) => {
      const newPosts = [...prev];
      const last = newPosts.pop();
      newPosts.unshift(last);
      return newPosts;
    });
  };

  return (
    <section className="blog-section">
      <div className="blog-container">
        
        <div className="blog-header">
          <h2 className="blog-title">Latest Blogs</h2>
        </div>

        <div className="blog-carousel-wrapper">
          <button className="carousel-nav-btn prev-btn" onClick={handlePrev}>‹</button>
          
          <div className="blog-grid">
            {posts.map((post) => (
              <motion.div 
                layout
                transition={{ duration: 0.5, type: "spring", stiffness: 200, damping: 20 }}
                className="blog-card" 
                key={post.id}
              >
                <div 
                  className="blog-img-wrapper" 
                  onClick={() => setSelectedImg(post.img)}
                  title="Click to view image"
                >
                  <motion.img 
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    src={post.img} 
                    alt={post.title} 
                    className="blog-img" 
                  />
                </div>
                
                <div className="blog-content-box">
                  <h3 className="blog-post-title">{post.title}</h3>
                  <p className="blog-post-excerpt">{post.excerpt}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <button className="carousel-nav-btn next-btn" onClick={handleNext}>›</button>
        </div>

      </div>

      <AnimatePresence>
        {selectedImg && (
          <motion.div 
            className="lightbox-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImg(null)}
          >
            <motion.img 
              src={selectedImg} 
              alt="Expanded" 
              className="lightbox-img"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()} // prevent closing when clicking image itself
            />
            <button className="lightbox-close" onClick={() => setSelectedImg(null)}>✕</button>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
};

export default Blog;
