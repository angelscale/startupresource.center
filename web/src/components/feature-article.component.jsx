import React from 'react';
import { Link } from 'gatsby';
import { styled, Box, Typography } from '@mui/material';
import { getImage } from 'gatsby-plugin-image';
import { convertToBgImage } from 'gbimage-bridge';
import BackgroundImage from 'gatsby-background-image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper';
import { LearnMoreLink } from 'components';

const FeatureArticleContainer = styled(Box)({
  width: '100%',
  maxHeight: '70vh',
  position: 'relative',
});

const StyledBackgroundImage = styled(BackgroundImage)({
  width: '100%',
  aspectRatio: '16/9',
});

const FeatureContent = styled(Box)(({ theme }) => ({
  width: '24rem',
  padding: theme.spacing(2),
  position: 'absolute',
  right: '10px',
  bottom: '10px',
  background: 'white',
  borderRadius: theme.spacing(0.5),
}));

const FeatureTitle = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.pxToRem(18),
  lineHeight: 1.2,
}));

const FeatureText = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.pxToRem(12),
  lineHeight: 1.6,
  marginBlock: theme.spacing(1),
}));

const FeatureButton = styled('span')(({ theme }) => ({
  fontSize: theme.typography.pxToRem(14),
  lineHeight: 1.2,
  color: theme.palette.primary,
  cursor: 'pointer',
}));

const StyledSwiper = styled(Swiper)({
  borderRadius: '8px',
  overflow: 'hidden',
});

const FeatureArticle = ({ items }) => {
  if (!items) {
    return null;
  }

  return (
    <StyledSwiper
      modules={[Navigation, Pagination, Autoplay]}
      slidesPerView="auto"
      navigation={false}
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000 }}
    >
      {items.map((item, i) => (
        <SwiperSlide key={i}>
          <FeatureArticleContainer>
            <StyledBackgroundImage
              {...convertToBgImage(getImage(item.headerImage))}
            />
            <FeatureContent>
              <FeatureTitle>{item.name}</FeatureTitle>
              <FeatureText>{item.excerpt}</FeatureText>
              <LearnMoreLink
                title="Read More"
                to={`/${item.category}/${item.subcategory}/${item.fields.slug}`}
                typographyProps={{ variant: 'h6' }}
              />
            </FeatureContent>
          </FeatureArticleContainer>
        </SwiperSlide>
      ))}
    </StyledSwiper>
  );
};

export default FeatureArticle;
