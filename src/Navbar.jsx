import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const location = useLocation();
  const isProductsPage = location.pathname === '/products';

  return (
    <nav className={`navbar ${isProductsPage ? 'navbar-white-text' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-logo-container">
          <Link to="/" className="navbar-logo-link">
            <img src="/media/updated logo.png" alt="Tasali Supermarket" className="navbar-logo-img" />
          </Link>
        </div>
        
        <ul className="navbar-menu">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/products">Products</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
        </ul>
        
        <div className="navbar-spacer"></div>
      </div>
    </nav>
  );
};

export default Navbar;
