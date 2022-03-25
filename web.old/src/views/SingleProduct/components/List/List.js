import React from 'react';
import makeStyles from '@mui/styles/makeStyles';
import clsx from 'clsx';

// components
import { List, ListItem, ListItemIcon } from '@mui/material';

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
        {list.props.children.map((item, i) => {
          return (
            item !== '\n' && (
              <ListItem key={i} disablePadding className={classes.item}>
                <ListItemIcon className={classes.icon_wrapper}>
                  <FMRIcon className={classes.icon} />
                </ListItemIcon>
                {item}
              </ListItem>
            )
          );
        })}
      </List>
    </div>
  );
};

export default MyList;
