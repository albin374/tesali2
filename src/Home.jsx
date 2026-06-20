import React from 'react';
import Banner from './Banner';
import Features from './Features';
import TrendingProducts from './TrendingProducts';
import Products from './Products';
import SupplierPromos from './SupplierPromos';
import Promotions from './Promotions';
import Blog from './Blog';
import JustForYou from './JustForYou';

const Home = () => {
  return (
    <>
      <Banner />
      <Features />
      <Products />
      <SupplierPromos />
      <TrendingProducts />
      <Promotions />
      <Blog />
      <JustForYou />
    </>
  );
};

export default Home;
