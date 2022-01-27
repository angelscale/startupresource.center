import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { featured, articles } from 'templates/BlogReachView/data';
import ArticleFeatured from 'components/ArticleFeatured';
import ArticleGrid from 'components/ArticleGrid';
import SectionLabel from 'components/SectionLabel';

const useStyles = makeStyles((theme) => ({
  featured: {
    margin: theme.spacing(0, 2),
    padding: theme.spacing(2, 0, 4, 0),
    [theme.breakpoints.up('md')]: {
      margin: theme.spacing(0),
    },
  },
  articles: {
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
      <div className={classes.featured}>
        <SectionLabel title="Featured Resources" />
        <ArticleFeatured data={featured} />
      </div>
      <div className={classes.articles}>
        <ArticleGrid data={articles} />
      </div>
    </>
  );
};

export default ArticleSection;
