import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Typography, colors, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Hero from 'components/Hero/hero.component';
import { Icon } from 'components/atoms';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    // width: '100%',
    margin: theme.spacing(2),
    marginLeft: theme.spacing(8),
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
      <div className={classes.heading}>
        <Grid container>
          <Grid
            item
            container
            xs={2}
            md={1}
            alignContent="flex-start"
            justifyContent="flex-start"
          >
            <Icon
              fontIconClass="fas fa-quote-left"
              fontIconColor={colors.grey[700]}
              size="large"
            />
          </Grid>
          <Grid
            item
            container
            xs={8}
            md={10}
            alignContent="center"
            justifyContent="center"
          >
            <Typography className={classes.header}>
              A 'Brilliant Idea' should be enough to ensure a successful
              business startup, but entrepreneurs learn again and again that it
              takes so much more.
            </Typography>
          </Grid>
          <Grid
            item
            container
            xs={2}
            md={1}
            alignContent="flex-end"
            justifyContent="flex-end"
          >
            <Icon
              fontIconClass="fas fa-quote-right"
              fontIconColor={colors.grey[700]}
              size="large"
            />
          </Grid>
        </Grid>
      </div>
      <Typography className={classes.text}>
        Make "StartUp Resource Center" your own free, personal Consultant so
        that you can receive expert guidance in all aspects of starting and
        growing your own business.
      </Typography>
    </div>
  );
};

export default HomeView;
