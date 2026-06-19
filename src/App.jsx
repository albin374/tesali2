import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './Navbar'
import Home from './Home'
import AboutUs from './AboutUs'
import AllProducts from './AllProducts'
import ContactUs from './ContactUs'
import Footer from './Footer'
import WhatsAppFloat from './WhatsAppFloat'

function App() {
  return (
    <Router>
      <Navbar />
      <WhatsAppFloat />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/products" element={<AllProducts />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
