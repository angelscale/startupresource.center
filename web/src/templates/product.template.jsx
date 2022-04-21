import React, { createElement, Fragment } from 'react';
import { graphql } from 'gatsby';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import rehypeStringify from 'rehype-stringify';
import rehypeReact from 'rehype-react';

import { Typography, styled, Link as MUILink } from '@mui/material';

import { Breadcrumb, ProductHeader } from 'components';

const PREFIX = 'ProductTemplate';

const classes = {
  root: `${PREFIX}-root`,
  content: `${PREFIX}-content`,
  container: `${PREFIX}-container`,
};

const Root = styled('div')(({ theme }) => ({
  [`&.${classes.root}`]: {},

  [`& .${classes.content}`]: {
    padding: theme.spacing(4, 2),
    // background: '#f2f2f2',
  },

  [`& .${classes.container}`]: {
    margin: '0 auto',
    maxWidth: theme.layout.contentWidth,
  },
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

    font-size: .875rem;
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

  const content = unified()
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
    .processSync(description);

  return (
    <Root className={classes.root}>
      <Breadcrumb location={location} />
      <ProductHeader
        name={name}
        logoImage={logoImage}
        location={location}
        affiliate_link={affiliate_link}
      />
      <div className={classes.container}>
        <Typography variant="h1">{name}</Typography>
        <div className={classes.content}>{content.result}</div>
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
