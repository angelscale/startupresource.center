import React, { useState } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import {
  Toolbar,
  Hidden,
  List,
  ListItem,
  ListItemIcon,
  Popover,
  Typography,
  IconButton,
  Button,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MenuIcon from '@material-ui/icons/Menu';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { MenuGroup } from '..';

const useStyles = makeStyles((theme) => ({
  flexGrow: {
    flexGrow: 1,
  },
  navigationContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  toolbar: {
    zIndex: 999,
    maxWidth: theme.layout.contentWidth,
    width: '100%',
    margin: '0 auto',
    padding: theme.spacing(0, 2),
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
    flexShrink: 0,
    width: 250,
    height: 50,
    [theme.breakpoints.down('xs')]: {
      width: 200,
      height: 40,
    },
  },
  logoImage: {
    width: '100%',
    height: '100%',
  },
  menu: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  menuItem: {
    marginRight: theme.spacing(5),
    '&:last-child': {
      marginRight: 0,
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
    query HeaderQuery {
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

  const navItems = [];
  navigation.forEach(({ id, title, children }) => {
    if (children.length > 0) {
      const navChildren = [];
      var section = [];
      var count = 0;
      children.forEach((child) => {
        section.push(
          <MenuGroup
            key={child.id}
            id={child.id}
            groupTitle={child.groupTitle}
            tags={child.tags}
            onClose={handleClose}
          />,
        );
        count += child.tags.length + 1;
        if (count >= 10) {
          navChildren.push(
            <div key={`${id}-${child.id}`} className={classes.menuItem}>
              {section}
            </div>,
          );
          section = [];
          count = 0;
        }
      });
      if (section.length > 0) {
        navChildren.push(
          <div key={`${id}-last`} className={classes.menuItem}>
            {section}
          </div>,
        );
        section = [];
        count = 0;
      }
      navItems.push(
        <div key={id}>
          <ListItem
            aria-describedby={id}
            onClick={(e) => handleClick(e, id)}
            className={clsx(
              classes.listItem,
              openedPopoverId === id ? classes.listItemActive : '',
            )}
          >
            <Typography
              variant="body1"
              color="textPrimary"
              className={clsx(classes.listItemText, 'menu-item')}
            >
              {title}
            </Typography>
            <ListItemIcon className={classes.listItemIcon}>
              <ExpandMoreIcon
                className={openedPopoverId === id ? classes.expandOpen : ''}
                fontSize="small"
              />
            </ListItemIcon>
          </ListItem>
          <Popover
            elevation={1}
            id={id}
            open={openedPopoverId === id}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'center',
            }}
            classes={{ paper: classes.popover }}
          >
            <div className={classes.menu}>{navChildren}</div>
          </Popover>
        </div>,
      );
    } else {
      navItems.push(
        <ListItem className={clsx(classes.listItem, 'menu-item--no-dropdown')}>
          <Typography
            variant="body1"
            color="textPrimary"
            className={clsx(classes.listItemText, 'menu-item')}
            component="a"
            href={`/${id}/`}
          >
            {title}
          </Typography>
        </ListItem>,
      );
    }
  });

  return (
    <Toolbar disableGutters className={classes.toolbar} {...rest}>
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
      <div className={classes.flexGrow} />
      <Hidden smDown>
        <List disablePadding className={classes.navigationContainer}>
          {navItems}
          <ListItem
            className={clsx(classes.listItem, 'menu-item--no-dropdown')}
          >
            <Button
              variant="contained"
              color="primary"
              component="a"
              target="blank"
              href="/"
              className={classes.listItemButton}
            >
              Sign In
            </Button>
          </ListItem>
        </List>
      </Hidden>
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
