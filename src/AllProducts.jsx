import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
import {
  Autoplay,
  EffectCoverflow,
  Navigation,
  Pagination,
} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css';
import './AllProducts.css';

const categories = [
  { name: 'Fruits & Vegetables', src: '/media/fruits and vegetiables2.jpeg', bgColor: '#eff6ff' },
  { name: 'Groceries', src: '/media/cookingesstentials2.jpeg', bgColor: '#f3e8ff' },
  { name: 'Bread & Bakery', src: '/media/bakery and bread2.jpeg', bgColor: '#dcfce7' },
  { name: 'Household Items', src: '/media/house hold items2.jpeg', bgColor: '#ffe4e6' },
  { name: 'Dairy & Eggs', src: '/media/egg and diary products.jpeg', bgColor: '#fef3c7' },
  { name: 'Soft Drinks & Juices', src: '/media/softdrinks2.jpeg', bgColor: '#e8f5e9' },
  { name: 'Snacks & Chocolates', src: '/media/snaksand chocalates2.jpeg', bgColor: '#fce4ec' },
  { name: 'Rice & Flour', src: '/media/rice and flower2.jpeg', bgColor: '#dcfce7' },
  { name: 'Personal Care', src: '/media/personalcare2.jpeg', bgColor: '#e0f2fe' },
  { name: 'Stationery', src: '/media/satationary2.jpeg', bgColor: '#fff8e1' },
  { name: 'Electronics', src: '/media/eletronics 2.jpeg', bgColor: '#f3e8ff' },
  { name: 'Toys', src: '/media/toys 2.jpeg', bgColor: '#dcfce7' }
];

const pastelColors = [
  '#eff6ff', '#e0f2fe', '#f3e8ff', '#ffe4e6', 
  '#fef3c7', '#dcfce7', '#fce4ec', '#fff8e1', '#e8f5e9'
];

const AllProducts = () => {


  return (
    <div className="products-page-wrapper">
      <div className="products-page-banner">
        <div className="products-page-header">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Our Products
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Explore our wide range of fresh and high-quality products.
          </motion.p>
        </div>
      </div>
      <div className="products-page-container">
        <Carousel_001 images={categories} showPagination loop showNavigation />
      </div>
    </div>
  );
};

const Carousel_001 = ({
  images,
  showPagination = false,
  showNavigation = false,
  loop = true,
  autoplay = true,
  spaceBetween = 40,
  onCategoryClick
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        delay: 0.2,
      }}
      className="carousel-container"
    >
      <Swiper
        spaceBetween={spaceBetween}
        autoplay={
          autoplay
            ? {
                delay: 2500,
                disableOnInteraction: false,
              }
            : false
        }
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        loop={loop}
        slidesPerView={2.43}
        breakpoints={{
          320: { slidesPerView: 1.2, spaceBetween: 20 },
          768: { slidesPerView: 2, spaceBetween: 30 },
          1024: { slidesPerView: 2.43, spaceBetween: 40 },
        }}
        coverflowEffect={{
          rotate: 0,
          slideShadows: false,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={
          showPagination
            ? {
                clickable: true,
              }
            : false
        }
        navigation={
          showNavigation
            ? {
                nextEl: '.carousel-next',
                prevEl: '.carousel-prev',
              }
            : false
        }
        className="Carousal_001"
        modules={[EffectCoverflow, Autoplay, Pagination, Navigation]}
      >
        {images.map((image, index) => (
          <SwiperSlide 
            key={index} 
            className="carousel-slide" 
            style={{ backgroundColor: 'transparent', cursor: 'pointer' }}
            onClick={() => onCategoryClick && onCategoryClick(image.name)}
          >
            <img
              src={image.src}
              alt={image.name}
              style={{ pointerEvents: 'none' }}
            />
          </SwiperSlide>
        ))}
        {showNavigation && (
          <>
            <div className="carousel-nav-btn carousel-prev">
              <ChevronLeftIcon />
            </div>
            <div className="carousel-nav-btn carousel-next">
              <ChevronRightIcon />
            </div>
          </>
        )}
      </Swiper>
    </motion.div>
  );
};

export default AllProducts;
