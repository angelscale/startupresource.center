import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';

import { styled, Box } from '@mui/material';

import ProductCard from './card-product.component';
import SectionHeader from './section-header.component';

const StyledSwiper = styled(Swiper)({
  overflow: 'hidden',
  padding: '2px !important',

  '& .swiper-slide': {
    height: 'auto',
  },

  '& .swiper-button-prev, & .swiper-button-next': {
    width: '42px',
    height: '42px',
    display: 'flex',
    borderRadius: '50%',
    background: '#3f51b5',
    boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',

    '&::after': {
      fontSize: '.875rem',
      color: '#ffffff',
    },

    '@media (max-width: 640px)': {
      display: 'none',
    },
  },
});

const ProductList = ({ productList, sx }) => {
  return (
    <Box sx={sx}>
      <SectionHeader title="Products" align="start" />
      <StyledSwiper
        modules={[Navigation]}
        slidesPerView={1}
        slidesPerGroup={1}
        spaceBetween={16}
        navigation={true}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          900: {
            slidesPerView: 3,
          },
          1280: {
            slidesPerView: 4,
          },
        }}
      >
        {productList.map((product, i) => (
          <SwiperSlide key={i}>
            <ProductCard data={product} />
          </SwiperSlide>
        ))}
      </StyledSwiper>
    </Box>
  );
};

export default ProductList;
