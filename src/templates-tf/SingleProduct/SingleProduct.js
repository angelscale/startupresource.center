import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';

// components
import { Breadcrumb, Header, Overview, About, Pricing } from './components';

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

  return (
    <div className={classes.root}>
      <Breadcrumb title={data.title || ''} />
      <Header data={data} location={location} />
      <div className={clsx(classes.content)}>
        <div className={classes.container}>
          <Overview data={data} />
          <About data={data} />
          <Pricing data={data} />
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
