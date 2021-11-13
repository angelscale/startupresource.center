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
  heading: {
    // width: '100%',
    margin: theme.spacing(4),
    padding: theme.spacing(4),
    borderTopLeftRadius: theme.spacing(10),
    borderBottomLeftRadius: theme.spacing(2),
    borderTopRightRadius: theme.spacing(2),
    borderBottomRightRadius: theme.spacing(10),
    background: colors.blueGrey[100] + '40',
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
      <div className={classes.content}>
        <ServiceSectionView />
        <ArticlesSectionView />
      </div>
    </div>
  );
};

export default HomeView;
