import React from 'react';
import {
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
} from '@material-ui/core';
import AvatarGroup from '@material-ui/lab/AvatarGroup';

const SecondaryAuthors = ({ classes, authors }) => {
  if (authors.secondary) {
    return (
      <List disablePadding>
        <ListItem disableGutters>
          <ListItemAvatar className={classes.listItemAvatar}>
            <AvatarGroup max={4}>
              {authors.secondary.map((author) => (
                <Avatar
                  key={author.slug}
                  src={author.photo}
                  alt={author.name}
                  className={classes.secondaryAvatar}
                />
              ))}
            </AvatarGroup>
          </ListItemAvatar>
          <ListItemText
            primary={`With collaboration from`}
            secondary={authors.secondary.map((a) => a.name).join(', ')}
            primaryTypographyProps={{
              className: classes.textWhite,
              variant: 'subtitle2',
            }}
            secondaryTypographyProps={{
              className: classes.textWhite,
              variant: 'subtitle2',
            }}
          />
        </ListItem>
      </List>
    );
  }
  return null;
};

export default SecondaryAuthors;
