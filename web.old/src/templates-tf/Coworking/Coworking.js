import React from 'react';
import makeStyles from '@mui/styles/makeStyles';
import {
  AppBar,
  Toolbar,
  Drawer,
  IconButton,
  Divider,
} from '@mui/material';
import ForumIcon from '@mui/icons-material/Forum';
import { Section, SectionAlternate, ContactForm } from 'components/organisms';
import {
  Advantages,
  Application,
  Community,
  Events,
  Hero,
  Locations,
  MapHero,
  Props,
  Reviews,
  Spaces,
} from './components';

import {
  mapData,
  advantages,
  locations,
  properties,
  reviews,
  events,
  gallery,
} from './data';

const useStyles = makeStyles(theme => ({
  appBarBottom: {
    top: 'auto',
    bottom: 0,
    background: 'transparent',
    boxShadow: 'none',
  },
  toolbarBottom: {
    width: '100%',
    margin: '0 auto',
    padding: theme.spacing(0, 2),
  },
  chatIconButton: {
    position: 'absolute',
    right: theme.spacing(3),
    left: 'auto',
    top: theme.spacing(-3),
    background: theme.palette.primary.main,
    width: 55,
    height: 55,
    boxShadow: `0 2px 10px 0 ${theme.palette.cardShadow}`,
    '&:hover': {
      background: theme.palette.primary.main,
    },
  },
  forumIcon: {
    color: 'white',
    width: 25,
    height: 25,
  },
  contactForm: {
    padding: theme.spacing(3, 2),
    maxWidth: 800,
    margin: '0 auto',
  },
}));

const Coworking = () => {
  const classes = useStyles();

  const [openBottombar, setOpenBottombar] = React.useState(false);

  const handleBottombarOpen = () => {
    setOpenBottombar(true);
  };

  const handleBottombarClose = () => {
    setOpenBottombar(false);
  };

  return (
    <div>
      <Hero />
      <SectionAlternate>
        <Advantages data={advantages} />
      </SectionAlternate>
      <Section>
        <Locations data={locations} />
      </Section>
      <Divider />
      <Section>
        <Spaces />
      </Section>
      <SectionAlternate>
        <Props data={properties} />
      </SectionAlternate>
      <MapHero data={mapData} />
      <Section>
        <Reviews data={reviews} />
      </Section>
      <Divider />
      <Section>
        <Application />
      </Section>
      <SectionAlternate>
        <Events data={events} />
      </SectionAlternate>
      <Section narrow>
        <Community data={gallery} />
      </Section>
      <Divider />
      <AppBar position="fixed" className={classes.appBarBottom}>
        <Toolbar disableGutters className={classes.toolbarBottom}>
          <IconButton
            className={classes.chatIconButton}
            onClick={handleBottombarOpen}
            size="large">
            <ForumIcon className={classes.forumIcon} />
          </IconButton>
          <Drawer
            anchor="bottom"
            open={openBottombar}
            onClose={handleBottombarClose}
          >
            <div className={classes.contactForm}>
              <ContactForm />
            </div>
          </Drawer>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Coworking;
