import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { colors } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

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
}));

const HomeView = () => {
  const classes = useStyles();
  const data = useStaticQuery(graphql`
    query HomeQuery {
      file(name: { eq: "home-image" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `);

  return (
    <div className={classes.root}>
      <Hero />
      <ServiceSectionView />
      <ArticlesSectionView />
    </div>
  );
};

export default HomeView;
