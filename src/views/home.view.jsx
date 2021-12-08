import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Hero from 'templates/IndexView/components/Hero';
import ServiceSectionView from './home/service-section';
import ArticlesSectionView from './home/article-section';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '45rem',
    width: '100%',
  },
  main: {
    margin: '0 auto',
    maxWidth: theme.layout.contentWidth,
  },
}));

const HomeView = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Hero />
      <div className={classes.main}>
        <ServiceSectionView />
        <ArticlesSectionView />
      </div>
    </div>
  );
};

export default HomeView;
