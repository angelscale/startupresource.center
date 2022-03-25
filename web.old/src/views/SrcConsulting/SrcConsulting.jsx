import React from 'react';
import makeStyles from '@mui/styles/makeStyles';

import { SectionAlternate } from 'components/organisms';
import { Hero, Team, Form } from './components';

import { teamData } from './data';

const useStyles = makeStyles((theme) => ({
  teamSection: {
    background: theme.palette.primary.dark,
  },
}));

const SrcConsulting = () => {
  const classes = useStyles();

  return (
    <div>
      <Hero />
      <SectionAlternate className={classes.teamSection}>
        <Team data={teamData} />
      </SectionAlternate>
      <SectionAlternate>
        <Form />
      </SectionAlternate>
    </div>
  );
};

export default SrcConsulting;
