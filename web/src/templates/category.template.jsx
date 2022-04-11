import React from 'react';
import { graphql, Link } from 'gatsby';
import { getImage, GatsbyImage } from 'gatsby-plugin-image';

import {
  Typography,
  Badge,
  Grid,
  Button,
  useMediaQuery,
  styled,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';

// components
import {
  Breadcrumb,
  Container,
  Section,
  CardBlog,
  CoreFourCard,
  FeatureArticle,
  LearnMoreLink,
} from 'components';

// import { navigation } from 'navigation';
import { products as mockProducts } from './data';

// Styles
const Root = styled('div')({
  margin: '0 auto',
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

const StyledButton = styled(Button)(({ theme }) => ({
  minWidth: '100%',
  maxWidth: '100%',
  [theme.breakpoints.up('sm')]: {
    minWidth: 420,
  },
}));

const Title = styled(Typography)({
  textTransform: 'capitalize',
});

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: 31,
    top: 13,
    padding: '0 4px',
  },
}));

// const CategoryCard = styled(CardBase)(({ theme }) => ({
//   borderRadius: theme.spacing(2),
//   background: theme.palette.alternate.main,
//   cursor: 'pointer',
// }));

// const CategoryImage = styled(SvgIcon)(({ theme }) => ({
//   width: 60,
//   height: 60,
//   objectFit: 'contain',
//   marginBottom: theme.spacing(5),
// }));

// const CategoryListIcon = styled(DescriptionListIcon)({
//   '& .description-list-icon__title': {
//     fontWeight: 400,
//     fontSize: 16,
//   },
// });

// Component
const CategoryTemplate = ({ data, location, pageContext }) => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  const featuredArticles =
    process.env.NODE_ENV === 'production'
      ? data.allArticles.nodes.filter((node) => node.status === 'featured')
      : data.allArticles.nodes;

  const publishedArticles =
    process.env.NODE_ENV === 'production'
      ? data.allArticles.nodes.filter(
          (node) => node.status === 'published' || node.status === 'featured',
        )
      : data.allArticles.nodes;

  const FeaturedCheck = ({ item, children }) =>
    item.status === 'featured' ? (
      <StyledBadge badgeContent="Featured" color="primary">
        {children}
      </StyledBadge>
    ) : (
      <>{children}</>
    );

  return (
    <Root>
      <Breadcrumb location={location} />

      <Container>
        {/* category description */}
        <Title variant="h3" gutterBottom>
          {pageContext.category.replace(/-/g, ' ')}
        </Title>
        <Typography variant="h6">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam nisi
          expedita neque amet optio sequi facilis. A nam animi quidem, assumenda
          ipsa veniam placeat nesciunt vitae perferendis, unde, voluptas quae.
        </Typography>
      </Container>
      <Section disablePadding>
        <FeatureArticle items={featuredArticles} />
      </Section>

      {/* <Container> */}
      {/* sub category list */}
      {/* Disabled for now, as we don't want to link to subcategory pages yet. */}
      {/* <Box sx={{ mt: 4 }}>
          <SectionHeader title="Sub Categories" align="left" />
          <Grid container spacing={2}>
            {navigation
              .filter(
                ({ slug }) => slug === data.allArticles.nodes[0].category,
              )[0]
              .subCategories.map(({ title }, index) => (
                <Grid item xs={6} md={2} key={index} data-aos="fade-up">
                  <CategoryCard noBorder noShadow liftUp>
                    <CategoryListIcon
                      icon={
                        <CategoryImage
                          component={KeyboardDoubleArrowRight}
                          inheritViewBox
                          alt={title}
                        />
                      }
                      title={title}
                    />
                  </CategoryCard>
                </Grid>
              ))}
          </Grid>
        </Box> */}
      {/* </Container> */}

      {/* Articles */}
      <Container>
        <Grid container spacing={isMd ? 4 : 2}>
          {publishedArticles.slice(0, 3).map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index} data-aos="fade-up">
              <FeaturedCheck item={item}>
                <StyledCardBlog
                  withShadow
                  liftUp
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
                        <Typography
                          variant="h6"
                          color="textPrimary"
                          gutterBottom
                        >
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
              </FeaturedCheck>
            </Grid>
          ))}
        </Grid>

        <Grid container spacing={isMd ? 4 : 2} mt={1}>
          {mockProducts.slice(0, 2).map((item, index) => (
            <Grid item xs={12} sm={6} key={index} data-aos="fade-up">
              <CoreFourCard data={item} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Root>
  );
};

export default CategoryTemplate;

export const categoryPageQuery = graphql`
  query ($category: String!) {
    allArticles(
      filter: { category: { eq: $category } }
      sort: { fields: create_date, order: ASC }
    ) {
      nodes {
        name
        status
        category
        subcategory
        excerpt
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
        status
        category
        subcategory
        fields {
          slug
        }
      }
    }
  }
`;
