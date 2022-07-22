import React from 'react';
// import { Link } from 'gatsby';
import { graphql } from 'gatsby';
import { Typography, styled } from '@mui/material';

import {
  Breadcrumb,
  Container,
  Section,
  FeatureArticle,
  ProductList,
  ArticleList,
  CategoryDescription,
} from 'components';

const Root = styled('div')({
  margin: '0 auto',
});

const Title = styled(Typography)({
  textTransform: 'capitalize',
});

// const CategoryWrapper = styled('div')(({ theme }) => ({
//   marginBlock: theme.spacing(0, 4),
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'flex-start',
//   flexWrap: 'nowrap',
//   columnGap: theme.spacing(2),
//   overflowX: 'auto',

//   '& span': {
//     fontSize: '.875rem',
//     fontWeight: '600',
//     color: '#3f51b5',
//     cursor: 'pointer',
//     textTransform: 'capitalize',
//   },

//   '& > *:not(:last-child)': {
//     position: 'relative',

//     '&::before': {
//       content: '""',
//       position: 'absolute',
//       right: '-.5rem',
//       width: '1px',
//       height: '100%',
//       background: '#3f51b5',
//     },
//   },

//   '& > *': {
//     flex: '0 0 auto',
//   },

//   '&::-webkit-scrollbar': {
//     display: 'none',
//   },

//   '@media (min-width: 640px)': {
//     marginBlock: theme.spacing(-4, 4),
//     justifyContent: 'center',
//     flexWrap: 'wrap',
//   },

//   '@media (min-width: 900px)': {
//     marginBlock: theme.spacing(-6, 4),
//   },
// }));

const content = {
  plan: {
    title: 'Plan Your Business',
    content: `Have an idea for a business, but don’t know where to start?  Here you'll find all the resources to help you plan for success as you start your new business.`,
    'business-funding': {
      title: `Business Funding`,
      content: `Raising startup capital can be overwhelming.  Get the help and guidance you need with these resources.`,
    },
    'business-consulting': {
      title: 'Business Consulting',
      content: `Find guidance and mentorship from experts in your business niche to help guide you through the planning process.`,
    },
    'licensing-and-patents': {
      title: 'Licensing & Patents',
      content: `Find resources to help you protect your intellectual property, even as you begin to share it with the world.`,
    },
    legal: {
      title: 'Legal',
      content: `Get the best advice and explanations on everything you need to do to get your business running, from a legal perspective.`,
    },
    'accounting-and-finance': {
      title: 'Accounting & Finance',
      content: `Get help making your capital work for you in the most efficient way.`,
    },
    research: {
      title: 'Research',
      content: `Learn how to diligently investigate your idea and finely tune it to make it as competitive as possible.`,
    },
  },
  launch: {
    title: 'Launch Your Business',
    content: `You’ve done the research, you’ve built the plan, and now you’re ready to turn your dream into a reality.  Here you will find everything you need to hit the ground running as you launch your new business.`,
    'ecommerce-website': {
      title: 'eCommerce Websites',
      content: `Get the insight and tools to build your online eCommerce business.`,
    },
    'create-your-brand': {
      title: 'Create Your Brand',
      content: `Visual impressions and product reputation are so important.  Here you’ll find everything you need to create the perfect message for your company.`,
    },
    'product-packaging-and-design': {
      title: 'Product Packaging & Design',
      content: `Product Packaging is often the first insight into your product that your customers will see.  Here you will find all the resources you need to design the packaging for your products.`,
    },
    networking: {
      title: 'Professional Networking',
      content: `Learn all the tips and tricks to building out your business’s profile for better growth and success.`,
    },
    'website-development': {
      title: 'Website Development',
      content: `Here you will find all the resources to develop the home for your business on the web.`,
    },
    'website-hosting': {
      title: 'Website Hosting',
      content: `Here you will find resources to help you host your business website.`,
    },
    'business-planning': {
      title: 'Business Planning',
      content: `A great business is made with a great plan. Here you will find a number of resources and great advice to ensure your vision comes to life successfully.`,
    },
  },
  manage: {
    title: 'Manage Your Business',
    content: `You’ve started your new business. Congratulations! But now comes the challenging (fun) part: managing your operations. We’ve compiled a comprehensive collection of resources to help you navigate this next step in entrepreneurship.`,
    'customer-relationship-management': {
      title: 'Customer Relationship Management',
      content: `Here you will find all the resources you need to help you build and maintain Customer Relationships.`,
    },
    'inventory-management': {
      title: 'Inventory Management',
      content: `Here you will find all the resources you need for management of your inventory.`,
    },
    'staffing-and-hiring': {
      title: 'Staffing & Hiring',
      content: `Here you will find advice and resources on how to staff your business, including hiring and consultants.`,
    },
    shipping: {
      title: 'Shipping',
      content: `Here you will find resources to help you ship your product to your consumers.`,
    },
    'operating-software': {
      title: 'Operating Software',
      content: `Here you will find resources about software to help you operate your business.`,
    },
  },
  grow: {
    title: 'Grow Your Business',
    content: `Once you’ve established your new business, the most important task ahead is ensuring its success through growth. Angel-Scale offers all the insight you need to build your business brand and market it. Create the customer base and recognition that will keep your business growing for years to come with our expert advice and resources, broken down into careful categories to answer all of your questions.`,
    'creative-and-design': {
      title: 'Creative & Design',
      content: `Get help building a better brand.`,
    },
    'digital-display-advertising': {
      title: 'Digital Display Advertising',
      content: `Get help tapping into the online market.`,
    },
    'retail-and-event-marketing': {
      title: 'Retail & Event Marketing',
      content: `Get insight into creating the best in-person shopping experience.`,
    },
    'website-management-and-seo': {
      title: 'Website Management & SEO',
      content: `Get help attracting customers on every front.`,
    },
    'ecommerce-and-online-markets': {
      title: 'eCommerce & Online Markets',
      content: `Get help creating the best online shoping experience, and utilize existing online marketplaces.`,
    },
    'influencer-and-affiliate-marketing': {
      title: 'Influencer & Affiliate Marketing',
      content: `Get tips and tricks to build your online presence.`,
    },
    'social-media': {
      title: 'Social Media',
      content: `Here you will find resources related to the Social Media precense of your business.`,
    },
    'search-engine-marketing': {
      title: 'Search Engine Marketing',
      content: `Here you will find advice and resources to help you market your products via Search Engines.`,
    },
    email: {
      title: 'Email Marketing',
      content: `Here you will find advice and resources to help you market your products via Email.`,
    },
  },
};

