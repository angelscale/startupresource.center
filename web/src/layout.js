import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { StyledEngineProvider } from '@mui/material/styles';
import { Paper, Divider, CssBaseline, ThemeProvider } from '@mui/material';
import { Topbar, Footer, Sidebar } from 'components';
import { navigation, socialMedia } from 'navigation';
import { getTheme } from 'theme';

import 'react-lazy-load-image-component/src/effects/opacity.css';
import 'assets/css/index.css';
import 'swiper/css/bundle';
import 'react-toastify/dist/ReactToastify.css';

export const useDarkMode = () => {
  const [themeMode, setTheme] = useState('light');

  const setMode = (mode) => {
    window.localStorage.setItem('themeMode', mode);
    setTheme(mode);
  };

  const themeToggler = () => {
    themeMode === 'light' ? setMode('dark') : setMode('light');
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem('themeMode');
    localTheme ? setTheme(localTheme) : setMode('light');
  }, []);

  return [themeMode, themeToggler];
};

const Layout = ({ children }) => {
  const [openSidebar, setOpenSidebar] = useState(false);
  const [themeMode, themeToggler] = useDarkMode();

  const handleSidebarOpen = () => {
    setOpenSidebar(true);
  };

  const handleSidebarClose = () => {
    setOpenSidebar(false);
  };

  return (
    <React.Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <meta name="theme-color" content="#ffffff" />
        <meta
          name="description"
          content="Connecting the dots on what you need for your Startup."
        />
        <meta
          name="robots"
          content="max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://startupresource.center/assets/images/social.png"
        />
        <meta property="og:title" content="Startup Resource Center" />
        <meta
          property="og:description"
          content="Connecting the dots on what you need for your Startup."
        />
        <meta property="og:url" content="https://startupresource.center/" />
      </Helmet>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={getTheme(themeMode)}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <Paper elevation={0}>
            <div style={{ height: '100%' }}>
              <Topbar
                onSidebarOpen={handleSidebarOpen}
                navigation={navigation}
                socialMedia={socialMedia}
                themeMode={themeMode}
                themeToggler={themeToggler}
              />
              <Sidebar
                onClose={handleSidebarClose}
                open={openSidebar}
                variant="temporary"
                navigation={navigation}
                socialMedia={socialMedia}
              />
              <Divider />
              {children}
              <Footer navigation={navigation} socialMedia={socialMedia} />
            </div>
          </Paper>
        </ThemeProvider>
      </StyledEngineProvider>
    </React.Fragment>
  );
};

export default Layout;
