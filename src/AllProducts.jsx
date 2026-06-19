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
  { name: 'Households', src: '/media/house hold items2.jpeg', bgColor: '#ffe4e6' },
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
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const localFruitsAndVeg = [
    { name: "Apple", url: "/media/fruits and vegitables/apple.jpg" },
    { name: "Banana", url: "/media/fruits and vegitables/banana.png" },
    { name: "Orange", url: "/media/fruits and vegitables/orange.png" },
    { name: "Mango", url: "/media/fruits and vegitables/mango.jpg" },
    { name: "Pineapple", url: "/media/fruits and vegitables/Pineapple.webp" },
    { name: "Grapes", url: "/media/fruits and vegitables/Grapes.jpg" },
    { name: "Watermelon", url: "/media/fruits and vegitables/Watermelon.jpg" },
    { name: "Papaya", url: "/media/fruits and vegitables/Papaya.webp" },
    { name: "Guava", url: "/media/fruits and vegitables/Guava.png" },
    { name: "Pomegranate", url: "/media/fruits and vegitables/Pomegranate.avif" },
    { name: "Potato", url: "/media/fruits and vegitables/potato.png" },
    { name: "Tomato", url: "/media/fruits and vegitables/tomato.png" },
    { name: "Onion", url: "/media/fruits and vegitables/onion.png" },
    { name: "Carrot", url: "/media/fruits and vegitables/carrot.png" },
    { name: "Cabbage", url: "/media/fruits and vegitables/cabbage.png" },
    { name: "Cauliflower", url: "/media/fruits and vegitables/cauliflower.png" },
    { name: "Broccoli", url: "/media/fruits and vegitables/broccoli.png" },
    { name: "Spinach", url: "/media/fruits and vegitables/spinach.png" },
    { name: "Cucumber", url: "/media/fruits and vegitables/cucumber.png" },
    { name: "Beetroot", url: "/media/fruits and vegitables/beetroot.png" }
  ];

  const groceryNames = ["olive oil", "pasta", "spices", "canned beans", "ketchup", "salt", "sugar", "honey jar", "vinegar", "peanut butter", "cereal", "oats", "soy sauce", "mayonnaise", "mustard", "jam", "chickpeas", "lentils", "noodles", "tea bags"];
  const dairyNames = ["milk glass", "cheese block", "butter", "yogurt", "eggs", "sour cream", "cream cheese", "whipped cream", "mozzarella", "cheddar", "parmesan", "feta cheese", "cottage cheese", "ice cream", "ghee", "paneer", "buttermilk", "condensed milk", "margarine", "brie"];
  const bakeryNames = ["bread loaf", "croissant", "baguette", "bagel", "muffin", "cupcake", "donut", "pretzel", "pita bread", "burger bun", "ciabatta", "sourdough", "cinnamon roll", "macaron", "cookie", "brownie", "tart", "pie", "waffle", "pancakes"];
  const snackNames = ["potato chips", "popcorn", "chocolate bar", "candy", "cookies", "crackers", "nachos", "trail mix", "granola bar", "gummy bears", "jelly beans", "marshmallow", "mixed nuts", "almonds", "cashews", "pistachios", "walnuts", "peanuts", "sunflower seeds", "biscuit"];
  const drinkNames = ["water bottle", "orange juice", "apple juice", "cola", "soda", "lemonade", "iced tea", "coffee cup", "espresso", "latte", "cappuccino", "hot chocolate", "smoothie", "milkshake", "energy drink", "sports drink", "green tea", "black tea", "sparkling water", "coconut water"];
  const riceNames = ["rice bowl", "flour sack", "basmati rice", "brown rice", "jasmine rice", "wheat flour", "corn flour", "rice flour", "almond flour", "coconut flour", "quinoa", "couscous", "barley", "millet", "buckwheat", "bulgur", "semolina", "tapioca", "rye flour", "cornmeal"];
  const frozenNames = ["frozen pizza", "frozen peas", "frozen berries", "fish sticks", "frozen french fries", "frozen dumplings", "frozen waffle", "frozen dinner"];
  const electronicsNames = ["headphones", "smartphone", "laptop", "smartwatch", "camera", "tablet", "speaker", "television", "mouse", "keyboard", "charger", "power bank", "earbuds", "drone", "monitor"];
  const toysNames = ["lego", "action figure", "teddy bear", "doll", "puzzle", "toy car", "board game", "building blocks", "toy train", "yoyo", "rubiks cube", "stuffed animal"];

  const handleCategoryClick = async (categoryName) => {
    setSelectedCategory(categoryName);
    
    let itemsToFetch = [];
    if (categoryName === 'Fruits & Vegetables') {
      setProducts(localFruitsAndVeg);
      setTimeout(() => {
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
      }, 100);
      return;
    }
    else if (categoryName === 'Groceries') itemsToFetch = groceryNames;
    else if (categoryName === 'Dairy & Eggs') itemsToFetch = dairyNames;
    else if (categoryName === 'Bread & Bakery') itemsToFetch = bakeryNames;
    else if (categoryName === 'Snacks & Chocolates') itemsToFetch = snackNames;
    else if (categoryName === 'Soft Drinks & Juices') itemsToFetch = drinkNames;
    else if (categoryName === 'Rice & Flour') itemsToFetch = riceNames;
    else if (categoryName === 'Frozen Foods') itemsToFetch = frozenNames;
    else if (categoryName === 'Electronics') itemsToFetch = electronicsNames;
    else if (categoryName === 'Toys') itemsToFetch = toysNames;

    if (itemsToFetch.length > 0) {
      setLoading(true);
      try {
        const promises = itemsToFetch.map(async (item) => {
          // Appending 'isolated' helps find images with plain/white backgrounds
          const query = encodeURIComponent(`${item} isolated`);
          const response = await fetch(`https://api.unsplash.com/search/photos?query=${query}&per_page=1&client_id=i-xaJ8bNvDLYnenOeuadikkbxfkHztO-fPtPNI9IRQU`);
          const data = await response.json();
          return {
            name: item,
            url: data.results[0]?.urls?.regular || ''
          };
        });
        
        const results = await Promise.all(promises);
        setProducts(results.filter(v => v.url)); 
      } catch (error) {
        console.error(`Error fetching ${categoryName}:`, error);
      }
      setLoading(false);
      
      setTimeout(() => {
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
      }, 100);
    } else {
      setProducts([]); // Clear items if category is not mapped yet
    }
  };

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
            Explore our wide range of fresh and high-quality products. Click on a category!
          </motion.p>
        </div>
      </div>
      <div className="products-page-container">
        <Carousel_001 images={categories} showPagination loop showNavigation onCategoryClick={handleCategoryClick} />
      </div>

      {/* Dynamic Products Grid Section */}
      {selectedCategory && (
        <div className="dynamic-products-section" style={{ padding: '80px 5%', maxWidth: '1400px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '3rem', textAlign: 'center', marginBottom: '50px', fontFamily: 'Outfit, sans-serif', color: '#ffffff' }}>
            {selectedCategory} Collection
          </h2>
          
          {loading ? (
            <div style={{ textAlign: 'center', fontSize: '1.2rem', color: '#666', fontFamily: 'Inter, sans-serif' }}>
              Loading items from Unsplash...
            </div>
          ) : products.length === 0 ? (
            <div style={{ textAlign: 'center', fontSize: '1.2rem', color: '#ff4d4f', fontFamily: 'Inter, sans-serif', padding: '40px' }}>
              We've hit the Unsplash API rate limit (50 requests/hour). Please try again later or provide a new API key!
            </div>
          ) : (
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
              gap: '25px'
            }}>
              {products.map((item, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: (i % 10) * 0.05, duration: 0.4 }}
                  style={{
                    backgroundColor: 'transparent',
                    padding: '30px 20px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '250px',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-10px)';
                    e.currentTarget.style.boxShadow = '0 10px 20px rgba(0,0,0,0.08)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <div style={{
                    flex: 1,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '20px',
                    width: '100%'
                  }}>
                    <img 
                      src={item.url} 
                      alt={item.name} 
                      style={{ 
                        maxWidth: '90%', 
                        maxHeight: '130px', 
                        objectFit: 'contain'
                      }} 
                    />
                  </div>
                  <h3 style={{ 
                    margin: 0, 
                    textTransform: 'capitalize', 
                    fontSize: '1.2rem', 
                    fontFamily: 'Inter, sans-serif', 
                    fontWeight: 700,
                    color: '#ffffff' 
                  }}>
                    {item.name}
                  </h3>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      )}
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
            <h3 style={{ pointerEvents: 'none' }}>{image.name}</h3>
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
