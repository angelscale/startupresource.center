import React from 'react';
import makeStyles from '@mui/styles/makeStyles';
import clsx from 'clsx';

// components
import { Breadcrumb, Header, Overview, About, Pricing } from './components';
import { products } from './data';

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

  if (!productData) return null;

  return (
    <div className={classes.root}>
      <Breadcrumb title={productData.name || ''} />
      <Header data={productData} location={location} />
      <div className={clsx(classes.content)}>
        <div className={classes.container}>
          <Overview data={productData} />
          <About data={products[0]} />
          <Pricing data={products[0]} />
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
