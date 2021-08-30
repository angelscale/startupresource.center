import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Typography, colors } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Hero from 'components/Hero/hero.component';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    width: '100%',
    margin: theme.spacing(2),
    marginLeft: theme.spacing(10),
    padding: theme.spacing(4),
    borderTopLeftRadius: theme.spacing(4),
    borderBottomLeftRadius: theme.spacing(4),
    background: colors.blueGrey[100] + '40',
  },
  text: {
    padding: theme.spacing(4),
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
      ></Hero>
      <div className={classes.heading}>
        <Typography variant="h4">
          A "Brilliant Idea" should be enough to ensure a successful business
          startup, but entrepreneurs learn again and again that it takes so much
          more.{' '}
        </Typography>
      </div>
      <div className={classes.text}>
        <Typography variant="h6">
          Make "StartUp Resource Center" your own free, personal Consultant so
          that you can receive expert guidance in all aspects of starting and
          growing your own business.
        </Typography>
      </div>
    </div>
  );
};

export default HomeView;
