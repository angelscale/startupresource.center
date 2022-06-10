import React from 'react';
import clsx from 'clsx';
import { Drawer, styled } from '@mui/material';

import { SidebarNav } from 'components';

const PREFIX = 'Sidebar';

const classes = {
  drawer: `${PREFIX}-drawer`,
  root: `${PREFIX}-root`,
  nav: `${PREFIX}-nav`,
};

const StyledDrawer = styled(Drawer)(({ theme }) => ({
  [`& .${classes.drawer}`]: {
    width: '100%',
    maxWidth: 325,
  },

  [`& .${classes.root}`]: {
    height: '100%',
    padding: theme.spacing(1),
  },

  [`& .${classes.nav}`]: {
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
  return (
    <StyledDrawer
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
    </StyledDrawer>
  );
};

export default Sidebar;
