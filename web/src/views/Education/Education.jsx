import React from 'react';
import { colors } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';

import { Categories, Hero, Platforms } from './components';

import { platforms, categories } from './data';
// import PlatformSectionView from './Education/platform-section';
// import ArticlesSectionView from './Education/article-section';

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

const EducationView = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Hero />
      <div className={classes.content}>
        <Platforms data={platforms} />
        <Categories data={categories} />
        {/* <PlatformSectionView />
        <ArticlesSectionView /> */}
      </div>
    </div>
  );
};

export default EducationView;
