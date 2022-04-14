import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import makeStyles from '@mui/styles/makeStyles';
import { Divider } from '@mui/material';
import { Topbar, Footer, Sidebar } from 'components';
import { navigation, navigationNew } from 'layouts/navigation';
import Container from 'components/Container';

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

  return (
    <div
      className={clsx({
        [classes.root]: true,
      })}
    >
      <Container paddingY={0} paddingX={0}>
        <Topbar
          onSidebarOpen={handleSidebarOpen}
          navigation={navigationNew}
          themeMode={themeMode}
          themeToggler={themeToggler}
        />
      </Container>
      <Sidebar
        onClose={handleSidebarClose}
        open={openSidebar}
        variant='temporary'
        navigation={navigation}
      />
      <Divider />
      {/* TODO: classes.content doesn't exist */}
      {/* <main className={!fullWidth ? classes.content : ''}>{children}</main> */}
      {fullWidth ? (
        <main>{children}</main>
      ) : (
        <Container paddingY={0} paddingX={0}>
          <main>{children}</main>
        </Container>
      )}
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
