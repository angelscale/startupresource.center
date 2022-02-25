import { createTheme, responsiveFontSizes, adaptV4Theme } from '@mui/material';
import { light, dark } from './palette';

const getTheme = (mode) =>
  responsiveFontSizes(
    createTheme(adaptV4Theme({
      palette: mode === 'light' ? light : dark,
      layout: {
        contentWidth: 1236,
      },
      typography: {
        fontFamily: 'Lato',
      },
      zIndex: {
        appBar: 1200,
        drawer: 1100,
      },
    })),
  );

export default getTheme;
