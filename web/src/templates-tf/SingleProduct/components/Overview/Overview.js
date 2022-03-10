import React from 'react';
import makeStyles from '@mui/styles/makeStyles';

// components
import { Grid } from '@mui/material';
import Gallery from './Gallery';
import Title from '../Title';
import Text from '../Text';

// mockup data
import { products } from 'templates-tf/Products/data';

const useStyles = makeStyles((theme) => ({
  root: {
    background: 'white',
    padding: theme.spacing(3.5, 3),
    borderRadius: '4px',
    boxShadow:
      'rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px',
  },
  'mt-4': {
    marginTop: theme.spacing(4),
  },
}));

const Overview = ({ data }) => {
  const classes = useStyles();

  return (
    <div id="overview" className={classes.root}>
      <Grid container spacing={4} className={classes.wrapper}>
        <Grid item xs={12} md={6}>
          <div>
            <Title text={`What is ${data.name}?`} />
            <Text text={data.description} />
          </div>
          <div className={classes['mt-4']}>
            <Title text={`Use of ${data.name}?`} />
            <Text text={products[0].content.use} />
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
          <Gallery images={products[0].gallery || []} />
        </Grid>
      </Grid>
    </div>
  );
};

export default Overview;
