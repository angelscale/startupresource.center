import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

// components
import { Grid } from '@material-ui/core';
import Title from '../Title';
import Text from '../Text';

const useStyles = makeStyles((theme) => ({
  root: {
    background: 'white',
    padding: theme.spacing(3.5, 3),
    borderRadius: '4px',
    boxShadow:
      'rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px',
    marginTop: theme.spacing(3),
  },
}));

const Pricing = ({ data }) => {
  const classes = useStyles();

  return (
    <div id="pricing" className={classes.root}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Title text={`${data.title} Pricing`} />
          <Text text={data.content.pricing} />
        </Grid>
      </Grid>
    </div>
  );
};

export default Pricing;
