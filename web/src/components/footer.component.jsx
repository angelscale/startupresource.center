import React from 'react';
import makeStyles from '@mui/styles/makeStyles';
import {
  Box,
  Container,
  Typography,
  IconButton,
  List,
  ListItem,
} from '@mui/material';
import {
  Facebook,
  Twitter,
  Instagram,
  Pinterest,
  LinkedIn,
} from '@mui/icons-material';
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

const Footer = ({ navigation }) => {
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
                src="../assets/images/StartupResourceCenter.png"
                alt={data.site.siteMetadata.title}
                loading="eager"
              />
            </Link>
            <Box>
              <div className={classes.otherNavigation}>
                <Link to="/terms-conditions">Terms &amp; condition</Link>
                <Link to="/privacy-policy">Privacy policy</Link>
              </div>
              <Typography color="textSecondary" className={classes.copyright}>
                {`Copyright © ${new Date().getFullYear()} Angel Scale LLC`}
              </Typography>
            </Box>
          </Box>
          <Box>
            <List disablePadding className={classes.navigationContainer}>
              {navigation.map(({ title, slug, href }) => (
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
                <Link to="https://facebook.com">
                  <IconButton size="large">
                    <Facebook />
                  </IconButton>
                </Link>
              </Box>
              <Box>
                <Link to="https://linkedin.com">
                  <IconButton size="large">
                    <LinkedIn />
                  </IconButton>
                </Link>
              </Box>
              <Box>
                <Link to="https://instagram.com">
                  <IconButton size="large">
                    <Instagram />
                  </IconButton>
                </Link>
              </Box>
              <Box>
                <Link to="https://twitter.com">
                  <IconButton size="large">
                    <Twitter />
                  </IconButton>
                </Link>
              </Box>
              <Box>
                <Link to="https://pinterest.com">
                  <IconButton size="large">
                    <Pinterest />
                  </IconButton>
                </Link>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </div>
  );
};

export default Footer;
