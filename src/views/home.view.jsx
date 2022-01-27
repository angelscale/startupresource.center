import React from 'react';

import { colors } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';

import Hero from 'templates/IndexView/components/Hero';
import ServiceSectionView from './home/service-section';
import ArticlesSectionView from './home/article-section';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '45rem',
    width: '100%',
  },
  header: {
    fontSize: '1.4em',
    fontStyle: 'italic',
    fontWeight: 400,
    marginBottom: theme.spacing(2),
  },
  text: {
    padding: theme.spacing(4),
    fontSize: '1.4em',
    fontWeight: 600,
  },
  intro: {
    background: colors.blueGrey[100] + '40',
  },
  main: {
    margin: '0 auto',
    maxWidth: theme.layout.contentWidth,
  },
  content: {
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
