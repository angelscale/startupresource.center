import React from 'react';
import makeStyles from '@mui/styles/makeStyles';
import { Section, SectionAlternate } from 'components/organisms';
import { Hero, Team, Form } from 'templates-tf/SRCConsulting';

// data
import { teamData } from 'templates-tf/SRCConsulting/data';

const useStyles = makeStyles((theme) => ({
  teamSection: {
    background: theme.palette.primary.dark,
  },
}));

const SRCConsultingView = () => {
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

export default SRCConsultingView;
