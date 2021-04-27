import React from 'react';
import clsx from 'clsx';
import { List, ListItem, Typography } from '@material-ui/core';

const MenuGroup = ({ id, tags, onClose, classes }) => {
  return (
    <List disablePadding>
      {id === undefined ? null : (
        <ListItem disableGutters>
          <Typography
            variant="body2"
            color="primary"
            className={classes.menuGroupTitle}
          >
            {id.replace(/[_-]/g, ' ')}
          </Typography>
        </ListItem>
      )}
      <>
        {tags.map((tag) => (
          <ListItem disableGutters key={tag} className={classes.menuGroupItem}>
            <Typography
              variant="body1"
              component={'a'}
              href={`/tags/${tag}`}
              className={clsx(classes.navLink, 'submenu-item')}
              color="textSecondary"
              onClick={onClose}
            >
              {tag.replace(/[_-]/g, ' ')}
            </Typography>
          </ListItem>
        ))}
      </>
    </List>
  );
};

export default MenuGroup;
