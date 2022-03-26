import React, { useState, useEffect, createElement, Fragment } from 'react';
import makeStyles from '@mui/styles/makeStyles';
import clsx from 'clsx';
import { graphql } from 'gatsby';

import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkHtml from 'remark-html';
import remarkRehype from 'remark-rehype';
import rehypeStringify from 'rehype-stringify';
import rehypeReact from 'rehype-react';

// components
import { Breadcrumb } from 'components';
import { Typography, ListItemText, styled, Link } from '@mui/material';

const Text = styled(Typography)(
  () => `
    font-size: .875rem;
    line-height: 1.125rem;
    font-weight: 400;
    letter-spacing: 0.4px;
    white-space: pre-line;
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
    background: '#f2f2f2',
  },
  container: {
    margin: '0 auto',
    maxWidth: theme.layout.contentWidth,
  },
}));

const ProductTemplate = ({ data, location }) => {
  const classes = useStyles();

  const [content, setContent] = useState(null);

  useEffect(() => {
    if (data) {
      unified()
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
        .process(data.description)
        .then((file) => {
          setContent(file.result);
        });
    }
  }, [data]);

  // const description = unified()
  //   .use(remarkParse)
  //   .use(remarkRehype)
  //   .use(rehypeStringify)
  //   .use(rehypeReact, {
  //     createElement,
  //     Fragment,
  //     components: {
  //       p: Text,
  //       li: Itemtext,
  //       a: LinkText,
  //     },
  //   })
  //   .processSync(data.description);

  // const description2 = unified()
  //   .use(remarkParse)
  //   .use(remarkHtml)
  //   .processSync(data.description);

  // console.log(description);
  // console.log(description2);

  console.log(content);
  if (!content) return null;

  return (
    <div className={classes.root}>
      <Breadcrumb location={location} />
      {/* <Header data={data} content={description} location={location} /> */}
      <div className={clsx(classes.content)}>
        <div className={classes.container}>
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </div>
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
        logo
        description
        create_date
        affiliate
      }
    }
  }
`;
