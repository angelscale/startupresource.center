import React from 'react';
import makeStyles from '@mui/styles/makeStyles';

// components
import { Grid, Typography } from '@mui/material';
import Gallery from './Gallery';
import Title from '../Title';
import Text from '../Text';

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
            <Title text={`What is ${data.title}?`} />
            <Text text={data.content.description} />
            <Typography variant="body1" className={classes.text}>
              Businesses use email marketing as a digital strategy to advertise
              products and services while also nurturing client connections. One
              of the most widely used email marketing services, Constant Contact
              provides solutions to help small company owners maintain and build
              their online platforms and presence.
            </Typography>
          </div>
          <div className={classes['mt-4']}>
            <Title text={`Use of ${data.title}?`} />
            <Text text={data.content.use} />
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
          <Gallery images={data.gallery || []} />
        </Grid>
      </Grid>
    </div>
  );
};

export default Overview;
