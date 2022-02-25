import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import makeStyles from '@mui/styles/makeStyles';
import { Divider } from '@mui/material';
import { Topbar, Footer, Sidebar } from './components';
import { navigation, navigationNew } from 'layouts/navigation';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%',
  },
}));

const Main = ({ children, themeToggler, themeMode, fullWidth }) => {
  const classes = useStyles();

  const [openSidebar, setOpenSidebar] = useState(false);

  const handleSidebarOpen = () => {
    setOpenSidebar(true);
  };

  const handleSidebarClose = () => {
    setOpenSidebar(false);
  };

  console.log('from main', fullWidth);

  return (
    <div
      className={clsx({
        [classes.root]: true,
      })}
    >
      <Topbar
        onSidebarOpen={handleSidebarOpen}
        navigation={navigationNew}
        themeMode={themeMode}
        themeToggler={themeToggler}
      />
      <Sidebar
        onClose={handleSidebarClose}
        open={openSidebar}
        variant="temporary"
        navigation={navigation}
      />
      <Divider />
      {/* TODO: classes.content doesn't exist */}
      <main className={!fullWidth ? classes.content : ''}>{children}</main>
      <Footer navigation={navigation} />
    </div>
  );
};

Main.propTypes = {
  children: PropTypes.node,
  themeToggler: PropTypes.func.isRequired,
  themeMode: PropTypes.string.isRequired,
};

export default Main;
