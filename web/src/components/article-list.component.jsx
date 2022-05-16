import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';

import { styled, Box } from '@mui/material';

import ArticleCard from './card-article.component';
import SectionHeader from './section-header.component';

const StyledSwiper = styled(Swiper)({
  overflow: 'hidden',
  padding: '2px !important',

  '& .swiper-slide': {
    height: 'auto',

    '& > span': {
      height: '100% !important',
    },
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

const StyledArticleCard = styled(ArticleCard)(({ theme }) => ({
  height: '100%',
  borderRadius: theme.spacing(1),
  '& .card-blog__content': {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
}));

const ArticleList = ({ articleList, sx }) => {
  return (
    <Box sx={sx}>
      <SectionHeader title="Articles" align="start" />
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
        }}
      >
        {articleList.map((article, i) => (
          <SwiperSlide key={i}>
            <StyledArticleCard withShadow data={article} />
          </SwiperSlide>
        ))}
      </StyledSwiper>
    </Box>
  );
};

export default ArticleList;
