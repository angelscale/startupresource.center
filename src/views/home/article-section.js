import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { Horizontal, Vertical } from 'templates/BlogReachView/components';
import { featured, articles } from 'templates/BlogReachView/data';
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

const ArticleSection = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.featuredContainer}>
        <SectionLabel title="Featured Resources" />
        <Horizontal data={featured} />
      </div>
      <div className={classes.articlesContainer}>
        <Vertical data={articles} />
      </div>
    </>
  );
};

export default ArticleSection;
