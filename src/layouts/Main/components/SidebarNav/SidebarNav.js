/* eslint-disable react/no-multi-comp */
/* eslint-disable react/display-name */
import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import {
  List,
  ListItem,
  Typography,
  ListItemIcon,
  Divider,
  Button,
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import { MenuSection } from '..';

const useStyles = makeStyles((theme) => ({
  root: {},
  listItem: {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  navLink: {
    '&:hover': {
      color: theme.palette.primary.dark,
    },
  },
  listItemText: {
    flex: '0 0 auto',
    marginRight: theme.spacing(1),
    whiteSpace: 'nowrap',
    textTransform: 'capitalize',
  },
  listItemIcon: {
    minWidth: 'auto',
  },
  closeIcon: {
    justifyContent: 'flex-end',
    cursor: 'pointer',
  },
  menu: {
    display: 'flex',
  },
  menuItem: {
    marginRight: theme.spacing(8),
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
  divider: {
    width: '100%',
  },
}));

const SidebarNav = ({ navigation, onClose, className, ...rest }) => {
  const classes = useStyles();

  return (
    <List {...rest} className={clsx(classes.root, className)}>
      <ListItem className={classes.closeIcon} onClick={() => onClose()}>
        <ListItemIcon className={classes.listItemIcon}>
          <CloseIcon fontSize="small" />
        </ListItemIcon>
      </ListItem>
      <ListItem className={classes.listItem}>
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
      </ListItem>
      <>
        {navigation.map(({ id, href, tags, children }) => (
          <>
            {href === undefined ? (
              <>
                <ListItem className={classes.listItem}>
                  <Typography
                    variant="h6"
                    color="textPrimary"
                    gutterBottom
                    className={classes.listItemText}
                  >
                    {id.replace(/[_-]/g, ' ')}
                  </Typography>
                  <MenuSection
                    id={id}
                    tags={tags}
                    children={children}
                    onClose={onClose}
                    classes={classes}
                  />
                </ListItem>
                <ListItem className={classes.listItem}>
                  <Divider className={classes.divider} />
                </ListItem>
              </>
            ) : (
              <ListItem className={classes.listItem}>
                <Button variant="outlined" fullWidth component="a" href={href}>
                  {id.replace(/[_-]/g, ' ')}
                </Button>
              </ListItem>
            )}
          </>
        ))}
      </>
    </List>
  );
};

export default SidebarNav;
