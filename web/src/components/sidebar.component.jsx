import React from 'react';
import clsx from 'clsx';
import makeStyles from '@mui/styles/makeStyles';
import { Drawer } from '@mui/material';

import { SidebarNav } from 'components';

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: '100%',
    maxWidth: 325,
  },
  root: {
    height: '100%',
    padding: theme.spacing(1),
  },
  nav: {
    marginBottom: theme.spacing(1),
  },
}));

const Sidebar = ({
  navigation,
  open,
  variant,
  onClose,
  className,
  ...rest
}) => {
  const classes = useStyles();

  return (
    <Drawer
      anchor="left"
      classes={{ paper: classes.drawer }}
      onClose={() => onClose()}
      open={open}
      variant={variant}
    >
      <div {...rest} className={clsx(classes.root, className)}>
        <SidebarNav
          className={classes.nav}
          navigation={navigation}
          onClose={onClose}
        />
      </div>
    </Drawer>
  );
};

export default Sidebar;
