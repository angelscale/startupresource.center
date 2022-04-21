import React from 'react';
import clsx from 'clsx';
import { Link } from 'gatsby';
import { List, ListItem, Typography, ListItemIcon, Divider, styled } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { MenuGroup } from 'components';

const PREFIX = 'SidebarNav';

const classes = {
  root: `${PREFIX}-root`,
  listItem: `${PREFIX}-listItem`,
  navLink: `${PREFIX}-navLink`,
  listItemText: `${PREFIX}-listItemText`,
  listItemIcon: `${PREFIX}-listItemIcon`,
  closeIcon: `${PREFIX}-closeIcon`,
  menu: `${PREFIX}-menu`,
  menuItem: `${PREFIX}-menuItem`,
  menuGroupItem: `${PREFIX}-menuGroupItem`,
  menuGroupTitle: `${PREFIX}-menuGroupTitle`,
  divider: `${PREFIX}-divider`
};

const StyledList = styled(List)((
  {
    theme
  }
) => ({
  [`&.${classes.root}`]: {},

  [`& .${classes.listItem}`]: {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },

  [`& .${classes.navLink}`]: {
    '&:hover': {
      color: theme.palette.primary.dark,
    },
  },

  [`& .${classes.listItemText}`]: {
    flex: '0 0 auto',
    marginRight: theme.spacing(1),
    whiteSpace: 'nowrap',
    textTransform: 'capitalize',
  },

  [`& .${classes.listItemIcon}`]: {
    minWidth: 'auto',
  },

  [`& .${classes.closeIcon}`]: {
    justifyContent: 'flex-end',
    cursor: 'pointer',
  },

  [`& .${classes.menu}`]: {
    display: 'flex',
  },

  [`& .${classes.menuItem}`]: {
    marginRight: theme.spacing(8),
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

  [`& .${classes.divider}`]: {
    width: '100%',
  }
}));

const SidebarNav = ({ navigation, onClose, className, ...rest }) => {


  return (
    <StyledList {...rest} className={clsx(classes.root, className)}>
      <ListItem className={classes.closeIcon} onClick={() => onClose()}>
        <ListItemIcon className={classes.listItemIcon}>
          <CloseIcon fontSize="small" />
        </ListItemIcon>
      </ListItem>
      {/* <ListItem className={classes.listItem}>
        <Button
          variant="contained"
          fullWidth
          color="primary"
          component="a"
          target="blank"
          href="/"
          className={classes.listItemButton}
        >
          Sign In
        </Button>
      </ListItem> */}
      <>
        {navigation.map(({ slug, title, subCategories }) => (
          <>
            <ListItem className={classes.listItem}>
              <Typography
                variant="h6"
                color="textPrimary"
                component={Link}
                to={`/${slug}`}
                className={classes.listItemText}
                gutterBottom
              >
                {title}
              </Typography>
              <MenuGroup
                categorySlug={slug}
                subCategories={subCategories}
                onClose={onClose}
                classes={classes}
              />
            </ListItem>
            <ListItem className={classes.listItem}>
              <Divider className={classes.divider} />
            </ListItem>
            {/* <ListItem className={classes.listItem}>
                <Button
                  variant="outlined"
                  fullWidth
                  component={Link}
                  to={`/${slug}`}
                >
                  {title}
                </Button>
              </ListItem> */}
          </>
        ))}
      </>
    </StyledList>
  );
};

export default SidebarNav;
