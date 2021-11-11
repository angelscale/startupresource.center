import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Typography, colors, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Hero from 'components/Hero/hero.component';

import ServiceSectionView from './home/service-section';

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
      <Hero
        image={data.file.childImageSharp.gatsbyImageData}
        title={data.site.siteMetadata.title}
        subtitle={data.site.siteMetadata.description}
      />
      <ServiceSectionView />
      <Typography className={classes.text}>
        Make StartupResource.Center your own free, personal consultant so that
        you can receive expert guidance in all aspects of starting and growing
        your own business.
      </Typography>
    </div>
  );
};

export default HomeView;
