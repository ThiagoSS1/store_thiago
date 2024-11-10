import React from 'react';
import { Navigation} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'
import 'swiper/css/navigation'
import './styles.css'; 
import { FaRegHeart } from 'react-icons/fa';

const ProductSlider = ({ products }) => {
  return (
    <Swiper 
    className='swiper-container'
    modules={[Navigation]}
    spaceBetween={50} 
    slidesPerView={1} 
    pagination={{ clickable: true }}
    navigation={true} 
    >
      {products.map((product, index) => (
        <SwiperSlide key={index} style={{ background: '#333' }}>
          <div className="slide">
            <div className="left">
              <img src={product.largeImage} alt={product.name} />
              <div className="overlay">
                <button className="buy-button">R$ 299,50{product.price}</button>
                <button className="wishlist-button"><FaRegHeart  style={{ width: '16px', height: '16px'}}/></button>
              </div>
            </div>
            <div className="right">
              <div className="top">
                <img src={product.smallImage1} alt={product.name} />
              </div>
              <div className="bottom">
                <img src={product.smallImage2} alt={product.name} />
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ProductSlider;