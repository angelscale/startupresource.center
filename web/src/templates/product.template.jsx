import React, { createElement, Fragment } from 'react';
import makeStyles from '@mui/styles/makeStyles';
import { graphql } from 'gatsby';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import rehypeStringify from 'rehype-stringify';
import rehypeReact from 'rehype-react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { Typography, ListItemText, styled, Link } from '@mui/material';

// components
import { Breadcrumb } from 'components';

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

const Itemtext = styled(ListItemText)(
  () => `
    font-size: .875rem;
    line-height: 1.125rem;
    font-weight: 600;
    letter-spacing: 0.4px;
    white-space: pre-line;

    span {
      all: inherit;
      margin: 0;
    }
`,
);

const LinkText = styled(Link)(
  () => `
    font-weight: 600;
`,
);

const useStyles = makeStyles((theme) => ({
  root: {},
  content: {
    padding: theme.spacing(4, 2),
    // background: '#f2f2f2',
  },
  container: {
    margin: '0 auto',
    maxWidth: theme.layout.contentWidth,
  },
}));

const ProductTemplate = ({ data, location }) => {
  const classes = useStyles();

  const { name, description, logoImage } = data.allProducts.nodes[0];
  const logo = getImage(logoImage);

  const content = unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeStringify)
    .use(rehypeReact, {
      createElement,
      Fragment,
      components: {
        p: Text,
        li: Itemtext,
        a: LinkText,
      },
    })
    .processSync(description);

  return (
    <div className={classes.root}>
      <Breadcrumb location={location} />

      <div className={classes.container}>
        <GatsbyImage image={logo} alt={name} />
        <Typography variant="h1">{name}</Typography>
        <div className={classes.content}>{content.result}</div>
      </div>
    </div>
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
      }
    }
  }
`;
