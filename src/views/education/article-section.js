import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { articles } from './data';
import SectionLabel from 'components/SectionLabel';
import SectionEducationArticles from 'components/SectionEducationArticles';

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
        <SectionLabel
          title="Courses by Categories"
          subtitle="Id cupidatat incididunt exercitation deserunt ipsum dolor non."
        />
      </div>
      <div className={classes.articlesContainer}>
        <SectionEducationArticles data={articles} />
      </div>
    </>
  );
};

export default ArticleSection;
