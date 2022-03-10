import React from 'react';
import makeStyles from '@mui/styles/makeStyles';
import clsx from 'clsx';

// components
import { Breadcrumb, Header, Overview, About, Pricing } from './components';
import { products } from 'templates-tf/Products/data';

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

const SingleProduct = ({ data, location }) => {
  const classes = useStyles();

  if (!data) return null;

  return (
    <div className={classes.root}>
      <Breadcrumb title={data.name || ''} />
      <Header data={data} location={location} />
      <div className={clsx(classes.content)}>
        <div className={classes.container}>
          <Overview data={data} />
          <About data={products[0]} />
          <Pricing data={products[0]} />
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
