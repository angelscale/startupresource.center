import React from 'react';
import { Divider } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import { Section, SectionAlternate } from 'components/organisms';
import { GetStarted, Features, Reviews, QuickStart, Services, Hero } from './components';

const useStyles = makeStyles(() => ({
  sectionAlternateNoPaddingTop: {
    '& .section-alternate__content': {
      paddingBottom: 0,
    },
  },
  dividerSection: {
    paddingTop: 0,
    paddingBottom: 0,
  },
}));

const IndexView = ({ themeMode }) => {
  const classes = useStyles();

  return (
    <div>
      <Hero themeMode={themeMode} />
      <Services />
      <SectionAlternate className={classes.sectionAlternateNoPaddingTop}>
        <QuickStart />
      </SectionAlternate>
      <SectionAlternate>
        <Features />
      </SectionAlternate>
      <Section>
        <Reviews />
      </Section>
      <Section className={classes.dividerSection}>
        <Divider />
      </Section>
      <Section narrow>
        <GetStarted />
      </Section>
    </div>
  );
};

export default IndexView;
