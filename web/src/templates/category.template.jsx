import React from 'react';
import { graphql } from 'gatsby';
import { Typography, styled } from '@mui/material';
// import { useTheme } from '@mui/material/styles';

// components
import {
  Breadcrumb,
  Container,
  Section,
  // ArticleCard,
  // ProductCard,
  FeatureArticle,
  ProductList,
  ArticleList,
} from 'components';

// mock
// import { cms_products, cms_articles } from './data';

// Styles
const Root = styled('div')({
  margin: '0 auto',
});

// const StyledArticleCard = styled(ArticleCard)(({ theme }) => ({
//   height: '100%',
//   borderRadius: theme.spacing(1),
//   '& .card-blog__content': {
//     paddingTop: theme.spacing(2),
//     paddingBottom: theme.spacing(2),
//   },
// }));

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

const content = {
  grow: {
    title: 'Grow Your Business',
    content: `Once you’ve established your new business, the most important task ahead is ensuring its success through growth. Angel-Scale offers all the insight you need to build your business brand and market it. Create the customer base and recognition that will keep your business growing for years to come with our expert advice and resources, broken down into careful categories to answer all of your questions. Our Creative & Design section offers advice on building a better brand. Our Digital Marketing section will help you tap into the online market. Our Influencer & Affiliate Marketing section offers the tips and tricks to build your online presence. Our Retail & Event Marketing gives insight to creating the best in-person shopping experience. Our eCommerce & Online Markets section will help you tackle shopping giants like Shopify and Etsy.  Our articles on Website Management & SEO will help you attract customers on every front.`,
  },
  launch: {
    title: 'Launch Your Business',
    content: `You’ve done the research, you’ve done the planning and the work, now you’re ready to take what was once a dream and launch it into reality. In our Launch hub, you’ll find everything you need to hit the ground running on your new business, broken down into easy-to-navigate categories. A great business is made with a great plan, and our Business Planning section offers a number of resources and great advice to ensure your vision comes to life successfully. Visual impressions and product reputation are so important for consumers today -- under our Create Your Brand section, you’ll find everything you need to shape the perfect message for your company. Before your items have even sold, you’ll want to invest time into Product Packaging & Design--luckily Angel-Scale has everything you need to know in order to create the right packaging for your products. Between our eCommerce Website and Website Development sections, you’ll have all the insight and tools you need to fast-track your online business. And, in our Networking section, you’ll learn all the tips and tricks to building out your business’s profile for better growth and high success.`,
  },
  manage: {
    title: 'Manage Your Business',
    content: `You’ve started your new business. Congratulations! But now comes the challenging (fun) part: managing your operations. Here at Angel-Scale, we’ve compiled a comprehensive collection of resources to help you navigate this next step in entrepreneurship. From Staffing & Hiring help as you grow, to Inventory Management to help you walk that fine line between supply and demand. In this section you’ll find expert insight into Shipping to help you keep costs low and customers happy, as well as resources on Relationship Management--an important aspect of handling customers and employees. Not to be forgotten, this section also covers Operating Software--something that can make or break your business, so be sure to check out our diligently sourced expert advice and transform your new business into a well-oiled money-making machine.`,
  },
  plan: {
    title: 'Plan Your Business',
    content: `Got an idea for a business, but don’t know where to start? In our Plan section, you’ll find everything you need to know to get your business off the ground. In our Research section, you’ll learn how to diligently investigate your idea and finely tune it to make it as competitive as possible. Our Business Funding section will guide you through the overwhelming but necessary process of building that startup capital. In our Legal section, you’ll find the best advice and explanations on everything you legally need to get your business running. Our Accounting & Finance section will help you take that startup capital you’ve raised and stretch it to its full capacity. In our Licensing & Patents section, you’ll find resources to help you protect your intellectual property, even as you begin to share it with the world. Within our Business Consultants section, you’ll find guidance and mentorship from experts in your business niche to help guide you through the planning process.`,
  },
};

// Component
const CategoryTemplate = ({ data, location, pageContext }) => {
  // const theme = useTheme();
  // const isMd = useMediaQuery(theme.breakpoints.up('md'), {
  //   defaultMatches: true,
  // });

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

  // const groupedCards = [];
  // let i = 0,
  //   j = 0;
  // while (publishedArticles.length > 0 || publishedProducts.length > 0) {
  //   groupedCards.push(
  //     <React.Fragment key={`${i}-${j}`}>
  //       <Grid
  //         container
  //         item
  //         xs={12}
  //         spacing={2}
  //         key={`${i++}-articles`}
  //         data-aos="fade-up"
  //       >
  //         <Grid item xs={12} md={4} data-aos="fade-up">
  //           <StyledArticleCard
  //             withShadow
  //             liftUp
  //             data={publishedArticles.pop()}
  //           />
  //         </Grid>
  //         <Grid item xs={12} md={4} data-aos="fade-up">
  //           <StyledArticleCard
  //             withShadow
  //             liftUp
  //             data={publishedArticles.pop()}
  //           />
  //         </Grid>
  //         <Grid item xs={12} md={4} data-aos="fade-up">
  //           <StyledArticleCard
  //             withShadow
  //             liftUp
  //             data={publishedArticles.pop()}
  //           />
  //         </Grid>
  //       </Grid>
  //       <Grid
  //         container
  //         item
  //         xs={12}
  //         spacing={2}
  //         key={`${j++}-products`}
  //         data-aos="fade-up"
  //       >
  //         <Grid item xs={12} md={6} data-aos="fade-up">
  //           <ProductCard data={publishedProducts.pop()} />
  //         </Grid>
  //         <Grid item xs={12} md={6} data-aos="fade-up">
  //           <ProductCard data={publishedProducts.pop()} />
  //         </Grid>
  //       </Grid>
  //     </React.Fragment>,
  //   );
  // }

  return (
    <Root>
      <Breadcrumb location={location} />

      <Container>
        {/* category description */}
        <Title variant="h3" gutterBottom>
          {content[pageContext.category].title}
        </Title>
        <Typography variant="h6">
          {content[pageContext.category].content}
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
        {/* <Grid container spacing={isMd ? 4 : 2}>
          {groupedCards}
        </Grid> */}
        <ArticleList articleList={publishedArticles} />
        <ProductList sx={{ mt: 8 }} productList={publishedProducts} />
      </Container>
    </Root>
  );
};

export default CategoryTemplate;

export const categoryPageQuery = graphql`
  query ($category: String!, $subcategory: String) {
    allArticles(
      filter: { category: { eq: $category }, subcategory: { eq: $subcategory } }
      sort: { fields: create_date, order: ASC }
    ) {
      nodes {
        name
        status
        category
        subcategory
        excerpt
        slug
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
      filter: { category: { eq: $category }, subcategory: { eq: $subcategory } }
      sort: { fields: create_date, order: ASC }
    ) {
      nodes {
        name
        status
        category
        subcategory
        description
        slug
        affiliate_link
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
