import React from 'react';
import clsx from 'clsx';
import {
  Box,
  Button,
  Toolbar,
  Hidden,
  InputBase,
  List,
  ListItem,
  Typography,
  IconButton,
  styled,
  alpha,
} from '@mui/material';
import {
  Facebook,
  Twitter,
  Instagram,
  Pinterest,
  LinkedIn,
} from '@mui/icons-material';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import { useStaticQuery, graphql, Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

const PREFIX = 'Topbar';

const classes = {
  spacer: `${PREFIX}-spacer`,
  navigationContainer: `${PREFIX}-navigationContainer`,
  toolbar: `${PREFIX}-toolbar`,
  navLink: `${PREFIX}-navLink`,
  listItem: `${PREFIX}-listItem`,
  listItemActive: `${PREFIX}-listItemActive`,
  listItemText: `${PREFIX}-listItemText`,
  listItemButton: `${PREFIX}-listItemButton`,
  listItemIcon: `${PREFIX}-listItemIcon`,
  popover: `${PREFIX}-popover`,
  iconButton: `${PREFIX}-iconButton`,
  expandOpen: `${PREFIX}-expandOpen`,
  logoContainer: `${PREFIX}-logoContainer`,
  logoImage: `${PREFIX}-logoImage`,
  menu: `${PREFIX}-menu`,
  menuItem: `${PREFIX}-menuItem`,
  menuGroupItem: `${PREFIX}-menuGroupItem`,
  menuGroupTitle: `${PREFIX}-menuGroupTitle`,
  socialContainer: `${PREFIX}-socialContainer`,
  navigation: `${PREFIX}-navigation`,
  search: `${PREFIX}-search`,
  searchIcon: `${PREFIX}-searchIcon`,
  inputRoot: `${PREFIX}-inputRoot`,
  inputInput: `${PREFIX}-inputInput`,
};

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  [`& .${classes.spacer}`]: {
    flexGrow: 1,
  },

  [`& .${classes.navigationContainer}`]: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  [`&.${classes.toolbar}`]: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '0 auto',
    zIndex: 999,
    maxWidth: theme.layout.contentWidth,
    width: '100%',
    padding: theme.spacing(0, 2),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(0, 4),
    },
  },

  [`& .${classes.navLink}`]: {
    '&:hover': {
      color: theme.palette.primary.dark,
    },
  },

  [`& .${classes.listItem}`]: {
    cursor: 'pointer',
    paddingRight: 1,
    '&:hover > .menu-item, &:hover svg': {
      color: theme.palette.primary.dark,
    },
    '&.menu-item--no-dropdown': {
      paddingRight: 0,
    },
  },

  [`& .${classes.listItemActive}`]: {
    '&> .menu-item': {
      color: theme.palette.primary.dark,
    },
  },

  [`& .${classes.listItemText}`]: {
    flex: '0 0 auto',
    marginRight: theme.spacing(1),
    whiteSpace: 'nowrap',
    textTransform: 'capitalize',
  },

  [`& .${classes.listItemButton}`]: {
    whiteSpace: 'nowrap',
  },

  [`& .${classes.listItemIcon}`]: {
    minWidth: 'auto',
  },

  [`& .${classes.popover}`]: {
    padding: theme.spacing(4),
    border: theme.spacing(2),
    boxShadow: '0 0.5rem 2rem 2px rgba(116, 123, 144, 0.09)',
    minWidth: 350,
    marginTop: theme.spacing(2),
    borderRadius: theme.shape.borderRadius,
  },

  [`& .${classes.iconButton}`]: {
    marginLeft: theme.spacing(1),
    padding: 0,
    '&:hover': {
      background: 'transparent',
    },
  },

  [`& .${classes.expandOpen}`]: {
    transform: 'rotate(180deg)',
    color: theme.palette.primary.dark,
  },

  [`& .${classes.logoContainer}`]: {
    padding: theme.spacing(2, 0),
    maxWidth: '12.5rem',
    [theme.breakpoints.up('md')]: {
      maxWidth: '20rem',
    },
  },

  [`& .${classes.logoImage}`]: {
    width: '100%',
    height: 'auto',
  },

  [`& .${classes.menu}`]: {
    display: 'flex',
    justifyContent: 'space-between',
  },

  [`& .${classes.menuItem}`]: {
    marginRight: theme.spacing(2),
    '&:last-child': {
      marginRight: 0,
    },
  },

  [`& .${classes.menuGroupItem}`]: {
    paddingTop: 0,
    marginLeft: theme.spacing(1),
  },

  [`& .${classes.menuGroupTitle}`]: {
    textTransform: 'uppercase',
  },

  [`& .${classes.socialContainer}`]: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: theme.spacing(4, 0),
    [theme.breakpoints.up('md')]: {
      justifyContent: 'flex-end',
      margin: 0,
    },
    '& div > a': {
      color: theme.palette.text.secondary,
    },
  },

  [`& .${classes.navigation}`]: {
    padding: theme.spacing(1, 0),
  },

  [`& .${classes.search}`]: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },

  [`& .${classes.searchIcon}`]: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  [`& .${classes.inputRoot}`]: {
    color: 'inherit',
  },

  [`& .${classes.inputInput}`]: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

