import React from 'react';
import makeStyles from '@mui/styles/makeStyles';
import clsx from 'clsx';

// components
import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import Text from '../Text';

import FMRIcon from '@mui/icons-material/FiberManualRecord';

const useStyles = makeStyles((theme) => ({
  list: {},
  item: {
    padding: theme.spacing(0),
  },
  icon_wrapper: {
    minWidth: '22px',
  },
  icon: {
    fontSize: '12px',
    color: theme.palette.text.primary,
  },
  item_text: {
    fontWeight: 600,
  },
}));

const MyList = ({ list, className }) => {
  const classes = useStyles();

  return (
    <div className={clsx(classes.list, className)}>
      <List>
        {list.map((item, i) => (
          <ListItem key={i} disablePadding className={classes.item}>
            <ListItemIcon className={classes.icon_wrapper}>
              <FMRIcon className={classes.icon} />
            </ListItemIcon>
            <ListItemText>
              <Text text={item} className={classes.item_text} />
            </ListItemText>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default MyList;
