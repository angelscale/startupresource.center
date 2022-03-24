import React, { useState, useEffect, createElement, Fragment } from 'react';
import makeStyles from '@mui/styles/makeStyles';
import clsx from 'clsx';

import rehypeReact from 'rehype-react';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import rehypeStringify from 'rehype-stringify';

// components
import { Breadcrumb, Header, Overview, About, Pricing } from './components';
import { Typography, ListItemText, styled, Link } from '@mui/material';

// helper
import { extractContent } from './utils';

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

const SingleProduct = ({ data }) => {
  const classes = useStyles();
  const { productData, location } = data;

  const [content, setContent] = useState(null);

  useEffect(() => {
    if (productData) {
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
        .process(productData.description)
        .then((file) => {
          setContent(extractContent(file.result));
        });
    }
  }, [productData]);

  if (!content) return null;

  return (
    <div className={classes.root}>
      <Breadcrumb title={productData.name || ''} />
      <Header data={productData} content={content} location={location} />
      <div className={clsx(classes.content)}>
        <div className={classes.container}>
          <Overview productData={productData} content={content} />
          <About productData={productData} content={content} />
          <Pricing productData={productData} content={content} />
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
