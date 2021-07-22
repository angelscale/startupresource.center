import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import {
  Typography,
  IconButton,
  Grid,
  List,
  ListItem,
} from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import PinterestIcon from '@material-ui/icons/Pinterest';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import { MenuSection } from '..';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(6, 0),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(12, 0),
    },
    background: theme.palette.background.footer,
  },
  footerContainer: {
    margin: '0 auto',
    padding: theme.spacing(0, 2),
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(0, 8),
    },
  },
  listItemText: {
    flex: '0 0 auto',
    marginRight: theme.spacing(1),
    marginTop: theme.spacing(2),
    whiteSpace: 'nowrap',
    textTransform: 'capitalize',
    fontSize: '1.1em',
  },
  logoContainerItem: {
    width: '100%',
  },
  logoContainer: {
    width: 300,
    height: 'auto',
  },
  logoImage: {
    width: '100%',
    height: 'auto',
  },
  groupTitle: {
    textTransform: 'uppercase',
    color: theme.palette.primary.dark,
    marginBottom: theme.spacing(1),
  },
  socialIcon: {
    padding: 0,
    marginRight: theme.spacing(1),
    color: 'rgba(255,255,255,.6)',
    '&:hover': {
      background: 'transparent',
    },
    '&:last-child': {
      marginRight: 0,
    },
  },
  socialContainer: {
    padding: 0,
    margin: '0 auto',
  },
  icon: {
    fontSize: 24,
  },
  menuListContainer: {
    padding: '0 !important',
  },
  menu: {
    display: 'flex',
  },
  menuItem: {
    margin: theme.spacing(2),
    '&:last-child': {
      marginBottom: 0,
    },
  },
  menuGroupItem: {
    paddingTop: 0,
    paddingBottom: theme.spacing(1 / 2),
    marginLeft: theme.spacing(1),
    '&:last-child': {
      paddingBottom: 0,
    },
  },
  menuGroupTitle: {
    textTransform: 'uppercase',
    color: 'white',
  },
  divider: {
    width: '100%',
  },
  navLink: {
    color: 'rgba(255,255,255,.6)',
    fontSize: '1em',
  },
  wrapper: {
    margin: 'auto',
  },
}));

const Footer = ({ navigation, className, ...rest }) => {
  const classes = useStyles();
  const data = useStaticQuery(graphql`
    query FooterQuery {
      site {
        siteMetadata {
          title
          description
          siteUrl
          siteTitleMeta
          siteDescriptionMeta
          shareImageWidth
          shareImageHeight
          shortTitle
          siteIcon
        }
      }
      logo: file(relativePath: { eq: "StartupResourceCenter.png" }) {
        childImageSharp {
          fluid(maxWidth: 250) {
            ...GatsbyImageSharpFluid
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
    }
  `);

  return (
    <div {...rest} className={clsx(classes.root, className)}>
      <div className={classes.wrapper}>
        <div className={classes.footerContainer}>
          <Grid container spacing={4} justifyContent="center">
            <Grid item sm={12} md={6} lg={4} xl={2}>
              <List disablePadding>
                <ListItem disableGutters className={classes.logoContainerItem}>
                  <div className={classes.logoContainer}>
                    <a href="/" title={data.site.siteMetadata.title}>
                      <Img
                        className={classes.logoImage}
                        fluid={data.logo.childImageSharp.fluid}
                        alt={data.site.siteMetadata.title}
                        loading="eager"
                        fadeIn={false}
                      />
                    </a>
                  </div>
                </ListItem>
                <ListItem disableGutters className={classes.logoContainerItem}>
                  <div className={classes.logoContainer}>
                    <IconButton className={classes.socialIcon}>
                      <FacebookIcon className={classes.icon} />
                    </IconButton>
                    <IconButton className={classes.socialIcon}>
                      <InstagramIcon className={classes.icon} />
                    </IconButton>
                    <IconButton className={classes.socialIcon}>
                      <TwitterIcon className={classes.icon} />
                    </IconButton>
                    <IconButton className={classes.socialIcon}>
                      <PinterestIcon className={classes.icon} />
                    </IconButton>
                  </div>
                </ListItem>
              </List>
            </Grid>
            <Grid
              item
              sm={12}
              md={6}
              lg={8}
              xl={10}
              className={classes.menuListContainer}
            >
              <Grid container spacing={0}>
                {navigation.map(({ id, href, tags, children }) => (
                  <Grid item key={id}>
                    {href === undefined ? (
                      <Typography
                        variant="body1"
                        color="secondary"
                        className={clsx(classes.listItemText, 'menu-item')}
                      >
                        {id.replace(/[_-]/g, ' ')}
                      </Typography>
                    ) : null}
                    <MenuSection
                      id={id}
                      tags={tags}
                      children={children}
                      classes={classes}
                    />
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default Footer;