const CategoryTemplate = ({ data, location, pageContext }) => {
  const featuredArticles = data.allArticles.nodes.filter(
    (node) =>
      node.status === 'featured' &&
      (node.publish_date === null ||
        Date.now() >= Date.parse(node.publish_date)),
  );

  const publishedArticles = data.allArticles.nodes.filter(
    (node) =>
      (node.status === 'published' || node.status === 'featured') &&
      (node.publish_date === null ||
        Date.now() >= Date.parse(node.publish_date)),
  );

  const publishedProducts = data.allProducts.nodes.filter(
    (node) => node.status === 'published' || node.status === 'featured',
  );

  // const articlesSubCats = data.allArticles.nodes.map(
  //   (node) => node.subcategory,
  // );
  // const productsSubCats = data.allProducts.nodes.map(
  //   (node) => node.subcategory,
  // );
  // const subCategories = [...new Set([...articlesSubCats, ...productsSubCats])];

  return (
    <Root>
      <Breadcrumb location={location} />

      {/* {location.pathname.split('/').length <= 3 && (
        <CategoryWrapper>
          {subCategories.map((subcategory, i) => (
            <Link key={i} to={`/${pageContext.category}/${subcategory}`}>
              <span>{subcategory.replaceAll('-', ' ')}</span>
            </Link>
          ))}
        </CategoryWrapper>
      )} */}

      <Container>
        {/* category description */}
        <Title variant="h3" gutterBottom>
          {content[pageContext.category].title}
        </Title>
        <CategoryDescription content={content[pageContext.category].content} />
      </Container>

      {/* Articles */}
      <Section disablePadding>
        <Title variant="h4">Featured Articles</Title>
        <FeatureArticle items={featuredArticles} />
      </Section>
      <Section disablePadding>
        <Title sx={{ mt: 4 }} variant="h4">
          Products
        </Title>
        <ProductList sx={{ mb: 4 }} productList={publishedProducts} />
      </Section>
      <Section disablePadding>
        <Title variant="h4">Articles</Title>
        <ArticleList sx={{ mb: 4 }} articleList={publishedArticles} />
      </Section>
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
        publish_date
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
