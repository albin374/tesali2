import React from 'react';
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
  { name: 'Fresh Fruits', src: '/media/img_fruits.png', bgColor: '#eff6ff' },
  { name: 'Vegetables', src: '/media/img_vegetables.png', bgColor: '#e0f2fe' },
  { name: 'Grocery', src: '/media/img_oil.png', bgColor: '#f3e8ff' },
  { name: 'Dairy Products', src: '/media/img_dairy.png', bgColor: '#fef3c7' },
  { name: 'Bread & Bakery', src: '/media/img_bread.png', bgColor: '#dcfce7' },
  { name: 'Snacks', src: '/media/img_snacks.png', bgColor: '#fce4ec' },
  { name: 'Drinks', src: '/media/img_drinks.png', bgColor: '#e8f5e9' },
  { name: 'Rice & Flour', src: '/media/img_rice.png', bgColor: '#dcfce7' },
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
          <SwiperSlide key={index} className="carousel-slide" style={{ backgroundColor: image.bgColor }}>
            <img
              src={image.src}
              alt={image.name}
            />
            <h3>{image.name}</h3>
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
