import React from 'react';
import { graphql, Link } from 'gatsby';
import { getImage, GatsbyImage } from 'gatsby-plugin-image';
import { convertToBgImage } from 'gbimage-bridge';
import BackgroundImage from 'gatsby-background-image';

import { Typography, styled, Box, Grid } from '@mui/material';

// components
import {
  Breadcrumb,
  Container,
  Section,
  Slider,
  SectionHeader,
  CardBase,
  DescriptionListIcon,
  Image,
} from 'components';

import { articles as mockArticles, sub_categories } from './data';

const PREFIX = 'CategoryTemplate';

const classes = {
  root: `${PREFIX}-root`,
  featureContainer: `${PREFIX}-featureContainer`,
  featureImage: `${PREFIX}-featureImage`,
  featureContent: `${PREFIX}-featureContent`,
  featureSlider: `${PREFIX}-featureSlider`,
  featureTitle: `${PREFIX}-featureTitle`,
  featureText: `${PREFIX}-featureText`,
  featureBtn: `${PREFIX}-featureBtn`,
  categoryImage: `${PREFIX}-categoryImage`,
  descriptionListIcon: `${PREFIX}-descriptionListIcon`,
  cardBase: `${PREFIX}-cardBase`,
};

const Root = styled('div')(({ theme }) => ({
  margin: '0 auto',

  [`& .${classes.featureContainer}`]: {
    width: '100%',
    maxHeight: '70vh',
    position: 'relative',
  },

  [`& .${classes.featureImage}`]: {
    width: '100%',
    aspectRatio: '16/9',
  },

  [`& .${classes.featureContent}`]: {
    width: '24rem',
    padding: theme.spacing(2),
    position: 'absolute',
    right: '10px',
    bottom: '10px',
    background: 'white',
    borderRadius: theme.spacing(0.5),
  },

  [`& .${classes.featureSlider}`]: {
    borderRadius: '8px',
    overflow: 'hidden',
  },

  [`& .${classes.featureTitle}`]: {
    fontSize: theme.typography.pxToRem(18),
    lineHeight: 1.2,
  },

  [`& .${classes.featureText}`]: {
    fontSize: theme.typography.pxToRem(12),
    lineHeight: 1.6,
    marginBlock: theme.spacing(1),
  },

  [`& .${classes.featureBtn}`]: {
    fontSize: theme.typography.pxToRem(14),
    lineHeight: 1.2,
    color: theme.palette.primary,
    cursor: 'pointer',
  },

  [`& .${classes.categoryImage}`]: {
    width: 60,
    height: 60,
    objectFit: 'contain',
    marginBottom: theme.spacing(5),
  },

  [`& .${classes.descriptionListIcon}`]: {
    '& .description-list-icon__title': {
      fontWeight: 400,
      fontSize: 16,
    },
  },

  [`& .${classes.cardBase}`]: {
    borderRadius: theme.spacing(2),
    background: theme.palette.alternate.main,
    cursor: 'pointer',
  },
}));

const CategoryTemplate = ({ data, location }) => {
  console.log(data);

  const articles = data.allArticles.nodes.map((node) => (
    <li key={`/${node.category}/${node.subcategory}/${node.fields.slug}`}>
      <Link to={`/${node.category}/${node.subcategory}/${node.fields.slug}`}>
        {node.name}
      </Link>
    </li>
  ));
  const products = data.allProducts.nodes.map((node) => (
    <li
      key={`/${node.category}/${node.subcategory}/core-four/${node.fields.slug}`}
    >
      <Link
        to={`/${node.category}/${node.subcategory}/core-four/${node.fields.slug}`}
      >
        {node.name}
      </Link>
    </li>
  ));

  function FeatureArticle({ data }) {
    const headerImageSharp = convertToBgImage(getImage(data.headerImage));

    return (
      <Box className={classes.featureContainer}>
        <BackgroundImage
          className={classes.featureImage}
          {...headerImageSharp}
        />
        <Box className={classes.featureContent}>
          <h4 className={classes.featureTitle}>{data.name}</h4>
          <p className={classes.featureText}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi
            soluta quisquam qui error porro nesciunt ratione reiciendis magnam,
            laboriosam optio ullam odio facilis doloremque illo? Officiis
            adipisci vel sapiente aspernatur?
          </p>
          <Link
            to={`/${data.category}/${data.subcategory}/${data.fields.slug}`}
          >
            <span className={classes.featureBtn}>Read more</span>
          </Link>
        </Box>
      </Box>
    );
  }

  return (
    <Root>
      <Breadcrumb location={location} />
      <Section disablePadding>
        <Slider
          list={mockArticles}
          Item={FeatureArticle}
          space={0}
          perView="auto"
          perGroup={1}
          navigation={false}
          pagination={{ clickable: true }}
          autoplay={{ delay: 1500 }}
          wrapperClass={classes.featureSlider}
        />
      </Section>
      <Container>
        {/* category description */}
        <Typography variant="h6">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam nisi
          expedita neque amet optio sequi facilis. A nam animi quidem, assumenda
          ipsa veniam placeat nesciunt vitae perferendis, unde, voluptas quae.
        </Typography>

        {/* sub category list */}
        <Box sx={{ mt: 4 }}>
          <SectionHeader title="Sub Categories" align="left" />
          <Grid container spacing={2}>
            {sub_categories.map((item, index) => (
              <Grid item xs={6} md={2} key={index} data-aos="fade-up">
                <CardBase noBorder noShadow liftUp className={classes.cardBase}>
                  <DescriptionListIcon
                    className={classes.descriptionListIcon}
                    icon={
                      <Image
                        {...item.icon}
                        alt={item.title}
                        className={classes.image}
                      />
                    }
                    title={item.title}
                  />
                </CardBase>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
      <Container>
        <Typography variant="h3">Articles:</Typography>
        <ul>{articles}</ul>
      </Container>
      <Container>
        <Typography variant="h3">Products:</Typography>
        <ul>{products}</ul>
      </Container>
    </Root>
  );
};

export default CategoryTemplate;

export const postQuery = graphql`
  query ($category: String!) {
    allArticles(
      filter: { category: { eq: $category } }
      sort: { fields: create_date, order: ASC }
    ) {
      nodes {
        name
        category
        subcategory
        fields {
          slug
        }
        headerImage {
          childImageSharp {
            gatsbyImageData(
              layout: FULL_WIDTH
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
      }
    }
    allProducts(
      filter: { category: { eq: $category } }
      sort: { fields: create_date, order: ASC }
    ) {
      nodes {
        name
        category
        subcategory
        fields {
          slug
        }
      }
    }
  }
`;
