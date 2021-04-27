import React from 'react';
import {
  Divider,
  Button,
  makeStyles,
  useTheme,
  useMediaQuery,
} from '@material-ui/core';
import { SectionHeader } from 'components/molecules';
import { SectionAlternate } from 'components/organisms';
import { Account, Landings, Pages, Hero } from './components';
import { landings, pages, account } from './data';

const useStyles = makeStyles(() => ({
  fontWeight900: {
    fontWeight: 900,
  },
}));

const Home = ({ themeMode }) => {
  const classes = useStyles();
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });
  return (
    <div>
      {/* <Hero /> */}
      <SectionAlternate>
        <SectionHeader
          title="Startup Resource Center"
          subtitle="Connecting the dots on what you need for your Startup."
          align={isMd ? 'center' : 'left'}
          titleVariant="h4"
          titleProps={{ className: classes.fontWeight900 }}
        />
        {/* <Landings data={landings} themeMode={themeMode} /> */}
      </SectionAlternate>
      <Divider />
      <SectionAlternate>
        {/* <Pages data={pages} themeMode={themeMode} /> */}
      </SectionAlternate>
      <Divider />
      <SectionAlternate>
        {/* <Account data={account} themeMode={themeMode} /> */}
      </SectionAlternate>
    </div>
  );
};

export default Home;
