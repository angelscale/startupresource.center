import React from 'react';
import {
  Box,
  Button,
  Container,
  Typography,
  IconButton,
  List,
  ListItem,
  styled,
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

const PREFIX = 'Footer';

const classes = {
  root: `${PREFIX}-root`,
  footerContainer: `${PREFIX}-footerContainer`,
  logoImage: `${PREFIX}-logoImage`,
  navigationContainer: `${PREFIX}-navigationContainer`,
  subNavigationContainer: `${PREFIX}-subNavigationContainer`,
  socialContainer: `${PREFIX}-socialContainer`,
  copyright: `${PREFIX}-copyright`,
  otherNavigation: `${PREFIX}-otherNavigation`,
};

const Root = styled('div')(({ theme }) => ({
  [`&.${classes.root}`]: {
    background: theme.palette.alternate.main,
    width: '100%',
    padding: theme.spacing(6, 0),
    borderTopWidth: '1px',
    borderTopStyle: 'solid',
    borderTopColor: theme.palette.divider,
  },

  [`& .${classes.footerContainer}`]: {
    flexDirection: 'column-reverse',
    [theme.breakpoints.up('md')]: {
      flexDirection: 'row',
    },
  },

  [`& .${classes.logoImage}`]: {
    maxWidth: '15rem',
    marginBottom: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      maxWidth: '17.5rem',
    },
  },

  [`& .${classes.navigationContainer}`]: {
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
    marginLeft: theme.spacing(0),
    [theme.breakpoints.up('sm')]: {
      flexDirection: 'row',
    },
  },

  [`& .${classes.subNavigationContainer}`]: {
    display: 'block',
    '& li': {
      fontSize: '1rem',
      whiteSpace: 'nowrap',
      '& a': {
        color: theme.palette.text.primary,
      },
    },
  },

  [`& .${classes.socialContainer}`]: {
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

  [`& .${classes.copyright}`]: {
    fontSize: '0.75rem',
    paddingBottom: theme.spacing(1),
    '& span': {
      color: theme.palette.text.primary,
      marginLeft: theme.spacing(2),
    },
  },

  [`& .${classes.otherNavigation}`]: {
    '& a': {
      color: theme.palette.text.primary,
      marginRight: theme.spacing(2),
    },
  },
}));

const TermsButton = styled(Button)({
  textTransform: 'capitalize',
});

const Footer = ({ navigation, socialMedia }) => {
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
    <Root className={classes.root}>
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
              <Typography color="textSecondary" className={classes.copyright}>
                {`Copyright © ${new Date().getFullYear()} Angel Scale LLC`}
              </Typography>
              <div className={classes.otherNavigation}>
                <Link to="/terms-conditions">
                  <TermsButton variant="text">
                    Terms &amp; Conditions
                  </TermsButton>
                </Link>
                <Link to="/privacy-policy">
                  <TermsButton variant="text">Privacy Policy</TermsButton>
                </Link>
                <Link to="/disclaimer">
                  <TermsButton variant="text">Disclaimer</TermsButton>
                </Link>
                <Link to="/cookie-policy">
                  <TermsButton variant="text">Cookie Policy</TermsButton>
                </Link>
                <TermsButton
                  variant="text"
                  onClick={
                    typeof window !== 'undefined'
                      ? window.displayPreferenceModal
                      : null
                  }
                >
                  Cookie Preferences
                </TermsButton>
              </div>
            </Box>
          </Box>
          <Box>
            <List disablePadding className={classes.navigationContainer}>
              {navigation.map(({ title, slug, subCategories }) => (
                <ListItem
                  key={slug}
                  className={classes.subNavigationContainer}
                  disableGutters
                >
                  <Link to={`/${slug}`}>{title}</Link>
                </ListItem>
              ))}
            </List>
            <Box className={classes.socialContainer}>
              <Box>
                <IconButton
                  size="large"
                  component={'a'}
                  href={socialMedia.facebook}
                >
                  <Facebook />
                </IconButton>
              </Box>
              <Box>
                <IconButton
                  size="large"
                  component={'a'}
                  href={socialMedia.linkedin}
                >
                  <LinkedIn />
                </IconButton>
              </Box>
              <Box>
                <IconButton
                  size="large"
                  component={'a'}
                  href={socialMedia.instagram}
                >
                  <Instagram />
                </IconButton>
              </Box>
              <Box>
                <IconButton
                  size="large"
                  component={'a'}
                  href={socialMedia.twitter}
                >
                  <Twitter />
                </IconButton>
              </Box>
              <Box>
                <IconButton
                  size="large"
                  component={'a'}
                  href={socialMedia.pinterest}
                >
                  <Pinterest />
                </IconButton>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </Root>
  );
};

export default Footer;
