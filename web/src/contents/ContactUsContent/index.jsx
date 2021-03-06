import React from 'react';
import clsx from 'clsx';
import { ToastContainer } from 'react-toastify';

import {
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  colors,
  FormControl,
  OutlinedInput,
  InputAdornment,
  styled,
} from '@mui/material';

import { HeroShaped, Section, SectionHeader, Icon } from 'components';
import Form from './Form';

// assets
import PeopleImg from 'assets/images/people.jpg';

const PREFIX = 'ContactUsContent';

const classes = {
  hero_root: `${PREFIX}-hero_root`,
  textWhite: `${PREFIX}-textWhite`,
  title: `${PREFIX}-title`,
  hero_section: `${PREFIX}-hero_section`,
  hero_sectionHeader: `${PREFIX}-hero_sectionHeader`,
  map: `${PREFIX}-map`,
  icon: `${PREFIX}-icon`,
  contact_section: `${PREFIX}-contact_section`,
  newsletter_root: `${PREFIX}-newsletter_root`,
  inputContainer: `${PREFIX}-inputContainer`,
  formControl: `${PREFIX}-formControl`,
};

const Root = styled('div')(({ theme }) => ({
  [`& .${classes.hero_root}`]: {
    width: '100%',
    height: '100%',
    position: 'relative',
    background: `url(${PeopleImg}) no-repeat #3F50B5`,
    overflow: 'hidden',
    minHeight: 400,
    backgroundSize: 'cover',
    [theme.breakpoints.up('md')]: {
      backgroundPosition: 'right -400px top',
      backgroundSize: 'contain',
    },
    [theme.breakpoints.up('lg')]: {
      backgroundPosition: 'right -250px top',
    },
  },

  [`& .${classes.textWhite}`]: {
    color: 'white',
  },

  [`& .${classes.title}`]: {
    fontWeight: 'bold',
  },

  [`& .${classes.hero_section}`]: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    paddingTop: 12,
    paddingBottom: 12,
    background: 'rgba(0,0,0,.4)',
    [theme.breakpoints.up('md')]: {
      background: 'none',
    },
  },

  [`& .${classes.hero_sectionHeader}`]: {
    [theme.breakpoints.up('sm')]: {
      width: '50%',
    },
  },

  [`& .${classes.map}`]: {
    zIndex: 9,
  },

  [`& .${classes.icon}`]: {
    background: 'transparent',
    borderRadius: 0,
  },

  [`& .${classes.contact_section}`]: {
    '& .hero-shaped__wrapper': {
      margin: '1rem auto',
      [theme.breakpoints.down('lg')]: {
        padding: '0 1rem',
      },
    },
    '& .hero-shaped__right-side': {
      maxWidth: '100%',
    },
    '& .hero-shaped__image': {
      all: 'unset',
    },
  },

  [`& .${classes.newsletter_root}`]: {
    background: theme.palette.primary.dark,
    backgroundSize: 'cover',
    borderRadius: theme.spacing(2),
  },

  [`& .${classes.inputContainer}`]: {
    display: 'flex',
    justifyContent: 'center',
  },

  [`& .${classes.formControl}`]: {
    maxWidth: 400,
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'white',
      },
      '&:hover fieldset': {
        borderColor: 'white',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'white',
      },
    },
    '& .MuiInputBase-root': {
      color: 'white',
    },
    '& .MuiInputAdornment-root i': {
      color: 'white !important',
    },
  },
}));

const ContactUsContent = () => {
  return (
    <Root>
      <Section disablePadding className={classes.hero_root}>
        <Section className={classes.hero_section}>
          <SectionHeader
            title="Contact us"
            subtitle="Have questions or requests? Our business experts are here to help!"
            align="left"
            data-aos="fade-up"
            disableGutter
            titleProps={{
              className: clsx(classes.title, classes.textWhite),
              variant: 'h3',
            }}
            subtitleProps={{
              className: classes.textWhite,
            }}
            className={classes.hero_sectionHeader}
          />
        </Section>
      </Section>

      <HeroShaped
        className={classes.contact_section}
        hideDivider
        leftSide={
          <div>
            <SectionHeader
              title="Contact details"
              subtitle="At Angel-Scale, we???re always here to support your business journey. Fill out the form below and someone will get back to you ASAP!"
              subtitleProps={{
                variant: 'body1',
                color: 'textPrimary',
              }}
              data-aos="fade-up"
              align="left"
            />
            <List disablePadding>
              <ListItem disableGutters data-aos="fade-up">
                <ListItemAvatar>
                  <Avatar
                    src="https://assets.maccarianagency.com/the-front/illustrations/contact-icon-mail.png"
                    srcSet="https://assets.maccarianagency.com/the-front/illustrations/contact-icon-mail@2x.png 2x"
                    className={classes.icon}
                  />
                </ListItemAvatar>
                <ListItemText
                  primary="Email"
                  secondary="contact@startupresource.center"
                  primaryTypographyProps={{
                    variant: 'subtitle1',
                    color: 'textSecondary',
                  }}
                  secondaryTypographyProps={{
                    variant: 'subtitle1',
                    color: 'textPrimary',
                  }}
                />
              </ListItem>
            </List>
          </div>
        }
        rightSide={<Form />}
      />

      <Section disablePadding>
        <Divider />
      </Section>

      <Section>
        <Section className={classes.newsletter_root}>
          <SectionHeader
            title={
              <span className={classes.textWhite}>
                Subscribe To Our Newsletter
              </span>
            }
            subtitle={
              <span className={classes.textWhite}>
                Don't lose a chance to be among the firsts to know about our
                upcoming news and updates.
              </span>
            }
            fadeUp
          />
          <div className={classes.inputContainer}>
            <FormControl
              fullWidth
              variant="outlined"
              data-aos="fade-up"
              className={classes.formControl}
            >
              <OutlinedInput
                endAdornment={
                  <InputAdornment position="end">
                    <Icon
                      fontIconClass="fas fa-paper-plane"
                      fontIconColor={colors.indigo[900]}
                    />
                  </InputAdornment>
                }
                placeholder="Enter your email"
              />
            </FormControl>
          </div>
        </Section>
      </Section>

      <ToastContainer />
    </Root>
  );
};

export default ContactUsContent;
