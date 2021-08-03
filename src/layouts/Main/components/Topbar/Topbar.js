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
    flexShrink: 0,
    width: 250,
    height: 'auto',
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
          {Object.values(navigation).map(({ id, name, tags, href }) => (
            <div key={id}>
              {href === undefined ? (
                <>
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
                      {name}
                    </Typography>
                    <ListItemIcon className={classes.listItemIcon}>
                      <ExpandMoreIcon
                        className={
                          openedPopoverId === id ? classes.expandOpen : ''
                        }
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
                    <MenuGroup
                      category={id}
                      tags={tags}
                      onClose={handleClose}
                      classes={classes}
                    />
                  </Popover>
                </>
              ) : (
                <ListItem
                  className={clsx(classes.listItem, 'menu-item--no-dropdown')}
                >
                  <Typography
                    variant="body1"
                    color="textPrimary"
                    component="a"
                    href={href}
                    className={clsx(classes.listItemText, 'menu-item')}
                  >
                    {name}
                  </Typography>
                </ListItem>
              )}
            </div>
          ))}
          {/* <ListItem
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
          </ListItem> */}
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
