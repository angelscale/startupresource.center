import React from 'react';

import { useTheme } from '@mui/material/styles';
import makeStyles from '@mui/styles/makeStyles';
import {
  useMediaQuery,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Typography,
  TextField,
  Button,
} from '@mui/material';

import { Section, HeroShaped, SectionHeader, Image } from 'components';

// assets
import HeroImg from 'assets/images/about/src-hero.jpg';

import { teamData } from './data';

const useStyles = makeStyles((theme) => ({
  teamSection: {
    background: theme.palette.primary.dark,
  },
  hero_root: {
    background:
      'url(https://assets.maccarianagency.com/the-front/illustrations/patterns-bg.svg) no-repeat left bottom',
    backgroundSize: 'contain',
    backgroundColor: theme.palette.alternate.main,
  },
  hero_cover: {
    position: 'relative',
    zIndex: 9,
    width: '100%',
    height: '100%',
  },
  hero_image: {
    objectFit: 'cover',
  },
  textWhite: {
    color: 'white',
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: theme.spacing(1),
  },
  listItemAvatar: {
    marginRight: theme.spacing(3),
  },
  gridCard: {
    padding: theme.spacing(2),
    background: theme.palette.alternate.main,
    borderRadius: theme.spacing(2),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(4),
    },
  },
  gridItem: {
    height: '100%',
  },
  form_wrapper: {
    background: theme.palette.alternate.main,
  },
  form: {
    maxWidth: 550,
    margin: `0 auto`,
    '& .MuiTextField-root': {
      background: theme.palette.background.paper,
    },
    '& .MuiOutlinedInput-input': {
      background: theme.palette.background.paper,
    },
  },
  inputTitle: {
    fontWeight: 700,
    marginBottom: theme.spacing(1),
  },
}));

const SrcConsultingContent = () => {
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <div>
      <Section disablePadding>
        <div className={classes.hero_root}>
          <HeroShaped
            leftSide={
              <SectionHeader
                title="Business Consulting Services"
                subtitle="SRC Consulting Services are customized to the specific needs of each client.  We are not professional consultants, but business practitioners who have been there, done that, and helped start-ups navigate the complexities of the unknown, creating a clearer path to success."
                subtitleColor="textPrimary"
                subtitleVariant="body1"
                align="left"
                data-aos="fade-up"
                titleVariant="h3"
              />
            }
            rightSide={
              <div className={classes.hero_cover}>
                <Image
                  src={HeroImg}
                  srcSet={HeroImg}
                  className={classes.hero_image}
                  lazyProps={{
                    width: '100%',
                    height: '100%',
                  }}
                />
              </div>
            }
          />
        </div>
      </Section>

      <Section className={classes.teamSection}>
        <SectionHeader
          title={
            <span className={classes.textWhite}>
              We have business professionals with a wide range of expertise to
              match your startup needs.
            </span>
          }
          subtitle={
            <span className={classes.textWhite}>
              Depending on those specific needs, you will work with one or more
              of our business experts:
            </span>
          }
          titleVariant="h5"
          subtitleColor="textPrimary"
          data-aos="fade-up"
        />
        <Grid container spacing={4}>
          {teamData.map((item, index) => (
            <Grid item xs={12} md={6} key={index} className={classes.gridItem}>
              <Grid
                container
                className={classes.gridCard}
                data-aos="fade-up"
                // spacing={2}
              >
                <Grid
                  item
                  container
                  justifyContent={isMd ? 'flex-start' : 'center'}
                  alignItems="center"
                  xs={12}
                >
                  <List disablePadding>
                    <ListItem disableGutters>
                      <ListItemAvatar className={classes.listItemAvatar}>
                        <Avatar
                          {...item.authorPhoto}
                          alt={item.authorName}
                          className={`${classes.avatar} ${
                            item?.posTop ? 'obj-top' : ''
                          }`}
                        />
                      </ListItemAvatar>
                      <ListItemText
                        primary={item.authorName}
                        secondary={item.authorOccupation}
                      />
                    </ListItem>
                  </List>
                </Grid>
                <Grid
                  item
                  container
                  justifyContent="space-between"
                  alignItems={isMd ? 'flex-start' : 'center'}
                  xs={12}
                >
                  <Typography
                    variant="body1"
                    color="textPrimary"
                    align={isMd ? 'left' : 'center'}
                  >
                    {item.feedback}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          ))}
        </Grid>
      </Section>

      <Section className={classes.form_wrapper}>
        <SectionHeader
          title="For your free 20 minute consultation"
          subtitle="Fill out the following form"
          subtitleProps={{
            variant: 'h6',
            color: 'textPrimary',
          }}
          data-aos="fade-up"
          align={isMd ? 'center' : 'left'}
        />
        <div className={classes.form}>
          <Grid container spacing={isMd ? 4 : 2}>
            <Grid item xs={12} data-aos="fade-up">
              <Typography
                variant="subtitle1"
                color="textPrimary"
                className={classes.inputTitle}
              >
                First name
              </Typography>
              <TextField
                placeholder="Your full name"
                variant="outlined"
                size="medium"
                name="fullname"
                fullWidth
                type="text"
              />
            </Grid>
            <Grid item xs={12} data-aos="fade-up">
              <Typography
                variant="subtitle1"
                color="textPrimary"
                className={classes.inputTitle}
              >
                Last name
              </Typography>
              <TextField
                placeholder="Your full name"
                variant="outlined"
                size="medium"
                name="fullname"
                fullWidth
                type="text"
              />
            </Grid>
            <Grid item xs={12} data-aos="fade-up">
              <Typography
                variant="subtitle1"
                color="textPrimary"
                className={classes.inputTitle}
              >
                E-mail
              </Typography>
              <TextField
                placeholder="Your e-mail address"
                variant="outlined"
                size="medium"
                name="email"
                fullWidth
                type="email"
              />
            </Grid>
            <Grid item xs={12} data-aos="fade-up">
              <Typography
                variant="subtitle1"
                color="textPrimary"
                className={classes.inputTitle}
              >
                Phone Number
              </Typography>
              <TextField
                placeholder="Your phone number"
                variant="outlined"
                name="phone"
                fullWidth
                type="tel"
              />
            </Grid>
            <Grid item container justifyContent="center" xs={12}>
              <Button
                variant="contained"
                type="submit"
                color="primary"
                size="large"
              >
                submit
              </Button>
            </Grid>
          </Grid>
        </div>
      </Section>
    </div>
  );
};

export default SrcConsultingContent;
