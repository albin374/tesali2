import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isProductsPage = location.pathname === '/products';

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className={`navbar ${isProductsPage ? 'navbar-white-text' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-logo-container">
          <Link to="/" className="navbar-logo-link">
            <img src="/media/updated logo.png" alt="Tasali Supermarket" className="navbar-logo-img" />
          </Link>
        </div>
        
        {/* Desktop Menu */}
        <ul className="navbar-menu">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/products">Products</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
        </ul>

        {/* Mobile Hamburger Icon */}
        <div className="navbar-hamburger" onClick={toggleMenu}>
          {isOpen ? <X size={28} color={isProductsPage ? '#ffffff' : '#333'} /> : <Menu size={28} color={isProductsPage ? '#ffffff' : '#333'} />}
        </div>
        
        <div className="navbar-spacer desktop-only"></div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="mobile-menu">
          <ul className="mobile-menu-links">
            <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
            <li><Link to="/about" onClick={toggleMenu}>About Us</Link></li>
            <li><Link to="/products" onClick={toggleMenu}>Products</Link></li>
            <li><Link to="/contact" onClick={toggleMenu}>Contact Us</Link></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
