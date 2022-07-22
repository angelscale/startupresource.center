/* eslint-disable camelcase */
import React, { useEffect, useState, createElement, Fragment } from 'react';
import { graphql } from 'gatsby';

import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import rehypeStringify from 'rehype-stringify';
import rehypeReact from 'rehype-react';

import { Typography, styled, Grid, Box, Link as MUILink } from '@mui/material';

import { Breadcrumb, ProductHeader, SEO } from 'components';

// utils
import { extractProductContent } from 'utils/helpers';

const PREFIX = 'ProductTemplate';

const classes = {
  root: `${PREFIX}-root`,
  content: `${PREFIX}-content`,
  container: `${PREFIX}-container`,
  link: `${PREFIX}-link`,
};

const Root = styled('div')(({ theme }) => ({
  [`&.${classes.root}`]: {},

  [`& .${classes.content}`]: {
    padding: theme.spacing(4, 2),
    background: '#f2f2f2',
  },

  [`& .${classes.container}`]: {
    margin: '0 auto',
    maxWidth: theme.layout.contentWidth,
  },
}));

const Overview = styled('div')(({ theme }) => ({
  background: 'white',
  padding: theme.spacing(3.5, 3),
  borderRadius: '4px',
  boxShadow:
    'rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px',

  [`& .${classes.link}`]: {
    fontSize: '1.125rem',
    fontWeight: '600',
    color: '#3f51b5',
  },
}));

const PricingOverview = styled('div')(({ theme }) => ({
  background: 'white',
  padding: theme.spacing(3.5, 3),
  borderRadius: '4px',
  boxShadow:
    'rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px',
  marginTop: theme.spacing(3),
}));

const Title = styled(Typography)(({ theme }) => ({
  fontSize: '1.125rem',
  lineHeight: '1.25rem',
  fontWeight: 600,
  marginBottom: theme.spacing(2),
}));

const Text = styled(Typography)(
  () => `
    font-size: .875rem;
    line-height: 1.125rem;
    font-weight: 400;
    letter-spacing: 0.4px;
    white-space: pre-line;
    margin-bottom: 1.5em;
`,
);

const List = styled('ul')(
  () => `
  padding-left: 2rem;
`,
);

const ListItem = styled('li')(
  () => `
    padding-block: 4px;

    font-size: 1rem;
    line-height: 1.125rem;
    font-weight: 400;

    letter-spacing: 0.4px;
    white-space: pre-line;
`,
);

const LinkText = styled(MUILink)(
  () => `
    font-weight: 600;
`,
);

const ProductTemplate = ({ data, location }) => {
  const { name, description, logoImage, affiliate_link } =
    data.allProducts.nodes[0];

  const [content, setContent] = useState(null);

  useEffect(() => {
    if (description) {
      unified()
        .use(remarkParse)
        .use(remarkRehype)
        .use(rehypeStringify)
        .use(rehypeReact, {
          createElement,
          Fragment,
          components: {
            p: Text,
            ul: List,
            li: ListItem,
            a: LinkText,
          },
        })
        .process(description)
        .then((file) => {
          setContent(extractProductContent(file.result));
        });
    }
  }, [description]);

  if (!content) return null;

  return (
    <Root className={classes.root}>
      <SEO data={data.allProducts.nodes[0]} />
      <Breadcrumb location={location} />
      <ProductHeader
        name={name}
        logoImage={logoImage}
        location={location}
        affiliate_link={affiliate_link}
      />
      <div className={classes.content}>
        <div className={classes.container}>
          <Overview>
            <Grid container spacing={4}>
              <Grid item xs={12} md={6}>
                <Box>
                  <Title>What is {name}?</Title>
                  <Typography variant="body1">
                    <a
                      href={affiliate_link}
                      target="_blank"
                      rel="noreferrer"
                      className={classes.link}
                    >
                      {name}
                    </a>
                    {content.description}
                  </Typography>
                </Box>
                <Box mt={4}>
                  <Title>{name} Features</Title>
                  <Typography variant="body1">{content.features}</Typography>
                </Box>
              </Grid>
              <Grid item xs={12} md={6}>
                <Box>
                  <Title>What Makes {name} Unique?</Title>
                  <Typography variant="body1">{content.unique}</Typography>
                </Box>
                <Box mt={4}>
                  <Title>{name} Best Suited For?</Title>
                  <Typography variant="body1">{content.bestFor}</Typography>
                </Box>
                <Box mt={4}>
                  <Title>Company Info</Title>
                  <Typography variant="body1">{content.info}</Typography>
                </Box>
              </Grid>
            </Grid>
          </Overview>
          <PricingOverview>
            <Title>{name} Pricing</Title>
            <Typography variant="body1">{content.pricing}</Typography>
          </PricingOverview>
        </div>
      </div>
    </Root>
  );
};

export default ProductTemplate;

export const postQuery = graphql`
  query ($id: String!) {
    allProducts(filter: { id: { eq: $id } }) {
      nodes {
        id
        name
        status
        category
        subcategory
        title_tag
        meta_description
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
