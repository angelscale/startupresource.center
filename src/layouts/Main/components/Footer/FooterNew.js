import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Box,
  Container,
  Typography,
  IconButton,
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

const useStyles = makeStyles((theme) => ({
  root: {
    background: theme.palette.alternate.main,
    width: '100%',
    padding: theme.spacing(6, 0),
    borderTopWidth: '1px',
    borderTopStyle: 'solid',
    borderTopColor: theme.palette.divider,
  },
  footerContainer: {
    flexDirection: 'column-reverse',
    [theme.breakpoints.up('md')]: {
      flexDirection: 'row',
    },
  },
  logoImage: {
    maxWidth: '15rem',
    marginBottom: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      maxWidth: '17.5rem',
    },
  },
  navigationContainer: {
    display: 'flex',
    flexDirection: 'column',
    '& li': {
      fontSize: '1rem',
      whiteSpace: 'nowrap',
      '& a': {
        color: theme.palette.text.primary,
      },
    },
    '& li:not(:last-child)': {
      marginRight: theme.spacing(4),
    },
    [theme.breakpoints.up('sm')]: {
      flexDirection: 'row',
    },
  },
  socialContainer: {
    display: 'flex',
    justifyContent: 'center',
    margin: theme.spacing(4, 0),
    [theme.breakpoints.up('md')]: {
      justifyContent: 'flex-end',
      margin: 0,
    },
    '& div > a': {
      color: theme.palette.text.primary,
    },
  },
  copyright: {
    fontSize: '0.75rem',
    paddingBottom: theme.spacing(1),
    '& span': {
      color: theme.palette.text.primary,
      marginLeft: theme.spacing(2),
    },
  },
  otherNavigation: {
    '& a': {
      color: theme.palette.text.primary,
      marginRight: theme.spacing(2),
    },
  },
}));

const mockNavigation = [
  {
    title: 'Plan',
    slug: 'plan',
    href: '/plan',
  },
  {
    title: 'Launch',
    slug: 'launch',
    href: '/launch',
  },
  {
    title: 'Manage',
    slug: 'manage',
    href: '/manage',
  },
  {
    title: 'Grow',
    slug: 'grow',
    href: '/grow',
  },
  {
    title: 'Startup Training',
    slug: 'startup-training',
    href: '/startup-training',
  },
  {
    title: 'About Us',
    slug: 'about-us',
    href: '/about-us',
  },
  {
    title: 'Contact Us',
    slug: 'contact-us',
    href: '/contact-us',
  },
];

const FooterNew = () => {
  const classes = useStyles();
  const data = useStaticQuery(graphql`
    query FooterNewQuery {
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
      <Container maxWidth="lg">
        <Box
          display="flex"
          justifyContent="space-between"
          className={classes.footerContainer}
        >
          <Box>
            <Link to="/" title={data.site.siteMetadata.title}>
              <StaticImage
                className={classes.logoImage}
                src="../../../../assets/images/StartupResourceCenter.png"
                alt={data.site.siteMetadata.title}
                loading="eager"
              />
            </Link>
            <Box>
              <div className={classes.otherNavigation}>
                <Link href="/terms-conditions">Terms &amp; condition</Link>
                <Link href="/privacy-policy">Privacy policy</Link>
              </div>
              <Typography color="textSecondary" className={classes.copyright}>
                {`Copyright © ${new Date().getFullYear()} Angel Scale LLC`}
              </Typography>
            </Box>
          </Box>
          <Box>
            <List disablePadding className={classes.navigationContainer}>
              {mockNavigation.map(({ title, slug, href }) => (
                <ListItem
                  key={slug}
                  disableGutters
                  className={classes.logoContainerItem}
                >
                  <Link to={href}>{title}</Link>
                </ListItem>
              ))}
            </List>
            <Box className={classes.socialContainer}>
              <Box>
                <IconButton component={Link} href="https://facebook.com">
                  <Facebook />
                </IconButton>
              </Box>
              <Box>
                <IconButton component={Link} href="https://facebook.com">
                  <LinkedIn />
                </IconButton>
              </Box>
              <Box>
                <IconButton component={Link} href="https://facebook.com">
                  <Instagram />
                </IconButton>
              </Box>
              <Box>
                <IconButton component={Link} href="https://facebook.com">
                  <Twitter />
                </IconButton>
              </Box>
              <Box>
                <IconButton component={Link} href="https://facebook.com">
                  <Pinterest />
                </IconButton>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </div>
  );
};

export default FooterNew;
