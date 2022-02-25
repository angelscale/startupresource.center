import React from 'react';
import makeStyles from '@mui/styles/makeStyles';

// components
import { Grid } from '@mui/material';
import Title from '../Title';
import Text from '../Text';
import List from '../List';

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

const About = ({ data }) => {
  const classes = useStyles();

  return (
    <div id="about" className={classes.root}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Title text="About Company" />
          <Text text={data.content.about_company} />
        </Grid>
        <Grid item xs={12} md={6}>
          <Title text={`What does ${data.title} do?`} />
          <Text text={data.content.do} />
        </Grid>
        <Grid item xs={12} md={6}>
          <Title text={`What does ${data.title} offer?`} />
          <Text text={data.content.offer.label} />
          <List list={data.content.offer.list} />
        </Grid>
        <Grid item xs={12} md={6}>
          <Title text={`What's unique about ${data.title}?`} />
          <Text text={data.content.unique} />
        </Grid>
      </Grid>
    </div>
  );
};

export default About;
