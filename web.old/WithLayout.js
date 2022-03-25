import React, { useState, useEffect } from 'react';
import { ThemeProvider, StyledEngineProvider } from '@mui/material/styles';
import { Paper } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import getTheme from 'theme';

import AOS from 'aos';

export const useDarkMode = () => {
  const [themeMode, setTheme] = useState('light');
  const [mountedComponent, setMountedComponent] = useState(false);

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
    setMountedComponent(true);
    AOS.refresh();
  }, []);

  useEffect(() => {
    AOS.refresh();
  }, [themeMode]);

  return [themeMode, themeToggler, mountedComponent];
};

export default function WithLayout({
  component: Component,
  layout: Layout,
  fullWidth,
  ...rest
}) {
  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }

    AOS.init({
      once: true,
      delay: 50,
      duration: 500,
      easing: 'ease-in-out',
    });
  }, []);

  const [themeMode, themeToggler, mountedComponent] = useDarkMode();
  useEffect(() => {
    AOS.refresh();
  }, [mountedComponent]);

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={getTheme(themeMode)}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Paper elevation={0}>
          <Layout
            themeMode={themeMode}
            themeToggler={themeToggler}
            fullWidth={fullWidth}
          >
            <Component themeMode={themeMode} {...rest} />
          </Layout>
        </Paper>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}
