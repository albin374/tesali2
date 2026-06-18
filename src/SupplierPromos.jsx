import React from 'react';
import './SupplierPromos.css';

const SupplierPromos = () => {
  return (
    <section className="supplier-promos-section">
      <div className="supplier-promos-container">
        
        {/* Card 1 */}
        <div className="supplier-card card-blue">
          <div className="supplier-img-box">
            <img src="/media/card1.png" alt="Vegetables" className="supplier-img" />
          </div>
          <div className="supplier-text-box">
            <h3>Everyday Fresh with Our Products</h3>
            <a href="#">Go To Supplier</a>
          </div>
        </div>

        {/* Card 2 */}
        <div className="supplier-card card-yellow">
          <div className="supplier-img-box">
            <img src="/media/card2.png" alt="Dairy" className="supplier-img" />
          </div>
          <div className="supplier-text-box">
            <h3>100% guaranteed all Fresh items</h3>
            <a href="#">Go To Supplier</a>
          </div>
        </div>

        {/* Card 3 */}
        <div className="supplier-card card-green">
          <div className="supplier-img-box">
            <img src="/media/img_fruits.png" alt="Bag" className="supplier-img" />
          </div>
          <div className="supplier-text-box">
            <h3>Enjoy 15% OFF for all vegetable and fruit</h3>
            <a href="#">Go To Supplier</a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default SupplierPromos;
