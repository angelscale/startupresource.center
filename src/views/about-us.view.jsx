// StartUp Resource Center (SRC) is a one-stop source of information from a lineup of the most successful Entrepreneurs in the world.  SRC fills the gaps between the entrepreneur's brilliant ideas, and the detailed steps to creating, launching and growing a business.

// We are constantly sharing the most tried-and-true strategies and resources, as well the newest ideas being used by successful startups worldwide.  From the actual act of creating and structuring your business, to the most effective marketing practices, SRC puts everything you'll need to succeed, right at your fingertips.

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Section, SectionAlternate } from 'components/organisms';
import {
  Contact,
  Gallery,
  Hero,
  Partners,
  Story,
  Team,
  WhoWeAre,
  WorkWithus,
} from '../templates-tf/About/components';

import {
  team,
  companies,
  mapData,
  gallery,
  paragraphs,
  newTeam,
} from '../templates-tf/About/data';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%',
    width: '100%',
  },
  sectionNoPaddingTop: {
    paddingTop: 0,
  },
  sectionPartners: {
    boxShadow: '0 5px 20px 0 rgba(90, 202, 157, 0.05)',
    '& .section-alternate__content': {
      paddingTop: theme.spacing(5),
      paddingBottom: theme.spacing(5),
    },
  },
}));

const AboutUsView = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Hero />
      <Section>
        <Story content={paragraphs.who_are_we} />
      </Section>
      <Section className={classes.sectionNoPaddingTop}>
        <WhoWeAre
          contentOne={paragraphs.our_process}
          contentTwo={paragraphs.our_story}
        />
      </Section>
      <Section className={classes.sectionNoPaddingTop}>
        <WorkWithus />
      </Section>
      <Section className={classes.sectionNoPaddingTop}>
        <Team data={newTeam} />
      </Section>
    </div>
  );
};

export default AboutUsView;
