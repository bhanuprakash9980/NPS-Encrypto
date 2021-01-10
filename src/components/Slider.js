import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {
  Navigation,
  Pagination,
  Controller,
  Thumbs,
  Autoplay,
} from 'swiper';
import 'swiper/swiper-bundle.css';

SwiperCore.use([Navigation, Pagination, Controller, Thumbs, Autoplay]);

function Slider() {
  const slides = [];
  const url = [
    'https://res.cloudinary.com/dusrowd5k/image/upload/c_scale,h_500,w_1400/v1610277169/security_internet_network_encryption_privacy_padlock-100745987-large_ysovia.jpg',
    'https://res.cloudinary.com/dusrowd5k/image/upload/c_scale,h_500,w_1400/v1610278719/1519085_da60kx.jpg',
    'https://res.cloudinary.com/dusrowd5k/image/upload/c_scale,h_500,w_1400/v1610277257/gettyimages-913017342-100798518-large_hmcjgw.jpg',
    'https://res.cloudinary.com/dusrowd5k/image/upload/c_scale,h_500,w_1400/v1610277217/12_ibo6kt.jpg',
    'https://res.cloudinary.com/dusrowd5k/image/upload/c_scale,h_500,w_1400/v1610277193/2939771_s3drzc.jpg',
  ];
  for (let i = 0; i < 5; i += 1) {
    slides.push(
      <SwiperSlide key={`slide-${i}`} tag='li'>
        <img
          src={url[i]}
          style={{ listStyle: 'none' }}
          alt={`Slide ${i}`}
          className='responsive-img'
        />
        <div className='text-block flow-text '>
          <h4>Encrypto</h4>
          <p>A web application for encryption/decryption</p>
        </div>
      </SwiperSlide>
    );
  }

  return (
    <React.Fragment>
      <Swiper
        id='main'
        tag='section'
        wrapperTag='ul'
        navigation
        pagination
        spaceBetween={0}
        loop
        autoplay={{ delay: 2000 }}
        slidesPerView={1}
        className='center-align'
      >
        {slides}
      </Swiper>
    </React.Fragment>
  );
}

export default Slider;
