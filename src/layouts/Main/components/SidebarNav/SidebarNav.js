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
import { MenuGroup } from '..';

const useStyles = makeStyles((theme) => ({
  root: {},
  listItem: {
    flexDirection: 'column',
    alignItems: 'flex-start',
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
  divider: {
    width: '100%',
  },
}));

const SidebarNav = ({ navigation, onClose, className, ...rest }) => {
  const classes = useStyles();

  // const MenuGroup = (props) => {
  //   const { item } = props;
  //   return (
  //     <List disablePadding>
  //       <ListItem disableGutters>
  //         <Typography
  //           variant="body2"
  //           color="primary"
  //           className={classes.menuGroupTitle}
  //         >
  //           {item.groupTitle}
  //         </Typography>
  //       </ListItem>
  //       {item.pages.map((page, i) => (
  //         <ListItem disableGutters key={i} className={classes.menuGroupItem}>
  //           <Typography
  //             variant="body2"
  //             component={'a'}
  //             href={page.href}
  //             className={clsx(classes.navLink, 'submenu-item')}
  //             color="textPrimary"
  //             onClick={() => onClose()}
  //           >
  //             {page.title}
  //           </Typography>
  //         </ListItem>
  //       ))}
  //     </List>
  //   );
  // };

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
            classes={classes}
            onClose={onClose}
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
    <List {...rest} className={clsx(classes.root, className)}>
      <ListItem className={classes.closeIcon} onClick={() => onClose()}>
        <ListItemIcon className={classes.listItemIcon}>
          <CloseIcon fontSize="small" />
        </ListItemIcon>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Typography variant="h6" color="textPrimary" gutterBottom>
          Landings
        </Typography>
        <LandingPages />
      </ListItem>
      <ListItem className={classes.listItem}>
        <Divider className={classes.divider} />
      </ListItem>
      <ListItem className={classes.listItem}>
        <Typography variant="h6" color="textPrimary" gutterBottom>
          Pages
        </Typography>
        <SupportedPages />
      </ListItem>
      <ListItem className={classes.listItem}>
        <Divider className={classes.divider} />
      </ListItem>
      <ListItem className={classes.listItem}>
        <Typography variant="h6" color="textPrimary" gutterBottom>
          Account
        </Typography>
        <AccountPages />
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          variant="contained"
          color="primary"
          fullWidth
          component="a"
          target="blank"
          href="/"
        >
          Buy Now
        </Button>
      </ListItem>
    </List>
  );
};

export default SidebarNav;
