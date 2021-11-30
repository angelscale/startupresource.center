import React, { useState } from 'react';
import clsx from 'clsx';
import { alpha, makeStyles } from '@material-ui/core/styles';
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
} from '@material-ui/core';
import {
  Facebook,
  Twitter,
  Instagram,
  Pinterest,
  LinkedIn,
} from '@material-ui/icons';
import SearchIcon from '@material-ui/icons/Search';
import MenuIcon from '@material-ui/icons/Menu';
import { useStaticQuery, graphql, Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

const useStyles = makeStyles((theme) => ({
  spacer: {
    flexGrow: 1,
  },
  navigationContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  toolbar: {
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
  navLink: {
    '&:hover': {
      color: theme.palette.primary.dark,
    },
  },
  listItem: {
    cursor: 'pointer',
    paddingRight: 1,
    '&:hover > .menu-item, &:hover svg': {
      color: theme.palette.primary.dark,
    },
    '&.menu-item--no-dropdown': {
      paddingRight: 0,
    },
  },
  listItemActive: {
    '&> .menu-item': {
      color: theme.palette.primary.dark,
    },
  },
  listItemText: {
    flex: '0 0 auto',
    marginRight: theme.spacing(1),
    whiteSpace: 'nowrap',
    textTransform: 'capitalize',
  },
  listItemButton: {
    whiteSpace: 'nowrap',
  },
  listItemIcon: {
    minWidth: 'auto',
  },
  popover: {
    padding: theme.spacing(4),
    border: theme.spacing(2),
    boxShadow: '0 0.5rem 2rem 2px rgba(116, 123, 144, 0.09)',
    minWidth: 350,
    marginTop: theme.spacing(2),
    borderRadius: theme.shape.borderRadius,
  },
  iconButton: {
    marginLeft: theme.spacing(1),
    padding: 0,
    '&:hover': {
      background: 'transparent',
    },
  },
  expandOpen: {
    transform: 'rotate(180deg)',
    color: theme.palette.primary.dark,
  },
  logoContainer: {
    padding: theme.spacing(2, 0),
    maxWidth: '12.5rem',
    [theme.breakpoints.up('md')]: {
      maxWidth: '15rem',
    },
  },
  logoImage: {
    width: '100%',
    height: 'auto',
  },
  menu: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  menuItem: {
    marginRight: theme.spacing(2),
    '&:last-child': {
      marginRight: 0,
    },
  },
  menuGroupItem: {
    paddingTop: 0,
    marginLeft: theme.spacing(1),
  },
  menuGroupTitle: {
    textTransform: 'uppercase',
  },
  socialContainer: {
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
  navigation: {
    padding: theme.spacing(1, 0),
  },
  search: {
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
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
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
  className,
  ...rest
}) => {
  const classes = useStyles();
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

  const [anchorEl, setAnchorEl] = useState(null);
  const [openedPopoverId, setOpenedPopoverId] = useState(null);

  const handleClick = (event, popoverId) => {
    setAnchorEl(event.target);
    setOpenedPopoverId(popoverId);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setOpenedPopoverId(null);
  };

  return (
    <Toolbar disableGutters className={classes.toolbar} {...rest}>
      <Box className={classes.logoContainer}>
        <a href="/" title={data.site.siteMetadata.title}>
          <StaticImage
            className={classes.logoImage}
            src="../../../../assets/images/StartupResourceCenter.png"
            alt={data.site.siteMetadata.title}
            loading="eager"
          />
        </a>
      </Box>
      <Box className={classes.navigation}>
        <Hidden smDown>
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
            <Box>
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
            </Box>
          </Box>
          <List disablePadding className={classes.navigationContainer}>
            {navigation.map(({ slug, title, href }) => (
              <ListItem
                key={slug}
                className={clsx(classes.listItem, 'menu-item--no-dropdown')}
              >
                <Typography
                  variant="body1"
                  color="textPrimary"
                  component="a"
                  href={href}
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
        >
          <MenuIcon />
        </IconButton>
      </Hidden>
    </Toolbar>
  );
};

export default Topbar;
