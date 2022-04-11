import React from 'react';
import { Link } from 'gatsby';
import { getImage, GatsbyImage } from 'gatsby-plugin-image';
import { styled, Box, Typography, Hidden } from '@mui/material';
import { convertToBgImage } from 'gbimage-bridge';
import BackgroundImage from 'gatsby-background-image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper';
import { CardBlog, LearnMoreLink } from 'components';

const FeatureArticleContainer = styled(Box)({
  width: '100%',
  // maxHeight: '70vh',
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

const StyledSwiper = styled(Swiper)({
  borderRadius: '8px',
  overflow: 'hidden',
});

const StyledCardBlog = styled(CardBlog)(({ theme }) => ({
  height: '100%',
  borderRadius: theme.spacing(1),
  '& .card-blog__content': {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
}));

const BlogMedia = styled(GatsbyImage)(({ theme }) => ({
  width: '100%',
  height: '100%',
  [`& img`]: {
    objectFit: 'cover',
    borderRadius: theme.spacing(0, 0, 20, 0),
  },
}));

const BlogContent = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
}));

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
            <Hidden smDown>
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
            </Hidden>
            <Hidden smUp>
              <StyledCardBlog
                mediaContent={
                  <Link
                    to={`/${item.category}/${item.subcategory}/${item.fields.slug}`}
                  >
                    <BlogMedia
                      image={getImage(item.headerImage)}
                      alt={item.name}
                    />
                  </Link>
                }
                cardContent={
                  <BlogContent>
                    <Link
                      to={`/${item.category}/${item.subcategory}/${item.fields.slug}`}
                    >
                      <Typography variant="h6" color="textPrimary" gutterBottom>
                        {item.name}
                      </Typography>
                    </Link>
                    <Typography variant="body1" color="textSecondary">
                      {item.excerpt}
                    </Typography>

                    <LearnMoreLink
                      title="Read More"
                      to={`/${item.category}/${item.subcategory}/${item.fields.slug}`}
                      typographyProps={{ variant: 'h6' }}
                    />
                  </BlogContent>
                }
              />
            </Hidden>
          </FeatureArticleContainer>
        </SwiperSlide>
      ))}
    </StyledSwiper>
  );
};

export default FeatureArticle;
