import React from 'react';
import clsx from 'clsx';
import { Link } from 'gatsby';
import { List, ListItem, Typography } from '@mui/material';

const MenuGroup = ({ categorySlug, subCategories, onClose, classes }) => {
  return (
    <List disablePadding>
      <>
        {subCategories &&
          subCategories.map(({ slug, title }) => (
            <ListItem
              disableGutters
              key={`${categorySlug}-${slug}`}
              className={classes.menuGroupItem}
            >
              <Typography
                variant="body1"
                component={Link}
                to={`/${categorySlug}/${slug}`}
                className={clsx(classes.navLink, 'submenu-item')}
                color="textSecondary"
                onClick={onClose}
              >
                {title}
              </Typography>
            </ListItem>
          ))}
      </>
    </List>
  );
};

export default MenuGroup;
