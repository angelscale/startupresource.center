import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { List, ListItem, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  navLink: {
    '&:hover': {
      color: theme.palette.primary.dark,
    },
  },
  menuGroupItem: {
    paddingTop: 0,
    textTransform: 'capitalize',
  },
  menuGroupTitle: {
    marginLeft: '-5px',
    textTransform: 'uppercase',
  },
}));

const MenuGroup = ({ id, groupTitle, tags, onClose }) => {
  const classes = useStyles();

  const nav = [];
  tags.forEach((tag) => {
    nav.push(
      <ListItem disableGutters key={tag} className={classes.menuGroupItem}>
        <Typography
          variant="body1"
          component={'a'}
          href={`/tags/${tag}`}
          className={clsx(classes.navLink, 'submenu-item')}
          color="textSecondary"
          onClick={onClose}
        >
          {tag.replace('_', ' ')}
        </Typography>
      </ListItem>,
    );
  });
  return (
    <List disablePadding>
      <ListItem disableGutters>
        <Typography
          variant="body2"
          color="primary"
          className={classes.menuGroupTitle}
        >
          {groupTitle}
        </Typography>
      </ListItem>
      {nav}
    </List>
  );
};

export default MenuGroup;
