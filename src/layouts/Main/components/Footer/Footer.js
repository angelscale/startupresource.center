import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Typography,
  IconButton,
  Grid,
  List,
  ListItem,
} from '@material-ui/core';
import {
  Facebook,
  Twitter,
  Instagram,
  Pinterest,
  LinkedIn,
} from '@material-ui/icons';

import { graphql, useStaticQuery, Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import { MenuGroup } from '..';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    padding: theme.spacing(6, 0),
    background: theme.palette.background.footer,
  },
  footerContainer: {
    margin: '0 auto',
    maxWidth: theme.layout.contentWidth,
    widht: '100%',
    padding: theme.spacing(0, 2),
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
    color: 'rgba(255,255,255,.6)',
  },
  logoContainer: {
    margin: '0 auto',
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
      color: theme.palette.primary.light,
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
    width: '100%',
  },
  menuList: {
    width: 'auto',
    margin: '0 auto',
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
    '&:hover': {
      color: theme.palette.primary.light,
    },
  },
}));

const Footer = ({ navigation }) => {
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
    }
  `);

  return (
    <div className={classes.root}>
      <div className={classes.footerContainer}>
        <Grid container spacing={4} justifyContent="center">
          <Grid item sm={12} md={6} lg={4}>
            <List disablePadding>
              <ListItem disableGutters className={classes.logoContainerItem}>
                <div className={classes.logoContainer}>
                  <a href="/" title={data.site.siteMetadata.title}>
                    <StaticImage
                      className={classes.logoImage}
                      src="../../../../assets/images/StartupResourceCenter.png"
                      alt={data.site.siteMetadata.title}
                      loading="eager"
                    />
                  </a>
                </div>
              </ListItem>
              <ListItem disableGutters className={classes.logoContainerItem}>
                <div className={classes.logoContainer}>
                  <IconButton className={classes.socialIcon} component={Link}>
                    <Facebook className={classes.icon} />
                  </IconButton>
                  <IconButton className={classes.socialIcon}>
                    <LinkedIn className={classes.icon} />
                  </IconButton>
                  <IconButton className={classes.socialIcon}>
                    <Instagram className={classes.icon} />
                  </IconButton>
                  <IconButton className={classes.socialIcon}>
                    <Twitter className={classes.icon} />
                  </IconButton>
                  <IconButton className={classes.socialIcon}>
                    <Pinterest className={classes.icon} />
                  </IconButton>
                </div>
              </ListItem>
              <ListItem disableGutters className={classes.logoContainerItem}>
                Copyright &copy; 2021 Angel Scale LLC
              </ListItem>
            </List>
          </Grid>
          <Grid
            item
            sm={12}
            md={6}
            lg={8}
            className={classes.menuListContainer}
            container
            justifyContent="center"
          >
            <div className={classes.menuList}>
              <Grid container spacing={0}>
                {Object.values(navigation).map(({ id, name, href, tags }) => (
                  <Grid item key={id}>
                    {href === undefined ? (
                      <Typography
                        variant="body1"
                        color="secondary"
                        className={classes.listItemText}
                      >
                        {name}
                      </Typography>
                    ) : null}
                    <MenuGroup category={id} tags={tags} classes={classes} />
                  </Grid>
                ))}
              </Grid>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Footer;
