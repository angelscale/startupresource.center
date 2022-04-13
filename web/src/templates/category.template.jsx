import React from 'react';
import { graphql } from 'gatsby';
import { Typography, Grid, useMediaQuery, styled } from '@mui/material';
import { useTheme } from '@mui/material/styles';

// components
import {
  Breadcrumb,
  Container,
  Section,
  ArticleCard,
  ProductCard,
  FeatureArticle,
} from 'components';

// Styles
const Root = styled('div')({
  margin: '0 auto',
});

const StyledArticleCard = styled(ArticleCard)(({ theme }) => ({
  height: '100%',
  borderRadius: theme.spacing(1),
  '& .card-blog__content': {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
}));

const Title = styled(Typography)({
  textTransform: 'capitalize',
});

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

  const publishedProducts =
    process.env.NODE_ENV === 'production'
      ? data.allProducts.nodes.filter(
          (node) => node.status === 'published' || node.status === 'featured',
        )
      : data.allProducts.nodes;

  console.log('Articles: ', publishedArticles.length, publishedArticles);
  console.log('Products: ', publishedProducts.length, publishedProducts);

  const groupedCards = [];
  let i = 0,
    j = 0;
  while (publishedArticles.length > 0 || publishedProducts.length > 0) {
    groupedCards.push(
      <React.Fragment key={`${i}-${j}`}>
        <Grid container item xs={12} key={`${i++}-articles`} data-aos="fade-up">
          <Grid item xs={12} md={4} data-aos="fade-up">
            <StyledArticleCard
              withShadow
              liftUp
              data={publishedArticles.pop()}
            />
          </Grid>
          <Grid item xs={12} md={4} data-aos="fade-up">
            <StyledArticleCard
              withShadow
              liftUp
              data={publishedArticles.pop()}
            />
          </Grid>
          <Grid item xs={12} md={4} data-aos="fade-up">
            <StyledArticleCard
              withShadow
              liftUp
              data={publishedArticles.pop()}
            />
          </Grid>
        </Grid>
        <Grid container item xs={12} key={`${j++}-products`} data-aos="fade-up">
          <Grid item xs={12} md={6} data-aos="fade-up">
            <ProductCard data={publishedProducts.pop()} />
          </Grid>
          <Grid item xs={12} md={6} data-aos="fade-up">
            <ProductCard data={publishedProducts.pop()} />
          </Grid>
        </Grid>
      </React.Fragment>,
    );
  }

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
          {groupedCards}
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
              transformOptions: { cropFocus: ATTENTION }
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
        description
        fields {
          slug
        }
        logoImage {
          childImageSharp {
            gatsbyImageData(
              layout: CONSTRAINED
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
              transformOptions: { fit: COVER }
            )
          }
        }
      }
    }
  }
`;
