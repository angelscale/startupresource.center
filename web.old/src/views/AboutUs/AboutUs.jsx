import React from "react";
import makeStyles from "@mui/styles/makeStyles";

import { Section } from "components/organisms";
import { Hero, Story, Team, WhoWeAre, WorkWithus } from "./components";

import { paragraphs, newTeam } from "./data";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
    width: "100%",
  },
  sectionNoPaddingTop: {
    paddingTop: 0,
  },
  sectionPartners: {
    boxShadow: "0 5px 20px 0 rgba(90, 202, 157, 0.05)",
    "& .section-alternate__content": {
      paddingTop: theme.spacing(5),
      paddingBottom: theme.spacing(5),
    },
  },
}));

const AboutUs = () => {
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

export default AboutUs;
