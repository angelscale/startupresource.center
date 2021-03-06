import React from 'react';
import { graphql } from 'gatsby';

import makeStyles from '@mui/styles/makeStyles';
import { Grid, styled, useTheme, useMediaQuery } from '@mui/material';

import {
  Image,
  SectionHeader,
  Section,
  HeroShaped,
  ProductCard,
  Breadcrumb,
  Container,
} from 'components';

const Root = styled('div')(({ theme }) => ({
  margin: '0 auto',
}));

const useStyles = makeStyles((theme) => ({
  hero_root: {
    background:
      'url(https://assets.maccarianagency.com/the-front/illustrations/patterns-bg.svg) no-repeat left bottom',
    backgroundSize: 'contain',
    backgroundColor: theme.palette.alternate.main,
  },
  hero_cover: {
    position: 'relative',
    zIndex: 9,
    width: '100%',
    height: '100%',
  },
  hero_image: {
    objectFit: 'cover',
  },
  logo: {
    height: '60px',
    width: '60px',
    borderRadius: '4px',
    padding: theme.spacing(1, 1, 1, 1),
    border: '1px solid rgba(0,0,0,0.05)',
    marginBottom: theme.spacing(2),
    objectFit: 'contain',
    [theme.breakpoints.up('sm')]: {
      height: '80px',
      width: '80px',
      marginRight: theme.spacing(4),
      marginBottom: 0,
    },
  },
  title: {
    fontSize: '1rem',
    lineHeight: '1.25rem',
    fontWeight: '700',
  },
  content: {
    paddingInline: '0 !important',
  },
}));

const CoreFourTemplate = ({ data, location }) => {
  const classes = useStyles();

  const theme = useTheme();
  const isLg = useMediaQuery(theme.breakpoints.up('lg'), {
    defaultMatches: true,
  });

  if (!data) {
    return null;
  }

  return (
    <Root>
      <Breadcrumb location={location} />
      <Container>
        <div className={classes.hero_root}>
          <HeroShaped
            leftSide={
              <SectionHeader
                title="Core-Four Title"
                subtitle="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste praesentium nostrum illum doloribus, expedita quos perspiciatis aliquam cupiditate deleniti ratione? Aliquam quam libero, voluptatem veniam cumque porro alias quisquam id."
                subtitleColor="textPrimary"
                subtitleVariant="body1"
                align="left"
                data-aos="fade-up"
                titleVariant="h3"
              />
            }
            rightSide={
              <div className={classes.hero_cover}>
                <Image
                  src="https://assets.maccarianagency.com/the-front/photos/logistics/cover.png"
                  srcSet="https://assets.maccarianagency.com/the-front/photos/logistics/cover@2x.png 2x"
                  className={classes.hero_image}
                  lazyProps={{
                    width: '100%',
                    height: '100%',
                  }}
                />
              </div>
            }
          />
        </div>
        <Section className={classes.content}>
          <Grid container spacing={isLg ? 2 : 4}>
            {data.allProducts.nodes.map((product, i) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={i}>
                <ProductCard data={product} />
              </Grid>
            ))}
          </Grid>
        </Section>
      </Container>
    </Root>
  );
};

export default CoreFourTemplate;

export const coreFourQuery = graphql`
  query ($category: String!, $subcategory: String!) {
    allProducts(
      filter: { category: { eq: $category }, subcategory: { eq: $subcategory } }
    ) {
      nodes {
        id
        name
        status
        category
        subcategory
        slug
        logoImage {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
          }
        }
        description
        create_date
        affiliate
        affiliate_link
      }
    }
  }
`;

// export const postQuery = graphql`
//   query ($id: String!) {
//     allCorefour(filter: { id: { eq: $id } }) {
//       nodes {
//         name
//         category
//         subcategory
//         header_image
//         description
//         create_date
//       }
//     }
//   }
// `;

// export const postQuery = graphql`
//   query ($id: String!) {
//     allCorefour(filter: { id: { eq: $id } }) {
//       nodes {
//         name
//         category
//         subcategory
//         header_image
//         description
//         products
//         create_date
//       }
//     }
//   }
// `;
