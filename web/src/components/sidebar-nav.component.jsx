import React from 'react';
import clsx from 'clsx';
import { Link } from 'gatsby';
import makeStyles from '@mui/styles/makeStyles';
import {
  List,
  ListItem,
  Typography,
  ListItemIcon,
  Divider,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { MenuGroup } from 'components';

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
    </List>
  );
};

export default SidebarNav;
