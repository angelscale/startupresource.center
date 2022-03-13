import React from 'react';
import makeStyles from '@mui/styles/makeStyles';

import Horizontal from './Horizontal';
import Vertical from './Vertical';
import SectionLabel from 'components/SectionLabel';

const useStyles = makeStyles((theme) => ({
  featuredContainer: {
    margin: theme.spacing(0, 2),
    padding: theme.spacing(2, 0, 4, 0),
    [theme.breakpoints.up('md')]: {
      margin: theme.spacing(0),
    },
  },
  articlesContainer: {
    margin: theme.spacing(0, 2),
    padding: theme.spacing(0, 0, 4, 0),
    [theme.breakpoints.up('md')]: {
      margin: theme.spacing(0),
    },
  },
}));

const Articles = ({ featuredData, articlesData }) => {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.featuredContainer}>
        <SectionLabel
          title="Latest Stories"
          subtitle="Amet occaecat velit quis id elit et velit officia aliqua aute ipsum."
        />
        <Horizontal data={featuredData} />
      </div>
      <div className={classes.articlesContainer}>
        <Vertical data={articlesData} />
      </div>
    </div>
  );
};

export default Articles;
