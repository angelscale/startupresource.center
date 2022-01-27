import React from 'react';
import { colors } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import Hero from './education/hero';
import PlatformSectionView from './education/platform-section';
import ArticlesSectionView from './education/article-section';

const useStyles = makeStyles((theme) => ({
  root: {
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
      <div className={classes.content}>
        <PlatformSectionView />
        <ArticlesSectionView />
      </div>
    </div>
  );
};

export default HomeView;