const Topbar = ({
  themeMode,
  themeToggler,
  onSidebarOpen,
  navigation,
  socialMedia,
  className,
  ...rest
}) => {
  const data = useStaticQuery(graphql`
    query HeaderAltQuery {
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
    <StyledToolbar disableGutters className={classes.toolbar} {...rest}>
      <Box className={classes.logoContainer}>
        <Link to="/" title={data.site.siteMetadata.title}>
          <StaticImage
            className={classes.logoImage}
            src="../assets/images/StartupResourceCenter.png"
            alt={data.site.siteMetadata.title}
            loading="eager"
            layout="constrained"
            backgroundColor="transparent"
            placeholder="none"
          />
        </Link>
      </Box>
      <Box className={classes.navigation}>
        <Hidden mdDown>
          <Box className={classes.socialContainer}>
            <Box>
              <IconButton
                component="a"
                href={socialMedia.facebook}
                size="large"
              >
                <Facebook />
              </IconButton>
            </Box>
            <Box>
              <IconButton
                component="a"
                href={socialMedia.linkedin}
                size="large"
              >
                <LinkedIn />
              </IconButton>
            </Box>
            <Box>
              <IconButton
                component="a"
                href={socialMedia.instagram}
                size="large"
              >
                <Instagram />
              </IconButton>
            </Box>
            <Box>
              <IconButton component="a" href={socialMedia.twitter} size="large">
                <Twitter />
              </IconButton>
            </Box>
            <Box>
              <IconButton
                component="a"
                href={socialMedia.pinterest}
                size="large"
              >
                <Pinterest />
              </IconButton>
            </Box>
            <Box>
              <Link to="/about-us">
                <Button variant="text">About Us</Button>
              </Link>
            </Box>
            {/* <Box>
              <div className={classes.search}>
                <div className={classes.searchIcon}>
                  <SearchIcon />
                </div>
                <InputBase
                  placeholder="Search…"
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                  }}
                  inputProps={{ 'aria-label': 'search' }}
                />
              </div>
            </Box> */}
          </Box>
          <List disablePadding className={classes.navigationContainer}>
            {navigation.map(({ slug, title }) => (
              <ListItem
                key={slug}
                className={clsx(classes.listItem, 'menu-item--no-dropdown')}
              >
                <Typography
                  variant="body1"
                  color="textPrimary"
                  component={Link}
                  to={`/${slug}`}
                  className={clsx(classes.listItemText, 'menu-item')}
                >
                  <Button variant="text">{title}</Button>
                </Typography>
              </ListItem>
            ))}
          </List>
        </Hidden>
      </Box>
      <Hidden mdUp>
        <IconButton
          className={classes.iconButton}
          onClick={onSidebarOpen}
          aria-label="Menu"
          size="large"
        >
          <MenuIcon />
        </IconButton>
      </Hidden>
    </StyledToolbar>
  );
};

export default Topbar;
