import React from 'react';
import clsx from 'clsx';
import { List, ListItem, Typography } from '@mui/material';

const MenuGroup = ({ category, tags, onClose, classes }) => {
  return (
    <List disablePadding>
      <>
        {tags &&
          Object.values(tags).map(({ id, name }) => (
            <ListItem disableGutters key={id} className={classes.menuGroupItem}>
              <Typography
                variant="body1"
                component={'a'}
                href={`/${category}/${id}`}
                className={clsx(classes.navLink, 'submenu-item')}
                color="textSecondary"
                onClick={onClose}
              >
                {name}
              </Typography>
            </ListItem>
          ))}
      </>
    </List>
  );
};

export default MenuGroup;
